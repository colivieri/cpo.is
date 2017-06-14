
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(542);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = __webpack_require__(527);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    @media(max-width: ', 'px) {\n      ', '\n    }\n  '], ['\n    @media(max-width: ', 'px) {\n      ', '\n    }\n  ']);

var sizes = {
  phone: 375,
  tablet: 768,
  desktop: 992,
  giant: 1170
};

function phone() {
  return (0, _styledComponents.css)(_templateObject, sizes.phone, _styledComponents.css.apply(undefined, arguments));
}

function giant() {
  return (0, _styledComponents.css)(_templateObject, sizes.giant, _styledComponents.css.apply(undefined, arguments));
}

var media = {
  phone: phone,
  giant: giant
};

exports.default = media;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/chasefoto/Desktop/cpo.is/components/media.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chasefoto/Desktop/cpo.is/components/media.js"); } } })();

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = exports.yellow = exports.orange = exports.red = exports.grey = exports.black = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(542);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(527);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Footer = __webpack_require__(555);

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = __webpack_require__(559);

var _Header2 = _interopRequireDefault(_Header);

var _media = __webpack_require__(543);

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chasefoto/Desktop/cpo.is/components/CPO_Theme.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  @import url(\'https://fonts.googleapis.com/css?family=Assistant:100,400,700|Avenir+Next:600|Source+Sans+Pro:400,700,900|Source+Serif+Pro\');\n\n  html {\n    -webkit-font-smoothing: antialiased;\n    -ms-font-smoothing: antialiased;\n  }\n  \n  body {\n    font-family: \'Assistant\', serif;\n    font-size: 16px;\n  }\n  \n  h1, h2, h3, h4 {\n    font-family: \'Assistant\', sans-serif;\n  }\n\n  a {\n    text-decoration: none;\n    :hover {\n      color: grey;\n      -webkit-transition-property: border;\n      -moz-transition-property: border;\n      transition-property: border;\n      -webkit-transition-duration: 1s;\n      -moz-transition-duration: 1s;\n      transition-duration: 1s;\n      border-bottom: 1px solid;\n    }\n  }\n'], ['\n  @import url(\'https://fonts.googleapis.com/css?family=Assistant:100,400,700|Avenir+Next:600|Source+Sans+Pro:400,700,900|Source+Serif+Pro\');\n\n  html {\n    -webkit-font-smoothing: antialiased;\n    -ms-font-smoothing: antialiased;\n  }\n  \n  body {\n    font-family: \'Assistant\', serif;\n    font-size: 16px;\n  }\n  \n  h1, h2, h3, h4 {\n    font-family: \'Assistant\', sans-serif;\n  }\n\n  a {\n    text-decoration: none;\n    :hover {\n      color: grey;\n      -webkit-transition-property: border;\n      -moz-transition-property: border;\n      transition-property: border;\n      -webkit-transition-duration: 1s;\n      -moz-transition-duration: 1s;\n      transition-duration: 1s;\n      border-bottom: 1px solid;\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0 auto;\n'], ['\n  margin: 0 auto;\n']);

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
      lineNumber: 50
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), props.children, _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }));
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/chasefoto/Desktop/cpo.is/components/CPO_Theme.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chasefoto/Desktop/cpo.is/components/CPO_Theme.js"); } } })();

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(542);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(554);

var _link2 = _interopRequireDefault(_link);

var _styledComponents = __webpack_require__(527);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = __webpack_require__(543);

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chasefoto/Desktop/cpo.is/components/Footer.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: 1rem 0 .65625rem;\n  background-color: #f2f2f2;\n  color: #666;\n  height: 100%;\n  text-align: center;\n  margin: 5px;\n  display: flex; \n  flex-direction: row;\n\n  flex-wrap: wrap;\n\n  > div {\n    display: flex; \n    flex-basis: calc(100%);  \n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n'], ['\n  padding: 1rem 0 .65625rem;\n  background-color: #f2f2f2;\n  color: #666;\n  height: 100%;\n  text-align: center;\n  margin: 5px;\n  display: flex; \n  flex-direction: row;\n\n  flex-wrap: wrap;\n\n  > div {\n    display: flex; \n    flex-basis: calc(100%);  \n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 55px;\n  margin: 20px 0;\n'], ['\n  width: 55px;\n  margin: 20px 0;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  width: 30px;\n  margin: 20px;\n  background-color: #e3e3e3;\n  padding: 12px;\n  \n  &:hover {\n    background-color: white;\n  }\n\n  ', '\n'], ['\n  width: 30px;\n  margin: 20px;\n  background-color: #e3e3e3;\n  padding: 12px;\n  \n  &:hover {\n    background-color: white;\n  }\n\n  ', '\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    width: 20px;\n  '], ['\n    width: 20px;\n  ']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-wrap: wrap;\n  cursor: pointer;\n  cursor: hand;\n\n  > h3 {\n    padding: 0 20px;\n    font-size: 1em;\n    ', '\n  > h3:hover {\n    color: black;\n    transition: color .3s;\n  }\n\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  cursor: pointer;\n  cursor: hand;\n\n  > h3 {\n    padding: 0 20px;\n    font-size: 1em;\n    ', '\n  > h3:hover {\n    color: black;\n    transition: color .3s;\n  }\n\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n      font-size: .8em;\n      padding: 0 10px;\n    }'], ['\n      font-size: .8em;\n      padding: 0 10px;\n    }']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n'], ['\n']);

