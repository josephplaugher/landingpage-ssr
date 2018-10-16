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
/* harmony import */ var _mainmenu_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainmenu/Nav */ "./src/client/mainmenu/Nav.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Routes */ "./src/client/Routes.js");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo.png */ "./src/client/logo.png");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_logo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scss_logo_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scss/logo.scss */ "./src/client/scss/logo.scss");
/* harmony import */ var _scss_logo_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_logo_scss__WEBPACK_IMPORTED_MODULE_6__);
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
    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "logoBox"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _logo_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "Appreciate Logo"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_EB__WEBPACK_IMPORTED_MODULE_2__["default"], {
        comp: "Nave in App.js"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mainmenu_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
        switch: "something"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_EB__WEBPACK_IMPORTED_MODULE_2__["default"], {
        comp: "Router in App.js"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, _Routes__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (_ref) {
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
      })))));
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




var Routes = [{
  path: '/',
  exact: true,
  component: _mainmenu_endpoints_Home__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: '/about',
  component: _mainmenu_endpoints_About__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  path: '/consulting',
  component: _mainmenu_endpoints_Consulting__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  path: '/specdev',
  component: _mainmenu_endpoints_SpecDev__WEBPACK_IMPORTED_MODULE_3__["default"]
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

/***/ "./src/client/logo.png":
/*!*****************************!*\
  !*** ./src/client/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1621673115cf4327f3e3248a25246a20.png";

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 //import './../scss/nav.scss'

var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nav).call(this, props));
    _this.state = {};
    _this.buttons = [{
      name: 'Home',
      param: '/'
    }, {
      name: 'About',
      param: '/about'
    }, {
      name: 'Consulting',
      param: '/consulting'
    }, {
      name: 'Spec Dev',
      param: '/specdev'
    }];
    return _this;
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var NavBar = this.buttons.map(function (_ref) {
        var name = _ref.name,
            param = _ref.param;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "nav",
          key: param
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          activeStyle: {
            fontWeight: 'bold'
          },
          to: param
        }, name));
      });
      return NavBar
      /*
      <div id="nav-container">
          <NavLink activeStyle={{ fontWeight: 'bold' }} to={`/${param}`}></NavLink>
          <p className="nav" onClick={(e) => this.props.switch('home', e)} >Home</p>
          <p className="nav" onClick={(e) => this.props.switch('about', e)} >About</p>
          <p className="nav" onClick={(e) => this.props.switch('consulting', e)} >Consulting</p>
          <p className="nav" onClick={(e) => this.props.switch('specdev', e)} >Spec Development</p>
      </div>
      */
      ;
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Write something about my business"));
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We will seek to understand you pain point, the part of your business processes that are ineffficient, expensive, or just a hassle, and we will seek to streamline and automate using software."));
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scss/main.scss */ "./src/client/scss/main.scss");
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scss_main_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));
    _this.state = {
      formState: {},
      error: null
    };
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "home-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        id: "headline"
      }, "Solving Business Process Problems Through Software"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        id: "subheadline"
      }, "You and your staff are probably doing a lot of things manually that can be automated.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Which means you have inefficiencies in your workflow that you are not aware of.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "If you're not fully leveragng software, you are losing money. Let us help."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "content"
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Do you already know what software you need built; what it should do what is should look like? We can do that."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We have expertise in the following technologies:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Vanilla JavaScript"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "React"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Node and Express")));
};

/* harmony default export */ __webpack_exports__["default"] = (SpecDev);

/***/ }),

/***/ "./src/client/scss/logo.scss":
/*!***********************************!*\
  !*** ./src/client/scss/logo.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/client/scss/main.scss":
/*!***********************************!*\
  !*** ./src/client/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



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






 //import InquiryCont from './server/controllers/InquiryCont'

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var app = express__WEBPACK_IMPORTED_MODULE_2___default()();
  app.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static('public'));
  app.set('view engine', 'ejs');
  app.set('views', './src/views');
  var port = "3011";
  app.listen(port, function () {
    console.log('server started in ' + "development" + ' mode on port ' + port);
  });
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, authorization");
    res.set("X-Powered-By", "Appreciate Corporation");
    next();
  });
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({
    extended: false
  })); // Parse application/x-www-form-urlencoded

  app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json()); // Parse application/json
  //app.use('/', InquiryCont);

  app.get('*', function (req, res, next) {
    //console.log('routes', Routes)
    //const activeRoute = Routes[1]
    var activeRoute = _client_Routes__WEBPACK_IMPORTED_MODULE_4__["default"].find(function (Route) {
      return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["matchPath"])(req.url, Route);
    });
    console.log('match', activeRoute); //check if route needs to fetch data

    /*
    const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    //if it doesn't call it good.
    : Promise.resolve()
     promise.then((data) => {
      const AppString = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={{}}>
          <App />
        </StaticRouter>  
        );
      res.render('index',{"App": AppString});
    }).catch(next)
    */

    var AppString = react_dom_server__WEBPACK_IMPORTED_MODULE_0___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"], {
      location: req.url,
      context: {
        data: 'context'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
    res.render('index', {
      "App": AppString
    });
  });
});

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

/***/ })

/******/ });
//# sourceMappingURL=server.js.map