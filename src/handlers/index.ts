import { App } from '@slack/bolt';

import { handleHelloCommand } from './hello_world';
import { handleAppHomeOpened } from './app_home';

const registerListeners = (app: App) => {
  // Commands and Shortcuts
  app.command('/hello', handleHelloCommand);

  // Buttons

  // Inputs

  // Modals

  // Events
  app.event('app_home_opened', handleAppHomeOpened);
};

export default registerListeners;
