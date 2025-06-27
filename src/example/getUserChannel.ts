import 'dotenv/config';
import { getUserChannel } from '@kash-88/alerts';
import { checkEnv } from '@utils';

checkEnv(['CLIENT_ID']);

const id = process.env.CLIENT_ID!;

try {
    const channel = getUserChannel(id);
    console.log('User channel:', channel);
} catch (error: any) {
    console.error('Error:', error.message);
} 