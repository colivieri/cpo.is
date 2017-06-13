
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(540);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(543);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Footer = __webpack_require__(593);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chasefoto/Desktop/cpo.is/components/CPO_Theme.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  @import url(\'https://fonts.googleapis.com/css?family=Avenir+Next:600|Source+Sans+Pro:400,700,900|Source+Serif+Pro\');\n  \n  html {\n    -webkit-font-smoothing: antialiased;\n    -ms-font-smoothing: antialiased;\n  }\n  \n  body {\n    font-family: \'Source Serif Pro\', serif;\n    font-size: 16px;\n  }\n  \n  h1, h2, h3, h4 {\n    font-family: \'Source Sans Pro\', sans-serif;\n  }\n\n  a {\n    text-decoration: none;\n    :hover {\n      color: grey;\n      -webkit-transition-property: border;\n      -moz-transition-property: border;\n      transition-property: border;\n      -webkit-transition-duration: 1s;\n      -moz-transition-duration: 1s;\n      transition-duration: 1s;\n      border-bottom: 1px solid;\n    }\n  }\n'], ['\n  @import url(\'https://fonts.googleapis.com/css?family=Avenir+Next:600|Source+Sans+Pro:400,700,900|Source+Serif+Pro\');\n  \n  html {\n    -webkit-font-smoothing: antialiased;\n    -ms-font-smoothing: antialiased;\n  }\n  \n  body {\n    font-family: \'Source Serif Pro\', serif;\n    font-size: 16px;\n  }\n  \n  h1, h2, h3, h4 {\n    font-family: \'Source Sans Pro\', sans-serif;\n  }\n\n  a {\n    text-decoration: none;\n    :hover {\n      color: grey;\n      -webkit-transition-property: border;\n      -moz-transition-property: border;\n      transition-property: border;\n      -webkit-transition-duration: 1s;\n      -moz-transition-duration: 1s;\n      transition-duration: 1s;\n      border-bottom: 1px solid;\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0 auto;\n'], ['\n  margin: 0 auto;\n']);

/* eslint-disable */
(0, _styledComponents.injectGlobal)(_templateObject);

var Container = exports.Container = _styledComponents2.default.div(_templateObject2);
var Layout = function Layout(props) {
  return _react2.default.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, props.children, _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }));
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/chasefoto/Desktop/cpo.is/components/CPO_Theme.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chasefoto/Desktop/cpo.is/components/CPO_Theme.js"); } } })();

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactButton = exports.AboutButton = exports.AdventuresButton = exports.Button = exports.PostCard = exports.Wrapper = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(540);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _CPO_Theme = __webpack_require__(551);

var _styledComponents = __webpack_require__(543);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _CPO_Theme2 = __webpack_require__(551);

