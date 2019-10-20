'use strict';

const moment = require('moment');
const haikus = require('../haikus-db.json');
const { haikuIndex } = require('./haiku');

/**
 * As this is a super basic implementation, we don't keep updating
 * the Haikus DB (taken from http://haikuguy.com/issa/search.php) so
 * if we ran out of Haikus we need to send something to the channel.
 *
 * That being said, there are Haikus for more than 3 years.
 *
 * @param {Array<String>} haikusToPick Array of Haikus
 * @param {Number} index Selected Haiku index
 * @returns {String} Haiku to be sent to the Channel
 */
const getTodaysHaiku = (haikusToPick, index) => {
  if (index >= haikus.length) {
    return 'Blip Blop 🤖 \nSorry, I ran out of Haikus 😢';
  }
  const todaysHaiku = haikusToPick[index];
  return todaysHaiku;
};

const doRun = async (providers, STARTDATE) => {
  console.log('[doRun] Getting todays Haiku');
  const todaysHaiku = getTodaysHaiku(haikus, haikuIndex(STARTDATE, moment()));
  console.log('[doRun] Todays Haiky is', todaysHaiku);
  const results = providers.map(provider => {
    console.log(`[doRun] Sending haiku to provider ${provider.name}`);
    return provider.sendHaiku(provider.formatHaiku(todaysHaiku));
  });
  // TODO: We are not retrying a failed provider
  return Promise.all(results);
};

module.exports = doRun;
