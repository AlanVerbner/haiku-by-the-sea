'use strict';

const moment = require('moment');
const expect = require('chai').expect;
const sendHaiku = require('../src/send-haiku');
const haikus = require('../haikus-db.json');
const telegram = require('../src/providers/telegram');

const returnArgumentsStub = (...args) => Promise.resolve(args);

// Disable logging FIXME: This should be done using a logger.js file instead
console.log = () => {};

describe('Send Haiku', () => {
  describe('Should work for Telegram', () => {
    const TELEGRAMCHANNEL = '@channel';
    const EXTRA = {
      // eslint-disable-next-line camelcase
      parse_mode: 'HTML'
    };

    const providers = [
      telegram('BOTTOKEN', TELEGRAMCHANNEL, returnArgumentsStub)
    ];

    it('Should send the first Haiku if start date is today', async () => {
      const [[channel, msg, extra]] = await sendHaiku(
        providers,
        moment().format('YYYY-MM-DD')
      );

      expect(channel).to.equal(TELEGRAMCHANNEL);
      expect(msg).to.contain(haikus[0]);
      expect(extra).to.eql(EXTRA);
    });

    it('Should be able to send the last Haiku', async () => {
      const [[channel, msg, extra]] = await sendHaiku(
        providers,
        moment()
          // Last item in the list.
          // FIXME: We have a hard-coded dependency `moment()`
          // inside teh function that should changed
          .subtract(haikus.length - 1, 'days')
          .format('YYYY-MM-DD')
      );

      expect(channel).to.equal(TELEGRAMCHANNEL);
      expect(msg).to.contain(haikus[haikus.length - 1]);
      expect(extra).to.eql(EXTRA);
    });

    it('Should send an apologies message if there are no more Haikus in the db', async () => {
      const [[channel, msg, extra]] = await sendHaiku(
        providers,
        moment()
          .subtract(haikus.length, 'days')
          .format('YYYY-MM-DD')
      );

      expect(channel).to.equal(TELEGRAMCHANNEL);
      expect(msg).to.contain('Blip Blop 🤖 \nSorry, I ran out of Haikus 😢');
      expect(extra).to.eql(EXTRA);
    });
  });
});
