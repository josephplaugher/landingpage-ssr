"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Ajax = _interopRequireDefault(require("./Ajax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LiveSearch = function LiveSearch() {
  var _this = this;

  _classCallCheck(this, LiveSearch);

  _defineProperty(this, "getLSA", function () {
    return _this.lsa;
  });

  _defineProperty(this, "search", function (name, value) {
    return new Promise(function (resolve, reject) {
      _Ajax.default.get("http://localhost:3004/LiveSearch/" + name + "." + value + "/").then(function (res) {
        resolve(res);
        reject(res.data.error);
      });
    });
  });

  //live search array for locating these values for the form
  this.lsa = ['acctname', 'acctno', 'bankname', 'bankno', 'customer', 'customerid,supplier', 'supplierid', 'prop-id', 'prop-ein', 'prop-entityname', 'prop-shortname', 'prop-type', 'prop-street', 'prop-city', 'prop-state', 'prop-zip'];
};

var _default = LiveSearch;
exports.default = _default;