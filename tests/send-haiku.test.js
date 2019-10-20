'use strict';

const moment = require('moment');
const expect = require('chai').expect;
const sendHaiku = require('../src/send-haiku');
const haikus = require('../haikus-db.json');
const telegram = require('../src/providers/telegram');
const twitter = require('../src/providers/twitter');

const returnArgumentsStub = (...args) => Promise.resolve(args);

// Disable logging FIXME: This should be done using a logger.js file instead
console.log = () => {};

const providersToTest = [
  telegram({
    BOTTOKEN: 'ATOKEN',
    TELEGRAMCHANNEL: '@channel',
    sendTelegramMessage: returnArgumentsStub
  }),
  twitter({
    CONSUMERKEY: 'CONSUMERKEY',
    CONSUMERSECRET: 'CONSUMERSECRET',
    ACCESSTOKENKEY: 'ACCESSTOKENKEY',
    ACCESSTOKENSECRET: 'ACCESSTOKENSECRET',
    sendTwitterMessage: returnArgumentsStub
  })
];

const responseMatchers = {
  Telegram: ([[channel, msg, extra]], haiku) => {
    expect(channel).to.equal('@channel');
    expect(msg).to.contain(haiku);
    expect(extra).to.eql({
      // eslint-disable-next-line camelcase
      parse_mode: 'HTML'
    });
  },
  Twitter: ([[method, msg]], haiku) => {
    expect(method).to.equal('statuses/update');
    expect(msg.status).to.contain(haiku);
  }
};

describe('Send Haiku', () => {
  providersToTest.map(provider => {
    describe(`Should work for ${provider.name}`, () => {
      const providers = [provider];

      it('Should send the first Haiku if start date is today', async () => {
        const response = await sendHaiku(
          providers,
          moment().format('YYYY-MM-DD')
        );

        responseMatchers[provider.name](response, haikus[0]);
      });

      it('Should be able to send the last Haiku', async () => {
        const response = await sendHaiku(
          providers,
          moment()
            // Last item in the list.
            // FIXME: We have a hard-coded dependency `moment()`
            // inside teh function that should changed
            .subtract(haikus.length - 1, 'days')
            .format('YYYY-MM-DD')
        );

        responseMatchers[provider.name](response, haikus[haikus.length - 1]);
      });

      it('Should send an apologies message if there are no more Haikus in the db', async () => {
        const response = await sendHaiku(
          providers,
          moment()
            .subtract(haikus.length, 'days')
            .format('YYYY-MM-DD')
        );
        responseMatchers[provider.name](
          response,
          'Blip Blop 🤖 \nSorry, I ran out of Haikus 😢'
        );
      });
    });
  });
});
