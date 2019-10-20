'use strict';

const doRun = require('./src/send-haiku');

const twitter = require('./src/providers/twitter');
const telegram = require('./src/providers/telegram');

const {
  BOTTOKEN,
  TELEGRAMCHANNEL,
  STARTDATE,
  CONSUMERKEY,
  CONSUMERSECRET,
  ACCESSTOKENKEY,
  ACCESSTOKENSECRET
} = process.env;

const providers = [
  telegram({
    BOTTOKEN,
    TELEGRAMCHANNEL
  }),
  twitter({
    CONSUMERKEY,
    CONSUMERSECRET,
    ACCESSTOKENKEY,
    ACCESSTOKENSECRET
  })
];

doRun(providers, STARTDATE)
  .then(console.log)
  .catch(console.error);
