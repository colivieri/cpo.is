'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AboutButton = exports.GearButton = exports.AdventuresButton = exports.Button = exports.PostCard = exports.Wrapper = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CPO_Theme = require('../components/CPO_Theme');

var _CPO_Theme2 = _interopRequireDefault(_CPO_Theme);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = require('../components/media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chasefoto/Desktop/cpo.is/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-flow: row wrap;\n'], ['\n  display: flex;\n  flex-flow: row wrap;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 70%;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 20px;\n  \n  ', '\n  ', '\n\n  > h1 {\n    font-weight: 600;\n    font-size: 2em;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #f3f3f3;\n  }\n\n  > p {\n    color: ', ';\n    margin-top: 0px;\n    font-size: 1.2em;\n    text-align: left;\n    line-height: 26px;\n  }\n  a {\n    color: #7d7d7d;\n    border-bottom: solid 3px red;\n  }\n  a:hover {\n    color: black;\n    padding-bottom: 2px;\n    transition: padding-bottom .1s;\n  }\n'], ['\n  width: 70%;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 20px;\n  \n  ', '\n  ', '\n\n  > h1 {\n    font-weight: 600;\n    font-size: 2em;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #f3f3f3;\n  }\n\n  > p {\n    color: ', ';\n    margin-top: 0px;\n    font-size: 1.2em;\n    text-align: left;\n    line-height: 26px;\n  }\n  a {\n    color: #7d7d7d;\n    border-bottom: solid 3px red;\n  }\n  a:hover {\n    color: black;\n    padding-bottom: 2px;\n    transition: padding-bottom .1s;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    width: 70%;\n  '], ['\n    width: 70%;\n  ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    width: 95%;\n    font-size: .9em;\n    }\n  '], ['\n    width: 95%;\n    font-size: .9em;\n    }\n  ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  font-family: \'Source Serif Pro\', serif;\n  background-color: ', ';\n  color: black;\n  height: 18vh;\n  text-align: center;\n  text-transform: uppercase;\n  cursor: pointer; \n  cursor: hand;\n\n  flex: 25%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  padding: 10px 20px;\n  margin: 5px;\n\n  transition: box-shadow .25s;\n  border-radius: 3px;\n\n  > h2 {\n    font-size: 2.4em;\n    color: white;\n  }\n'], ['\n  font-family: \'Source Serif Pro\', serif;\n  background-color: ', ';\n  color: black;\n  height: 18vh;\n  text-align: center;\n  text-transform: uppercase;\n  cursor: pointer; \n  cursor: hand;\n\n  flex: 25%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  padding: 10px 20px;\n  margin: 5px;\n\n  transition: box-shadow .25s;\n  border-radius: 3px;\n\n  > h2 {\n    font-size: 2.4em;\n    color: white;\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100px;\n  border-radius: 100px;\n  margin: 30px 0 0 0;\n'], ['\n  width: 100px;\n  border-radius: 100px;\n  margin: 30px 0 0 0;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  background-image: url(\'./static/world-map.png\');\n  background-size: cover;\n'], ['\n  background-image: url(\'./static/world-map.png\');\n  background-size: cover;\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n'], ['\n  background-color: ', ';\n']);

var Wrapper = exports.Wrapper = _styledComponents2.default.div(_templateObject);
var PostCard = exports.PostCard = _styledComponents2.default.section(_templateObject2, _media2.default.giant(_templateObject3), _media2.default.phone(_templateObject4), _CPO_Theme.grey);

var Button = exports.Button = _styledComponents2.default.div(_templateObject5, _CPO_Theme.red);

var Avatar = _styledComponents2.default.img(_templateObject6);

var AdventuresButton = exports.AdventuresButton = Button.extend(_templateObject7);

var GearButton = exports.GearButton = Button.extend(_templateObject8, _CPO_Theme.orange);

var AboutButton = exports.AboutButton = Button.extend(_templateObject8, _CPO_Theme.yellow);

var Index = function Index() {
  return _react2.default.createElement(_CPO_Theme2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, _react2.default.createElement(PostCard, { className: 'animated fadeInUp', __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, _react2.default.createElement(Avatar, { src: 'https://pbs.twimg.com/profile_images/344513261569144716/a5f2f32a10970817e1545afc50a3ac4b_400x400.jpeg', __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }), _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, 'Chase Olivieri'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, 'Hi! I\'m a designer, developer, photographer and founder of ', _react2.default.createElement('a', { href: 'https://listolabs.com', __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, 'Listo Labs'), '. I also enjoy surfing, skiing and coconut chocolate-chip cookies. Seriously, coconut is a gamechanger.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, 'My past work includes projects at ', _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, 'OIA'), ', ', _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, 'Teach For America'), ', ', _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, 'Firefox'), ' and hush-hush stuff at ', _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, 'GreenWater'), '.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, 'Travel directly informs the work that I do day-to-day and exposes me to people both in busy cities and those living on the edge of the grid. I\'ve visited over 77 countries so far and I am frequently on planes off to discover new places.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, 'I graduated from Duke University a few years ago and later earned a master\'s degree from University of Miami. Please free to ', _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, 'get in touch'), '! I always love chatting with new people.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, '\uD83E\uDD19 Chase')), _react2.default.createElement(Wrapper, { className: 'animated fadeInUp', __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, _react2.default.createElement(_link2.default, { href: '/adventures', __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, _react2.default.createElement(AdventuresButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, 'Adventures'))), _react2.default.createElement(_link2.default, { href: '/gear', __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, _react2.default.createElement(GearButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, 'Gear'))), _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, _react2.default.createElement(AboutButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }, 'About')))));
};

exports.default = Index;