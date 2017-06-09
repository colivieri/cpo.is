'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chasefoto/Desktop/cpo.is/components/Footer.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: 1rem 0 .65625rem;\n  width: 100%;\n  background-color: #f2f2f2;\n  color: #666;\n  height: 40vh;\n  text-align: center;\n  margin: 5px;\n\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n\n  > img {\n    width: 5%;\n    text-align: center;\n    margin: 20px;\n    justify-content: center;\n    display: inline;\n  }\n\n  > h3 {\n    font-weight: 100;\n    font-size: 1em;\n    margin-bottom: 35px;\n  }\n\n  > a {\n    font-family: \'Source Sans Pro\', sans-serif;\n    font-weight: 900;\n    color: #24292e;\n    margin: 10px;\n  }\n'], ['\n  padding: 1rem 0 .65625rem;\n  width: 100%;\n  background-color: #f2f2f2;\n  color: #666;\n  height: 40vh;\n  text-align: center;\n  margin: 5px;\n\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n\n  > img {\n    width: 5%;\n    text-align: center;\n    margin: 20px;\n    justify-content: center;\n    display: inline;\n  }\n\n  > h3 {\n    font-weight: 100;\n    font-size: 1em;\n    margin-bottom: 35px;\n  }\n\n  > a {\n    font-family: \'Source Sans Pro\', sans-serif;\n    font-weight: 900;\n    color: #24292e;\n    margin: 10px;\n  }\n']);

var FooterContainer = _styledComponents2.default.div(_templateObject);
var Footer = function Footer() {
  return _react2.default.createElement(FooterContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement('img', { src: './static/c-grey.jpg', __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, 'Chase Olivieri'), _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/adventures', __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, 'Adventures')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, 'About')), _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, 'Contact')));
};

exports.default = Footer;