var FooterContainer = _styledComponents2.default.footer(_templateObject);

var ChaseIcon = _styledComponents2.default.img(_templateObject2);
var Social = _styledComponents2.default.img(_templateObject3, _media2.default.phone(_templateObject4));

var FooterNav = _styledComponents2.default.section(_templateObject5, _media2.default.phone(_templateObject6));
var FooterSocial = _styledComponents2.default.section(_templateObject7);

var Footer = function Footer() {
  return _react2.default.createElement(FooterContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, _react2.default.createElement(ChaseIcon, { src: './static/c-grey.jpg', __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  })), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, _react2.default.createElement(FooterNav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/adventures', __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, 'Adventures')), _react2.default.createElement(_link2.default, { href: '/gear', __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, 'Gear')), _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, 'Contact')))), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, _react2.default.createElement(FooterSocial, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, _react2.default.createElement(_link2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, _react2.default.createElement(Social, { src: './static/instagram.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  })), _react2.default.createElement(Social, { src: './static/twitter.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }), _react2.default.createElement(Social, { src: './static/angellist.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }))));
};

exports.default = Footer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/chasefoto/Desktop/cpo.is/components/Footer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chasefoto/Desktop/cpo.is/components/Footer.js"); } } })();

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AboutButton = exports.GearButton = exports.AdventuresButton = exports.Button = exports.PostCard = exports.Wrapper = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(542);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _CPO_Theme = __webpack_require__(544);

var _CPO_Theme2 = _interopRequireDefault(_CPO_Theme);

var _link = __webpack_require__(554);

var _link2 = _interopRequireDefault(_link);

var _styledComponents = __webpack_require__(527);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = __webpack_require__(543);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/chasefoto/Desktop/cpo.is/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chasefoto/Desktop/cpo.is/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(557);


/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(542);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(554);

var _link2 = _interopRequireDefault(_link);

var _styledComponents = __webpack_require__(527);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = __webpack_require__(543);

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chasefoto/Desktop/cpo.is/components/Header.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: space-between;\n  padding: 0 10px;\n\n  h1, a {\n    color: black;\n    text-transform: none;\n  }\n   ', '\n  ', '\n'], ['\n  display: flex;\n  justify-content: space-between;\n  padding: 0 10px;\n\n  h1, a {\n    color: black;\n    text-transform: none;\n  }\n   ', '\n  ', '\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    flex-direction: row;\n    align-items: center;\n    }\n  '], ['\n    flex-direction: row;\n    align-items: center;\n    }\n  ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    flex-direction: column;\n    align-items: center;\n    }\n  '], ['\n    flex-direction: column;\n    align-items: center;\n    }\n  ']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  list-style: none;\n  padding: 0px;\n\n\n  li {\n    padding: 0 10px;\n  }\n  a {\n    font-weight: 700;\n    color: black;\n'], ['\n  display: flex;\n  list-style: none;\n  padding: 0px;\n\n\n  li {\n    padding: 0 10px;\n  }\n  a {\n    font-weight: 700;\n    color: black;\n']);

var MainHeader = _styledComponents2.default.header(_templateObject, _media2.default.giant(_templateObject2), _media2.default.phone(_templateObject3));

var MainNav = _styledComponents2.default.ul(_templateObject4);

var Header = function Header() {
  return _react2.default.createElement(MainHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, 'chase olivieri')), _react2.default.createElement(MainNav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement(_link2.default, { href: '/adventures', __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, 'Adventures')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement(_link2.default, { href: '/gear', __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, 'Gear')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, 'Contact'))));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/chasefoto/Desktop/cpo.is/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chasefoto/Desktop/cpo.is/components/Header.js"); } } })();

