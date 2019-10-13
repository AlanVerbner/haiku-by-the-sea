'use strict';

/**
 * Generated an sahre to Twitter link
 *
 * @param {String} haiku HTML formated haiku
 * @returns {String} Share to Twitter link
 */
const twitterLink = haiku => {
  const encoded = encodeURI(haiku);
  return `http://twitter.com/share?text=${encoded}\n\n&hashtags=TodaysHaiku,Haiku,HaikuByTheSea`;
};

/**
 * Given a Haiku it returns the formatted HTML text to be sent to the Telegram
 * channel. It also adds an anchor to be able to automatically share it to Twitter
 * when clicked.
 *
 * @param {String} haiku HTML formatted haiku
 * @returns {String} HTML formated Haiku
 */
const formatHaiku = haiku =>
  `${haiku}\n<a href="${twitterLink(haiku)}">Share on Twitter</a>`;

/**
 * As our Haiku DB is fixed, today's Haiku is calculated based on the days
 * difference between today's date and the date when the app was deployed.
 *
 * It's a simple hack but this is a simple app :P
 *
 * @param {Moment} startDate Deploy date
 * @param {Moment} currDate Today's date
 * @returns {Number} Haiku index
 */
const haikuIndex = (startDate, currDate) => currDate.diff(startDate, 'days');

module.exports = {
  formatHaiku,
  haikuIndex
};
