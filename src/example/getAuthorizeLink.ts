import "dotenv/config";
import { getAuthorizeLink } from "@kash-88/alerts";
import { checkEnv } from "@utils";

checkEnv(["CLIENT_ID", "SCOPE"]);

const client_id = process.env.CLIENT_ID!;
const scope = process.env.SCOPE ? process.env.SCOPE.split(",") : ["oauth-user-show"];

try {
    const link = getAuthorizeLink({ client_id, scope });
    console.log("Authorize link:", link);
} catch (error: any) {
    console.error("Error:", error.message);
} 