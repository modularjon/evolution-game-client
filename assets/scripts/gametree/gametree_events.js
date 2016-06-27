'use strict';

const api = require('./gametree_api');
const ui = require('./gametree_ui');
const app = require('../app.js');

const onGetUserScore = function(event) {
  event.preventDefault();
  console.log(app.games.length)
  api.indexGames()
    .done(ui.userScoreSuccess)
    .fail(ui.failure);
};

const onCreateGame = function(event) {
  event.preventDefault();
  api.createGame()
    .done(ui.createGameSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('.get-user-score').on('click', onGetUserScore);
  $('.new-game').on('click', onCreateGame);
};

module.exports = {
  addHandlers,
};
