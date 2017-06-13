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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: 1rem 0 .65625rem;\n  background-color: #f2f2f2;\n  color: #666;\n  height: 30vh;\n  text-align: center;\n  margin: 5px;\n  display: flex; \n\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  > h3 {\n    font-weight: 100;\n    font-size: 1em;\n    margin-bottom: 35px;\n  }\n\n  > a {\n    display: flex;\n    flex: 0 0 100%;\n    justify-content: center;\n    font-family: \'Source Sans Pro\', sans-serif;\n    font-weight: 900;\n    color: #24292e;\n    margin: 10px;\n  }\n'], ['\n  padding: 1rem 0 .65625rem;\n  background-color: #f2f2f2;\n  color: #666;\n  height: 30vh;\n  text-align: center;\n  margin: 5px;\n  display: flex; \n\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  > h3 {\n    font-weight: 100;\n    font-size: 1em;\n    margin-bottom: 35px;\n  }\n\n  > a {\n    display: flex;\n    flex: 0 0 100%;\n    justify-content: center;\n    font-family: \'Source Sans Pro\', sans-serif;\n    font-weight: 900;\n    color: #24292e;\n    margin: 10px;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 5%;\n  margin: 20px;\n  display: inline;\n'], ['\n  width: 5%;\n  margin: 20px;\n  display: inline;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  width: 30px;\n  margin: 20px;\n  background-color: #e3e3e3;\n  padding: 12px;\n  \n  &:hover {\n    background-color: white;\n  }\n'], ['\n  width: 30px;\n  margin: 20px;\n  background-color: #e3e3e3;\n  padding: 12px;\n  \n  &:hover {\n    background-color: white;\n  }\n']);

var FooterContainer = _styledComponents2.default.footer(_templateObject);

var ChaseIcon = _styledComponents2.default.img(_templateObject2);
var Social = _styledComponents2.default.img(_templateObject3);

var Footer = function Footer() {
  return _react2.default.createElement(FooterContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement(ChaseIcon, { src: './static/c-grey.jpg', __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, 'Chase Olivieri'), _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/adventures', __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, 'Adventures')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, 'About')), _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, 'Contact')), _react2.default.createElement(Social, { src: './static/instagram.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }), _react2.default.createElement(Social, { src: './static/twitter.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }), _react2.default.createElement(Social, { src: './static/angellist.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }));
};

exports.default = Footer;