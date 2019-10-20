'use strict';

const doRun = require('./src/send-haiku');

const telegram = require('./src/providers/telegram');

const { BOTTOKEN, TELEGRAMCHANNEL, STARTDATE } = process.env;

const providers = [telegram(BOTTOKEN, TELEGRAMCHANNEL)];

doRun(providers, STARTDATE)
  .then(console.log)
  .catch(console.error);
