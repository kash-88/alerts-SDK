import { getAuthorizeLink } from '../index.js';

console.log(getAuthorizeLink({ client_id: 15316, scope: ['oauth-user-show']}));