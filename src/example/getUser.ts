import "dotenv/config";
import { getUser } from "@kash-88/alerts";

const access_token = process.env.ACCESS_TOKEN!;

(async () => {
    try {
        const user = await getUser(access_token);
        console.log("User:", user);
    } catch (error: any) {
        console.error("Error:", error.message);
    }
})(); 