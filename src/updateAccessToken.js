import axios from "axios";
import { validateDataObject } from "./utils.js";

/**
 * Refreshes an access token using a refresh token.
 * 
 * @example
 * import { updateAccessToken } from "@kash.88/alerts";
 * 
 * try {
 *   const tokenData = await updateAccessToken({
 *     client_id: '12345',
 *     client_secret: 'YOUR_CLIENT_SECRET',
 *     refresh_token: 'USER_REFRESH_TOKEN'
 *   });
 *   console.log(tokenData.access_token);
 * } catch (error) {
 *   console.error('Error updating access token:', error.response.data);
 * }
 * 
 * @param {object} data - The data for the token refresh request.
 * @param {string|number} data.client_id - Your application's client ID.
 * @param {string} data.client_secret - Your application's client secret.
 * @param {string} data.refresh_token - The refresh token obtained during initial authorization.
 * @returns {Promise<object>} A promise that resolves to the new token data from the API.
 * @see {@link https://www.donationalerts.com/apidoc#authorization__authorization_code__getting_access_token}
 */
export default async function updateAccessToken(data) {
    validateDataObject(data, ['client_id', 'client_secret', 'refresh_token']);

    const response = await axios.post('https://www.donationalerts.com/oauth/token', {
        grant_type: 'refresh_token',
        client_id: data.client_id,
        client_secret: data.client_secret,
        refresh_token: data.refresh_token
    });

    return response.data;
}