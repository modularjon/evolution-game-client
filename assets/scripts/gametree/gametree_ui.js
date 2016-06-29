'use strict';

const app = require('../app.js');
const logic = require('./gametree_logic');

const userScoreSuccess = (data) => {
  app.games = data.games;

  $('.show-user-score').text(app.games.filter((obj) => { return obj.game_solved; }).length);
};

const createGameSuccess = (data) => {
  app.game = data.game;

  logic.gameSolved = false;

  let solution = app.game.child_taxons;
  let tray = app.game.child_taxons.shuffled();

  logic.solution = solution.map(function(obj){
    let result;
    result = obj.taxon_name;
    return result;
  });

  logic.tray = tray.map(function(obj){
    let result;
    result = obj.taxon_name;
    return result;
  });

  $('.parent').text(app.game.parent_taxon.taxon_name);
  $('.tray[data-id="0"]').text(logic.tray[0]);
  $('.tray[data-id="1"]').text(logic.tray[1]);
  $('.tray[data-id="2"]').text(logic.tray[2]);
  $('.tray[data-id="3"]').text(logic.tray[3]);
  $('.child').text('');
  $('.game-message').text('Select an animal from the tray to start.');
};

const submitGameSuccess = (data) => {
  logic.gameSolved = true;

  $('.game-message').text('You got it! Start another game!');
};

module.exports = {
  userScoreSuccess,
  createGameSuccess,
  submitGameSuccess,
};
