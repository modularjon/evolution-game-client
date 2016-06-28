'use strict';

const app = require('../app.js');
const logic = require('./gametree_logic')

const userScoreSuccess = (data) => {
  app.games = data.games;
  $('.show-user-score').text(app.games.filter((obj) => { return obj.game_solved }).length);
};

const createGameSuccess = (data) => {
  app.game = data.game;
  logic.solution = app.game.child_taxons;
  logic.tray = app.game.child_taxons.shuffled();
  console.log(app.game.child_taxons);
  console.log(logic.solution);
  console.log(logic.tray);
  $('.parent').text(app.game.parent_taxon.taxon_name);
  $('.tray[data-id="0"]').text(logic.tray[0].taxon_name);
  $('.tray[data-id="1"]').text(logic.tray[1].taxon_name);
  $('.tray[data-id="2"]').text(logic.tray[2].taxon_name);
  $('.tray[data-id="3"]').text(logic.tray[3].taxon_name);
};

module.exports = {
  userScoreSuccess,
  createGameSuccess,
};
