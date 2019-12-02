webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/studyList.js":
/*!*********************************!*\
  !*** ./components/studyList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Card_studyCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card/studyCard */ "./components/Card/studyCard.js");

var _jsxFileName = "/Users/johnny/\u5341\u516B\u8A2D\u8A08/\u4FE1\u7FA9\u5168\u7403/components/studyList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  margin: 0 auto;\n  border: 1px solid #969696;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  text-align: center;\n  margin-bottom: 80px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width:100%;\n  text-align: center;\n  padding: 20px 0 60px 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 49%;\n  font-size: 20px;\n  @media (max-width: 768px){\n    width:100%;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width:25%;\n  @media (max-width: 768px){\n    width:60%;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n  // padding: 60px 0;\n  padding: 60px 0 40px 0;\n  @media (max-width: 768px){\n    padding: 20px 0 40px 0;\n    padding-bottom: 20px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  margin: 30px 0;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  @media (max-width: 768px){\n    margin: 10px 10px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  padding-top: 30px;\n  flex-wrap: wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 80%;\n  margin: 0 auto;\n  margin-bottom: 80px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var NewsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var NewsContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
var BigTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
var TitleImg = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject5());
var Other = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6());
var BtnContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7());
var Show = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject8());
var Hr = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].hr(_templateObject9());

var StudyList = function StudyList(props) {
  return __jsx(NewsContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(BigTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(TitleImg, {
    src: "/static/img/t2_job.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), __jsx(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(NewsContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(Other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_components_Card_studyCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), __jsx(Other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_components_Card_studyCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))), __jsx(BtnContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(Show, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "show all"))));
};

/* harmony default export */ __webpack_exports__["default"] = (StudyList);

/***/ })

})
//# sourceMappingURL=index.js.c6baef6f4956e9e47e52.hot-update.js.map