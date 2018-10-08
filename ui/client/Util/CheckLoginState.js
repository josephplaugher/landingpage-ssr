"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Ajax = _interopRequireDefault(require("./Ajax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkLoginState = function checkLoginState() {
  return new Promise(function (resolve, reject) {
    _Ajax.default.get(process.env.BASE_URL + "/users/checkLoginState").then(function (res) {
      console.log('userdata: ', res.data.userData);

      if (typeof res.data.userData === 'undefined') {
        resolve('not logged in');
      } else {
        resolve(res.data.userData);
      }
    }).catch(function (e) {
      reject('error checking login state: ', e);
    });
  });
};

var _default = checkLoginState;
exports.default = _default;