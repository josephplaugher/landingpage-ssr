"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./client/App"));

require("./client/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('hydrate');

_reactDom.default.hydrate(_react.default.createElement(_App.default, null), document.getElementById('root'));