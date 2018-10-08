"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var ReactForm = _interopRequireWildcard(require("reactform-appco"));

var _react = _interopRequireDefault(require("react"));

var _EB = _interopRequireDefault(require("Util/EB"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//import 'css/userNotify.css'
var Form = ReactForm.Form;
var Input = ReactForm.Input;
var Button = ReactForm.Button;

var SignIn =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SignIn, _React$Component);

  function SignIn(props) {
    var _this;

    _classCallCheck(this, SignIn);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SignIn).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "response", function (res) {
      if (typeof res.userData !== 'undefined') {
        _this.setState({
          userNotify: res.userNotify,
          userData: res.userData,
          isLoggedIn: true
        });
      }

      if (res.error !== 'undefined') {
        console.error('submit error: ', res.error);
      }
    });

    _this.state = {};
    _this.response = _this.response.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SignIn, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        id: "sign-in"
      }, _react.default.createElement("div", {
        id: "logoBox"
      }, _react.default.createElement("img", {
        src: require('./AppreciateLogo.png'),
        alt: "Appreciate Logo"
      })), _react.default.createElement(Form, {
        formTitle: "Sign In",
        action: "http://localhost:3004/users/login",
        response: this.response
      }, _react.default.createElement(Input, {
        name: "email",
        label: "Email"
      }), _react.default.createElement("br", null), _react.default.createElement(Input, {
        name: "password",
        label: "Password"
      }), _react.default.createElement("div", {
        className: "buttondiv"
      }, _react.default.createElement(Button, {
        id: "submit",
        value: "Sign In"
      }))));
    }
  }]);

  return SignIn;
}(_react.default.Component);

var _default = SignIn;
exports.default = _default;