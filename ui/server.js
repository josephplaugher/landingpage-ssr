module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Util_EB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Util/EB */ "./src/client/Util/EB.js");
/* harmony import */ var _mainmenu_Request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainmenu/Request */ "./src/client/mainmenu/Request.js");
/* harmony import */ var _mainmenu_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainmenu/Nav */ "./src/client/mainmenu/Nav.js");
/* harmony import */ var _mainmenu_NavMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainmenu/NavMobile */ "./src/client/mainmenu/NavMobile.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Routes */ "./src/client/Routes.js");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logo.png */ "./src/client/logo.png");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_logo_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _logo_mobile_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logo_mobile.png */ "./src/client/logo_mobile.png");
/* harmony import */ var _logo_mobile_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_logo_mobile_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var scss_logo_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! scss/logo.scss */ "./src/client/scss/logo.scss");
/* harmony import */ var scss_logo_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(scss_logo_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! scss/main.scss */ "./src/client/scss/main.scss");
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(scss_main_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var scss_main_desktop_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! scss/main-desktop.scss */ "./src/client/scss/main-desktop.scss");
/* harmony import */ var scss_main_desktop_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(scss_main_desktop_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var scss_main_mobile_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! scss/main-mobile.scss */ "./src/client/scss/main-mobile.scss");
/* harmony import */ var scss_main_mobile_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(scss_main_mobile_scss__WEBPACK_IMPORTED_MODULE_12__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }















var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      viewport: 0
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var viewport = window.innerWidth;
      this.setState({
        viewport: viewport
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "container"
      }, this.state.viewport < 701 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "image-header-mobile"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _logo_mobile_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "Appreciate Logo"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_EB__WEBPACK_IMPORTED_MODULE_2__["default"], {
        comp: "Nave in App.js"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-mobile",
        id: "nav-container-mobile"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mainmenu_NavMobile__WEBPACK_IMPORTED_MODULE_5__["default"], null)))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "image-header-desktop"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _logo_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "Appreciate Logo"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_EB__WEBPACK_IMPORTED_MODULE_2__["default"], {
        comp: "Nave in App.js"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav",
        id: "nav-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mainmenu_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_EB__WEBPACK_IMPORTED_MODULE_2__["default"], {
        comp: "Router in App.js"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "content"
      }, _Routes__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (_ref) {
        var path = _ref.path,
            exact = _ref.exact,
            C = _ref.component,
            rest = _objectWithoutProperties(_ref, ["path", "exact", "component"]);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          key: path,
          path: path,
          exact: exact,
          render: function render(props) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C, _extends({}, props, rest));
          }
        });
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_EB__WEBPACK_IMPORTED_MODULE_2__["default"], {
        comp: "Request in App"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "request-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mainmenu_Request__WEBPACK_IMPORTED_MODULE_3__["default"], {
        formState: this.state.formState
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainmenu_endpoints_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainmenu/endpoints/Home */ "./src/client/mainmenu/endpoints/Home.js");
/* harmony import */ var _mainmenu_endpoints_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainmenu/endpoints/About */ "./src/client/mainmenu/endpoints/About.js");
/* harmony import */ var _mainmenu_endpoints_Consulting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainmenu/endpoints/Consulting */ "./src/client/mainmenu/endpoints/Consulting.js");
/* harmony import */ var _mainmenu_endpoints_SpecDev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainmenu/endpoints/SpecDev */ "./src/client/mainmenu/endpoints/SpecDev.js");
/* harmony import */ var _mainmenu_endpoints_Portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainmenu/endpoints/Portfolio */ "./src/client/mainmenu/endpoints/Portfolio.js");





