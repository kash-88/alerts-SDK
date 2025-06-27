import axios from 'axios';
import { WebSocket } from 'ws';
import { EventEmitter } from 'events';
import TypedEmitter from 'typed-emitter';

// --- Interfaces ---
interface CentrifugeConfiguration {
    ws: {
        url: string;
    };
}

interface WSClientOptions {
    channel: string;
    socket_connection_token: string;
    access_token: string;
}

interface CentrifugeMessage {
    params: Record<string, unknown>;
    id: number;
    method?: number;
    result?: unknown;
    push?: {
        channel: string;
        data: any;
    };
}

interface CentrifugeSubscribeResponse {
    channels: {
        token: string;
    }[];
}

// --- Configuration ---
const configuration: CentrifugeConfiguration = {
    ws: {
        url: 'wss://centrifugo.donationalerts.com/connection/websocket'
    }
};

type MessageEvents = {
    open: () => void;
    message: (data: CentrifugeMessage) => void;
    close: () => void;
    error: (error: Error) => void;
    reconnecting: (attempt: number) => void;
    reconnect_failed: () => void;
}

// --- Class ---
export default class CentrifugeClient extends (EventEmitter as new () => TypedEmitter<MessageEvents>) {
    private options: WSClientOptions;
    private ws: WebSocket | null = null;

    constructor(options: WSClientOptions) {
        super();
        this.options = options; this.ws;
    }

    public createConnection(): WebSocket {
        if (this.ws) {
            return this.ws;
        }

        try {
            this.ws = new WebSocket(configuration.ws.url);
            
            return this.ws;
        } catch (error) {
            console.error('[WS] Failed to create connection:', error);
            throw error;
        }
    }

    public confirmConnection(socket_connection_token: string = this.options.socket_connection_token): void {
        const message: CentrifugeMessage = {
            params: {
                token: socket_connection_token
            },
            id: 1
        };
        this.sendMessage(JSON.stringify(message));
    }

    public async connectPrivateToken(channel: string, uuidv4_client_id: string): Promise<void> {
        try {
            const response = await axios.post<CentrifugeSubscribeResponse>(
                'https://www.donationalerts.com/api/v1/centrifuge/subscribe',
                {
                    channels: [channel],
                    client: uuidv4_client_id
                },
                {
                    headers: {
                        'Authorization': `Bearer ${this.options.access_token}`
                    }
                }
            );

            if((response.data as any).success === false) throw new Error((response.data as any).message);

            const subscribeMessage: CentrifugeMessage = {
                params: {
                    channel: channel,
                    token: response.data.channels[0].token
                },
                method: 1,
                id: 2
            };

            this.sendMessage(JSON.stringify(subscribeMessage));
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public sendMessage(message: string): void {
        if(!this.ws) return;

        try {
            this.ws.send(message);
        } catch (error: any) {
            throw new Error(error);
        }
    }
} 