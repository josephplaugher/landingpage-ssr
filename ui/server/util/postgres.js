"use strict";

var _require = require('pg'),
    Pool = _require.Pool;

var userConn = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.HOST,
  database: '1000',
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});
userConn.connect();
var loginConn = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});
loginConn.connect();
module.exports = {
  userConn: userConn,
  loginConn: loginConn
};