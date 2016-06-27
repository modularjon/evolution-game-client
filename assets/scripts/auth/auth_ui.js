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
  $('.game-message').text("Sorry, it didn\'t work, try again!");
  console.error(error);
};

const signUpSuccess = function() {
  $('.game-message').text("Signed up!");
  $('form').trigger('reset');
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('.sign-up').hide();
  $('.sign-in').hide();
  $('.sign-out').show();
  $('.change-password').show();
  $('.signed-in').text('Signed in as: ' + app.user.email);
  $('.game-message').text('Start a new game!');
  $('form').trigger('reset');
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  $('.sign-up').show();
  $('.sign-in').show();
  $('.sign-out').hide();
  $('.change-password').hide();
  $('.signed-in').text('');
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