var Routes = [{
  path: '/',
  //this is the url and the link button path
  exact: true,
  component: _mainmenu_endpoints_Home__WEBPACK_IMPORTED_MODULE_0__["default"],
  name: 'Home' //this is the link label

}, {
  path: '/about',
  component: _mainmenu_endpoints_About__WEBPACK_IMPORTED_MODULE_1__["default"],
  name: 'About'
}, {
  path: '/consulting',
  component: _mainmenu_endpoints_Consulting__WEBPACK_IMPORTED_MODULE_2__["default"],
  name: 'Consulting'
}, {
  path: '/specdev',
  component: _mainmenu_endpoints_SpecDev__WEBPACK_IMPORTED_MODULE_3__["default"],
  name: 'Spec Dev'
}, {
  path: '/portfolio',
  component: _mainmenu_endpoints_Portfolio__WEBPACK_IMPORTED_MODULE_4__["default"],
  name: 'Portfolio'
}];
/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ "./src/client/Util/EB.js":
/*!*******************************!*\
  !*** ./src/client/Util/EB.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var EB =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EB, _React$Component);

  function EB(props) {
    var _this;

    _classCallCheck(this, EB);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EB).call(this, props));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(EB, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({
        hasError: true
      });
      console.log('rendering error: ', error, info); // You can also log the error to an error reporting service
      //logErrorToMyService(error, info);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Something went wrong in the ", this.props.comp, " component");
      }

      return this.props.children;
    }
  }]);

  return EB;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EB);

/***/ }),

/***/ "./src/client/Util/LightBox.js":
/*!*************************************!*\
  !*** ./src/client/Util/LightBox.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scss_lightbox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scss/lightbox.scss */ "./src/client/scss/lightbox.scss");
/* harmony import */ var scss_lightbox_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scss_lightbox_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scss_form_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scss/form.scss */ "./src/client/scss/form.scss");
/* harmony import */ var scss_form_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scss_form_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var LightBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LightBox, _React$Component);

  function LightBox() {
    _classCallCheck(this, LightBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(LightBox).apply(this, arguments));
  }

  _createClass(LightBox, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "lightbox-foundation"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "lightbox-background"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "lightbox"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "close",
        onClick: this.props.close
      }, "x"), this.props.children, " ")));
    }
  }]);

  return LightBox;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LightBox);

/***/ }),

/***/ "./src/client/Util/SetUrl.js":
/*!***********************************!*\
  !*** ./src/client/Util/SetUrl.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SetUrl = function SetUrl() {
  //returns the correct url whether in dev or prod
  var url;

  if (true) {
    url = "http://localhost:3023";
  } else {}

  return url;
};

/* harmony default export */ __webpack_exports__["default"] = (SetUrl);

/***/ }),

/***/ "./src/client/logo.png":
/*!*****************************!*\
  !*** ./src/client/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "37264060f0c7a723213c1d6b3fdfaa6b.png";

/***/ }),

/***/ "./src/client/logo_mobile.png":
/*!************************************!*\
  !*** ./src/client/logo_mobile.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d548f7415e09d9c8c7d306c40641ec2d.png";

/***/ }),

/***/ "./src/client/mainmenu/Nav.js":
/*!************************************!*\
  !*** ./src/client/mainmenu/Nav.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Routes */ "./src/client/Routes.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nav).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var NavBar = _Routes__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (_ref) {
        var name = _ref.name,
            path = _ref.path;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "nav",
          key: path
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          activeStyle: {
            fontWeight: 'bold'
          },
          to: path
        }, name));
      });
      return NavBar;
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/client/mainmenu/NavMobile.js":
/*!******************************************!*\
  !*** ./src/client/mainmenu/NavMobile.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Routes */ "./src/client/Routes.js");
