'use strict';

let tray = ['','','',''];

let tree = ['','','',''];

let game_solved = false;

const gameSolved = function(tray, tree) {
  if (tray == tree) {
    game_solved = true;
  }
};

module.exports = {
  tray,
  tree,
};
