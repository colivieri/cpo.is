'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactButton = exports.AboutButton = exports.AdventuresButton = exports.Button = exports.PostCard = exports.Wrapper = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CPO_Theme = require('../components/CPO_Theme');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _CPO_Theme2 = require('../components/CPO_Theme.js');

var _CPO_Theme3 = _interopRequireDefault(_CPO_Theme2);

var _reactCssAnimate = require('react-css-animate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chasefoto/Desktop/cpo.is/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-wrap: wrap;\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 70%;\n  margin: 0 auto;\n  text-align: center;\n  \n  > h1 {\n    font-family: \'Avenir Next\';\n    font-weight: 600;\n    font-size: 2em;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #f3f3f3;\n  }\n\n  > p {\n    color: #7d7d7d;\n    margin-top: 0px;\n    font-size: 1.2em;\n    text-align: left;\n    line-height: 26px;\n  }\n  a {\n    color: #7d7d7d;\n    border-bottom: solid 3px red;\n  }\n  a:hover {\n    color: black;\n    padding-bottom: 3px;\n  }\n'], ['\n  width: 70%;\n  margin: 0 auto;\n  text-align: center;\n  \n  > h1 {\n    font-family: \'Avenir Next\';\n    font-weight: 600;\n    font-size: 2em;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #f3f3f3;\n  }\n\n  > p {\n    color: #7d7d7d;\n    margin-top: 0px;\n    font-size: 1.2em;\n    text-align: left;\n    line-height: 26px;\n  }\n  a {\n    color: #7d7d7d;\n    border-bottom: solid 3px red;\n  }\n  a:hover {\n    color: black;\n    padding-bottom: 3px;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-family: \'Source Serif Pro\', serif;\n  background-color: #24292e;\n  color: black;\n  height: 18vh;\n  text-align: center;\n  text-transform: uppercase;\n\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  padding: 10px 20px;\n  margin: 5px;\n\n  box-shaddow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n  transition: box-shadow .25s;\n  border-radius: 3px;\n\n  > h2 {\n    font-size: 2.4em;\n    color: white;\n  }\n'], ['\n  font-family: \'Source Serif Pro\', serif;\n  background-color: #24292e;\n  color: black;\n  height: 18vh;\n  text-align: center;\n  text-transform: uppercase;\n\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  padding: 10px 20px;\n  margin: 5px;\n\n  box-shaddow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n  transition: box-shadow .25s;\n  border-radius: 3px;\n\n  > h2 {\n    font-size: 2.4em;\n    color: white;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100px;\n  border-radius: 100px;\n  margin: 30px 0 0 0;\n'], ['\n  width: 100px;\n  border-radius: 100px;\n  margin: 30px 0 0 0;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  background-image: url(\'./static/world-map.png\');\n  background-size: cover;\n'], ['\n  background-image: url(\'./static/world-map.png\');\n  background-size: cover;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #F16125;\n'], ['\n  background-color: #F16125;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #F8B03E;\n'], ['\n  background-color: #F8B03E;\n']);

var Wrapper = exports.Wrapper = _styledComponents2.default.div(_templateObject);

var PostCard = exports.PostCard = _styledComponents2.default.section(_templateObject2);

var Button = exports.Button = _styledComponents2.default.div(_templateObject3);

var Avatar = _styledComponents2.default.img(_templateObject4);

var AdventuresButton = exports.AdventuresButton = Button.extend(_templateObject5);

var AboutButton = exports.AboutButton = Button.extend(_templateObject6);

var ContactButton = exports.ContactButton = Button.extend(_templateObject7);

var Index = function Index() {
  return _react2.default.createElement(_CPO_Theme3.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, _react2.default.createElement(PostCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, _react2.default.createElement(Avatar, { src: 'https://pbs.twimg.com/profile_images/344513261569144716/a5f2f32a10970817e1545afc50a3ac4b_400x400.jpeg', __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }), _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, 'Chase Olivieri'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, 'Hi! I\'m a designer and developer that splits time between San Francisco and Lake Tahoe. I currently work as a React and Rails freelancer. I also enjoy surfing, skiing and coconut chocolate-chip cookies. Seriously, coconut is a gamechanger.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, 'I believe in design solutions that are both functional and wordly. My past work includes ', _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, 'OIA'), ', ', _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, 'Teach For America'), ', ', _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, 'Firefox'), ' and hush-hush stuff at ', _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, 'GreenWater'), '.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, 'Travel directly informs the work that I do day-to-day and exposes me to people both in busy cities and those living on the edge of the grid. I\'ve visited over 77 countries so far and am frequently on planes off to discover new places.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, 'Mi casa es su casa - cruise around the site and please free to ', _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, 'get in touch'), '! I always love chatting with new people.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, '\uD83E\uDD19 Chase')), _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, _react2.default.createElement(AdventuresButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, 'Adventures')), _react2.default.createElement(AboutButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, 'About')), _react2.default.createElement(ContactButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, 'Contact'))));
};

exports.default = Index;