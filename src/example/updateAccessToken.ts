import "dotenv/config";
import { updateAccessToken } from "@kash-88/alerts";
import { checkEnv } from "@utils";

checkEnv(["CLIENT_ID", "CLIENT_SECRET", "REFRESH_TOKEN"]);

const client_id = process.env.CLIENT_ID!;
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