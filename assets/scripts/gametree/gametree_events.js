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

const onResetUserScore = function(event) {
  event.preventDefault();
  api.resetGames()
    .done(ui.resetUserScoreSuccess)
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

  if (logic.gameSolved || !app.user || !app.game) {
    return;
  }

  logic.tree[$(event.target).data('id')] = logic.selection;
  $(event.target).text(logic.selection);
  $('.game-message').text("Now pick another from the tray. When you've got them all filled, click submit!");
};

const onGameSubmit = function(event) {
  event.preventDefault();

  if(!logic.isGameSolved(logic.solution, logic.tree)) {
    $('.game-message').text('Not quite. Rearrange and try again!');

  } else {
    api.submitGame()
      .done(ui.submitGameSuccess)
      .fail(ui.failure);
  }
};

const addHandlers = () => {
  $('.get-user-score').on('click', onGetUserScore);
  $('.reset-user-score').on('click', onResetUserScore);
  $('.new-game').on('click', onCreateGame);
  $('.tray').on('click', onTraySelect);
  $('.child').on('click', onTreeSelect);
  $('.submit-game').on('click', onGameSubmit);
};

module.exports = {
  addHandlers,
};