/* harmony import */ var menu_appco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! menu-appco */ "menu-appco");
/* harmony import */ var menu_appco__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(menu_appco__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nav).call(this, props));
    _this.state = {
      showMenu: false
    };
    _this.toggleMenu = _this.toggleMenu.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Nav, [{
    key: "toggleMenu",
    value: function toggleMenu() {
      console.log('toggle');

      if (this.state.showMenu === true) {
        this.setState({
          showMenu: false
        });
      } else {
        this.setState({
          showMenu: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var NavBar = _Routes__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (_ref) {
        var name = _ref.name,
            path = _ref.path;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "nav-mobile",
          key: path,
          onClick: _this2.toggleMenu
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          to: path
        }, name));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "menu-button"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(menu_appco__WEBPACK_IMPORTED_MODULE_3__["MenuButton"], {
        style: {
          bordercolor: '#2665C4'
        },
        barStyle: {
          backgroundColor: '#2665C4'
        },
        onClick: this.toggleMenu
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(menu_appco__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
        showMenu: this.state.showMenu,
        closeHandler: this.toggleMenu,
        style: {
          backgroundColor: '#2665C4',
          height: 'auto',
          width: '90%'
        },
        closeStyle: {
          color: 'white',
          fontSize: '25px'
        }
      }, NavBar));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/client/mainmenu/Request.js":
/*!****************************************!*\
  !*** ./src/client/mainmenu/Request.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reactform_appco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactform-appco */ "reactform-appco");
/* harmony import */ var reactform_appco__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactform_appco__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Util_LightBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Util/LightBox */ "./src/client/Util/LightBox.js");
/* harmony import */ var Util_EB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Util/EB */ "./src/client/Util/EB.js");
/* harmony import */ var Util_SetUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Util/SetUrl */ "./src/client/Util/SetUrl.js");
/* harmony import */ var _ValRules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ValRules */ "./src/client/mainmenu/ValRules.js");
/* harmony import */ var scss_form_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scss/form.scss */ "./src/client/scss/form.scss");
/* harmony import */ var scss_form_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(scss_form_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var scss_request_info_button_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scss/request-info-button.scss */ "./src/client/scss/request-info-button.scss");
/* harmony import */ var scss_request_info_button_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(scss_request_info_button_scss__WEBPACK_IMPORTED_MODULE_7__);
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










var Request =
/*#__PURE__*/
function (_FormClass) {
  _inherits(Request, _FormClass);

  function Request(props) {
    var _this;

    _classCallCheck(this, Request);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Request).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "response", function (res) {
      if (res.data.success) {
        _this.setState({
          userNotify: res.data.userNotify
        });
      } else {
        console.error('submit error: ', res.error);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeLightBox", function () {
      _this.setState({
        showForm: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openLightBox", function () {
      _this.setState({
        showForm: true
      });
    });

    _this.useLiveSearch = false;
    _this.route = Object(Util_SetUrl__WEBPACK_IMPORTED_MODULE_4__["default"])() + '/requestConsult';
    _this.valRules = _ValRules__WEBPACK_IMPORTED_MODULE_5__["default"];
    _this.state = {
      showForm: false,
      fname: '',
      email: '',
      formData: {
        fname: '',
        email: '',
        message: ''
      },
      userNotify: {
        success: '',
        fnam: '',
        email: '',
        message: ''
      }
    };
    _this.response = _this.response.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.closeLightBox = _this.closeLightBox.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.openLightBox = _this.openLightBox.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Request, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        id: "request-info-button",
        onClick: this.openLightBox
      }, "Request a free consultation"), this.state.showForm ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "lightbox-container",
        className: "lightbox-background"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Util_LightBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
        close: this.closeLightBox
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "formTitle"
      }, "Request Consultation"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.rfa_onSubmit
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactform_appco__WEBPACK_IMPORTED_MODULE_0__["Input"], {
        name: "fname",
        label: "First Name",
        value: this.state.fname,
        onChange: this.rfa_onChange,
        error: this.state.userNotify.fname
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactform_appco__WEBPACK_IMPORTED_MODULE_0__["Input"], {
        name: "email",
        label: "Email",
        value: this.state.email,
        onChange: this.rfa_onChange,
        error: this.state.userNotify.email
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactform_appco__WEBPACK_IMPORTED_MODULE_0__["TextArea"], {
        name: "message",
        label: "What brought you here?",
        rows: 5,
        cols: 25,
        value: this.state.message,
        onChange: this.rfa_onChange,
        error: this.state.userNotify.message
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "buttondiv"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactform_appco__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        id: "submit",
        value: "Request Consultation"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "userNotify-success"
      }, this.state.userNotify.success))) : null);
    }
  }]);

  return Request;
}(reactform_appco__WEBPACK_IMPORTED_MODULE_0__["FormClass"]);

