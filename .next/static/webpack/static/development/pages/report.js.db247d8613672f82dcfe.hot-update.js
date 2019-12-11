webpackHotUpdate("static\\development\\pages\\report.js",{

/***/ "./pages/report.js":
/*!*************************!*\
  !*** ./pages/report.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_nav_navBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/nav/navBar */ "./components/nav/navBar.js");
/* harmony import */ var _components_nav_navHomeMobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/nav/navHomeMobile */ "./components/nav/navHomeMobile.js");
/* harmony import */ var _components_Card_studyCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Card/studyCard */ "./components/Card/studyCard.js");
/* harmony import */ var _components_Card_mbstudyCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Card/mbstudyCard */ "./components/Card/mbstudyCard.js");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style/index.css */ "./style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "C:\\Users\\xj654\\Desktop\\\u5C08\u6848\\sinyi_global\\pages\\report.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject13() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 12px;\n  margin-top: -3px;\n  margin-left: ", ";\n  @media (max-width: 768px){\n    width: 12px;\n    margin-top: 0px;\n    margin-left: ", ";\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n\tbackground: #00B9FF;\n  border: 1px solid #00B9FF;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  float: right;\n  left: -50%;\n  position: relative;\n  & > ul{\n    float:left;\n    left: 50%;\n    position: relative;\n    display: flex;\n    & > li{\n      margin-right: 10px;\n    } \n  }\n  @media (max-width: 768px){\n\t\ttop: 30px;\n\t}\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width:112px;\n  @media (max-width: 768px){\n    width:98px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n  padding: 60px 0 40px 0;\n  @media (max-width: 768px){\n    padding: 20px 0 40px 0;\n    padding-bottom: 20px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 32%;\n  margin: 0 5px;\n  @media (max-width: 768px){\n\t\twidth: 100%;\n\t}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\twidth: 80%;\n\tmargin: 0 auto;\n\t@media (max-width: 768px){\n\t\twidth: 90%;\n\t}\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\twidth: 100%;\n\tbackground: #F1F1F1;\n  padding: 0 0 100px 0;\n  @media (max-width: 768px){\n    padding: 10px 0 100px 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\twidth: 15%;\n\tbackground: #00B1FF;\n\ttext-align: center;\n\tcolor: #fff;\n\tfont-size: 16px;\n  padding: 8px 0 0 0;\n  @media (max-width: 768px){\n    width: 25%;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 85%;\n  @media (max-width: 768px){\n    width: 75%;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tdisplay: flex;\n\tmargin: 0 auto;\n\twidth: 60%;\n\tborder-radius: 5px;\n\ttext-align: center;\n\tmargin-top: 10px;\n\t@media (max-width: 768px){\n\t\twidth: 90%;\n\t\tjustify-content: space-between;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tdisplay: flex;\n\tmargin: 0 auto;\n\twidth: 40%;\n  text-align: center;\n  font-size: 28px;\n  padding-top: 30px;\n\t@media (max-width: 768px){\n    width: 90%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tbackground: #566A77;\n\twidth: 100%;\n\tpadding: 150px 0 50px 0;\n\t@media (max-width: 768px){\n\t\tpadding: 80px 0 10px 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var SearchDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var HeadTag = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var HeadList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
var IptName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
var SearchButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5());
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7());
var NewsBlock = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject8());
var BigTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject9());
var TitleImg = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject10());
var PageInfo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject11());
var PageCircle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject12());
var PageImg = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject13(), function (props) {
  return props.next ? '6px' : '9px';
}, function (props) {
  return props.next ? '5px' : '8px';
});

var ItemList = function ItemList() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "\u4FE1\u7FA9\u5168\u7403\u8CC7\u7522",
    description: "\u4FE1\u7FA9\u623F\u5C4B\u96C6\u5718\u4EBA\u624D\u62DB\u52DF\u57F9\u8A13\u4E2D\uFF0C\u63D0\u4F9B\u5404\u7A2E\u96C6\u5718\u71B1\u9580\u8077\u7F3A\u3001\u5FB5\u624D\u6D88\u606F\u3001\u85AA\u8CC7\u798F\u5229\u3002\u5B8C\u6574\u65B0\u4EBA\u57F9\u8A13\u8AB2\u7A0B\u4E0D\u7528\u6015\u6C92\u4EBA\u53EF\u4EE5\u554F\uFF0C\u6B61\u8FCE\u71B1\u5FF1\u7684\u4F60\u52A0\u5165\u6211\u5011\uFF0C\u8207\u6211\u5011\u4E00\u8D77\u5171\u5275\u6700\u5927\u50F9\u503C\u3002",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), __jsx(_components_nav_navBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), __jsx(_components_nav_navHomeMobile__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), __jsx(SearchDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(HeadList, {
    search: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(IptName, {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("input", {
    className: "form-control",
    type: "text",
    placeholder: "\u95DC\u9375\u5B57...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })), __jsx(SearchButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "\u641C\u5C0B"))), __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(HeadTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("div", {
    className: "reportBuy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "\u5B63\u5831", __jsx("img", {
    src: "/static/img/navborder.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })), __jsx("div", {
    className: "reportBuy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "\u6708\u5831", __jsx("img", {
    src: "/static/img/navborder_grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }))), __jsx(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx(NewsBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx(_components_Card_studyCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), __jsx(_components_Card_mbstudyCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  })), __jsx(NewsBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx(_components_Card_studyCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), __jsx(_components_Card_mbstudyCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  })), __jsx(NewsBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx(_components_Card_studyCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), __jsx(_components_Card_mbstudyCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  })), __jsx(NewsBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(_components_Card_studyCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }), __jsx(_components_Card_mbstudyCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  })), __jsx(NewsBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx(_components_Card_studyCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), __jsx(_components_Card_mbstudyCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  })), __jsx(NewsBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx(_components_Card_studyCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }), __jsx(_components_Card_mbstudyCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  })))), __jsx(PageInfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx(PageCircle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx(PageImg, {
    src: "/static/img/prev.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("div", {
    className: "pagination paginationActive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "1")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx("div", {
    className: "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "2")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("div", {
    className: "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "3")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx("div", {
    className: "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "4")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("div", {
    className: "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "5")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx("div", {
    className: "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "6")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx("div", {
    className: "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "7")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx(PageCircle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx(PageImg, {
    next: true,
    src: "/static/img/next.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemList);

/***/ })

})
//# sourceMappingURL=report.js.db247d8613672f82dcfe.hot-update.js.map