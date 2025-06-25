import getAuthorizeLink from './getAuthorizeLink.js';
import getOauthToken from './getOauthToken.js';
import getUser from './getUser.js';
import updateAccessToken from './updateAccessToken.js';

/**
 * @class DonationAlerts
 * @classdesc The main class for interacting with the DonationAlerts API.
 */

class DonationAlerts {
    /**
     * The access token used for API requests.
     * @type {string|null}
     * @private
     */
    #accessToken = null;

    /**
     * Creates an instance of the DonationAlerts client.
     * @param {string} accessToken - An optional access token to initialize the client with.
     */
    constructor(accessToken = null) {
        if (accessToken) {
            this.setAccessToken(accessToken);
        }
    }

    /**
     * Sets the access token for subsequent API calls.
     * @param {string} accessToken - The access token.
     */
    setAccessToken(accessToken) {
        if (typeof accessToken !== 'string' || !accessToken) {
            throw new Error('You must provide "access_token" as a non-empty string.');
        }
        this.#accessToken = accessToken;
    }

    /**
     * Gets the currently set access token.
     * @returns {string|null} The access token.
     */
    getAccessToken() {
        return this.#accessToken;
    }

    /**
     * Fetches the profile information for the authenticated user.
     * Uses the token set in the client.
     * @returns {Promise<object>} A promise that resolves to the user profile data.
     */
    async getUser() {
        if (!this.#accessToken) {
            throw new Error('Access token is not set. Please set it using setAccessToken() or during client initialization.');
        }
        return getUser(this.#accessToken);
    }
}

export {
    DonationAlerts,
    getAuthorizeLink,
    getOauthToken,
    getUser,
    updateAccessToken
}; 