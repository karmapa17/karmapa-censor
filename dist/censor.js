'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = censor;
function censor(str) {
  return (str || '').replace(/./g, '*');
}
module.exports = exports['default'];

