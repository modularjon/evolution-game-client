'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./auth_api');
const ui = require('./auth_ui');


const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.failure);
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('.sign-up').on('submit', onSignUp);
  $('.sign-in').on('submit', onSignIn);
  $('.sign-out').on('submit', onSignOut);
  $('.change-password').on('submit', onChangePassword);
};

module.exports = {
  addHandlers,
};
