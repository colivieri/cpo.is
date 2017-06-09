'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactButton = exports.AboutButton = exports.AdventuresButton = exports.Button = exports.PostCard = exports.Wrapper = exports.Container = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CPO_Theme = require('../components/CPO_Theme');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactAnimations = require('react-animations');

var _CPO_Theme2 = require('../components/CPO_Theme.js');

var _CPO_Theme3 = _interopRequireDefault(_CPO_Theme2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chasefoto/Desktop/cpo.is/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0 auto;\n'], ['\n  margin: 0 auto;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-wrap: wrap;\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  width: 50%;\n  margin: 0 auto;\n  text-align: center;\n  > p {\n    font-size: 1em;\n  }\n'], ['\n  width: 50%;\n  margin: 0 auto;\n  text-align: center;\n  > p {\n    font-size: 1em;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  font-family: \'Source Serif Pro\', serif;\n  background-color: #24292e;\n  color: black;\n  height: 18vh;\n  text-align: center;\n  text-transform: uppercase;\n\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  padding: 10px 15px;\n  margin: 5px;\n\n  box-shaddow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n  transition: box-shadow .25s;\n  border-radius: 3px;\n\n  > h2 {\n    font-size: 2.4em;\n    color: white;\n  }\n'], ['\n  font-family: \'Source Serif Pro\', serif;\n  background-color: #24292e;\n  color: black;\n  height: 18vh;\n  text-align: center;\n  text-transform: uppercase;\n\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  padding: 10px 15px;\n  margin: 5px;\n\n  box-shaddow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n  transition: box-shadow .25s;\n  border-radius: 3px;\n\n  > h2 {\n    font-size: 2.4em;\n    color: white;\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  background-image: url(\'./static/world-map.png\');\n  background-size: cover;\n'], ['\n  background-image: url(\'./static/world-map.png\');\n  background-size: cover;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #F16125;\n'], ['\n  background-color: #F16125;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #F8B03E;\n'], ['\n  background-color: #F8B03E;\n']);

var Container = exports.Container = _styledComponents2.default.div(_templateObject);

var Wrapper = exports.Wrapper = _styledComponents2.default.div(_templateObject2);

var PostCard = exports.PostCard = _styledComponents2.default.section(_templateObject3);

var Button = exports.Button = _styledComponents2.default.div(_templateObject4);

var AdventuresButton = exports.AdventuresButton = Button.extend(_templateObject5);

var AboutButton = exports.AboutButton = Button.extend(_templateObject6);

var ContactButton = exports.ContactButton = Button.extend(_templateObject7);

var Index = function Index() {
  return _react2.default.createElement(_CPO_Theme3.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement(PostCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, 'CHASE OLIVIERI'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, 'Frequently on planes.')), _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, _react2.default.createElement(AdventuresButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, 'Adventures')), _react2.default.createElement(AboutButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, 'About')), _react2.default.createElement(ContactButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, 'Contact')))));
};

exports.default = Index;