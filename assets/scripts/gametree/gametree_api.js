'use strict';

const app = require('../app.js');

const indexGames = () => {
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const createGame = () => {
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const submitGame = () => {
  return $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    data: { "game": { "game_solved": "true" } },
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  indexGames,
  createGame,
  submitGame,
};
