import { App, LogLevel } from '@slack/bolt';
import * as dotenv from 'dotenv';

console.log('📦 Loading Slack App...');

// Load environment variables
dotenv.config();

// Initialization
const slack_app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  logLevel: LogLevel.DEBUG,
//  clientId: process.env.SLACK_CLIENT_ID,
//  clientSecret: process.env.SLACK_CLIENT_SECRET,
//   socketMode: true,
//   appToken: process.env.SLACK_APP_TOKEN,
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
