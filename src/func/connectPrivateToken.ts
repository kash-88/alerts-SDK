import axios from 'axios';

/**
 * Gets a private token for subscribing to a DonationAlerts channel via Centrifuge.
 *
 * @example
 * import { connectPrivateToken } from '@kash-88/alerts';
 *
 * try {
 *   const token = await connectPrivateToken({
 *     channel: '$alerts:donation_12345',
 *     uuidv4_client_id: 'uuid-v4-string',
 *     access_token: 'USER_ACCESS_TOKEN'
 *   });
 * 
 *   console.log(token);
 * } catch (error) {
 *   console.error('Error getting Oauth token:', error.response.data);
 * }
 *
 * @param {Object} params - Parameters for getting the token.
 * @param {string} params.channel - Channel name to subscribe.
 * @param {string} params.uuidv4_client_id - UUID v4 client ID.
 * @param {string} params.access_token - OAuth access token of the user.
 * @returns {Promise<{ token: string }>} - Token for channel subscription.
 */

export async function connectPrivateToken({ channel, uuidv4_client_id, access_token }: {
  channel: string;
  uuidv4_client_id: string;
  access_token: string;
}): Promise<{ token: string }> {
  try {
    const response = await axios.post(
      'https://www.donationalerts.com/api/v1/centrifuge/subscribe',
      {
        channels: [channel],
        client: uuidv4_client_id
      },
      {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      }
    );
    return { token: response.data.channels[0].token };
  } catch (error: any) {
    throw new Error(error?.response?.data?.error_description || error?.message || error);
  }
} 