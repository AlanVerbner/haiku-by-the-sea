'use strict';

/* eslint-disable indent */
/* eslint-disable camelcase */

const Twit = require('twit');

/**
 * Given a Haiku it returns the formatted text to be sent to Twitter.
 * At the moment it's just an identify function until we want to add
 * more things to it.
 *
 * @param {String} haiku HTML formatted haiku
 * @returns {String} HTML formated Haiku
 */
const formatHaiku = haiku => haiku;

const sendHaikuFn = ({
  CONSUMERKEY,
  CONSUMERSECRET,
  ACCESSTOKENKEY,
  ACCESSTOKENSECRET,
  sendTwitterMessage
}) => {
  const client = new Twit({
    consumer_key: CONSUMERKEY,
    consumer_secret: CONSUMERSECRET,
    access_token: ACCESSTOKENKEY,
    access_token_secret: ACCESSTOKENSECRET
  });

  console.log(client);

  return todaysHaiku => {
    const send = sendTwitterMessage
      ? sendTwitterMessage
      : client.post.bind(client);

    return send('statuses/update', { status: todaysHaiku });
  };
};

const config = params => ({
  name: 'Twitter',
  sendHaiku: sendHaikuFn(params),
  formatHaiku
});

module.exports = params => config(params);
