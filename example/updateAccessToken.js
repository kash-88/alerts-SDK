import { updateAccessToken } from '@kash-88/alerts';
import 'dotenv/config';

// Get the refresh token from getOauthToken.js and save it
const refreshToken = process.env.REFRESH_TOKEN;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

if (!refreshToken) {
    console.log('Please provide the REFRESH_TOKEN in the .env file.');
} else {
    (async () => {
        try {
            console.log('Attempting to update access token...');
            const tokenData = await updateAccessToken({
                refresh_token: refreshToken,
                client_id: clientId,
                client_secret: clientSecret
            });
            console.log('Successfully updated token data:', tokenData);
            console.log('\nSave the new access_token and refresh_token.');
        } catch (error) {
            console.error('Error updating access token:', error.response ? error.response.data : error.message);
        }
    })();
} 