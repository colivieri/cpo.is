'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = exports.yellow = exports.orange = exports.red = exports.grey = exports.black = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _media = require('../components/media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chasefoto/Desktop/cpo.is/components/CPO_Theme.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  @import url(\'https://fonts.googleapis.com/css?family=Assistant:100,400,700|Avenir+Next:600|Source+Sans+Pro:400,700,900|Source+Serif+Pro\');\n\n  html {\n    -webkit-font-smoothing: antialiased;\n    -ms-font-smoothing: antialiased;\n  }\n  \n  body {\n    font-family: \'Assistant\', serif;\n    font-size: 16px;\n  }\n  \n  h1, h2, h3, h4 {\n    font-family: \'Assistant\', sans-serif;\n  }\n\n  a {\n    text-decoration: none;\n    :hover {\n      color: grey;\n      -webkit-transition-property: border;\n      -moz-transition-property: border;\n      transition-property: border;\n      -webkit-transition-duration: 1s;\n      -moz-transition-duration: 1s;\n      transition-duration: 1s;\n      border-bottom: 1px solid;\n    }\n  }\n'], ['\n  @import url(\'https://fonts.googleapis.com/css?family=Assistant:100,400,700|Avenir+Next:600|Source+Sans+Pro:400,700,900|Source+Serif+Pro\');\n\n  html {\n    -webkit-font-smoothing: antialiased;\n    -ms-font-smoothing: antialiased;\n  }\n  \n  body {\n    font-family: \'Assistant\', serif;\n    font-size: 16px;\n  }\n  \n  h1, h2, h3, h4 {\n    font-family: \'Assistant\', sans-serif;\n  }\n\n  a {\n    text-decoration: none;\n    :hover {\n      color: grey;\n      -webkit-transition-property: border;\n      -moz-transition-property: border;\n      transition-property: border;\n      -webkit-transition-duration: 1s;\n      -moz-transition-duration: 1s;\n      transition-duration: 1s;\n      border-bottom: 1px solid;\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0 auto;\n  max-width: 1200px;\n'], ['\n  margin: 0 auto;\n  max-width: 1200px;\n']);

/* eslint-disable */
(0, _styledComponents.injectGlobal)(_templateObject);
var black = exports.black = '#222';
var grey = exports.grey = '#7d7d7d';
var red = exports.red = '#24292E';
var orange = exports.orange = '#F16125';
var yellow = exports.yellow = '#F8B03E;';

var Container = exports.Container = _styledComponents2.default.div(_templateObject2);
var Layout = function Layout(props) {
  return _react2.default.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), props.children, _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }));
};

exports.default = Layout;