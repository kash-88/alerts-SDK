import "dotenv/config";
import { getOauthToken } from "@kash-88/alerts";

const client_id = 'YOUR_CLIENT_ID'; // Get on https://www.donationalerts.com/application/clients
const client_secret = process.env.CLIENT_SECRET!; // Get on https://www.donationalerts.com/application/clients
const code = 'CLIENT_CODE';

(async () => {
    try {
        const token = await getOauthToken({ client_id, client_secret, code });
        console.log("Oauth token:", token);
    } catch (error: any) {
        console.error("Error:", error.message);
    }
})(); 