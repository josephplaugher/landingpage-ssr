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
/* harmony import */ var _Logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Logo.png */ "./src/client/Logo.png");
/* harmony import */ var _Logo_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Logo_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! scss/main.scss */ "./src/client/scss/main.scss");
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(scss_main_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var scss_main_desktop_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! scss/main-desktop.scss */ "./src/client/scss/main-desktop.scss");
/* harmony import */ var scss_main_desktop_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(scss_main_desktop_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var scss_main_mobile_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! scss/main-mobile.scss */ "./src/client/scss/main-mobile.scss");
/* harmony import */ var scss_main_mobile_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(scss_main_mobile_scss__WEBPACK_IMPORTED_MODULE_10__);
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
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "image-header-mobile"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _Logo_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "Appreciate Logo",
        id: "image-mobile"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_EB__WEBPACK_IMPORTED_MODULE_2__["default"], {
        comp: "Nave in App.js"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-mobile",
        id: "nav-container-mobile"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mainmenu_NavMobile__WEBPACK_IMPORTED_MODULE_5__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "image-header-desktop"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _Logo_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "Appreciate Logo",
        id: "image-desktop"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_EB__WEBPACK_IMPORTED_MODULE_2__["default"], {
        comp: "Nave in App.js"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "nav-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mainmenu_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_EB__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mainmenu_Request__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/client/Logo.png":
/*!*****************************!*\
  !*** ./src/client/Logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABpCAYAAAAUVXWpAAABg2lDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQh78kBkUjiWhhYRHER5OIRgjaCEYkCkEkRvDVJGceQh7HXYKIrWAbUBBtfBX6F2grWAuCoghiY2OtaKPhnDNCgphZZufb3+4Mu7NgjaSVjF7XD5lsXgsHA+65+QV3/TN2mnHRQm9U0dXR6ekQNe3jDosZb7xmrdrn/rWm5biugKVBeERRtbzwhHBoNa+avC3cpqSiy8Knwh5NLih8a+qxMr+YnCzzl8laJDwGVpewO1nFsSpWUlpGWF5OVyZdUH7vY77EEc/OzkjsFO9AJ0yQAG4mGWcMPwMMy+zHi48+WVEjv/8nf4qc5Coyq6yhsUKSFHk8ohakelxiQvS4jDRrZv//9lVPDPrK1R0BsD8Zxls31G9BqWgYn4eGUToC2yNcZCv5uQMYehe9WNG69sG5AWeXFS22A+eb0P6gRrXoj2QTtyYS8HoCzfPQeg2Ni+We/e5zfA+RdfmqK9jdgx4571z6BjcHZ9AkZl9yAAAACXBIWXMAAAsTAAALEwEAmpwYAAAgAElEQVR4nO2dd9wcVbnHv2mE3jtEgyBdICydS9kIJBACoYV3gQBHuIDIxUEFrwh3WRBE6kEQVDAjICy9hRLqoohSshQBAaWF3gWUnnL/eGbY2T6zO7szSZ7v57Of992ZM+ecbfM75SmgKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIrSC8q5ZSnn5ku6G4oyrzM06Q4oSlvKuUWBrYFve48VgOUT7ZOiKCogSgop5+YHtgBGI4KxMTAkUOJKMsWZSXRNUZQKKiBK8pRzQ4EMIhajgS2B+VtccXs/uqUoSmtUQJT+U84NAtahsiS1DbBohBru7EW3FEWJhgqI0h/KuVWoCMZoYNkOa3qKTPHV2PqlKErHqIAovaGcWx7IUhGNkTHVfEdM9SiK0iUqIEo8lHOLAdtS2fhep0ct6f6HoqQEFRClM8q5BZDNbl8wNgIG97jVz4H7etyGoighUQFRwiGWUhtT2cPYAhje5178iUzxkz63qShKE1RAlLDsClxF72cZrdD9D0VJEUneDJQ5iUzxWmASMCvBXqiAKEqKUAFRwpMpXg7sTzIi8ibwRALtKorSBBUQJRqZ4mXAAfRfRO4gU5zd5zYVRWmBCogSnUzxD/RfRNR8V1FShgqI0hkVEenXrOCuPrWjKEpIVECUzumfiDxCpvh2j9tQFCUiKiBKd2SKlwIH9rgVtb5SlBSifiDtyJcMvb9BdsMs4FgK2b8m2IdVely/7n8oSgpRAWlFvnQI8GtgUNJdacJs4PDExEPCsp8IHNfDVj4G/tLD+hVF6RAVkGbkS98FfkW6xeMQCtmLEmldxOPnwI973FKJTPGLHrehKEoHqIA0Il/6HnBe0t1owSzgYApZN5HWRTxOB37Yh9Z0/0NRUooKSC350pHAOUl3owWzAEMhe0kirYt4nA18v08t6v6HoqQUtcIKki8dRbrFYyawf514GLt6X1ov5wYjM7N+icd04J99aktRlIiogPjkSz8Czkq6Gy2YAexLIXtZ1VFj9wWextgf9LR1EY8LgMN72k41t2v4EkVJLyogAPnSj5E1/bQyA8hRyF5ZddTYScAlyOd4Jsb2Zk+inBsCXAgc0pP6m6P7H4qSYlRA8qVjgVOT7kYLvgQmUsheU3XU2CHAd6n+DM/A2B/F2rqIx2TgO7HW255ZwN19blNRlAjM2wKSLx0PnJx0N1rwBbAnhez1dWdcZyawI1DrA3I6xh4dS+uShfASJIR7v3mQTPGDBNpVFCUk866A5EsnIE5waeVzYHcK2ZualnCdD4ExwP01Z07D2O78M8q5YcBlwD5d1VNPvRg2Rq2vFCXlzJsCki+dCOST7kYLPgMmUMje0rak6/wbGAv8qebMqRj7vx21Xs7NBxSBiR1d35xjyBR3J9xeiu5/KErKSauXde/Il04Gjk26Gy34FNiVQvbOSFcZuxBwM7BtzZljcZ2fh65HxOMqJAd6nPyATPHsQDuHAL9pUvYDYBkyxRmRWjB2KLAgMAPX+aTDfipJYexgYC1gY8RH7SXgReBlXOfLBPs1HBgOfIbrhI+KYOx8wKbAO8hrCP+dNHZx4GvAMFynHKm/fWTeEpB86VR6H3qjGz4BxlPI3tPR1cYuCEwBRtec+Smuc0rb68u54cA1wM4dtd+cI8kUz23QXjMRuZZMcc/IrRibB04A3gJWxnWiCtCK1C8H1jIbeA94BXjZ+/s4rtM8X4mxExDny1bMRNL2+vW+DNyH6/ytRb2nALk29X4OvObV6z9uwXVea3mVsXsBp7Wpuxmzke9csW1JMQY5ChgHrI+87unAqsA3gfkQg4rXgNeBB3Adp0E96yADqFbcjescHPpVVOq+E9gOuBHXmRDhuu2pnkm/B/w7xJVLAot6/1+L61R+C8ZeDWwUug/VfAJs5q1axMK844meL50OxGuhFC8fA+MoZP/YcQ2u8wnGjgduALYPnDkZYwfhOs0NBsq5BYDrkOWwODmcTPGChmcyxd96nu2/rjnT6f7HgPd3OcTAYErE698EDkWMBvYNHP8EmIDc5GciP+61gS3wnSqNfRTZU7sR16n1XbkTON6r+78Cxx/0js9AbpLLAet6fd8ImI2xNwEn4jqPNOjvucC7iG/OqoHjFwFXen2dDYwE1kFyt4wAPsfYycCpuM7LTd6LKcjNfHvgpMDx56m3yBsGbA7sAGzlHdsaWQZtjgh20StrgXFVo3SZURqv/RHeY22M/TGu83lNbc8AewCbAGciM9Hga7kQeKhlfxr3cTkg6z0bh7HL4jphc9Ns5/19FPmOPxo4dw+wsPf/TcDPAudWRBx2V/bKBTkSGIWEEQoOFM9FBn9BlkY+v3HIewewBjAtZP/bMm/MQPKls5BRTlr5D7AjheyfY6nN2AWQzeoxNWeOx3V+VldeTHVvo1p0umU2cCiZ4oVtS5ZzhyFOij4jyRSnR2rN2A2o/oFeh+vsEamO6voeB9bznn2E6yzWpNxOwKXIqBHgLFynsT+OscsgI+lh3pGbcZ3xDcoNRr6vp1P5je6G69zQpN7xyE3I5xhcp96vydhFkEgLxjvyMbAhrvOPhvVWrnsU2MB7di+uk21R9leIoE3FdXZsUW4M8r4tBezXcrYi/Z6KCDbAzrhO8/1BYy3V0RKWxHX+1bR8K4w9Ark5+/wA12k3m/SvLQPLAGvgOp/WnPsA8L9Tk3Gdg2rOnwYcDayJ6zzboO4NgeDS1v64zqVN+rGMV3YEsBeuUys0HTP3b6LnS+eQbvH4CBgTm3gA3pd1AnBrzZmTMPb4uvKZ4kzkBxoXs4GDQomHtP9rKh7uz0YWD2EA8ZnxGY+xS3dQj0+tUUJjXOdWqme2R2HsDk3KvgM8HaLOWbjOmcDFgaMXeSP2bvr6b8SA4UnvyEJA0Vurb8XHoeoXHGQZ8OtNSxi7NrLctAxwZdulLun3LoAvdO2WkT6sef5Rm/KtqP1emWYFqzB2KUR0j6kTj3B8CrzWUDyE8J+JfO92R5Yzm38uHTD3Cki+NIh86TxkypdWPgR2oJCNP9+F63yGfGlql3FO9PYKqskUzyKe6LqzgAPIFKNFCpZlru/R+fLV3sj+h88wqpehesnvkb0FkBlDXAOW4NLRUsgSVHfIvlBwdrIhsE3X9Vbq/xI4iMrNvhFnIcvnswnrh+U67wGTvGe7eLO03mLsCGAzoBA4+i2MzYS4el3gGlznig5bfxH4Q4fX1uM605D93yiDgbbMnQKSLw0CzkduSGnlX8B2FLIP9qwFWSfeE7ix5swJGHtCXXkRkW72iWYB+3lpbqOTKZ4P/DTydcZujtxgzwYeCJ7pqB9RkT2PJwNH1o2p3heo3nSNp97qvoLsj8SH6zzbdLPZ2J2pLK1OwXWeilDvQ8h3eVkqy1m9ZACZTf0S2Qfzaf+9cp0/4jp7d9yy6/we1+nMDL95nefgOrX7jV0x9wmIiMdvgMOS7koL3kfEI7bNrKaI2eFeyAZ5kHwTETkTWXuNykxggEyxveVNKzLF/3Rw1QBwk7dUEIxUvD7GjuqqP+EJ3mAWibHezwL/L9q0VDRqzUmXiKne1ojF1ZmBI51k0vwRMsiIZmHXGQNA0VtCCzrA7uOZ9s7zzF0Cki8NRqwt/jvprrTgXWA0hWwjq5reIMsKA8DVNWfyGFvA2GpjikzxDOCYCC3MACaSKdbW33tkKWMvwF8quAJZ6/2qRJ96skbg/3iWJI1dAtkn8GlnYhyWtWqePxZTve1Y3Xv4RN/rcp3ncJ1TcJ0H2hfuAmO/iRhR+BvOwYHJEsTvJzVHMvcIiIjH75D117TyDiIej/e9ZRGRfajcaH3+D2gkIqcTTkS+BPYkU6yd4fSLbYD58fdOxNom6A+wT4hN4u6QtfLgjbF9BIFwbBf4P05Dh6Cp9qvUm4p2hrFDMPa0Fu/32jXPm5kQp4EBxG/kXe/5XYgFnc+Bfe9Rpxi7Kcb2JJ7d3CEgIh4u6f5Q3wKyFLJPJNYD2UCdhMS4CnI8srneSERaOV5+AexGpli7x9JPBhCT3aClTNB6aSmg3lQ2Xn6NOLyBjFTP77pGYxel2vnwMFyn+5mCsdtSmaHPAiZ5MdXiYByy/BlWQDqxtusXAwQHW64zi+rfzQ4trOLSxrHIZxM7c74jYb40BLlh9MviphPeQGYezyTdEVxnBsYegJ/dsMJxwGCMPa7KES5TPM1z9qsNef85MIFMMU7z32gYOwxxHqvdrLwNme35yz8GuLYH7S+NrOnv5B0pAgc1cCSMWu+6wG+BlZD3+Thc56Iu6xyMmPCegliKvQR8B9e5N2JNwzF25Zpj8yOmte2MVmoF5K2IbfcHY9dDHDNrA39eTGVWPgT5/aQlFcQSDT6XryMDxnH04vvPnC4gIh6X0j6cQ5K8jsw8Wjtr9RPXmYmx30GWL1YLnFkN2BKo9knJFH/hiYgfU+szYDyZYvPwHf1he2QJrVR1VETycirOZGMxdgVc542uW5SN4FHI8tLRyHr4dcDPcJ1HW13apt4FEW/uXZE8L18i3tmn4zqvd1HvKsj79N+Id/vbiBnvibhOJwYLm1MxWY7KyJrnyyC/j7QxgDhCVs/MXOfvnnOgb8ZrSI+AnEMC6bjnXAHJl4YiU8q4I8bGyauIeDyXdEfqkHwi4U1mM8VTKedAlrt2JlMstbmiHwwgtvazGpy7hIqADEFGYp3GdhqOsWcg5q5bIlZMD3j13RzJFLWa1TH2XOSGlEGWdB7w+n1NhJAZtYz2NoFHUwlxci3y2d3pffadci/1sdbmRxz9jqXivd+IVxC/Cp8RpFNA9qb5b+MSKgKyOsZugevE78cVnf2p9xv5OrIy83+9anTOFBARjyLi45BWXkbE44WkOxIbIiKXkSl2OgKND2P9ZZPG4TJc5xGMfZKK78SBdC4gg5ClpIuB7+I6L3VYTy3zITOCk5Egge/FVO9CiMgF42O9ievEs9xYv0T3KXAlxr5P6zD8tV74I5B4YOnB2E2QmGTN8vBcDpxBJRzNgcRlddct9Z/LS0gcvG/Ro7BVc56A5EvDkEBxuyXdlRa8hIjHS31vWeJaLdy2XHRmkin+JxXiIYxD/C3+F2Ob7TkE34e1MHZTXKeTG9ZnuE50B8f2PInrnNS+WGSm4DqneyH+/eizh2Ps9bhOL9ME34WEMqkNdOjz95rnIxqWSpYcYhxyBcY2K/MpFQHZG2OdlKcPOBH4Ri8qnrMEJF/qVa6KOHkBEY/+myiWcwsjJqRbx1zz58hmdVzmqXEwgJjrtspweDPwKyrfc0PaRry95UgkH4U/AnUxdl1cp5vYUM2REXCrdfjaGUjtpnqyiKHBRCQ0Ta23fpCnAN9LfFEkZFB8YUfixnX+Tr14x8KcIyAiHtcSf66KOHkOEY9X+95yObcIYn20Zcw1S3bETDE9KWaNXRiZgeyA67QOQmnsLlRMGAcw9qgOg9vNebjOpxi7N/Awsqw1gupovP3mGcSXYiXv+URv9B4tPpMYHAwD/tPlfk4tWwGLI1Grm/dJrP8ORsKlg7yf6RWQHjJn+IHkS8ORkWaaxeMfwDYJiceiyNpz3OLxKWJtlR7xEHZFPPrDeGYHfUIWI91Ln/HjOk9TbV57oCeqvcXYHMZWh9OXsDo/CRxZFHFujVLvysj+4vPAAt11so4BZPmvtaCJz9HlgSNZjB0Zc1/ix9ihGHsmxq7UvnA40i8g+dL8SIKkndoVTZCnEfHov0VJObc4krBos3ZFI/IxsFOVqa6xK9U5GyZDDrgqpL/FTUjgSp+kRt/J4ToXI8syXx3xQqr3BknHegES9LCWP1Cd2Cl8zDoZ+V+FHzizMzPkZnUPRYxywkbPDQ5MBhFHpOTecwBi4ddZbpQGpFtA8qUFkOibcWfJi5OnkGWrN/vecjm3BLJxuUnMNUuCq0zx3q+OSMKmx4GzExURSY6zA2F/6BKR+MrAkdEY+7Ue9CztHEYlb8iSwB0YG2tuiAA/RGZ79fHeRPSDKWk39HySwnA64ofyL6qTPMXBGGRZ7LZQpSVDZHCf5ICUDK4aI8Effwo8G+eGf3oFRMRjCnKzSCtPIOLRf4/acm4p4G4qNulx8RGwA5nifV8dkfwH9yAjv++TrIicB3zi5TcIS9C0dDDwPyGuGdTk/27pRb219dTXK0I6AdmHANmHuBNjG80SahnWvoiH5H//CRJgs3HMN9f5K5Le1480fCHGDjQsW6l3Typ+PcU2hgDR7muyp3I28OcGqXJbEVzaXQXxhQlL8DPq5D4c5TMZjPjMrUIjUe+CdCpmvrQgYkHTPHVm8jyGhGSPy3Y/POXc0oh4tHLa6oQPgDFkitW5o409mnofil8CTtdhO8IituwDiLPaTGQUeyOu09qsWGJKTUKEx+cLZF/g1oZe3jJD+SuSm9pnEnCFF0+sk/4PRgI/3kXlhvExsDmu03l8NAlc+AMqUQJAbtzbBQIBBssviSwj+f4zzyOJuIpVG9IyQPgG8G0kPYLPNOqXSxdHBjKbIqPc4YiJ8rfa9H09ZElqDURwjvT68UHN6zvaq9ff8xiL6zTelxPP+xLVmfcOQj67T2rKDkVmNN9HrAzfQTbH72ubAlf2EfJUR/5+EZl93d1U4GQmYKhO4fwBsoH/VNvfk6SrXhexAts9cOYIJCZbkNWQz2UvKlkcw6fkDUH6BCRfWggxF40vS1r8PAJsTyH7ft9bLueWRcQjruRCPu8jM49yw7PGHkt99jjJ+NhrETH2ESR8SCOewnUavxfG7oOsVbeyNqzkMDd2DSSMS7NUuJ8DeVznFyF6HezHfsiPe6EmJT4A9sB1okXFFS/2Q2k+Gn0dWLsuJIeIw2HIjdMPQ/8ssOlXZY01wORI/anmYlznwLalxFflbGA/RCBmII55DyM3wI2pCPnH3mOEtyEfrGdN5LNbqklLM5Hc44d45ZdHXnOjHCuzgYu+Klvf53Nonel0BrAvrnNVzXUFZHbW7PP6EBjT0lfJ2D/TnbHMNrhOuBTIIUiXGW++tDCSx3urpLvSgoeRNLQftC0ZN+Xc8shSUm0+h255F9ieTLF5tFfXOQVjZwDBm+cRwCCM/Z8ei0iO5hFeW80IpiIpW1sRHGlOpz5MRy3vtDnfiNuQkW4rOolMezoSdLEV9RvN8lldAFyAsRshN+oZNUJzDWFzrTcm3EatWDwdgrEOste5NiIYiwNlJM7Yi8A/cZ1W+4wv0X7FIjgreA/4r5BlazkDaBfcspE15m+o5BdpRrvIFRPpzvos1gjI6ZmB5Eu98mOIkweBMRSycYW/Dk85tyIiHmu0KxqRd4BvkymGW0Yx9ofIDyjI+cARfVvOUhQlFQxJugMA5EuLIhtS/chz3Cl/AcZSyPbGi7cV5dxKSBC71duUjIrkKMkUwwcDfGzqXxk19kOqLeM2BpZl1NjbeGyqioiizCMkLyD50mKIlUzcfgxxch+wI4Xsv/vecjk3AhGP1dqUjMobiHjUhpdoz2NTH2DU2Peo9s3ZGFhORURR5h2SFZB8yXeCi9uPIU7+COxEIRst3EIclHNfR8Qj7kBoEmY+U+w8R8ljUx9i1Ni3qc50thGwPKPG3qoioihzP8kJSL7kO8FtlFgf2nMPsDOFbP8jbZZzqyDiMTLmml8GtiVTfL7rmh6bOo1RY9+gOmXsRsCKjBp7i4qIoszdJCMg+dKSiClqOwuZJLkT2IVCtv+B98q5VRHxiNtj+kVk5vFibDU+NrXMqLGvIiLiG2VkgJVURBRl7qb/Vlj50tLIzGP9vrcdnqnAbhSyn7UtGTfl3DcRR6jYAp55PI+IR2/yeRh7IOI3EPxOXQQc2iRjYPKIh/03kP2gByI7CUpU4E2QtLZP4jrPRrh2KGIyPBjxO3gDeKbOv6F1HV+jEhL9C+A5XCd6GgHxifBXAsqRUv8auxSy/wXia/GS14/oAwd5PSt5nuphr1mdxku8s4F7vMCHra5fANgQ1wkTmNO/ZhDyfq2CZFl8KFJUYDGdfqLO693YzYG/RY5OnCD9DWWSLy2DLAulWTxuASYkJB5rIHsucYuHRAruZTIo1/k9EqwtKBYHA7/1vLDTg7GLYWwJ8aq+CjGSeAxjw+81GbsV4oh2N2Lb/wzGuhFCvOQQy8PbkAHL48A/MXbb0H2QAIm3eY+7gekYeyPGLha6BmMPRXwPpniPFzA2TKgXn1MCfbgD+a7d32GcranAXzB247YlK9wQaD/4mIqkpm3HEcCfPSFqj7FLI9+Xh5AYa+L0aGy45FgSy+0hJMlT8PhIr66jQtWTEvr3w86XlkVG1q3DGyTLTcDuFLJR4uHEQzm3NrJstULMNT+N7Hm8FnO99bjOpUjIj6CIHARclDIROQnYFgnIOBY4E3HOrA0F0RhJp3sJkvGwgISXvxdJb3pQyD74jpHHAdt7fVgcKHrhV8LW8T4SCHAP5Ka5C3JTb494b5+LzH4O8fr+CnCWFzombB9AQmXsjKSa3gS4MOT1fl8WBtb0nkWJ77YL8v75YnGH93w7wgXcnK/mbztORXzVLkW+O79BBsS/DHn9UGSWvr83C/XxvdPD9iMV9McTPV9aDpl5pCsDWTXXA3tTyLae8vaCcm5dZAQZJrBdFJ4CRpMpvh1zvc1xncsxdiYSvM3fYzOIx/rBMScA6pQJiKf0Pt5Sy+0YuzWwHcYuGCJa6fqIccOFuM4JABj7EHIjnkB7L+UgD+I6dwF3YeyniKBkkSjUYfgE1/GDRV6Hsa8is5vvtbjGZyfkxnWiF/IdjP0IuBoRgygxum7HdT4DbsHYFYDtMXbphvG4GrM+leXPZmFr6nGd54DnvBDyAC9472evmAC8juvs7z2/HcmjPg5jh0ZYBl0eiUc2pRed7Be9HxXmSysgo7M0i8c1wMSExGM9ZGYWt3j8DZl59E88fFznSiTwYfDHdCDwO4xN1nRcZg8rI+vWwXX6qcgNbMWG11XzTe9vJWaRhNl4LnCuE/z6uok28CCwhLdU0o761yHLM8FznfYBojm+buD9fSHwf7owdgkk1lZtrKr7ECEeGbHGsGHsU0tvBSRfWhERjzXblEySK4AchWxnUVa7oZwbhczMmgXv65RHkZlH2NFf/LiOiHK1iBwATE5YRBZAhKI25tBJwChvRNuOBb2/tXW8SfOAiWHw/XLCLmE1wg/XHqaO+tfhOm8hG9D9fh2jkLA61wPfSnyg0Rj/Pan93N+oOR+WcSHD6aeW3glIvtSr8BtxchmwX0LikUGWrZpFD+2UaUhsq/6Hma/Fda5HsrwFZ3b7Ixnx0nWDcJ0vcZ3mwST7gz/z6CbKcxrMpjt5HRsgCZqeREQ+7phvaeMa5P47KemOdENvBCRfGoFYE3UzDe41lwD7U8j2f02+nNsEMWVeIuaaHwC2I1OMLWVl17jOjUjegqB56iTSKCLJ44fz6UbI/AFJ/wdFFTZDTHrDBugciqQn8AUEouyDzJm8gljhzdEpluMXkHzpa8jMY9XY646PyYChkO2/f0I5tznipLh4u6IRuR/J59H/SMHtcJ2bgd2QfBo+k4CLVUTYBmPHY+yvkCRZryApAzplU2TG13uru2p2w9g9MPZ6JEz67bhOWCfctZAkVE8ghh+zSOs+SLxMBtbB2E2T7kinxCsg+dJIZOYRd+ymOLkQODgh8dgSGXV0s8bdiD8BY8kU+x/sMSyucyti7hr0r9kXuKTGnHFe4zjEfPxwZE9iV1wnyucov2FjB2PsHoiZ/LSOMyd2zuXIsswEZE9g3wjX+rONJz3ReYG5fwYC8rm/S3jT79QRn4DkS72K3RQnFwCHUsj2f524nNsasfRZJOaa7wF2JFOsTxyUNiQN6XiqRWQf5m0RORbxSbnJex71c1wRY6cjofmvQZYKk3BGG4+kv/0HMLQqLW17NkD2bvzlqyeYF2Yg4iX/B8SHZcE2pVNJPAKSL62KzDw68T7tF+dSyB6ekHhkEe/YhWOu+Q5gZzLF/gd77BSx0R8HBJc3csCl86iIPIzr/BFJvQvRnOhABKOMLIuehKSwbZ4StXfc5aXkvRlYDmNXjnDtKODlwMzrSWCp0N7dcza/Q1Yk9ky6I53Q/Q82X1oN8WOI8oXpN5ZCNpkQAeXcdsjosps0lI24DdiNTLH/XvPd4jr3YOyOSPpif+Q1AICxkxJYfkkDfi76DOE8qH3exnV270F/OsV/HRvROK1rI9ZHwnj4+DORDZA9obkX13kSY6cRzvEzdXQ3A8mXVkdmHmkWjzMSFI8xiKdp3OIxBZgwR4qHj4y6xwLBwHEDwGU9non4VnfVFnDG7oWxz3uBBTurA5akUzNa15mOrIf3M71B/esQj+5BdG4OPM37G24mJTGglkBmLT/0Uib7uc3Ttg/S6nOHzt+zyQ3qnCPoXEDypTWRPY8wnrtJcSqF7NGJtFzO7YiEo5g/5pqvB/YgUwwftTWtuM59SByn4KbxROByjB3W+KKu2/wICWNSm8TsAMT4I4xZ93Tvb8V6xthFEIfZbkbMZWDDCAEZu8V/HcH3wn9Nnb6OfwIfEV4IfZHYCDjDexxWcy4tvIXs39V+d7p9zy6nekl3jqEzAcmX1kKWreIO/BcnP6OQ/UkiLZdzOyNRQofHXPPVwEQyxf6HXOkVEkZ7DHLT8dmLXoqIREP9BsZOxNghGLsFsDUwHdd5J8T1jyM3kvEYu54XEtxBfk/hw4LXMw1ZD487fXEz/L2S72DsChi7HBWLoM5eh4SHeYTwezn+ZnkOGYyuiLz+9IU0kbQEDwNrY+yunuXbDoj4PY3rdOZ/5TofIgPDOY7oApIvrYPMPMJM9ZPiBArZ4xNpuZybAFxL/FE1i0COTHHu2x+Q/A/bA0Eflj2RyLS9EJFjkKWzKxFv6fuRvZgjQ10tInMC4r/wODIyPREZgYaLhNuY4D5I73GdqfjLoZLHYzoi3qGztpAAAAFOSURBVHfgOjd0UXMZWCbkJvgoRIyvxnXe8B7PIwPUkYEgiWnhR4g/0w3AB4hZ/jDg+13WO7nL6xOhk7XmJYHvxt2RGPmIQraX0TibU84NQjyAczHXPAO4hUwxDZFse4PrPISxm1EfdHN54t5IdZ2/YexayFLJqsDrwMW4zuMR6vgFxpaRm++SiOnp+d5oMgx3AedREQ2Q0DZnIzGhwnAe3YfCmYAs322F7H3cD7gRrr8EEZ7gftyFiMVhmAHq/Yhg1X63L0AcCsPO4j8CTkZu6FG4EXkPw6V4lu/pOsChiMvCq8BkXOfvIdt7BwkJXyvQ9yD9vy5kPYqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKB3y//ViNiNSf0qjAAAAAElFTkSuQmCC"

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
/* harmony import */ var _mainmenu_endpoints_Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainmenu/endpoints/Services */ "./src/client/mainmenu/endpoints/Services.js");
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
  path: '/services',
  component: _mainmenu_endpoints_Services__WEBPACK_IMPORTED_MODULE_3__["default"],
  name: 'Services'
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
          width: '85%'
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
  }, "About Appreciate Co."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "Founder Joseph Plaugher spent years repeatedly experiencing ineffective, slow, and tedious processes being utilized at a variety of organizations of all sizes. Knowing the power of software to automate business processes (which has allowed companies such as Amazon, Ebay, Google, and many others to drastically cut costs and become superpowers in their industry), Joseph wanted to bring this competitive advantage to small businesses who can't neccessarily afford their own technology team."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "Enter Appreciate Corporation - we do precisely the above: help small companies become more effecient by harnessing the power of automation through software. Get in touch with us to learn how you can streamline your business operations!"));
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
  }, "Maybe you're not sure how or if software can benefit you and your business. We will seek to understand your pain point - the part of your business process that is inefficient, expensive, or just a hassle - and we will work to alleviate the \"pain\" and automate or streamline it using software. If you feel your business already runs pretty smoothly, we may still be able to improve upon your existing systems."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "We offer a free consultation to discuss what we can do for your business. Get in touch with us today!"));
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
  }, "You and your staff are probably doing a lot of things manually that can be automated. Let us help you reduce these inefficiencies in your workflow to improve upon your existing processes."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subheadline"
  }, "Cut Costs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "If you're not fully leveraging software, you're losing money. You can empower your staff to streamline their work and accomplish more in less time."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subheadline"
  }, "Expand Without Increasing Labor Costs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "Do you need to hire more staff to expand your business? Maybe not! With your staff's days less consumed by routine, tedious tasks, they'll have more time for effective and productive work. They'll be happier, and your bottom line will benefit."));
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
  }, "We predominantly develop software using JavaScript, though we have expertise in PHP as well. Below is a list of web applications we built from the ground up. Typically our projects utilize an Express server with the EJS template engine. Usually there is a single script tag to include the React application bundled with Webpack. If the project is very simple, such as the strong password generator below, which still utilizes Webpack for transpilation and bundling, there is no framework (i.e. React). It is comprised of a couple of event handlers and functions interacting directly with the DOM.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Some of our projects use traditional prototype-based \"classes\" on the server side, some use ES6 syntax, including classes. Most of the time we do not transpile the server side, except when both Search Engine Optimization (SEO) and user interactivity are important, such as on the website you're reading now. On this site, the client and server sides are transpiled from ES6 syntax and all markup is rendered on the server (until you click the navigation buttons) for SEO purposes.", ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subheadline"
  }, "Enterprise Applications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Appreciate Enterprise Accounting (in development)"), ": A scaleable, sophisticated, double-entry accounting system.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies Used: React, Webpack and Babel, Express backend; CRUD operations in response to API calls from the client. PostgreSQL database.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Integrated Payment Processing (in developement)"), ": Using Stripe, this provides a customizable invoice payment system for businesses.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies Used: React, Webpack and Babel, Express; CRUD operations in response to API calls from the client. PostgreSQL database."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subheadline"
  }, "Open Source Applications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://hash.appco.tech",
    target: "_blank"
  }, "Hash Check Strong Password Generator.", ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/josephplaugher/HashCheck",
    target: "_blank"
  }, "GitHub"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies used: Raw JavaScript with Webpack and Babel, bcrypt password hashing and salting library. Express.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://blog.appco.tech",
    target: "_blank"
  }, "Blog Site.", ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/josephplaugher/BlogSite",
    target: "_blank"
  }, "GitHub"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies used: Combination raw JavaScript and React, with Webpack and Babel. Express; CRUD operations in response to API calls from the client. PostgreSQL database.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "On this project, upon first visit, the latest blog post will be displayed along with a menu of all the other available posts. This is all rendered server side for SEO purposes. Upon selecting other blog posts, they are placed into the reading pane asynchronously. This is all done with raw JavaScript. The user authenication system (which allows users to create an account so they can leave comments) and the comments area itself are both written in React.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://blogadmin.appco.tech",
    target: "_blank"
  }, "Blog Administration Utility.", ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/josephplaugher/blog-admin-utility",
    target: "_blank"
  }, "GitHub"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies Used: React, Webpack and Babel, Express backend; CRUD operations in response to API calls from the client. PostgreSQL database."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subheadline"
  }, "NPM Modules"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "ReactForm-AppCo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "A powerful, flexible forms and inputs module for React. Includes \"live search\" that can be used similarly to a select or dropdown menu, except the list of options change with user input. The Form class does not render anything to the UI. It simply attaches logic to your existing form to automate processing and submission using React state and Ajax. There is an optional Inputs component which does render an html input element, but it is not required for use with the Form class.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies used: React, Webpack and Babel.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/josephplaugher/ReactForm-AppCo",
    target: "_blank"
  }, "GitHub"), ' ', "|", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.npmjs.com/package/reactform-appco",
    target: "_blank"
  }, "NPM"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "LightBox-AppCo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "A fully styleable and customizable \"popup\" window component for React.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies used: React, Webpack and Babel. A module for making your markup draggable.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/josephplaugher/lightbox-appco",
    target: "_blank"
  }, "GitHub"), ' ', "|", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.npmjs.com/package/lightbox-appco",
    target: "_blank"
  }, "NPM"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Menu-AppCo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, ' ', "A closeable menu component for React.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Technologies used: React, Webpack and Babel. A module for making your markup draggable.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/josephplaugher/Menu-AppCo",
    target: "_blank"
  }, "GitHub"), ' ', "|", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.npmjs.com/package/menu-appco",
    target: "_blank"
  }, "NPM")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./src/client/mainmenu/endpoints/Services.js":
