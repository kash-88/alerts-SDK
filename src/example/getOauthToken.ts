import 'dotenv/config';
import { getOauthToken } from '@kash-88/alerts';
import { checkEnv } from '@utils';

checkEnv(['CLIENT_ID', 'CLIENT_SECRET', 'CODE']);

const client_id = process.env.CLIENT_ID!;
const client_secret = process.env.CLIENT_SECRET!;
const code = process.env.CODE!;

(async () => {
    try {
        const token = await getOauthToken({ client_id, client_secret, code });
        console.log('Oauth token:', token);
    } catch (error: any) {
        console.error('Error:', error.message);
    }
})(); 