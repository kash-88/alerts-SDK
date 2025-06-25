import { getAuthorizeLink } from '@kash-88/alerts';
import 'dotenv/config';

// Your application's client ID from .env file
const clientId = process.env.CLIENT_ID;

const link = getAuthorizeLink({
    client_id: clientId,
    scope: ['oauth-user-show', 'oauth-donation-subscribe', 'oauth-donation-index', 'oauth-goal-subscribe']
});

console.log('Authorize link:', link);
console.log('Copy this link and paste it into your browser. After authorization, you will be redirected to the address you specified, and in the address bar you will find the "code" parameter. You will need it to get a token.');