/*!***************************************************!*\
  !*** ./src/client/mainmenu/endpoints/Services.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Services = function Services() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "headline"
  }, "Services We Offer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "Do you already know what software or website you need built; what it should do and what the user experience should be? We can make it happen for you."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, "Custom web-based applications."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, "SEO-Friendly websites that are still interactive. This means your website will be indexable by Google and other search engines so it is included in searches and still interactive to the user."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, "Web-based accounting, customer payment portal, and other productively tools for managing your business.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

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
  app.disable('view cache');
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

/***/ "./src/server/ServerUtil/Log.js":
/*!**************************************!*\
  !*** ./src/server/ServerUtil/Log.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ "winston");
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);



var HOST = function HOST() {
  if (false) {} else {
    return 'localhost';
  }
};

var HttpOptions = {
  host: HOST(),
  port: 3026,
  path: '/logError',
  ssl: "development" === 'production'
};
var Log = winston__WEBPACK_IMPORTED_MODULE_0___default.a.createLogger({
  format: winston__WEBPACK_IMPORTED_MODULE_0___default.a.format.json(),
  transports: [new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.Http(HttpOptions)]
});

if (true) {
  Log.add(new winston__WEBPACK_IMPORTED_MODULE_0___default.a.transports.Console({
    format: winston__WEBPACK_IMPORTED_MODULE_0___default.a.format.json()
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Log);

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
  var Request = new _model_Inquiry_RequestConsult__WEBPACK_IMPORTED_MODULE_1__["default"](req, res);
  Request.logRequest();
});
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/server/model/Inquiry/Email.js":
/*!*******************************************!*\
  !*** ./src/server/model/Inquiry/Email.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ "nodemailer");
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ServerUtil_Log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ServerUtil/Log */ "./src/server/ServerUtil/Log.js");



