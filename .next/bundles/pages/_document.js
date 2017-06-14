
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports =
webpackJsonp([1],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(14);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(30);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(29);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _document = __webpack_require__(416);

var _document2 = _interopRequireDefault(_document);

var _styledComponents = __webpack_require__(527);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chasefoto/Desktop/cpo.is/pages/_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      var sheet = new _styledComponents.ServerStyleSheet();
      var main = sheet.collectStyles(_react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }));
      var styleTags = sheet.getStyleElement();
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'Chase Olivieri | Designer, Developer and Travel Photographer | ChaseOlivieri.com'), styleTags), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('div', { className: 'root', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, main), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })));
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/chasefoto/Desktop/cpo.is/pages/_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chasefoto/Desktop/cpo.is/pages/_document.js"); } } })();
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
    })(module.exports.default || module.exports, "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(230);


/***/ })

},[539]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/OGQ0Y2FiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnXG5pbXBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0IH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qgc2hlZXQgPSBuZXcgU2VydmVyU3R5bGVTaGVldCgpXG4gICAgY29uc3QgbWFpbiA9IHNoZWV0LmNvbGxlY3RTdHlsZXMoPE1haW4gLz4pXG4gICAgY29uc3Qgc3R5bGVUYWdzID0gc2hlZXQuZ2V0U3R5bGVFbGVtZW50KClcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgbWF4aW11bS1zY2FsZT0xXCIvPlxuICAgICAgICAgICAgPHRpdGxlPkNoYXNlIE9saXZpZXJpIHwgRGVzaWduZXIsIERldmVsb3BlciBhbmQgVHJhdmVsIFBob3RvZ3JhcGhlciB8IENoYXNlT2xpdmllcmkuY29tPC90aXRsZT4gICAgICAgICAgXG4gICAgICAgICAge3N0eWxlVGFnc31cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm9vdCc+XG4gICAgICAgICAgICB7bWFpbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvX2RvY3VtZW50LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUFBO0FBSUE7QUFKQTtBQUFBOzs7OztBQWhCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        