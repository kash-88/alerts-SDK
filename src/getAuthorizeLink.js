import { validateDataObject } from "./utils.js";

/**
 * Generates an authorization link for the DonationAlerts API.
 * 
 * @example
 * import { getAuthorizeLink } from "@kash.88/alerts";
 * 
 * const authLink = getAuthorizeLink({
 *   client_id: '12345',
 *   scope: ['oauth-user-show']
 * });
 * console.log(authLink);
 * 
 * @param {object} data - The data for generating the link.
 * @param {string|number} data.client_id - Your application's client ID.
 * @param {string[]} data.scope - An array of required permissions (scopes).
 * @returns {string} The authorization URL.
 * @see {@link https://www.donationalerts.com/apidoc#authorization__authorization_code__authorization_request}
 */

export default function getAuthorizeLink(data) {
    validateDataObject(data, ['client_id']);

    if (!Array.isArray(data.scope)) {
        throw new Error('You must provide "scope" as an array in the data object.');
    }
    
    return `https://www.donationalerts.com/oauth/authorize?client_id=${data.client_id}&response_type=code&scope=${data.scope.join('%20')}`;
}