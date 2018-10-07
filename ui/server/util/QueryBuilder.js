"use strict";

function QueryBuilder(start, end) {
  this.start = start;
  this.end = end;
  this.conditions = [];
  this.query = this.start;
}

QueryBuilder.prototype.addCondition = function (input) {
  this.conditions.push(input);
};

QueryBuilder.prototype.build = function () {
  var _this = this;

  var opt = this.conditions;
  opt.forEach(function (cond) {
    _this.query += cond;
  });
  this.query += this.end;
  var result = this.query;
  return result;
};

module.exports = QueryBuilder;