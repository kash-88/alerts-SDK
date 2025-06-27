import 'dotenv/config';
import { getUser } from '@kash-88/alerts';
import { checkEnv } from '@utils';

checkEnv(['ACCESS_TOKEN']);

const access_token = process.env.ACCESS_TOKEN!;

(async () => {
    try {
        const user = await getUser(access_token);
        console.log('User:', user);
    } catch (error: any) {
        console.error('Error:', error.message);
    }
})(); 