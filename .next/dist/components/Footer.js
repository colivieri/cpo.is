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

var _media = require('../components/media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chasefoto/Desktop/cpo.is/components/Footer.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: 1rem 0 .65625rem;\n  background-color: #f2f2f2;\n  color: #666;\n  height: 100%;\n  text-align: center;\n  margin: 5px;\n  display: flex; \n  flex-direction: row;\n\n  flex-wrap: wrap;\n\n  > div {\n    display: flex; \n    flex-basis: calc(100%);  \n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n'], ['\n  padding: 1rem 0 .65625rem;\n  background-color: #f2f2f2;\n  color: #666;\n  height: 100%;\n  text-align: center;\n  margin: 5px;\n  display: flex; \n  flex-direction: row;\n\n  flex-wrap: wrap;\n\n  > div {\n    display: flex; \n    flex-basis: calc(100%);  \n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 55px;\n  margin: 20px 0;\n'], ['\n  width: 55px;\n  margin: 20px 0;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  &:hover {\n    border-bottom: none;\n  }\n'], ['\n  &:hover {\n    border-bottom: none;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  width: 30px;\n  margin: 20px;\n  background-color: #e3e3e3;\n  padding: 12px;\n  \n  &:hover {\n    background-color: white;\n  }\n\n  ', '\n'], ['\n  width: 30px;\n  margin: 20px;\n  background-color: #e3e3e3;\n  padding: 12px;\n  \n  &:hover {\n    background-color: white;\n  }\n\n  ', '\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n    width: 20px;\n  '], ['\n    width: 20px;\n  ']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-wrap: wrap;\n  cursor: pointer;\n  cursor: hand;\n\n  > h3 {\n    padding: 0 20px;\n    font-size: 1em;\n    ', '\n  > h3:hover {\n    color: black;\n    transition: color .3s;\n  }\n\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  cursor: pointer;\n  cursor: hand;\n\n  > h3 {\n    padding: 0 20px;\n    font-size: 1em;\n    ', '\n  > h3:hover {\n    color: black;\n    transition: color .3s;\n  }\n\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n      font-size: .8em;\n      padding: 0 10px;\n    }'], ['\n      font-size: .8em;\n      padding: 0 10px;\n    }']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n'], ['\n']);

var FooterContainer = _styledComponents2.default.footer(_templateObject);

var ChaseIcon = _styledComponents2.default.img(_templateObject2);
var SocialLink = _styledComponents2.default.a(_templateObject3);

var Social = _styledComponents2.default.img(_templateObject4, _media2.default.phone(_templateObject5));

var FooterNav = _styledComponents2.default.section(_templateObject6, _media2.default.phone(_templateObject7));
var FooterSocial = _styledComponents2.default.section(_templateObject8);

var Footer = function Footer() {
  return _react2.default.createElement(FooterContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, _react2.default.createElement(ChaseIcon, { src: './static/c-grey.jpg', __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  })), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, _react2.default.createElement(FooterNav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/adventures', __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, 'Adventures')), _react2.default.createElement(_link2.default, { href: '/gear', __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, 'Gear')), _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, 'Contact')))), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, _react2.default.createElement(FooterSocial, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, _react2.default.createElement(SocialLink, { href: 'http://www.instagram.com/chasefoto', target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, _react2.default.createElement(Social, { src: './static/instagram.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  })), _react2.default.createElement(SocialLink, { href: 'http://www.twitter.com/chaseolivieri', target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, _react2.default.createElement(Social, { src: './static/twitter.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  })), _react2.default.createElement(SocialLink, { href: 'http://www.angel.co/colivieri', target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, _react2.default.createElement(Social, { src: './static/angellist.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  })))));
};

exports.default = Footer;