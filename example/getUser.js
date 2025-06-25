import { getUser } from '../index.js';

const token = null; // Get a token using the getOauthToken function!

if(token) console.log(await getUser(token))