/* harmony default export */ __webpack_exports__["default"] = (Request);

/***/ }),

/***/ "./src/client/mainmenu/ValRules.js":
/*!*****************************************!*\
  !*** ./src/client/mainmenu/ValRules.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ValRules = {
  settings: {
    mode: "development",
    log: {
      dev: function dev(data) {
        console.log(data);
      },
      prod: function prod(data) {
        return null;
      }
    }
  },
  rules: [{
    name: 'fname',
    required: true,
    alphanumeric: 'true',
    errorMsg: 'Your name is required'
  }, {
    name: 'email',
    required: true,
    email: true,
    errorMsg: 'Must provide a valid email address'
  }, {
    name: 'message',
    required: true,
    alphanumeric: true,
    errorMsg: 'Please tell us a little about your business needs'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (ValRules);

/***/ }),

/***/ "./src/client/mainmenu/endpoints/About.js":
/*!************************************************!*\
  !*** ./src/client/mainmenu/endpoints/About.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "headline"
  }, "About Appreciate Co"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "Founder Joseph Plaugher repeatedly experienced ineffective, slow, and tedius processes being utilized at his own place of work and many others. Knowing the power of software to automate business processes, which has allowed companies such as Amazon, Ebay, Google, and many others to drastically cut costs and become superpowers in their industry, Joseph wanted to bring this competitive advantage to small businesses who can't neccessarily afford their own technology team."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "That is precisely what we at Appreciate Corporation seek to do; help small companies become more effecient by harnessing the power of automation through software. Get in touch with us to start streamlining your business operations!"));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/client/mainmenu/endpoints/Consulting.js":
/*!*****************************************************!*\
  !*** ./src/client/mainmenu/endpoints/Consulting.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Consulting = function Consulting() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "headline"
  }, "Consulting"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "We will seek to understand your pain point, the part of your business process that is ineffficient, expensive, or just a hassle, and we will seek to streamline and automate using software."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "Sometimes a desktop application is appropriate if only a couple of people need access to the application and only when at work. If more than a couple of people need access or there is shared data involved, a web-based application is usually a great option. We can do either one!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Consulting);

/***/ }),

/***/ "./src/client/mainmenu/endpoints/Home.js":
/*!***********************************************!*\
  !*** ./src/client/mainmenu/endpoints/Home.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scss/main.scss */ "./src/client/scss/main.scss");
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scss_main_desktop_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scss/main-desktop.scss */ "./src/client/scss/main-desktop.scss");
/* harmony import */ var scss_main_desktop_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scss_main_desktop_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var scss_main_mobile_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scss/main-mobile.scss */ "./src/client/scss/main-mobile.scss");
/* harmony import */ var scss_main_mobile_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(scss_main_mobile_scss__WEBPACK_IMPORTED_MODULE_3__);





var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "headline"
  }, "We Solve Business Process Problems Through Software"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subheadline"
  }, "Improve Efficiency"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "You and your staff are probably doing a lot of things manually that can be automated. Which means you have inefficiencies in your workflow that you may not be aware of."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subheadline"
  }, "Cut Costs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "If you're not fully leveragng software, you are losing money. You can empower your staff to work more effeciently and accomplish more in less time."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subheadline"
  }, "Expand Without Increasing Labor Costs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "Wondering if you need to hire more staff to expand your business? Maybe you don't. If your staff's time was less consumed with routine, tedious tasks, there will be more time for effective and productive work. They will be happier, and your bottom line will benefit."));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/client/mainmenu/endpoints/Portfolio.js":
