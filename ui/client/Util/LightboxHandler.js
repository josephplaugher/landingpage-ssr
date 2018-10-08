"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LightboxHandler = function LightboxHandler() {
  _classCallCheck(this, LightboxHandler);

  _defineProperty(this, "selectItem", function (row, setState) {
    console.log('select item'); //switch from data view to search view

    setState({
      dataView: true,
      userNotify: ''
    });
    console.log('click', row); //place all the resulting data into state

    for (var key in row) {
      console.log(key, row[key]); //clear previous selection
      //fill with new data select

      setState(_defineProperty({}, key, row[key]));
    }
  });

  _defineProperty(this, "closeLightBox", function (setState) {
    console.log('close');
    setState({
      dataView: false
    });
  });
};

var _default = LightboxHandler;
exports.default = _default;