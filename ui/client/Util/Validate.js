"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _Ajax = _interopRequireDefault(require("./Ajax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var validate = function validate(inputs) {
  var _this = this;

  _classCallCheck(this, validate);

  _defineProperty(this, "checkVals", function (input) {
    for (var name in input) {
      if (input.hasOwnProperty(name)) {
        var val = input[name]; //place the input value in the 'val' variable

        switch (name) {
          case 'date':
          case 'startdate':
          case 'enddate':
            if (val.length < 1) {
              _this.requiredMessage(name);
            }

            var check = (0, _moment.default)(val);

            if (check.isValid() === false) {
              _this.errorMessage(name, 'Date must be in format: [YYY-MM-DD]');
            }

            break;

          case 'amount':
            if (val.length < 1) {
              _this.requiredMessage(name);
            }

            if (_this.isFloat(val) === false) {
              _this.errorMessage(name, 'This field must be a dollar value');
            }

            break;

          default:
            break;
        }
      }
    }
  });

  _defineProperty(this, "getPromise", function () {
    return new Promise(function (resolve, reject) {
      if (Object.keys(_this.error).length === 0 && _this.error.constructor === Object) {
        _this.error.hasError = false;
      } else {
        _this.error.hasError = true;
      }

      resolve(_this.error);
    });
  });

  _defineProperty(this, "requiredMessage", function (name) {
    var newEr = Object.assign({}, _this.error);
    newEr[name] = name + ' is a required field';
    _this.error = newEr;
    console.log('test');
  });

  _defineProperty(this, "isFloat", function (n) {
    var numNum = +n;

    if (isNaN(numNum)) {
      return false;
    }
  });

  _defineProperty(this, "errorMessage", function (name, msg) {
    var newEr = Object.assign({}, _this.error);
    newEr[name] = msg;
    _this.error = newEr;
  });

  _defineProperty(this, "checkCoaValue", function (name, value, type) {
    _Ajax.default.post("http://localhost:3004/validateData/", {
      value: value,
      type: type
    }).then(function (res) {
      if (res.data.error) {
        _this.errorMessage(name, res.data.error);
      }
    });
  });

  this.error = {};
  this.checkVals(inputs);
};

var _default = validate;
exports.default = _default;