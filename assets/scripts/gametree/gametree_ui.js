'use strict';

const app = require('../app.js');

const userScoreSuccess = (data) => {
  app.games = data.games;
};

const createGameSuccess = (data) => {
  app.game = data.game;
};

module.exports = {
  userScoreSuccess,
  createGameSuccess,
};
