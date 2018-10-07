"use strict";

var Query = require('./Query');

var GenID = function GenID(table) {
  return new Promise(function (resolve, reject) {
    var NewID = new Query("SELECT nextval('" + table + "') AS id");
    var id = NewID.returnResult();
    id.then(function (val) {
      resolve(val);
    }).catch(function (er) {
      console.error(er);
      reject(er);
    });
  });
};

module.exports = GenID;