/*!****************************************************!*\
  !*** ./src/client/mainmenu/endpoints/Portfolio.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Portfolio = function Portfolio() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "headline"
  }, "Portfolio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "Below is a list of web applications we build from the ground up. Typically our projects utilize an Express server with the EJS template engine. Usually there is a single script tag to include the React application bundled with Webpack. If the project is very simple, such as the strong password generator which still utilizes Webpack for transpilation and bundling, there is no framework (i.e. React). It is comprised of a couple of event handlers and functions interacting directly with the DOM.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Some of our projects use traditional prototype-based \"classes\" on the server side, some use ES6 syntax including classes. Most of the time we do not transpile the server side, except when both Search Engine Optimization (SEO) and user interactivity are important, such as the website you are reading now. On this site, the client and server sides are transpiled from ES6 syntax and all markup is rendered on the server (until you click the navigation buttons) for SEO purposes.", ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subheadline"
  }, "Enterprise Applications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://erp.appco.tech"
  }, "Appreciate Enterprise Accounting"), ": A scalable, sophisticated double-entry accounting system.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies Used: React, JSON web token and cookie, Webpack and Babel, Express backend; CRUD operations in response to API calls from the client. PostgreSQL database.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://pay.appco.tech"
  }, "Integrated Payment Processing"), ": Using Stripe, this provides a customizable invoice payment system for businesses.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies Used: React, Webpack and Babel, Express; CRUD operations in response to API calls from the client. PostgreSQL database.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://files.appco.tech"
  }, "Enterprise File Server"), ": This is a work in progress but is functional. The intent is to functionally replace Google Drive.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies Used: React, JSON web token and cookie, Webpack and Babel, Express; CRUD operations in response to API calls from the client. PostgreSQL database."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subheadline"
  }, "Open Source Applications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://hash.appco.tech"
  }, "Hash Check Strong Password Generator.", ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, "GitHub"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies used: Raw JavaScript with Webpack and Babel, bcrypt password hashing and salting library. Express.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://blog.appco.tech"
  }, "Blog Site. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/josephplaugher/BlogSite"
  }, "GitHub"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies used: Combination raw JavaScript and React, with Webpack and Babel. Express; CRUD operations in response to API calls from the client. PostgreSQL database.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "On this project, upon first visit, the latest blog post will be displayed a long with a menu of all the other available posts. This is all rendered server side for SEO purposes. Upon selected other blog posts, they are placed into the ready pane asynchronously. This is all done with raw JavaScript. The user authenication system (which allows users to create an account so they can leave comments) and the comments area itself are both written in React.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://blogadmin.appco.tech"
  }, "Blog Administration Utility.", ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/josephplaugher/blog-admin-utility"
  }, "GitHub"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies Used: React, JSON web token and cookie, Webpack and Babel, Express backend; CRUD operations in response to API calls from the client. PostgreSQL database.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Pantry"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "***Write something about Pantry***", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies Used: React, JSON web token and cookie, Webpack and Babel, Express backend; CRUD operations in response to API calls from the client. PostgreSQL database.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, "GitHub")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subheadline"
  }, "NPM Modules"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "ReactForm-AppCo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "A powerful, flexible forms and inputs module for React. Includes \"live search\" that can be used similarly to a select or dropdown menu, except the list of options change with user input. The Form class does not render anything to the UI. It simply attaches logic to your existing form to automate processing and submission using React state and Ajax. There is an optional Inputs componet which does render an html input element but it is not required for use with the Form class.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies used: React, Webpack and Babel.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/josephplaugher/ReactForm-AppCo"
  }, "GitHub"), ' ', "|", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.npmjs.com/package/reactform-appco"
  }, "NPM"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "LightBox-AppCo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "A fully stylable and customizable \"popup\" window component for React.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies used: React, Webpack and Babel. A module for making your markup draggable.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/josephplaugher/lightbox-appco"
  }, "GitHub"), ' ', "|", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.npmjs.com/package/lightbox-appco"
  }, "NPM"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Menu-AppCo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, ' ', "A closeable menu component for React.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies used: React, Webpack and Babel. A module for making your markup draggable.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/josephplaugher/Menu-AppCo"
  }, "GitHub"), ' ', "| ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.npmjs.com/package/menu-appco"
  }, "NPM")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subheadline"
  }, "Other Skills."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I have plenty of experience using various versions of Linux and Windows, as well as Mac OSX. My operating system of choice is CentOS 7 which I use on my laptop and my personal server at home.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I am an intermediate user of the Linux Command Line interface and am expanding my skills in its use everyday", ' ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "As noted above, I use PostgreSQL for all my database needs. I write intermediate-level SQL to manipulate data.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Currently all my web applications are hosted on AWS within a EC2 instance running Red Hat Enterprise Linux. However, I also maintain my own physical server running CentOS 7.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I know PHP and jQuery and I am prepared to use them."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./src/client/mainmenu/endpoints/SpecDev.js":
/*!**************************************************!*\
  !*** ./src/client/mainmenu/endpoints/SpecDev.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SpecDev = function SpecDev() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "headline"
  }, "Specification Development"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "Do you already know what software you need built; what it should do and what it should look like? We can do that."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "We have expertise in the following technologies:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, "Vanilla JavaScript - for simple applications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, "React - for dynamic, interactive, userfriendly applications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, "Node - from simple to complex server side business logic"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, "Electron - for building desktop applications")));
};

/* harmony default export */ __webpack_exports__["default"] = (SpecDev);

