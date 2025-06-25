import axios from 'axios';

/**
 * Fetches the profile information for the authenticated user.
 * 
 * @example
 * import { getUser } from "@kash.88/alerts";
 * 
 * // Get an access_token using getOauthToken or updateAccessToken
 * 
 * try {
 *   const accessToken = 'USER_ACCESS_TOKEN';
 *   const user = await getUser(accessToken);
 *   console.log(user);
 * } catch (error) {
 *   console.error('Error fetching user:', error.response.data);
 * }
 * 
 * @param {string} access_token - The access token for authentication.
 * @returns {Promise<object>} A promise that resolves to the user profile data.
 * @see {@link https://www.donationalerts.com/apidoc#api_v1__users__user_profile_information}
 */
export default async function getUser(access_token) {
    if (typeof access_token !== 'string' || !access_token) {
        throw new Error('You must provide "access_token" as a non-empty string.');
    }

    const response = await axios.get('https://www.donationalerts.com/api/v1/user/oauth', {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });

    return response.data.data;
}