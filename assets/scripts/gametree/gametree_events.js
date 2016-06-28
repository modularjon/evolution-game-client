'use strict';

const api = require('./gametree_api');
const ui = require('./gametree_ui');
const app = require('../app.js');
const logic = require('./gametree_logic');

const onGetUserScore = function(event) {
  event.preventDefault();
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

const onTraySelect = function(event) {
  event.preventDefault();

  if (logic.gameSolved || !app.user || !app.game) {
    return;
  }

  logic.selection = $(event.target).text();
  $('.game-message').text('Now select a position within the tree.');
};

const onTreeSelect = function(event) {
  event.preventDefault();
};

const addHandlers = () => {
  $('.get-user-score').on('click', onGetUserScore);
  $('.new-game').on('click', onCreateGame);
  $('.tray').on('click', onTraySelect);
  $('.child').on('click', onTreeSelect);
};

module.exports = {
  addHandlers,
};
