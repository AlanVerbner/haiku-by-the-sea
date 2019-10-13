'use strict';

const moment = require('moment');
const expect = require('chai').expect;
const sendHaiku = require('../src/send-haiku');
const haikus = require('../haikus-db.json');

const sendTelegramMessageStub = (...args) => Promise.resolve(args);

// Disable logging FIXME: This should be done using a logger.js file instead
console.log = () => {};

describe('Send Haiku', () => {
  const TELEGRAMCHANNEL = '@channel';
  const EXTRA = {
    // eslint-disable-next-line camelcase
    parse_mode: 'HTML'
  };

  it('Should send the first Haiku if start date is today', async () => {
    const [channel, msg, extra] = await sendHaiku(
      sendTelegramMessageStub,
      TELEGRAMCHANNEL,
      moment().format('YYYY-MM-DD')
    );

    expect(channel).to.equal(TELEGRAMCHANNEL);
    expect(msg).to.contain(haikus[0]);
    expect(extra).to.eql(EXTRA);
  });

  it('Should send the last Haiku if start date is haikus array length days in the past', async () => {
    const [channel, msg, extra] = await sendHaiku(
      sendTelegramMessageStub,
      TELEGRAMCHANNEL,
      moment()
        // Last item in the list. FIXME: We have a hard-coded dependency `moment()` inside teh function that should changed
        .subtract(haikus.length - 1, 'days')
        .format('YYYY-MM-DD')
    );

    expect(channel).to.equal(TELEGRAMCHANNEL);
    expect(msg).to.contain(haikus[haikus.length - 1]);
    expect(extra).to.eql(EXTRA);
  });

  it('Should send an apologies message if there are no more Haikus in the db', async () => {
    const [channel, msg, extra] = await sendHaiku(
      sendTelegramMessageStub,
      TELEGRAMCHANNEL,
      moment()
        .subtract(haikus.length, 'days')
        .format('YYYY-MM-DD')
    );

    expect(channel).to.equal(TELEGRAMCHANNEL);
    expect(msg).to.contain('Blip Blop 🤖 \nSorry, I ran out of Haikus 😢');
    expect(extra).to.eql(EXTRA);
  });
});
