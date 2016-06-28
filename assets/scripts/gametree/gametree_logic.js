'use strict';

const app = require('../app.js');

let solution = [];

let tray = [];

let tree = [];

Array.prototype.shuffled = function() {
  return this.map(function(n){ return [Math.random(), n] })
             .sort().map(function(n){ return n[1] });
};

const gameSolved = function(tray, tree) {
  if (tray === tree) {
    game_solved = true;
  }
};

module.exports = {
  solution,
  tray,
  tree,
  gameSolved,
};
