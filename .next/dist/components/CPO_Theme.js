'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chasefoto/Desktop/cpo.is/components/CPO_Theme.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  @import url(\'https://fonts.googleapis.com/css?family=Source+Sans+Pro:700|Source+Serif+Pro\');\n\n  body {\n    font-family: \'Source Serif Pro\', serif;\n    font-size: 16px;\n  }\n  h1, h2, h3, h4 {\n    font-family: \'Source Sans Pro\', sans-serif;\n  }\n  a {\n    text-decoration: none;\n    :hover {\n      color: grey;\n    }\n  }\n'], ['\n  @import url(\'https://fonts.googleapis.com/css?family=Source+Sans+Pro:700|Source+Serif+Pro\');\n\n  body {\n    font-family: \'Source Serif Pro\', serif;\n    font-size: 16px;\n  }\n  h1, h2, h3, h4 {\n    font-family: \'Source Sans Pro\', sans-serif;\n  }\n  a {\n    text-decoration: none;\n    :hover {\n      color: grey;\n    }\n  }\n']);

/* eslint-disable */
(0, _styledComponents.injectGlobal)(_templateObject);
var Layout = function Layout(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, props.children, _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }));
};

exports.default = Layout;