var _CPO_Theme3 = _interopRequireDefault(_CPO_Theme2);

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
      lineNumber: 86
    }
  }, _react2.default.createElement(PostCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, _react2.default.createElement(Avatar, { src: 'https://pbs.twimg.com/profile_images/344513261569144716/a5f2f32a10970817e1545afc50a3ac4b_400x400.jpeg', __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }), _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, 'Chase Olivieri'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, 'Hi! I\'m a designer and developer that splits time between San Francisco and Lake Tahoe. I currently work as a React and Rails freelancer. I also enjoy surfing, skiing and coconut chocolate-chip cookies. Seriously, coconut is a gamechanger.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, 'I believe in design solutions that are both functional and wordly. My past work includes ', _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, 'OIA'), ', ', _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, 'Teach For America'), ', ', _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, 'Firefox'), ' and hush-hush stuff at ', _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, 'GreenWater'), '.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, 'Travel directly informs the work that I do day-to-day and exposes me to people both in busy cities and those living on the edge of the grid. I\'ve visited over 77 countries so far and am frequently on planes off to discover new places.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, 'Mi casa es su casa - cruise around the site and please free to ', _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, 'get in touch'), '! I always love chatting with new people.'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, '\uD83E\uDD19 Chase')), _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, _react2.default.createElement(AdventuresButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, 'Adventures')), _react2.default.createElement(AboutButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, 'About')), _react2.default.createElement(ContactButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, 'Contact'))));
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

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(540);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(588);

var _link2 = _interopRequireDefault(_link);

var _styledComponents = __webpack_require__(543);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/chasefoto/Desktop/cpo.is/components/Footer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chasefoto/Desktop/cpo.is/components/Footer.js"); } } })();

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(552);


/***/ })

},[596]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ1BPX1RoZW1lLmpzP2Q5NmYyNTEiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZDk2ZjI1MSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcz9kOTZmMjUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdEdsb2JhbCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5pbmplY3RHbG9iYWxgXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QXZlbmlyK05leHQ6NjAwfFNvdXJjZStTYW5zK1Bybzo0MDAsNzAwLDkwMHxTb3VyY2UrU2VyaWYrUHJvJyk7XG4gIFxuICBodG1sIHtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbXMtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB9XG4gIFxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTZXJpZiBQcm8nLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgXG4gIGgxLCBoMiwgaDMsIGg0IHtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIH1cblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgOmhvdmVyIHtcbiAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXI7XG4gICAgICAtbW96LXRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlcjtcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlcjtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDAgYXV0bztcbmBcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxuICA8Q29udGFpbmVyPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8Rm9vdGVyLz5cbiAgPC9Db250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ1BPX1RoZW1lLmpzIiwiaW1wb3J0IHsgSW5qZWN0R2xvYmFsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DUE9fVGhlbWUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQ1BPX1RoZW1lLmpzJztcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5gXG5cbmV4cG9ydCBjb25zdCBQb3N0Q2FyZCA9IHN0eWxlZC5zZWN0aW9uYFxuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgPiBoMSB7XG4gICAgZm9udC1mYW1pbHk6ICdBdmVuaXIgTmV4dCc7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YzZjNmMztcbiAgfVxuXG4gID4gcCB7XG4gICAgY29sb3I6ICM3ZDdkN2Q7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuICBhIHtcbiAgICBjb2xvcjogIzdkN2Q3ZDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggcmVkO1xuICB9XG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTZXJpZiBQcm8nLCBzZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjkyZTtcbiAgY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDE4dmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogNXB4O1xuXG4gIGJveC1zaGFkZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMCwwLC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjI1cztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gID4gaDIge1xuICAgIGZvbnQtc2l6ZTogMi40ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5gO1xuXG5jb25zdCBBdmF0YXIgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW46IDMwcHggMCAwIDA7XG5gO1xuXG5leHBvcnQgY29uc3QgQWR2ZW50dXJlc0J1dHRvbiA9IEJ1dHRvbi5leHRlbmRgXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9zdGF0aWMvd29ybGQtbWFwLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IEFib3V0QnV0dG9uID0gQnV0dG9uLmV4dGVuZGBcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxNjEyNTtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250YWN0QnV0dG9uID0gQnV0dG9uLmV4dGVuZGBcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4QjAzRTtcbmA7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxQb3N0Q2FyZD4gICAgICBcbiAgICAgIDxBdmF0YXIgc3JjPVwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzM0NDUxMzI2MTU2OTE0NDcxNi9hNWYyZjMyYTEwOTcwODE3ZTE1NDVhZmM1MGEzYWM0Yl80MDB4NDAwLmpwZWdcIi8+XG4gICAgICA8aDE+Q2hhc2UgT2xpdmllcmk8L2gxPlxuICAgICAgPHA+SGkhIEknbSBhIGRlc2lnbmVyIGFuZCBkZXZlbG9wZXIgdGhhdCBzcGxpdHMgdGltZSBiZXR3ZWVuIFNhbiBGcmFuY2lzY28gYW5kIExha2UgVGFob2UuIEkgY3VycmVudGx5IHdvcmsgYXMgYSBSZWFjdCBhbmQgUmFpbHMgZnJlZWxhbmNlci4gSSBhbHNvIGVuam95IHN1cmZpbmcsIHNraWluZyBhbmQgY29jb251dCBjaG9jb2xhdGUtY2hpcCBjb29raWVzLiBTZXJpb3VzbHksIGNvY29udXQgaXMgYSBnYW1lY2hhbmdlci48L3A+XG4gICAgICA8cD5JIGJlbGlldmUgaW4gZGVzaWduIHNvbHV0aW9ucyB0aGF0IGFyZSBib3RoIGZ1bmN0aW9uYWwgYW5kIHdvcmRseS4gTXkgcGFzdCB3b3JrIGluY2x1ZGVzIDxhIGhyZWY9XCIjXCI+T0lBPC9hPiwgPGEgaHJlZj1cIiNcIj5UZWFjaCBGb3IgQW1lcmljYTwvYT4sIDxhIGhyZWY9XCIjXCI+RmlyZWZveDwvYT4gYW5kIGh1c2gtaHVzaCBzdHVmZiBhdCA8YSBocmVmPVwiI1wiPkdyZWVuV2F0ZXI8L2E+LjwvcD5cbiAgICAgIDxwPlRyYXZlbCBkaXJlY3RseSBpbmZvcm1zIHRoZSB3b3JrIHRoYXQgSSBkbyBkYXktdG8tZGF5IGFuZCBleHBvc2VzIG1lIHRvIHBlb3BsZSBib3RoIGluIGJ1c3kgY2l0aWVzIGFuZCB0aG9zZSBsaXZpbmcgb24gdGhlIGVkZ2Ugb2YgdGhlIGdyaWQuIEkndmUgdmlzaXRlZCBvdmVyIDc3IGNvdW50cmllcyBzbyBmYXIgYW5kIGFtIGZyZXF1ZW50bHkgb24gcGxhbmVzIG9mZiB0byBkaXNjb3ZlciBuZXcgcGxhY2VzLjwvcD5cbiAgICAgIDxwPk1pIGNhc2EgZXMgc3UgY2FzYSAtIGNydWlzZSBhcm91bmQgdGhlIHNpdGUgYW5kIHBsZWFzZSBmcmVlIHRvIDxhIGhyZWY9XCIjXCI+Z2V0IGluIHRvdWNoPC9hPiEgSSBhbHdheXMgbG92ZSBjaGF0dGluZyB3aXRoIG5ldyBwZW9wbGUuPC9wPlxuICAgICAgPHA+8J+kmSBDaGFzZTwvcD5cbiAgICA8L1Bvc3RDYXJkPlxuICAgIDxXcmFwcGVyPlxuICAgICAgPEFkdmVudHVyZXNCdXR0b24+PGgyPkFkdmVudHVyZXM8L2gyPjwvQWR2ZW50dXJlc0J1dHRvbj5cbiAgICAgIDxBYm91dEJ1dHRvbj48aDI+QWJvdXQ8L2gyPjwvQWJvdXRCdXR0b24+XG4gICAgICA8Q29udGFjdEJ1dHRvbj48aDI+Q29udGFjdDwvaDI+PC9Db250YWN0QnV0dG9uPlxuICAgIDwvV3JhcHBlcj5cbiAgPC9MYXlvdXQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgRm9vdGVyQ29udGFpbmVyID0gc3R5bGVkLmZvb3RlcmBcbiAgcGFkZGluZzogMXJlbSAwIC42NTYyNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgY29sb3I6ICM2NjY7XG4gIGhlaWdodDogMzB2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDVweDtcbiAgZGlzcGxheTogZmxleDsgXG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICA+IGgzIHtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIH1cblxuICA+IGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6ICMyNDI5MmU7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG5gXG5cbmNvbnN0IENoYXNlSWNvbiA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA1JTtcbiAgbWFyZ2luOiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG5gXG5jb25zdCBTb2NpYWwgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xuICBwYWRkaW5nOiAxMnB4O1xuICBcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbmBcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICAgIDxGb290ZXJDb250YWluZXI+XG4gICAgICAgIDxDaGFzZUljb24gc3JjPVwiLi9zdGF0aWMvYy1ncmV5LmpwZ1wiLz5cbiAgICAgICAgPGgzPkNoYXNlIE9saXZpZXJpPC9oMz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWR2ZW50dXJlc1wiPlxuICAgICAgICAgIDxhPkFkdmVudHVyZXM8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxhPkFib3V0PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgIDxhPkNvbnRhY3Q8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPFNvY2lhbCBzcmM9XCIuL3N0YXRpYy9pbnN0YWdyYW0ucG5nXCIgLz5cbiAgICAgICAgPFNvY2lhbCBzcmM9XCIuL3N0YXRpYy90d2l0dGVyLnBuZ1wiIC8+XG4gICAgICAgIDxTb2NpYWwgc3JjPVwiLi9zdGF0aWMvYW5nZWxsaXN0LnBuZ1wiLz5cbiAgICA8L0Zvb3RlckNvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Gb290ZXIuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQStCQTtBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQTZCQTtBQUNBO0FBeUJBO0FBQ0E7QUFLQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQTZCQTtBQUtBO0FBQ0E7QUFVQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        