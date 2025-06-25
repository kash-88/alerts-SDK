import { getOauthToken } from '../index.js';

const code = null; // Get the code by logging in using the link received using the getAuthorizeLink function!

if(code) console.log(await getOauthToken({ code, client_secret: 'hskEKEIzNxytUTKEWlNcf8XGF3pSbYSsLD3s7wgr', client_id: '15316' }));