"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _FormClass2 = _interopRequireDefault(require("./FormClass"));

require("css/workingPane.css");

require("css/form.css");

require("css/userNotify.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DataViewClass =
/*#__PURE__*/
function (_FormClass) {
  _inherits(DataViewClass, _FormClass);

  function DataViewClass() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DataViewClass);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DataViewClass)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showSearch", function () {
      _this.setState({
        searchView: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectItem", function (row) {
      console.log('select item'); //switch from data view to search view

      _this.setState({
        dataView: true,
        userNotify: ''
      });

      console.log('click', row); //place all the resulting data into state

      for (var key in row) {
        console.log(key, row[key]); //clear previous selection
        //fill with new data select

        _this.setState(_defineProperty({}, key, row[key]));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeLightBox", function () {
      console.log('close');

      _this.setState({
        dataView: false
      });
    });

    return _this;
  }

  return DataViewClass;
}(_FormClass2.default);

var _default = DataViewClass;
exports.default = _default;