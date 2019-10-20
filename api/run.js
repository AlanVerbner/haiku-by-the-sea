'use strict';

/* eslint-disable no-magic-numbers */
const telegram = require('../src/providers/telegram');
const twitter = require('../src/providers/twitter');
const doRun = require('../src/send-haiku');

const fromBase64 = b64 => new Buffer(b64, 'base64').toString();

module.exports = async (req, res) => {
  try {
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
        BOTTOKEN: fromBase64(BOTTOKEN),
        TELEGRAMCHANNEL: fromBase64(TELEGRAMCHANNEL)
      }),
      twitter({
        CONSUMERKEY: fromBase64(CONSUMERKEY),
        CONSUMERSECRET: fromBase64(CONSUMERSECRET),
        ACCESSTOKENKEY: fromBase64(ACCESSTOKENKEY),
        ACCESSTOKENSECRET: fromBase64(ACCESSTOKENSECRET)
      })
    ];
    console.log('About to run the main function');
    const result = await doRun(providers, fromBase64(STARTDATE));
    console.log('Main function executed', result);
    res.status(200).send({ success: 200 });
  } catch (error) {
    res.status(500).send({ error });
  }
};