/***/ })

},[558]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVkaWEuanM/MDVhNTdiYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NQT19UaGVtZS5qcz8wNWE1N2JiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzPzA1YTU3YmIiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/MDVhNTdiYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz8wNWE1N2JiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3Qgc2l6ZXMgPSB7XG4gIHBob25lOiAzNzUsXG4gIHRhYmxldDogNzY4LFxuICBkZXNrdG9wOiA5OTIsXG4gIGdpYW50OiAxMTcwXG59O1xuXG5mdW5jdGlvbiBwaG9uZSguLi5hcmdzKSB7XG4gIHJldHVybiBjc3NgXG4gICAgQG1lZGlhKG1heC13aWR0aDogJHtzaXplcy5waG9uZX1weCkge1xuICAgICAgJHtjc3MoLi4uYXJncyl9XG4gICAgfVxuICBgO1xufVxuXG5mdW5jdGlvbiBnaWFudCguLi5hcmdzKSB7XG4gIHJldHVybiBjc3NgXG4gICAgQG1lZGlhKG1heC13aWR0aDogJHtzaXplcy5naWFudH1weCkge1xuICAgICAgJHtjc3MoLi4uYXJncyl9XG4gICAgfVxuICBgO1xufVxuXG5jb25zdCBtZWRpYSA9IHtcbiAgcGhvbmUsXG4gIGdpYW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZWRpYTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21lZGlhLmpzIiwiaW1wb3J0IHsgaW5qZWN0R2xvYmFsIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgbWVkaWEgZnJvbSAnLi4vY29tcG9uZW50cy9tZWRpYSc7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5pbmplY3RHbG9iYWxgXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QXNzaXN0YW50OjEwMCw0MDAsNzAwfEF2ZW5pcitOZXh0OjYwMHxTb3VyY2UrU2FucytQcm86NDAwLDcwMCw5MDB8U291cmNlK1NlcmlmK1BybycpO1xuXG4gIGh0bWwge1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tcy1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIH1cbiAgXG4gIGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50Jywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIFxuICBoMSwgaDIsIGgzLCBoNCB7XG4gICAgZm9udC1mYW1pbHk6ICdBc3Npc3RhbnQnLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIDpob3ZlciB7XG4gICAgICBjb2xvcjogZ3JleTtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyO1xuICAgICAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXI7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXI7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAgICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgIH1cbiAgfVxuYFxuZXhwb3J0IGNvbnN0IGJsYWNrID0gJyMyMjInO1xuZXhwb3J0IGNvbnN0IGdyZXkgPSAnIzdkN2Q3ZCc7XG5leHBvcnQgY29uc3QgcmVkID0gJyMyNDI5MkUnO1xuZXhwb3J0IGNvbnN0IG9yYW5nZSA9ICcjRjE2MTI1JztcbmV4cG9ydCBjb25zdCB5ZWxsb3cgPSAnI0Y4QjAzRTsnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAwIGF1dG87XG5gXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPENvbnRhaW5lcj5cbiAgICA8SGVhZGVyLz5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8Rm9vdGVyLz5cbiAgPC9Db250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ1BPX1RoZW1lLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgbWVkaWEgZnJvbSAnLi4vY29tcG9uZW50cy9tZWRpYSc7XG5cbmNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZC5mb290ZXJgXG4gIHBhZGRpbmc6IDFyZW0gMCAuNjU2MjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGNvbG9yOiAjNjY2O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgZmxleC1iYXNpczogY2FsYygxMDAlKTsgIFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuYFxuXG5jb25zdCBDaGFzZUljb24gPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogNTVweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG5gXG5jb25zdCBTb2NpYWwgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xuICBwYWRkaW5nOiAxMnB4O1xuICBcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICAke21lZGlhLnBob25lYFxuICAgIHdpZHRoOiAyMHB4O1xuICBgfVxuYFxuXG5jb25zdCBGb290ZXJOYXYgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcblxuICA+IGgzIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgJHttZWRpYS5waG9uZWBcbiAgICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9YFxuICB9XG4gID4gaDM6aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3M7XG4gIH1cblxuYFxuY29uc3QgRm9vdGVyU29jaWFsID0gc3R5bGVkLnNlY3Rpb25gXG5gXG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgICA8Rm9vdGVyQ29udGFpbmVyPlxuICAgICAgPGRpdj5cbiAgICAgICAgPENoYXNlSWNvbiBzcmM9XCIuL3N0YXRpYy9jLWdyZXkuanBnXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICAgPGRpdj5cbiAgICAgICAgPEZvb3Rlck5hdj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxoMz5Ib21lPC9oMz48L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hZHZlbnR1cmVzXCI+PGgzPkFkdmVudHVyZXM8L2gzPjwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2dlYXJcIj48aDM+R2VhcjwvaDM+PC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPjxoMz5Db250YWN0PC9oMz48L0xpbms+XG4gICAgICAgIDwvRm9vdGVyTmF2PlxuICAgICAgPC9kaXY+XG4gICAgICAgPGRpdj5cbiAgICAgICA8Rm9vdGVyU29jaWFsPlxuICAgICAgICAgIDxMaW5rPjxTb2NpYWwgc3JjPVwiLi9zdGF0aWMvaW5zdGFncmFtLnBuZ1wiIC8+PC9MaW5rPlxuICAgICAgICAgIDxTb2NpYWwgc3JjPVwiLi9zdGF0aWMvdHdpdHRlci5wbmdcIiAvPlxuICAgICAgICAgIDxTb2NpYWwgc3JjPVwiLi9zdGF0aWMvYW5nZWxsaXN0LnBuZ1wiLz5cbiAgICAgICAgPC9Gb290ZXJTb2NpYWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L0Zvb3RlckNvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJpbXBvcnQgeyBJbmplY3RHbG9iYWwsIGJsYWNrLCBncmV5LCByZWQsIG9yYW5nZSwgeWVsbG93IH0gZnJvbSAnLi4vY29tcG9uZW50cy9DUE9fVGhlbWUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0NQT19UaGVtZSc7XG5pbXBvcnQgbWVkaWEgZnJvbSAnLi4vY29tcG9uZW50cy9tZWRpYSc7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbmBcbmV4cG9ydCBjb25zdCBQb3N0Q2FyZCA9IHN0eWxlZC5zZWN0aW9uYFxuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgXG4gICR7bWVkaWEuZ2lhbnRgXG4gICAgd2lkdGg6IDcwJTtcbiAgYH1cbiAgJHttZWRpYS5waG9uZWBcbiAgICB3aWR0aDogOTUlO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICB9XG4gIGB9XG5cbiAgPiBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YzZjNmMztcbiAgfVxuXG4gID4gcCB7XG4gICAgY29sb3I6ICR7Z3JleX07XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuICBhIHtcbiAgICBjb2xvcjogIzdkN2Q3ZDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggcmVkO1xuICB9XG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgIHRyYW5zaXRpb246IHBhZGRpbmctYm90dG9tIC4xcztcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2VyaWYgUHJvJywgc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cmVkfTtcbiAgY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDE4dmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY3Vyc29yOiBwb2ludGVyOyBcbiAgY3Vyc29yOiBoYW5kO1xuXG4gIGZsZXg6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDVweDtcblxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4yNXM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICA+IGgyIHtcbiAgICBmb250LXNpemU6IDIuNGVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuYDtcblxuY29uc3QgQXZhdGFyID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luOiAzMHB4IDAgMCAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEFkdmVudHVyZXNCdXR0b24gPSBCdXR0b24uZXh0ZW5kYFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vc3RhdGljL3dvcmxkLW1hcC5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBHZWFyQnV0dG9uID0gQnV0dG9uLmV4dGVuZGBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtvcmFuZ2V9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEFib3V0QnV0dG9uID0gQnV0dG9uLmV4dGVuZGBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt5ZWxsb3d9O1xuYDtcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPFBvc3RDYXJkIGNsYXNzTmFtZT1cImFuaW1hdGVkIGZhZGVJblVwXCI+ICAgICAgXG4gICAgICA8QXZhdGFyIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy8zNDQ1MTMyNjE1NjkxNDQ3MTYvYTVmMmYzMmExMDk3MDgxN2UxNTQ1YWZjNTBhM2FjNGJfNDAweDQwMC5qcGVnXCIvPlxuICAgICAgPGgxPkNoYXNlIE9saXZpZXJpPC9oMT5cbiAgICAgIDxwPkhpISBJJ20gYSBkZXNpZ25lciwgZGV2ZWxvcGVyLCBwaG90b2dyYXBoZXIgYW5kIGZvdW5kZXIgb2YgPGEgaHJlZj1cImh0dHBzOi8vbGlzdG9sYWJzLmNvbVwiPkxpc3RvIExhYnM8L2E+LiBJIGFsc28gZW5qb3kgc3VyZmluZywgc2tpaW5nIGFuZCBjb2NvbnV0IGNob2NvbGF0ZS1jaGlwIGNvb2tpZXMuIFNlcmlvdXNseSwgY29jb251dCBpcyBhIGdhbWVjaGFuZ2VyLjwvcD5cbiAgICAgIDxwPk15IHBhc3Qgd29yayBpbmNsdWRlcyBwcm9qZWN0cyBhdCA8YSBocmVmPVwiI1wiPk9JQTwvYT4sIDxhIGhyZWY9XCIjXCI+VGVhY2ggRm9yIEFtZXJpY2E8L2E+LCA8YSBocmVmPVwiI1wiPkZpcmVmb3g8L2E+IGFuZCBodXNoLWh1c2ggc3R1ZmYgYXQgPGEgaHJlZj1cIiNcIj5HcmVlbldhdGVyPC9hPi48L3A+XG4gICAgICA8cD5UcmF2ZWwgZGlyZWN0bHkgaW5mb3JtcyB0aGUgd29yayB0aGF0IEkgZG8gZGF5LXRvLWRheSBhbmQgZXhwb3NlcyBtZSB0byBwZW9wbGUgYm90aCBpbiBidXN5IGNpdGllcyBhbmQgdGhvc2UgbGl2aW5nIG9uIHRoZSBlZGdlIG9mIHRoZSBncmlkLiBJJ3ZlIHZpc2l0ZWQgb3ZlciA3NyBjb3VudHJpZXMgc28gZmFyIGFuZCBJIGFtIGZyZXF1ZW50bHkgb24gcGxhbmVzIG9mZiB0byBkaXNjb3ZlciBuZXcgcGxhY2VzLjwvcD5cbiAgICAgIDxwPkkgZ3JhZHVhdGVkIGZyb20gRHVrZSBVbml2ZXJzaXR5IGEgZmV3IHllYXJzIGFnbyBhbmQgbGF0ZXIgZWFybmVkIGEgbWFzdGVyJ3MgZGVncmVlIGZyb20gVW5pdmVyc2l0eSBvZiBNaWFtaS4gUGxlYXNlIGZyZWUgdG8gPGEgaHJlZj1cIiNcIj5nZXQgaW4gdG91Y2g8L2E+ISBJIGFsd2F5cyBsb3ZlIGNoYXR0aW5nIHdpdGggbmV3IHBlb3BsZS48L3A+XG4gICAgICA8cD7wn6SZIENoYXNlPC9wPlxuICAgIDwvUG9zdENhcmQ+XG4gICAgPFdyYXBwZXIgY2xhc3NOYW1lPVwiYW5pbWF0ZWQgZmFkZUluVXBcIj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYWR2ZW50dXJlc1wiPlxuICAgICAgICA8QWR2ZW50dXJlc0J1dHRvbj48aDI+QWR2ZW50dXJlczwvaDI+PC9BZHZlbnR1cmVzQnV0dG9uPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9nZWFyXCI+XG5cbiAgICAgICAgPEdlYXJCdXR0b24+PGgyPkdlYXI8L2gyPjwvR2VhckJ1dHRvbj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICA8QWJvdXRCdXR0b24+PGgyPkFib3V0PC9oMj48L0Fib3V0QnV0dG9uPlxuICAgICAgPC9MaW5rPlxuICAgIDwvV3JhcHBlcj5cbiAgPC9MYXlvdXQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBtZWRpYSBmcm9tICcuLi9jb21wb25lbnRzL21lZGlhJztcblxuY29uc3QgTWFpbkhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAxMHB4O1xuXG4gIGgxLCBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgICR7bWVkaWEuZ2lhbnRgXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgYH1cbiAgJHttZWRpYS5waG9uZWBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICBgfVxuYDtcblxuY29uc3QgTWFpbk5hdiA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMHB4O1xuXG5cbiAgbGkge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuICBhIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiBibGFjaztcbmA7XG4gIFxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICAgIDxNYWluSGVhZGVyPlxuICAgICAgPGgzPjxMaW5rIGhyZWY9XCIvXCI+Y2hhc2Ugb2xpdmllcmk8L0xpbms+PC9oMz5cbiAgICAgIDxNYWluTmF2PlxuICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9hZHZlbnR1cmVzXCI+QWR2ZW50dXJlczwvTGluaz48L2xpPlxuICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9nZWFyXCI+R2VhcjwvTGluaz48L2xpPlxuICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvTGluaz48L2xpPlxuICAgICAgPC9NYWluTmF2PlxuICAgIDwvTWFpbkhlYWRlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFLQTtBQUNBOzs7QUFPQTtBQUNBOzs7QUFPQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBb0JBO0FBSUE7QUFDQTtBQWNBO0FBb0JBO0FBQ0E7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFJQTtBQUNBO0FBdUNBO0FBQ0E7QUEwQkE7QUFDQTtBQUtBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNIQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBb0JBO0FBQ0E7QUFhQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        