'use strict';

/* eslint-disable no-magic-numbers */

const doRun = require('../send-haiku');

const fromBase64 = b64 => new Buffer(b64, 'base64').toString();

module.exports = async (req, res) => {
  try {
    const { BOTTOKEN, TELEGRAMCHANNEL, STARTDATE } = process.env;
    console.log('About to run the main function');
    const result = await doRun(
      fromBase64(BOTTOKEN),
      fromBase64(TELEGRAMCHANNEL),
      fromBase64(STARTDATE)
    );
    console.log('Main function executed', result);
    res.status(200).send({ success: 200 });
  } catch (error) {
    res.status(500).send({ error });
  }
};
