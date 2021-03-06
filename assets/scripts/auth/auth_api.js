'use strict';

const app = require('../app.js');

const signUp = (data) => {
  return new Promise((resolve, reject) => {
    return $.ajax({
      url: app.host + '/sign-up',
      method: "POST",
      data,
      success: (response) => {
        resolve(response);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in',
    method: "POST",
    data
  });
};

const signOut = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
