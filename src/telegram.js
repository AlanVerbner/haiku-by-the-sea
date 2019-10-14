'use strict';

const Telegraf = require('telegraf');

module.exports = BOTTOKEN => {
  const bot = new Telegraf(BOTTOKEN);
  return bot.telegram.sendMessage.bind(bot.telegram);
};
