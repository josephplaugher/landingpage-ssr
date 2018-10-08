"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = function get(url) {
  var request = (0, _axios.default)({
    method: 'get',
    url: url,
    responseType: 'JSON'
  });
  request.catch(function (error) {
    return console.log('ajax error: ' + error);
  });
  return request;
};

var post = function post(url, formData) {
  var request = (0, _axios.default)({
    url: url,
    method: 'post',
    data: formData,
    config: {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    },
    responseType: 'json'
  });
  request.catch(function (error) {
    return console.log('ajax error: ' + error);
  });
  return request;
};

var _default = {
  get: get,
  post: post
};
exports.default = _default;