/***/ }),

/***/ "./src/client/scss/form.scss":
/*!***********************************!*\
  !*** ./src/client/scss/form.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/client/scss/lightbox.scss":
/*!***************************************!*\
  !*** ./src/client/scss/lightbox.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/client/scss/logo.scss":
/*!***********************************!*\
  !*** ./src/client/scss/logo.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/client/scss/main-desktop.scss":
/*!*******************************************!*\
  !*** ./src/client/scss/main-desktop.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/client/scss/main-mobile.scss":
/*!******************************************!*\
  !*** ./src/client/scss/main-mobile.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/client/scss/main.scss":
/*!***********************************!*\
  !*** ./src/client/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/client/scss/request-info-button.scss":
/*!**************************************************!*\
  !*** ./src/client/scss/request-info-button.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/Routes */ "./src/client/Routes.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/App */ "./src/client/App.js");
/* harmony import */ var ServerUtil_SetUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ServerUtil/SetUrl */ "./src/server/ServerUtil/SetUrl.js");
/* harmony import */ var _server_controllers_InquiryCont__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./server/controllers/InquiryCont */ "./src/server/controllers/InquiryCont.js");









/* harmony default export */ __webpack_exports__["default"] = (function () {
  var app = express__WEBPACK_IMPORTED_MODULE_2___default()();
  app.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static('public'));
  app.set('view engine', 'ejs');
  app.set('views', './src/views');
  var port = "3023";
  app.listen(port, function () {
    console.log('server started in ' + "development" + ' mode on port ' + port);
  });
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', Object(ServerUtil_SetUrl__WEBPACK_IMPORTED_MODULE_7__["default"])());
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, authorization');
    res.set('X-Powered-By', 'Appreciate Corporation');
    next();
  });
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({
    extended: false
  })); // Parse application/x-www-form-urlencoded

  app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json()); // Parse application/json

  app.use('/', _server_controllers_InquiryCont__WEBPACK_IMPORTED_MODULE_8__["default"]);
  app.get('*', function (req, res, next) {
    var AppString = react_dom_server__WEBPACK_IMPORTED_MODULE_0___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"], {
      location: req.url,
      context: {
        data: 'context'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
    res.render('index', {
      App: AppString
    });
  });
});

/***/ }),

