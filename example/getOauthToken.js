import { getOauthToken } from '@kash-88/alerts';
import 'dotenv/config';

// Get the code by authorizing using the link from getAuthorizeLink.js!
const authorizationCode = process.env.CODE; 
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

if (!authorizationCode) {
    console.log('Please provide the AUTHORIZATION_CODE in the .env file.');
} else {
    (async () => {
        try {
            const tokenData = await getOauthToken({
                code: authorizationCode,
                client_id: clientId,
                client_secret: clientSecret
            });
            console.log('Received token data:', tokenData);
            console.log('\nNow you can use the access_token to access the API.');
            console.log('Save the refresh_token to be able to update the access_token in the future without user involvement.');
        } catch (error) {
            console.error('Error getting Oauth token:', error.response ? error.response.data : error.message);
        }
    })();
}