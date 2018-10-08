"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AutoFill = function AutoFill() {
  var _this = this;

  _classCallCheck(this, AutoFill);

  _defineProperty(this, "getRef", function (name) {
    return _this.ref[name];
  });

  this.ref = {
    "acctname": "acctno",
    "acctno": "acctname",
    "bankname": "bankno",
    "bankno": "bankname",
    "customer": "customerid",
    "customerid": "customer",
    "supplier": "supplierid",
    "suppilerid": "supplier"
  };
};

var _default = AutoFill;
exports.default = _default;