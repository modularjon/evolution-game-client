'use strict';

const app = require('../app.js');

const userScoreSuccess = (data) => {
  console.log(data);
};

const createGameSuccess = (data) => {
  app.game = data.game;
  console.log(app.game);
};

module.exports = {
  userScoreSuccess,
  createGameSuccess,
};
