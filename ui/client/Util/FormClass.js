"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Validate = _interopRequireDefault(require("./Validate"));

var _Ajax = _interopRequireDefault(require("./Ajax"));

var _LiveSearch = _interopRequireDefault(require("./LiveSearch"));

var _AutoFill = _interopRequireDefault(require("./AutoFill"));

require("css/workingPane.css");

require("css/form.css");

require("css/userNotify.css");

require("css/lsr.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var FormClass =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormClass, _React$Component);

  function FormClass(props) {
    var _this;

    _classCallCheck(this, FormClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormClass).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;
      var lsSource = [name][0]; //clear the error on resume typing

      var clEr = Object.assign({}, _this.state.userNotify);
      clEr[name] = '';

      _this.setState({
        userNotify: clEr,
        lsSource: lsSource
      }); //place updated data into state


      _this.rebuildFormData(name, value, lsSource); //run live search if applicable to current input, not othewise


      var ls = new _LiveSearch.default();
      var list = ls.getLSA();

      if (list.includes(name)) {
        _this.runLiveSearch(name, value, lsSource);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rebuildFormData", function (name, value, lsSource) {
      var _this$setState;

      //place updated data into state
      var newVals = Object.assign({}, _this.state.formData);
      newVals[name] = value;

      _this.setState((_this$setState = {}, _defineProperty(_this$setState, name, value), _defineProperty(_this$setState, "lsSource", name), _defineProperty(_this$setState, "formData", newVals), _this$setState));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lsrSelect", function (event) {
      //get the value of the clicked search result and place it into the form field
      //then clear the search result list
      var input = _this.state.lsSource;
      var toClear = 'lsr' + [input];

      _this.setState(_defineProperty({}, toClear, ''));

      _this.rebuildFormData(input, event.target.id, input);

      _this.autoFill(input, event.target.id);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "autoFill", function (id, val) {
      var autofill = new _AutoFill.default();
      var dest = autofill.getRef(id);
      console.log('dest: ', dest);

      _Ajax.default.get("http://localhost:3004/autofill/" + id + "/" + val).then(function (res) {
        if (res.data.results) {
          var obj = res.data.results;

          var _val;

          for (var key in obj) {
            _val = obj[key];
          }

          _this.rebuildFormData(dest, _val);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function (event) {
      event.preventDefault();
      var val = new _Validate.default(_this.state.formData);
      var prom = val.getPromise();
      prom.then(function (error) {
        console.log('the error: ', error);

        if (error.hasError) {
          _this.setState({
            userNotify: error,
            validForm: false
          });
        }

        if (!error.hasError) {
          _this.setState({
            validForm: true
          });

          console.log('about to submit...');

          _this.submitData();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submitData", function () {
      console.log('submitting now...');

      _Ajax.default.post("http://localhost:3004/" + _this.route + "/", _this.state.formData).then(function (res) {
        if (res.data.success) {
          _this.setState({
            success: res.data.success,
            userNotify: res.data.userNotify
          });
        }
      });
    });

    _this.state = {
      error: '',
      userNotify: '',
      formData: '',
      lsr: '',
      //live search result. list of value from live search
      validForm: false,
      searchView: true
    };
    _this.route = '';
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.lsrSelect = _this.lsrSelect.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.submitData = _this.submitData.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(FormClass, [{
    key: "runLiveSearch",
    value: function runLiveSearch(name, value, lsSource) {
      var _this2 = this;

      //get a list of options as the user types ,like Google live search
      //set the name of the location to place the search result. The inputs must have a "lsr={this.state.lsr}""
      var targetField = 'lsr' + lsSource;
      var ls = new _LiveSearch.default();
      var list = ls.getLSA();
      console.log('list: ', list); //first, if the input change leaves the field blank, clear the options list

      if (value === '') {
        this.setState(_defineProperty({}, targetField, '')); //if the input value is not blank, fetch the options
      } else {
        if (list.includes(name)) {
          var prom = ls.search(name, value);
          prom.then(function (res) {
            _this2.setLSRList(res, targetField);
          });
        }
      } //else

    }
  }, {
    key: "setLSRList",
    value: function setLSRList(res, targetField) {
      var _this3 = this;

      console.log('lsr:', res); //if there is not result, set a message for that, else, set the results into state

      var list = res.data.results;
      var newList;

      if (res.data.nr) {
        newList = res.data.nr;
      } else {
        newList = list.map(function (item) {
          return _react.default.createElement("p", {
            className: "lsr",
            onClick: function onClick(event) {
              return _this3.lsrSelect(event);
            },
            id: item[Object.keys(item)[0]]
          }, item[Object.keys(item)[0]]);
        });
        console.log('new list:', newList);
      } //place the "list" value into state


      this.setState(_defineProperty({}, targetField, newList));
    }
  }]);

  return FormClass;
}(_react.default.Component);

var _default = FormClass;
exports.default = _default;