'use strict';

const Telegraf = require('telegraf');

/**
 * Generated an sahre to Twitter link
 *
 * @param {String} haiku HTML formated haiku
 * @returns {String} Share to Twitter link
 */
const twitterLink = haiku => {
  const encoded = encodeURI(haiku);
  return `http://twitter.com/share?text=${encoded}\n\n&hashtags=TodaysHaiku,Haiku,HaikuByTheSea`;
};

/**
 * Given a Haiku it returns the formatted HTML text to be sent to the Telegram
 * channel. It also adds an anchor to be able to automatically share it to Twitter
 * when clicked.
 *
 * @param {String} haiku HTML formatted haiku
 * @returns {String} HTML formated Haiku
 */
const formatHaiku = haiku =>
  `${haiku}\n<a href="${twitterLink(haiku)}">Share on Twitter</a>`;

const sendHaikuFn = ({ BOTTOKEN, TELEGRAMCHANNEL, sendTelegramMessage }) => {
  const bot = new Telegraf(BOTTOKEN);

  return todaysHaiku => {
    const send = sendTelegramMessage
      ? sendTelegramMessage
      : bot.telegram.sendMessage.bind(bot.telegram);

    // eslint-disable-next-line camelcase
    return send(TELEGRAMCHANNEL, todaysHaiku, {
      // eslint-disable-next-line camelcase
      parse_mode: 'HTML'
    });
  };
};

const config = params => ({
  name: 'Telegram',
  sendHaiku: sendHaikuFn(params),
  formatHaiku
});

module.exports = params => config(params);
