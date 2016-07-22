'use strict';

const app = require('../app.js');
const logic = require('../gametree/gametree_logic');

const success = (data) => {
  $('.game-message').text('Success!');
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  $('.game-message').text("Sorry, it didn\'t work, try again!");
  console.error(error);
};

const signUpSuccess = function() {
  // $('.game-message').text("Signed up!");
  // $('form').trigger('reset');
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('.sign-up').hide();
  $('.sign-in').hide();
  $('.sign-out').show();
  $('.change-password').show();
  $('.game-info').show();
  // $('.new-game').show();
  // $('.get-user-score').show();
  // $('.show-user-score').show();
  $('.signed-in').text('Signed in as: ' + app.user.email);
  $('.game-message').text('Start a new game!');
  $('form').trigger('reset');
};

const signOutSuccess = () => {
  $('.sign-up').show();
  $('.sign-in').show();
  $('.sign-out').hide();
  $('.change-password').hide();
  $('.game-info').hide();
  // $('.new-game').hide();
  // $('.get-user-score').hide();
  // $('.show-user-score').hide();
  $('.tray').text('');
  $('.parent').text('');
  $('.child').text('');
  $('.signed-in').text('');
  $('.show-user-score').text('');
  $('.game-message').text('Sign in to start!');
  app.user = null;
};

const changePasswordSuccess = function() {
  $('.game-message').text("Password changed successfully!");
  $('form').trigger('reset');
};

module.exports = {
  success,
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
};