/***/ "./src/server/ServerUtil/BaseClass.mjs":
/*!*********************************************!*\
  !*** ./src/server/ServerUtil/BaseClass.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BaseClass = function BaseClass() {
  var _this = this;

  _classCallCheck(this, BaseClass);

  _defineProperty(this, "setError", function (error) {
    _this.error.push(error);
  });

  _defineProperty(this, "getError", function () {
    return _this.error;
  });

  _defineProperty(this, "respond", function (res, data, success, userNotify) {
    res.status(200).json({
      data: data,
      success: success,
      userNotify: userNotify
    });
  });

  this.error = [];
  this.response;
};

/* harmony default export */ __webpack_exports__["default"] = (BaseClass);

/***/ }),

/***/ "./src/server/ServerUtil/SetUrl.js":
/*!*****************************************!*\
  !*** ./src/server/ServerUtil/SetUrl.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SetUrl = function SetUrl() {
  //returns the correct url whether in dev or prod
  var url;

  if (true) {
    url = "http://localhost:3023";
  } else {}

  return url;
};

/* harmony default export */ __webpack_exports__["default"] = (SetUrl);

/***/ }),

/***/ "./src/server/ServerUtil/postgres.js":
/*!*******************************************!*\
  !*** ./src/server/ServerUtil/postgres.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _require = __webpack_require__(/*! pg */ "pg"),
    Pool = _require.Pool;

var db_host;

if (false) {} else {
  db_host = "127.0.0.1";
}

var dbConn = new Pool({
  user: "postgres",
  host: db_host,
  database: "appco",
  password: "tesla1985",
  port: "5432"
});
dbConn.connect().catch(function (error) {
  console.log('db conn error: ', error);
});
/* harmony default export */ __webpack_exports__["default"] = (dbConn);

/***/ }),

/***/ "./src/server/controllers/InquiryCont.js":
/*!***********************************************!*\
  !*** ./src/server/controllers/InquiryCont.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_Inquiry_RequestConsult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../model/Inquiry/RequestConsult */ "./src/server/model/Inquiry/RequestConsult.js");


var routes = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
routes.post('/requestConsult', function (req, res) {
  console.log(req.body);
  var Request = new _model_Inquiry_RequestConsult__WEBPACK_IMPORTED_MODULE_1__["default"](req, res);
  Request.logRequest();
});
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/server/model/Inquiry/RequestConsult.js":
/*!****************************************************!*\
  !*** ./src/server/model/Inquiry/RequestConsult.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ServerUtil_BaseClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ServerUtil/BaseClass */ "./src/server/ServerUtil/BaseClass.mjs");
/* harmony import */ var ServerUtil_postgres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ServerUtil/postgres */ "./src/server/ServerUtil/postgres.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var RequestConsult =
/*#__PURE__*/
function (_BaseClass) {
  _inherits(RequestConsult, _BaseClass);

  function RequestConsult(req, res) {
    var _this;

    _classCallCheck(this, RequestConsult);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RequestConsult).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "logRequest", function () {
      console.log('logging consultation request: ', _this.inputs);
      var r = _this.req.body;
      var query = {
        text: "INSERT INTO clients\n                (fname, email, lead_source) \n                VALUES ($1,$2)",
        values: [r.fname, r.email, r.message]
      };
      ServerUtil_postgres__WEBPACK_IMPORTED_MODULE_1__["default"].query(query).then(function () {
        _this.emailRequester();
      }).catch(function (e) {
        return console.error(e.stack);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "emailRequester", function () {
      console.log('email requester');

      _this.respond(_this.res, {
        message: 'emailed requester'
      }, true, {
        success: "Thank you, we'll be in touch"
      });
    });

    _this.inputs = req.body;
    _this.req = req;
    _this.res = res;
    return _this;
  }

  return RequestConsult;
}(ServerUtil_BaseClass__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (RequestConsult);

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "menu-appco":
/*!*****************************!*\
  !*** external "menu-appco" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("menu-appco");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pg");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "reactform-appco":
/*!**********************************!*\
  !*** external "reactform-appco" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactform-appco");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map