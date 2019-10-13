'use strict';

const sendTelegramMessage = require('./src/telegram');
const doRun = require('./src/send-haiku');

const { BOTTOKEN, TELEGRAMCHANNEL, STARTDATE } = process.env;

doRun(sendTelegramMessage(BOTTOKEN), TELEGRAMCHANNEL, STARTDATE)
  .then(console.log)
  .catch(console.error);
