'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

const authEvents = require('./auth/auth_events');
const gameEvents = require('./gametree/gametree_events');

// use require without a reference to ensure a file is bundled
require('./example');

// On document ready
$(() => {
  authEvents.addHandlers();
  gameEvents.addHandlers();
});
