'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DIGIT = /\d/g;
var CHUNKS = /\d+/g;
var NOT_DIGITS = /\D/g;
var EXTRA = /[^.\d]/g;
var DOTS = /\./g;
var DASH = '-';
var PAUSED_CHUNKS = '$&.';
var SLOW_DIGIT = ' $&';
var ARIA_LABEL = 'aria-label';
var EMPTY = '';

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref$phoneNumber = _ref.phoneNumber,
      phoneNumber = _ref$phoneNumber === undefined ? EMPTY : _ref$phoneNumber,
      props = _objectWithoutProperties(_ref, ['phoneNumber']);

  var raw = phoneNumber.replace(NOT_DIGITS, EMPTY);
  var clean = phoneNumber.replace(DOTS, DASH);
  return _extends(_defineProperty({
    phoneNumber: phoneNumber,
    href: 'tel:' + raw
  }, ARIA_LABEL, clean.replace(CHUNKS, PAUSED_CHUNKS).replace(EXTRA, EMPTY).replace(DIGIT, SLOW_DIGIT).substr(1)), props);
};