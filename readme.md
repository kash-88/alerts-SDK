# DonationAlerts API
A convenient library for interacting with the DonationAlerts API!

## Installation
```bash
$ npm i @kash-88/alerts
```

```py
# This version is not recommended for production! For testing new features only.
```

## All methods

## (Sync) getAuthorizeLink
* Generates an authorization link for DonationAlerts OAuth.
* Param: `{ client_id: string, scope: string[] }`
* Endpoint: https://www.donationalerts.com/oauth/authorize
* Example:
```js
import { getAuthorizeLink } from '@kash-88/alerts';

const link = getAuthorizeLink({
  client_id: 'YOUR_CLIENT_ID',
  scope: ['oauth-user-show'] // All list: https://www.donationalerts.com/apidoc#authorization__scopes
});

console.log(link);
```

---

## (Async) getOauthToken
* Exchanges authorization code for access_token and refresh_token.
* Param: `{ client_id: string|number, client_secret: string, code: string }`
* Endpoint: https://www.donationalerts.com/oauth/token
* Example:
```js
import { getOauthToken } from '@kash-88/alerts';

const tokenData = await getOauthToken({
  client_id: 'YOUR_CLIENT_ID',
  client_secret: 'YOUR_CLIENT_SECRET',
  code: 'AUTHORIZATION_CODE'
});

console.log(tokenData.access_token);
```

---

## (Async) updateAccessToken
* Refreshes access_token using refresh_token.
* Param: `{ client_id: string|number, client_secret: string, refresh_token: string }`
* Endpoint: https://www.donationalerts.com/oauth/token
* Example:
```js
import { updateAccessToken } from '@kash-88/alerts';

const tokenData = await updateAccessToken({
  client_id: 'YOUR_CLIENT_ID',
  client_secret: 'YOUR_CLIENT_SECRET',
  refresh_token: 'USER_REFRESH_TOKEN'
});

console.log(tokenData.access_token);
```

---

## (Async) getUser
* Fetches user profile information by access_token.
* Param: `access_token: string`
* Endpoint: https://www.donationalerts.com/api/v1/user/oauth
* Example:
```js
import { getUser } from '@kash-88/alerts';

const user = await getUser('USER_ACCESS_TOKEN');

console.log(user);
```