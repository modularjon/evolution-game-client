'use strict';

const app = require('../app.js');

const userScoreSuccess = (data) => {
  app.games = data.games;
  $('.show-user-score').text(app.games.filter((obj) => { return obj.game_solved }).length);
};

const createGameSuccess = (data) => {
  app.game = data.game;
};

module.exports = {
  userScoreSuccess,
  createGameSuccess,
};
