"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _login = _interopRequireDefault(require("../model/users/login"));

var _newUser = _interopRequireDefault(require("../model/users/newUser"));

var _expressSession = _interopRequireDefault(require("express-session"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _express.default.Router();

var login = _login.default.login;
var newUser = _newUser.default.newUser;
var addUser = _newUser.default.newUser;
/*const routes = require('express').Router();
const user = require('./../model/users/login');
const newAccount = require('./../model/users/newUser');
const login = user.login;
const logout = user.logout;
const newUser = newAccount.newUser;
const addUser = newAccount.newUser;

const session = require('express-session');
*/

routes.post('/users/login', login);
routes.get('/users/checkLoginState', function (req, res) {
  //console.log('user session:', req.session.userData);
  res.status(200).json({
    userData: req.session.userData
  });
  /*
  if(typeof req.session !== 'undefined') {
      if(typeof req.session.userData !== 'undefined') {
          res.status(200).json({ userData: req.session.userData });
      } else {
          res.status(200).json({ isLoggedIn: false});
      }
  } else {
      res.status(200).json({ isLoggedIn: false});
  }
  */
});
/*
routes.post('/user/logout', logout);
routes.post('/user/newUser', newUser);
routes.post('/user/addUser', addUser);
*/

var _default = routes;
exports.default = _default;