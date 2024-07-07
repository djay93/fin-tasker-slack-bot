import { App, LogLevel, ExpressReceiver } from '@slack/bolt';
import * as dotenv from 'dotenv';

console.log('📦 Loading Slack App...');

// Load environment variables
dotenv.config();

const processBeforeResponse = false;
const deferInitialization = true;

// Initialize your own ExpressReceiver
const expressReceiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET as string,
  endpoints: '/slack/events',
});

// Initialization
const slack_app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
  receiver: expressReceiver,
  logLevel: LogLevel.DEBUG,
  processBeforeResponse,
  deferInitialization,
//  clientId: process.env.SLACK_CLIENT_ID,
//  clientSecret: process.env.SLACK_CLIENT_SECRET,
//   socketMode: true,
//   appToken: process.env.SLACK_APP_TOKEN,
});

expressReceiver.router.get('/', (_req, res) => {
  res.send('Your Bolt ⚡️ App is running!');
});

// Start bolt app
(async () => {
  try {
    await slack_app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running! ⚡️');
  } catch (error) {
    console.error('Unable to start App', error);
  }
})();
