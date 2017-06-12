
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

var _footer = __webpack_require__(597);

var _footer2 = _interopRequireDefault(_footer);

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
  }, props.children, _react2.default.createElement(_footer2.default, {
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

var _reactCssAnimate = __webpack_require__(592);

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

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(552);


/***/ }),

/***/ 597:
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

var _jsxFileName = '/Users/chasefoto/Desktop/cpo.is/components/footer.js';

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/chasefoto/Desktop/cpo.is/components/footer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chasefoto/Desktop/cpo.is/components/footer.js"); } } })();

/***/ })

},[596]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ1BPX1RoZW1lLmpzPzA2Y2M1YWMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/MDZjYzVhYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci5qcz8wNmNjNWFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdEdsb2JhbCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5pbmplY3RHbG9iYWxgXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QXZlbmlyK05leHQ6NjAwfFNvdXJjZStTYW5zK1Bybzo0MDAsNzAwLDkwMHxTb3VyY2UrU2VyaWYrUHJvJyk7XG4gIFxuICBodG1sIHtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbXMtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB9XG4gIFxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTZXJpZiBQcm8nLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgXG4gIGgxLCBoMiwgaDMsIGg0IHtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIH1cblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgOmhvdmVyIHtcbiAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXI7XG4gICAgICAtbW96LXRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlcjtcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlcjtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDAgYXV0bztcbmBcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxuICA8Q29udGFpbmVyPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8Rm9vdGVyLz5cbiAgPC9Db250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ1BPX1RoZW1lLmpzIiwiaW1wb3J0IHsgSW5qZWN0R2xvYmFsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DUE9fVGhlbWUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQ1BPX1RoZW1lLmpzJztcbmltcG9ydCB7IGZhZGVJblVwIH0gZnJvbSAncmVhY3QtY3NzLWFuaW1hdGUnO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbmBcblxuZXhwb3J0IGNvbnN0IFBvc3RDYXJkID0gc3R5bGVkLnNlY3Rpb25gXG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICA+IGgxIHtcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pciBOZXh0JztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjNmM2YzO1xuICB9XG5cbiAgPiBwIHtcbiAgICBjb2xvcjogIzdkN2Q3ZDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG4gIGEge1xuICAgIGNvbG9yOiAjN2Q3ZDdkO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCByZWQ7XG4gIH1cbiAgYTpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNlcmlmIFBybycsIHNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJlO1xuICBjb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMTh2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiA1cHg7XG5cbiAgYm94LXNoYWRkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDAsLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMjVzO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgPiBoMiB7XG4gICAgZm9udC1zaXplOiAyLjRlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbmA7XG5cbmNvbnN0IEF2YXRhciA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1hcmdpbjogMzBweCAwIDAgMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBBZHZlbnR1cmVzQnV0dG9uID0gQnV0dG9uLmV4dGVuZGBcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL3N0YXRpYy93b3JsZC1tYXAucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgQWJvdXRCdXR0b24gPSBCdXR0b24uZXh0ZW5kYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjE2MTI1O1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRhY3RCdXR0b24gPSBCdXR0b24uZXh0ZW5kYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhCMDNFO1xuYDtcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPFBvc3RDYXJkPiAgICAgIFxuICAgICAgPEF2YXRhciBzcmM9XCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvMzQ0NTEzMjYxNTY5MTQ0NzE2L2E1ZjJmMzJhMTA5NzA4MTdlMTU0NWFmYzUwYTNhYzRiXzQwMHg0MDAuanBlZ1wiLz5cbiAgICAgIDxoMT5DaGFzZSBPbGl2aWVyaTwvaDE+XG4gICAgICA8cD5IaSEgSSdtIGEgZGVzaWduZXIgYW5kIGRldmVsb3BlciB0aGF0IHNwbGl0cyB0aW1lIGJldHdlZW4gU2FuIEZyYW5jaXNjbyBhbmQgTGFrZSBUYWhvZS4gSSBjdXJyZW50bHkgd29yayBhcyBhIFJlYWN0IGFuZCBSYWlscyBmcmVlbGFuY2VyLiBJIGFsc28gZW5qb3kgc3VyZmluZywgc2tpaW5nIGFuZCBjb2NvbnV0IGNob2NvbGF0ZS1jaGlwIGNvb2tpZXMuIFNlcmlvdXNseSwgY29jb251dCBpcyBhIGdhbWVjaGFuZ2VyLjwvcD5cbiAgICAgIDxwPkkgYmVsaWV2ZSBpbiBkZXNpZ24gc29sdXRpb25zIHRoYXQgYXJlIGJvdGggZnVuY3Rpb25hbCBhbmQgd29yZGx5LiBNeSBwYXN0IHdvcmsgaW5jbHVkZXMgPGEgaHJlZj1cIiNcIj5PSUE8L2E+LCA8YSBocmVmPVwiI1wiPlRlYWNoIEZvciBBbWVyaWNhPC9hPiwgPGEgaHJlZj1cIiNcIj5GaXJlZm94PC9hPiBhbmQgaHVzaC1odXNoIHN0dWZmIGF0IDxhIGhyZWY9XCIjXCI+R3JlZW5XYXRlcjwvYT4uPC9wPlxuICAgICAgPHA+VHJhdmVsIGRpcmVjdGx5IGluZm9ybXMgdGhlIHdvcmsgdGhhdCBJIGRvIGRheS10by1kYXkgYW5kIGV4cG9zZXMgbWUgdG8gcGVvcGxlIGJvdGggaW4gYnVzeSBjaXRpZXMgYW5kIHRob3NlIGxpdmluZyBvbiB0aGUgZWRnZSBvZiB0aGUgZ3JpZC4gSSd2ZSB2aXNpdGVkIG92ZXIgNzcgY291bnRyaWVzIHNvIGZhciBhbmQgYW0gZnJlcXVlbnRseSBvbiBwbGFuZXMgb2ZmIHRvIGRpc2NvdmVyIG5ldyBwbGFjZXMuPC9wPlxuICAgICAgPHA+TWkgY2FzYSBlcyBzdSBjYXNhIC0gY3J1aXNlIGFyb3VuZCB0aGUgc2l0ZSBhbmQgcGxlYXNlIGZyZWUgdG8gPGEgaHJlZj1cIiNcIj5nZXQgaW4gdG91Y2g8L2E+ISBJIGFsd2F5cyBsb3ZlIGNoYXR0aW5nIHdpdGggbmV3IHBlb3BsZS48L3A+XG4gICAgICA8cD7wn6SZIENoYXNlPC9wPlxuICAgIDwvUG9zdENhcmQ+XG4gICAgPFdyYXBwZXI+XG4gICAgICA8QWR2ZW50dXJlc0J1dHRvbj48aDI+QWR2ZW50dXJlczwvaDI+PC9BZHZlbnR1cmVzQnV0dG9uPlxuICAgICAgPEFib3V0QnV0dG9uPjxoMj5BYm91dDwvaDI+PC9BYm91dEJ1dHRvbj5cbiAgICAgIDxDb250YWN0QnV0dG9uPjxoMj5Db250YWN0PC9oMj48L0NvbnRhY3RCdXR0b24+XG4gICAgPC9XcmFwcGVyPlxuICA8L0xheW91dD5cbilcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBGb290ZXJDb250YWluZXIgPSBzdHlsZWQuZm9vdGVyYFxuICBwYWRkaW5nOiAxcmVtIDAgLjY1NjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBjb2xvcjogIzY2NjtcbiAgaGVpZ2h0OiAzMHZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4O1xuICBkaXNwbGF5OiBmbGV4OyBcblxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gID4gaDMge1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgfVxuXG4gID4gYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogIzI0MjkyZTtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbmBcblxuY29uc3QgQ2hhc2VJY29uID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDUlO1xuICBtYXJnaW46IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbmBcbmNvbnN0IFNvY2lhbCA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XG4gIHBhZGRpbmc6IDEycHg7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuYFxuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gICAgPEZvb3RlckNvbnRhaW5lcj5cbiAgICAgICAgPENoYXNlSWNvbiBzcmM9XCIuL3N0YXRpYy9jLWdyZXkuanBnXCIvPlxuICAgICAgICA8aDM+Q2hhc2UgT2xpdmllcmk8L2gzPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hZHZlbnR1cmVzXCI+XG4gICAgICAgICAgPGE+QWR2ZW50dXJlczwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgPGE+Q29udGFjdDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8U29jaWFsIHNyYz1cIi4vc3RhdGljL2luc3RhZ3JhbS5wbmdcIiAvPlxuICAgICAgICA8U29jaWFsIHNyYz1cIi4vc3RhdGljL3R3aXR0ZXIucG5nXCIgLz5cbiAgICAgICAgPFNvY2lhbCBzcmM9XCIuL3N0YXRpYy9hbmdlbGxpc3QucG5nXCIvPlxuICAgIDwvRm9vdGVyQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Zvb3Rlci5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBK0JBO0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQTZCQTtBQUNBO0FBeUJBO0FBQ0E7QUFLQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBNkJBO0FBS0E7QUFDQTtBQVVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        