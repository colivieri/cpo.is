
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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  @import url(\'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,900|Source+Serif+Pro\');\n\n  body {\n    font-family: \'Source Serif Pro\', serif;\n    font-size: 16px;\n  }\n  h1, h2, h3, h4 {\n    font-family: \'Source Sans Pro\', sans-serif;\n  }\n  a {\n    text-decoration: none;\n    :hover {\n      color: grey;\n    }\n  }\n'], ['\n  @import url(\'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,900|Source+Serif+Pro\');\n\n  body {\n    font-family: \'Source Serif Pro\', serif;\n    font-size: 16px;\n  }\n  h1, h2, h3, h4 {\n    font-family: \'Source Sans Pro\', sans-serif;\n  }\n  a {\n    text-decoration: none;\n    :hover {\n      color: grey;\n    }\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0 auto;\n'], ['\n  margin: 0 auto;\n']);

/* eslint-disable */
(0, _styledComponents.injectGlobal)(_templateObject);

var Container = exports.Container = _styledComponents2.default.div(_templateObject2);
var Layout = function Layout(props) {
  return _react2.default.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, props.children, _react2.default.createElement(_Footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
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
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 50%;\n  margin: 0 auto;\n  text-align: center;\n  \n  > h1 {\n    padding-bottom: 10px;\n    border-bottom: 1px solid #f3f3f3;\n  }\n\n  > p {\n    font-size: 1em;\n    text-align: left;\n  }\n'], ['\n  width: 50%;\n  margin: 0 auto;\n  text-align: center;\n  \n  > h1 {\n    padding-bottom: 10px;\n    border-bottom: 1px solid #f3f3f3;\n  }\n\n  > p {\n    font-size: 1em;\n    text-align: left;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-family: \'Source Serif Pro\', serif;\n  background-color: #24292e;\n  color: black;\n  height: 18vh;\n  text-align: center;\n  text-transform: uppercase;\n\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  padding: 10px 20px;\n  margin: 5px;\n\n  box-shaddow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n  transition: box-shadow .25s;\n  border-radius: 3px;\n\n  > h2 {\n    font-size: 2.4em;\n    color: white;\n  }\n'], ['\n  font-family: \'Source Serif Pro\', serif;\n  background-color: #24292e;\n  color: black;\n  height: 18vh;\n  text-align: center;\n  text-transform: uppercase;\n\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  padding: 10px 20px;\n  margin: 5px;\n\n  box-shaddow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n  transition: box-shadow .25s;\n  border-radius: 3px;\n\n  > h2 {\n    font-size: 2.4em;\n    color: white;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  background-image: url(\'./static/world-map.png\');\n  background-size: cover;\n'], ['\n  background-image: url(\'./static/world-map.png\');\n  background-size: cover;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #F16125;\n'], ['\n  background-color: #F16125;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #F8B03E;\n'], ['\n  background-color: #F8B03E;\n']);

var Wrapper = exports.Wrapper = _styledComponents2.default.div(_templateObject);

var PostCard = exports.PostCard = _styledComponents2.default.section(_templateObject2);

var Button = exports.Button = _styledComponents2.default.div(_templateObject3);

var AdventuresButton = exports.AdventuresButton = Button.extend(_templateObject4);

var AboutButton = exports.AboutButton = Button.extend(_templateObject5);

var ContactButton = exports.ContactButton = Button.extend(_templateObject6);

var Index = function Index() {
  return _react2.default.createElement(_CPO_Theme3.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, _react2.default.createElement(PostCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, 'CHASE OLIVIERI'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, 'I\'m a multidisciplinary creative - splitting time between Miami, San Francisco and Lake Tahoe. I specialize in challenges that intertwine software development, design and photography.')), _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, _react2.default.createElement(AdventuresButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, 'Adventures')), _react2.default.createElement(AboutButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, 'About')), _react2.default.createElement(ContactButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/chasefoto/Desktop/cpo.is/components/Footer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chasefoto/Desktop/cpo.is/components/Footer.js"); } } })();

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(552);


/***/ })

},[596]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ1BPX1RoZW1lLmpzPzcxNDdiZTMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/NzE0N2JlMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcz83MTQ3YmUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdEdsb2JhbCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5pbmplY3RHbG9iYWxgXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvOjQwMCw3MDAsOTAwfFNvdXJjZStTZXJpZitQcm8nKTtcblxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTZXJpZiBQcm8nLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgaDEsIGgyLCBoMywgaDQge1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgfVxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgOmhvdmVyIHtcbiAgICAgIGNvbG9yOiBncmV5O1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAwIGF1dG87XG5gXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPENvbnRhaW5lcj5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPEZvb3Rlci8+XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NQT19UaGVtZS5qcyIsImltcG9ydCB7IEluamVjdEdsb2JhbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ1BPX1RoZW1lJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0NQT19UaGVtZS5qcyc7XG5pbXBvcnQgeyBmYWRlSW5VcCB9IGZyb20gJ3JlYWN0LWNzcy1hbmltYXRlJztcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5gXG5cbmV4cG9ydCBjb25zdCBQb3N0Q2FyZCA9IHN0eWxlZC5zZWN0aW9uYFxuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgPiBoMSB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjM7XG4gIH1cblxuICA+IHAge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNlcmlmIFBybycsIHNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJlO1xuICBjb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMTh2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiA1cHg7XG5cbiAgYm94LXNoYWRkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDAsLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMjVzO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgPiBoMiB7XG4gICAgZm9udC1zaXplOiAyLjRlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBBZHZlbnR1cmVzQnV0dG9uID0gQnV0dG9uLmV4dGVuZGBcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL3N0YXRpYy93b3JsZC1tYXAucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBBYm91dEJ1dHRvbiA9IEJ1dHRvbi5leHRlbmRgXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMTYxMjU7XG5gXG5cbmV4cG9ydCBjb25zdCBDb250YWN0QnV0dG9uID0gQnV0dG9uLmV4dGVuZGBcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4QjAzRTtcbmBcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPFBvc3RDYXJkPlxuICAgICAgPGgxPkNIQVNFIE9MSVZJRVJJPC9oMT5cbiAgICAgIDxwPkknbSBhIG11bHRpZGlzY2lwbGluYXJ5IGNyZWF0aXZlIC0gc3BsaXR0aW5nIHRpbWUgYmV0d2VlbiBNaWFtaSwgU2FuIEZyYW5jaXNjbyBhbmQgTGFrZSBUYWhvZS4gSSBzcGVjaWFsaXplIGluIGNoYWxsZW5nZXMgdGhhdCBpbnRlcnR3aW5lIHNvZnR3YXJlIGRldmVsb3BtZW50LCBkZXNpZ24gYW5kIHBob3RvZ3JhcGh5LjwvcD5cbiAgICA8L1Bvc3RDYXJkPlxuICAgIDxXcmFwcGVyPlxuICAgICAgPEFkdmVudHVyZXNCdXR0b24+PGgyPkFkdmVudHVyZXM8L2gyPjwvQWR2ZW50dXJlc0J1dHRvbj5cbiAgICAgIDxBYm91dEJ1dHRvbj48aDI+QWJvdXQ8L2gyPjwvQWJvdXRCdXR0b24+XG4gICAgICA8Q29udGFjdEJ1dHRvbj48aDI+Q29udGFjdDwvaDI+PC9Db250YWN0QnV0dG9uPlxuICAgIDwvV3JhcHBlcj5cbiAgPC9MYXlvdXQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgRm9vdGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMXJlbSAwIC42NTYyNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGNvbG9yOiAjNjY2O1xuICBoZWlnaHQ6IDQwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHg7XG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgPiBpbWcge1xuICAgIHdpZHRoOiA1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuXG4gID4gaDMge1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgfVxuXG4gID4gYSB7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6ICMyNDI5MmU7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG5gXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gICAgPEZvb3RlckNvbnRhaW5lcj5cbiAgICAgICAgPGltZyBzcmM9XCIuL3N0YXRpYy9jLWdyZXkuanBnXCIvPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8aDM+Q2hhc2UgT2xpdmllcmk8L2gzPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hZHZlbnR1cmVzXCI+XG4gICAgICAgICAgPGE+QWR2ZW50dXJlczwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgPGE+Q29udGFjdDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgIDwvRm9vdGVyQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBaUJBO0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQURBO0FBQ0E7QUFJQTtBQUNBO0FBZUE7QUFDQTtBQXlCQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBa0NBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        