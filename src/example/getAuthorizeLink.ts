import { getAuthorizeLink } from "@kash-88/alerts";

const client_id = "YOUR_CLIENT_ID"; // Get on https://www.donationalerts.com/application/clients
const scope = ["oauth-user-show", "oauth-donation-subscribe", "oauth-donation-index", "oauth-custom_alert-store", "oauth-goal-subscribe", "oauth-poll-subscribe"];

try {
    const link = getAuthorizeLink({ client_id, scope });
    console.log("Authorize link:", link);
} catch (error: any) {
    console.error("Error:", error.message);
} 