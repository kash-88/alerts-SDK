export interface OauthToken {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
}

export interface User {
    id: number;
    code: string;
    name: string;
    avatar: string;
    email: string;
    socket_connection_token: string;
}

export interface GetAuthorizeLinkData {
    client_id: string | number;
    scope: string[];
}

export interface GetOauthData {
    client_id: string | number;
    client_secret: string;
    code: string;
}

export interface UpdateTokenData {
    client_id: string | number;
    client_secret: string;
    refresh_token: string;
} 