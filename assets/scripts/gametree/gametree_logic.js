'use strict';

const app = require('../app.js');

let solution = [];

let tray = [];

let tree = ['','','',''];

let selection;

let gameSolved = false;

Array.prototype.shuffled = function() {
  return this.map(function(n){ return [Math.random(), n] })
             .sort().map(function(n){ return n[1] });
};

const isGameSolved = function(solution, tree) {
  let i = solution.length;

  while (i--) {
    if (solution[i] !== tree[i]) {
      return false;
    }
  }

  return true;
};

module.exports = {
  solution,
  tray,
  tree,
  selection,
  gameSolved,
  isGameSolved,
};
