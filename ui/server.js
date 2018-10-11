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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.mjs":
/*!****************************!*\
  !*** ./src/client/App.mjs ***!
  \****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var Util_EB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Util/EB */ "./src/client/Util/EB.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Routes */ "./src/client/Routes.mjs");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo.png */ "./src/client/logo.png");
/* harmony import */ var _scss_logo_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scss/logo.scss */ "./src/client/scss/logo.scss");
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
      return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "logoBox"
      }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: _logo_png__WEBPACK_IMPORTED_MODULE_4__,
        alt: "Appreciate Logo"
      })), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Util_EB__WEBPACK_IMPORTED_MODULE_2__["default"], {
        comp: "Router in App.mjs"
      }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, _Routes__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (_ref) {
        var path = _ref.path,
            exact = _ref.exact,
            C = _ref.component,
            rest = _objectWithoutProperties(_ref, ["path", "exact", "component"]);

        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__, {
          key: path,
          path: path,
          exact: exact,
          render: function render(props) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(C, _extends({}, props, rest));
          }
        });
      })), "test")));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/client/Routes.mjs":
/*!*******************************!*\
  !*** ./src/client/Routes.mjs ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainmenu_endpoints_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainmenu/endpoints/Home */ "./src/client/mainmenu/endpoints/Home.js");
/* harmony import */ var _mainmenu_endpoints_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainmenu/endpoints/About */ "./src/client/mainmenu/endpoints/About.mjs");
/* harmony import */ var _mainmenu_endpoints_Consulting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainmenu/endpoints/Consulting */ "./src/client/mainmenu/endpoints/Consulting.mjs");
/* harmony import */ var _mainmenu_endpoints_SpecDev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainmenu/endpoints/SpecDev */ "./src/client/mainmenu/endpoints/SpecDev.mjs");




var routes = [{
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
/* harmony default export */ __webpack_exports__["default"] = (routes);

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

/***/ "./src/client/mainmenu/endpoints/About.mjs":
/*!*************************************************!*\
  !*** ./src/client/mainmenu/endpoints/About.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Write something about my business"));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/client/mainmenu/endpoints/Consulting.mjs":
/*!******************************************************!*\
  !*** ./src/client/mainmenu/endpoints/Consulting.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


var Consulting = function Consulting() {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "We will seek to understand you pain point, the part of your business processes that are ineffficient, expensive, or just a hassle, and we will seek to streamline and automate using software."));
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

/***/ "./src/client/mainmenu/endpoints/SpecDev.mjs":
/*!***************************************************!*\
  !*** ./src/client/mainmenu/endpoints/SpecDev.mjs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


var SpecDev = function SpecDev() {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Do you already know what software you need built; what it should do what is should look like? We can do that."), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "We have expertise in the following technologies:"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Vanilla JavaScript"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "React"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Node and Express")));
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

/***/ "./src/server.mjs":
/*!************************!*\
  !*** ./src/server.mjs ***!
  \************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/Routes */ "./src/client/Routes.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/App */ "./src/client/App.mjs");
/* harmony import */ var _server_controllers_InquiryCont__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./server/controllers/InquiryCont */ "./src/server/controllers/InquiryCont.mjs");









/* harmony default export */ __webpack_exports__["default"] = (function () {
  var app = express__WEBPACK_IMPORTED_MODULE_2__();
  app.use(express__WEBPACK_IMPORTED_MODULE_2__.static('public'));
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
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_3__.urlencoded({
    extended: false
  })); // Parse application/x-www-form-urlencoded

  app.use(body_parser__WEBPACK_IMPORTED_MODULE_3__.json()); // Parse application/json

  /*use sessions for user login
  app.set('trust proxy', 1) // trust first proxy
  app.use(session({
      store: new FileStore(),
      secret: uuid(),
      resave: false,
      saveUninitialized: false,
      maxAge: 60000,
      cookie:{secure: app.get('env') === 'production'}
  }));
  */
  //app.use('/', userCont);

  app.use('/', _server_controllers_InquiryCont__WEBPACK_IMPORTED_MODULE_7__["default"]);
  app.all('/*', function (req, res) {
    var activeRoute = _client_Routes__WEBPACK_IMPORTED_MODULE_4__["default"].find(function (Route) {
      return react_router_dom__WEBPACK_IMPORTED_MODULE_5__(req.url, Route);
    }) || {}; //check if route needs to fetch data

    var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) //if it doesn't call it good.
    : Promise.resolve();
    promise.then(function (data) {
      var AppString = react_dom_server__WEBPACK_IMPORTED_MODULE_0__.renderToString(react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__, {
        location: req.url,
        context: {}
      }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(_client_App__WEBPACK_IMPORTED_MODULE_6__["default"], {
        data: data
      })));
      res.render('index', {
        "App": AppString
      });
    }).catch(next);
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

/***/ "./src/server/controllers/InquiryCont.mjs":
/*!************************************************!*\
  !*** ./src/server/controllers/InquiryCont.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var _model_Inquiry_RequestConsult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../model/Inquiry/RequestConsult */ "./src/server/model/Inquiry/RequestConsult.mjs");


var routes = express__WEBPACK_IMPORTED_MODULE_0__.Router();
routes.post('/requestConsult', function (req, res) {
  console.log(req.body);
  var Request = new _model_Inquiry_RequestConsult__WEBPACK_IMPORTED_MODULE_1__["default"](req, res);
  Request.logRequest();
});
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/server/model/Inquiry/RequestConsult.mjs":
/*!*****************************************************!*\
  !*** ./src/server/model/Inquiry/RequestConsult.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ServerUtil_BaseClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ServerUtil/BaseClass */ "./src/server/ServerUtil/BaseClass.mjs");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var RequestConsult =
/*#__PURE__*/
function (_BaseClass) {
  _inherits(RequestConsult, _BaseClass);

  function RequestConsult(req, res) {
    var _this;

    _classCallCheck(this, RequestConsult);

    _this.inputs = req.body;
    _this.req = req;
    _this.res = res;
    return _possibleConstructorReturn(_this);
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