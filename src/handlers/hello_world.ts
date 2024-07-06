import { AllMiddlewareArgs, SlackCommandMiddlewareArgs } from '@slack/bolt';

// eslint-disable-next-line import/prefer-default-export
export const handleHelloCommand = async ({ command, logger, ack, respond }: AllMiddlewareArgs & SlackCommandMiddlewareArgs) => {
  ack();
  respond({
    response_type: 'ephemeral',
    text: `Hello, <@${command.user_id}>!`,
  });
  logger.info('Hello World command executed');
};
