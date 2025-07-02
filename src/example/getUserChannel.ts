import { getUserChannel } from "@kash-88/alerts";

const user_id = "USER_ID";

try {
    const channel = getUserChannel(user_id);
    console.log("User channel:", channel);
} catch (error: any) {
    console.error("Error:", error.message);
} 