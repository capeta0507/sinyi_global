webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/carouselMobilejs.js":
/*!****************************************!*\
  !*** ./components/carouselMobilejs.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\xj654\\Desktop\\\u5C08\u6848\\sinyi_global\\components\\carouselMobilejs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: none;\n  background: #fff;\n  @media (max-width: 768px){\n    display: block;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  @media (max-width: 768px){\n    height: 400px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Photo = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Item)(_templateObject());
var Cas = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());

var MyCarousel = function MyCarousel() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      index = _useState[0],
      setIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      direction = _useState2[0],
      setDirection = _useState2[1];

  var handleSelect = function handleSelect(selectedIndex, e) {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return __jsx(Cas, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    activeIndex: index,
    direction: direction,
    onSelect: handleSelect,
    touch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(Photo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("img", {
    className: "d-block cauHeight",
    src: "/static/img/sean-pollock-PhYq704ffdA-unsplash.jpg",
    alt: "First slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Caption, {
    className: "carousel_text myShadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "\u5F9E\u611B\u91CC\u51FA\u767C \u5728\u611B\u88E1\u56DE\u5BB6"), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "\u70BA\u4E86\u5BB6\uFF0C\u9084\u53EF\u4EE5\u66F4\u597D"))), __jsx(Photo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("img", {
    className: "d-block cauHeight",
    src: "/static/img/2019022001.jpg",
    alt: "Second slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Caption, {
    className: "carousel_text myShadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\u5F9E\u611B\u91CC\u51FA\u767C \u5728\u611B\u88E1\u56DE\u5BB6"), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "\u70BA\u4E86\u5BB6\uFF0C\u9084\u53EF\u4EE5\u66F4\u597D"))), __jsx(Photo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("img", {
    className: "d-block cauHeight",
    src: "/static/img/11-02607-005.jpg",
    alt: "Third slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Caption, {
    className: "carousel_text myShadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "\u5F9E\u611B\u91CC\u51FA\u767C \u5728\u611B\u88E1\u56DE\u5BB6"), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "\u70BA\u4E86\u5BB6\uFF0C\u9084\u53EF\u4EE5\u66F4\u597D")))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyCarousel);

/***/ })

})
//# sourceMappingURL=index.js.eecffbc797e325cdc13e.hot-update.js.map