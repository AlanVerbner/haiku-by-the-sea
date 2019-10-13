'use strict';

const doRun = require('./send-haiku');

doRun()
  .then(console.log)
  .catch(console.error);
