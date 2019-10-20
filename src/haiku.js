'use strict';

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
  haikuIndex
};
