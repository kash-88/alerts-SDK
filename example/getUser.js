import { DonationAlerts } from '@kash-88/alerts';
import 'dotenv/config';

// Get an access token using getOauthToken.js
const accessToken = process.env.ACCESS_TOKEN;

if (!accessToken) {
    console.log('Please provide the ACCESS_TOKEN in the .env file.');
} else {
    (async () => {
        try {
            const client = new DonationAlerts(accessToken);
            const user = await client.getUser();
            console.log('User data:', user);
        } catch (error) {
            console.error('Error getting user:', error.response ? error.response.data : error.message);
        }
    })();
}