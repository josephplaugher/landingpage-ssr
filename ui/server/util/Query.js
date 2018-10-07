"use strict";

var db = require('./postgres.js');

var userConn = db.userConn;

function Query(prepare, values) {
  this.prepare = prepare;
  this.values = values;
  this.query = {
    "text": this.prepare,
    "values": this.values
  };
} //this query execution triggers a server response


Query.prototype.runQuery = function (res) {
  userConn.query(this.query).then(function (data) {
    return res.status(200).json({
      table: data.rows,
      userNotify: {}
    });
  }).catch(function (e) {
    return console.error(e.stack);
  });
};

Query.prototype.runInputQuery = function () {
  var _this = this;

  return new Promise(function (resolve) {
    userConn.query(_this.query).then(function (data) {
      resolve(data);
    }).catch(function (e) {
      //console.error('query with error: ', this.query, 'error: ', e.stack)
      resolve({
        error: e
      });
    });
  });
}; //this query execution does not trigger a server response
//rather it returns a value from the query


Query.prototype.returnResult = function () {
  var _this2 = this;

  return new Promise(function (resolve) {
    userConn.query(_this2.query).then(function (data) {
      //console.log('the query: ', this.query, 'result: ', data)
      resolve(data);
    }).catch(function (e) {
      //console.error('query with error: ', this.query, 'error: ', e.stack)
      resolve({
        error: e
      });
    });
  });
};

module.exports = Query;