webpackHotUpdate(5,{

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactButton = exports.AboutButton = exports.AdventuresButton = exports.Button = exports.PostCard = exports.Wrapper = exports.Container = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(539);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _CPO_Theme = __webpack_require__(626);

var _styledComponents = __webpack_require__(540);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactAnimations = __webpack_require__(585);

var _CPO_Theme2 = __webpack_require__(626);

var _CPO_Theme3 = _interopRequireDefault(_CPO_Theme2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chasefoto/Desktop/cpo.is/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0 auto;\n'], ['\n  margin: 0 auto;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-wrap: wrap;\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  width: 50%;\n  margin: 0 auto;\n  text-align: center;\n  > p {\n    font-size: 1em;\n  }\n'], ['\n  width: 50%;\n  margin: 0 auto;\n  text-align: center;\n  > p {\n    font-size: 1em;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  font-family: \'Source Serif Pro\', serif;\n  background-color: #24292e;\n  color: black;\n  height: 18vh;\n  text-align: center;\n  text-transform: uppercase;\n\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  padding: 10px 15px;\n  margin: 5px;\n\n  box-shaddow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n  transition: box-shadow .25s;\n  border-radius: 3px;\n\n  > h2 {\n    font-size: 2.4em;\n    color: white;\n  }\n'], ['\n  font-family: \'Source Serif Pro\', serif;\n  background-color: #24292e;\n  color: black;\n  height: 18vh;\n  text-align: center;\n  text-transform: uppercase;\n\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  padding: 10px 15px;\n  margin: 5px;\n\n  box-shaddow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\n  transition: box-shadow .25s;\n  border-radius: 3px;\n\n  > h2 {\n    font-size: 2.4em;\n    color: white;\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  background-image: url(\'./static/world-map.png\');\n  background-size: cover;\n'], ['\n  background-image: url(\'./static/world-map.png\');\n  background-size: cover;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #F16125;\n'], ['\n  background-color: #F16125;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #F8B03E;\n'], ['\n  background-color: #F8B03E;\n']);

var Container = exports.Container = _styledComponents2.default.div(_templateObject);

var Wrapper = exports.Wrapper = _styledComponents2.default.div(_templateObject2);

var PostCard = exports.PostCard = _styledComponents2.default.section(_templateObject3);

var Button = exports.Button = _styledComponents2.default.div(_templateObject4);

var AdventuresButton = exports.AdventuresButton = Button.extend(_templateObject5);

var AboutButton = exports.AboutButton = Button.extend(_templateObject6);

var ContactButton = exports.ContactButton = Button.extend(_templateObject7);

var Index = function Index() {
  return _react2.default.createElement(_CPO_Theme3.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement(PostCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, 'CHASE OLIVIERI'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, 'Frequently on planes.')), _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, _react2.default.createElement(AdventuresButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, 'Adventures')), _react2.default.createElement(AboutButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, 'About')), _react2.default.createElement(ContactButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, 'Contact')))));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jZjlhZjVkNWM4MmRlYTNlYWVjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RHbG9iYWwgfSBmcm9tICcuLi9jb21wb25lbnRzL0NQT19UaGVtZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGZhZGVJblVwIH0gZnJvbSAncmVhY3QtYW5pbWF0aW9ucyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQ1BPX1RoZW1lLmpzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAwIGF1dG87XG5gXG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuYFxuXG5leHBvcnQgY29uc3QgUG9zdENhcmQgPSBzdHlsZWQuc2VjdGlvbmBcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgPiBwIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2VyaWYgUHJvJywgc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG4gIGNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiAxOHZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBtYXJnaW46IDVweDtcblxuICBib3gtc2hhZGRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4yNXM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICA+IGgyIHtcbiAgICBmb250LXNpemU6IDIuNGVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFkdmVudHVyZXNCdXR0b24gPSBCdXR0b24uZXh0ZW5kYFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vc3RhdGljL3dvcmxkLW1hcC5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbmBcblxuZXhwb3J0IGNvbnN0IEFib3V0QnV0dG9uID0gQnV0dG9uLmV4dGVuZGBcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxNjEyNTtcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRhY3RCdXR0b24gPSBCdXR0b24uZXh0ZW5kYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhCMDNFO1xuYFxuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8UG9zdENhcmQ+XG4gICAgICAgICAgPGgxPkNIQVNFIE9MSVZJRVJJPC9oMT5cbiAgICAgICAgICA8cD5GcmVxdWVudGx5IG9uIHBsYW5lcy48L3A+XG4gICAgICAgIDwvUG9zdENhcmQ+XG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgIDxBZHZlbnR1cmVzQnV0dG9uPjxoMj5BZHZlbnR1cmVzPC9oMj48L0FkdmVudHVyZXNCdXR0b24+XG4gICAgICAgICAgPEFib3V0QnV0dG9uPjxoMj5BYm91dDwvaDI+PC9BYm91dEJ1dHRvbj5cbiAgICAgICAgICA8Q29udGFjdEJ1dHRvbj48aDI+Q29udGFjdDwvaDI+PC9Db250YWN0QnV0dG9uPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgPC9MYXlvdXQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBUUE7QUFDQTtBQXlCQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=