var Email = function Email(formData) {
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default.a.createTransport({
    service: 'gmail',
    secure: "development" === 'production',
    // true for 465, false for other ports
    auth: {
      user: "joseph@appreciateco.com",
      pass: "Tesla0328$%"
    }
  });
  var body = "New email from landing page: <br/><br/>\n    Name: ".concat(formData.fname, ".<br/>\n    Email: ").concat(formData.email, ". <br/>\n    Message: ").concat(formData.message, " "); // setup email data with unicode symbols

  var mailOptions = {
    from: '"Appreciate Corporation" <joseph@appreciateco.com>',
    // sender address
    to: "\"".concat(formData.fname, "\" <").concat(formData.email, ">"),
    // recipient
    subject: "New email from landing page:",
    // Subject line
    text: body,
    // plain text body
    html: '<p>' + body + '</p>' // html body
    // send mail with defined transport object

  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      ServerUtil_Log__WEBPACK_IMPORTED_MODULE_1__["default"].error({
        message: error.stack
      });
    } else {
      ServerUtil_Log__WEBPACK_IMPORTED_MODULE_1__["default"].info({
        message: info
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Email);

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
/* harmony import */ var ServerUtil_Log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ServerUtil/Log */ "./src/server/ServerUtil/Log.js");
/* harmony import */ var _Email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Email */ "./src/server/model/Inquiry/Email.js");
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
      var r = _this.req.body;
      var query = {
        text: "INSERT INTO webpageinquiries (fname, email, lead_source) VALUES ($1,$2,$3)",
        values: [r.fname, r.email, r.message]
      };
      ServerUtil_postgres__WEBPACK_IMPORTED_MODULE_1__["default"].query(query).then(function (row) {
        ServerUtil_Log__WEBPACK_IMPORTED_MODULE_2__["default"].info({
          message: query
        });

        _this.emailRequester();
      }).catch(function (error) {
        return ServerUtil_Log__WEBPACK_IMPORTED_MODULE_2__["default"].error({
          message: error.stack
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "emailRequester", function () {
      Object(_Email__WEBPACK_IMPORTED_MODULE_3__["default"])(_this.inputs);

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

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

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

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map