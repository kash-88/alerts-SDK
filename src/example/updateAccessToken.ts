import "dotenv/config";
import { updateAccessToken } from "@kash-88/alerts";

const client_id = 'YOUR_CLIENT_ID'; // Get on https://www.donationalerts.com/application/clients
const client_secret = process.env.CLIENT_SECRET!;
const refresh_token = process.env.REFRESH_TOKEN!;

(async () => {
    try {
        const token = await updateAccessToken({ client_id, client_secret, refresh_token });
        console.log("Updated token:", token);
    } catch (error: any) {
        console.error("Error:", error.message);
    }
})(); 