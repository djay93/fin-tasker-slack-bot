import { AllMiddlewareArgs, SlackEventMiddlewareArgs } from '@slack/bolt';
import type { KnownBlock } from '@slack/web-api';

const app_home_block: KnownBlock[] = [
  {
    type: 'header',
    text: {
      type: 'plain_text',
      text: 'Stripe Payments',
    },
  },
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: 'Make a donation now! :money_with_wings:',
    },
  },
  {
    type: 'actions',
    elements: [
      {
        type: 'button',
        text: {
          type: 'plain_text',
          text: '$5',
          emoji: true,
        },
        style: 'primary',
        value: 'pay_now_5',
        url: 'https://buy.stripe.com/test_aEU28tcuC9Cv7oAcMM',
      },
      {
        type: 'button',
        text: {
          type: 'plain_text',
          text: '$10',
          emoji: true,
        },
        style: 'primary',
        value: 'pay_now_10',
        url: 'https://buy.stripe.com/test_aEU28tcuC9Cv7oAcMM',
      },
      {
        type: 'button',
        text: {
          type: 'plain_text',
          text: '$15',
          emoji: true,
        },
        style: 'primary',
        value: 'pay_now_15',
        url: 'https://buy.stripe.com/test_aEU28tcuC9Cv7oAcMM',
      },
      {
        type: 'button',
        text: {
          type: 'plain_text',
          text: '$20',
          emoji: true,
        },
        style: 'primary',
        value: 'pay_now_20',
        url: 'https://buy.stripe.com/test_aEU28tcuC9Cv7oAcMM',
      },
    ],
  },
  {
    type: 'context',
    elements: [
      {
        type: 'image',
        image_url: 'https://api.slack.com/img/blocks/bkb_template_images/placeholder.png',
        alt_text: 'placeholder',
      },
    ],
  },
];

// eslint-disable-next-line import/prefer-default-export
export const handleAppHomeOpened = async ({ logger, event, client }:
    AllMiddlewareArgs & SlackEventMiddlewareArgs<'app_home_opened'>) => {
  logger.info('app_home_opened event detected');
  if (event.tab !== 'home') return;

  try {
    await client.views.publish({
      user_id: event.user,
      view: {
        type: 'home',
        blocks: app_home_block,
      },
    });
  } catch (error) {
    logger.error(`Error publishing app home view: ${error}`);
  }
};
