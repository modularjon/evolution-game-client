'use strict';

const app = require('../app.js');

const success = (data) => {
  $('.game-message').text('Success!');
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('.signed-out').hide();
  $('.signed-in').show();
  console.log(app.user);
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  $('.signed-in').hide();
  $('.signed-out').show();
  app.user = null;
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess
};
