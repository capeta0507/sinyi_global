webpackHotUpdate("static/development/pages/item.js",{

/***/ "./pages/item.js":
/*!***********************!*\
  !*** ./pages/item.js ***!
  \***********************/
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _components_Card_newItemCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Card/newItemCard */ "./components/Card/newItemCard.js");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style/index.css */ "./style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/Users/johnny/\u5341\u516B\u8A2D\u8A08/\u4FE1\u7FA9\u5168\u7403/pages/item.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject16() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  display: flex;\n  padding: 10px 0;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 310px;\n  box-shadow: 0px 0px 10px ;\n  padding: 20px;\n  & > h3{\n    font-size: 20px;\n    color: #00B1FF;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 18%;\n  font-size: 14px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 7%;\n  color: #969696;\n  font-size: 14px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border-top: 1px solid #F0F0F0;\n  border-bottom: 1px solid #F0F0F0;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  /* width: 100%; */\n  color: #00B1FF;\n  font-size: 20px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 60%;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width:112px;\n  @media (max-width: 768px){\n    width:112px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n  // padding: 60px 0;\n  padding: 60px 0 40px 0;\n  @media (max-width: 768px){\n    padding: 20px 0 40px 0;\n    padding-bottom: 20px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 95%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 60%;\n  justify-content: space-between;\n  display: flex;\n  margin-top: 22px;\n  margin-bottom: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  justify-content: space-between;\n  display: flex;\n  position:relative;\n  vertical-align:text-bottom;\n  & > h1{\n    color: #000;\n    font-size: 28px;\n  }\n  & > div{\n    padding-top: 15px;\n    color: #969696;\n    font-size: 14px;\n    margin-left: -250px;\n  }\n  & > h2{\n    color: #00AAF5;\n    font-size: 28px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 60%;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\twidth: 80%;\n  margin: 0 auto;\n\tpadding: 150px 0 50px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








 // import Gallery from '../components/Card/gallery'



var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var Main = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
var Specification = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5());
var Cau = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6());
var BigTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7());
var TitleImg = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject8());
var ItemContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject9());
var Introduction = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject10());
var IntroTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject11());
var IndList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject12());
var IndTag = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject13());
var IndName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject14());
var Business = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject15());
var BusPeople = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject16()); // const

var Item = function Item() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      index = _useState[0],
      setIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      direction = _useState2[0],
      setDirection = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(__jsx("img", {
    className: "carouselArrow",
    src: "/static/img/arrow_wR.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  })),
      nextIcon = _useState3[0];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(__jsx("img", {
    className: "carouselArrow",
    src: "/static/img/arrow_wL.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })),
      prevIcon = _useState4[0];

  var handleSelect = function handleSelect(selectedIndex, e) {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "\u4FE1\u7FA9\u5168\u7403\u8CC7\u7522",
    description: "\u4FE1\u7FA9\u623F\u5C4B\u96C6\u5718\u4EBA\u624D\u62DB\u52DF\u57F9\u8A13\u4E2D\uFF0C\u63D0\u4F9B\u5404\u7A2E\u96C6\u5718\u71B1\u9580\u8077\u7F3A\u3001\u5FB5\u624D\u6D88\u606F\u3001\u85AA\u8CC7\u798F\u5229\u3002\u5B8C\u6574\u65B0\u4EBA\u57F9\u8A13\u8AB2\u7A0B\u4E0D\u7528\u6015\u6C92\u4EBA\u53EF\u4EE5\u554F\uFF0C\u6B61\u8FCE\u71B1\u5FF1\u7684\u4F60\u52A0\u5165\u6211\u5011\uFF0C\u8207\u6211\u5011\u4E00\u8D77\u5171\u5275\u6700\u5927\u50F9\u503C\u3002",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx(_components_nav_navBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx("div", {
    className: "row juseBet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "\u52E4\u6A38\u8FA6\u516C\u5EE0\u623F\uFF21"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "\u6848\u4EF6\u7DE8\u865F\uFF1A32092Y"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "6,000\u5143/\u6708")), __jsx(SubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("span", {
    className: "itemPlace",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "\u5730\u5740"), __jsx("span", {
    className: "itemPlace2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, " \u65B0\u5317\u5E02\u8606\u6D32\u5340\u9577\u8208\u8DEF")), __jsx(Specification, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("span", {
    className: "spcTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "\u6B0A\u72C0"), __jsx("span", {
    className: "spcTitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "114.6 \u576A")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("span", {
    className: "spcTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "\u51FA\u79DF"), __jsx("span", {
    className: "spcTitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "62.3 \u576A")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("span", {
    className: "spcTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "\u6A13\u5C64"), __jsx("span", {
    className: "spcTitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "1\u6A13")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx("span", {
    className: "spcTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "\u5C4B\u9F61"), __jsx("span", {
    className: "spcTitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "10.5 \u5E74"))), __jsx(Cau, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Carousel"], {
    nextIcon: nextIcon,
    prevIcon: prevIcon,
    interval: 10000,
    activeIndex: index,
    direction: direction,
    onSelect: handleSelect,
    touch: true,
    indicators: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx("div", {
    className: "cauimg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("img", {
    className: "d-block cauHeight",
    src: "/static/img/sean-pollock-PhYq704ffdA-unsplash.jpg",
    alt: "First slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  })), __jsx("div", {
    className: "cauimg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx("img", {
    className: "d-block cauHeight",
    src: "/static/img/7152019128020115162m.jpg",
    alt: "Second slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  })), __jsx("div", {
    className: "cauimg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx("img", {
    className: "d-block cauHeight",
    src: "/static/img/11-02607-005.jpg",
    alt: "Third slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }))))), __jsx(Business, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "\u672C\u6848\u7D93\u7D00\u4EBA\u54E1"), __jsx(BusPeople, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx("div", {
    className: "busCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("div", {
    className: "busImg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("img", {
    className: "newsPhoto",
    src: "/static/img/bench-accounting-8D2k7a3wMKQ-unsplash.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }))), "kkk"), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "\u8207\u6211\u806F\u7E6B")), __jsx(ItemContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx(BigTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx(TitleImg, {
    src: "/static/img/t4_list.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  })), __jsx("h3", {
    className: "itemConTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "\u52E4\u6A38\u8FA6\u516C\u5EE0\u623F\uFF21"), __jsx(Introduction, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx(IntroTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "\u57FA\u672C\u8CC7\u6599"), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "\u5730\u5740"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "\u65B0\u5317\u5E02\u8606\u6D32\u5340\u9577\u8208\u8DEF"), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "\u7522\u6B0A\u767B\u8A18"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "\u6709")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "\u578B\u614B"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "\u5927\u6A13(11\u5C64\u542B\u4EE5\u4E0A\u6709\u96FB\u68AF)"), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "\u7522\u6B0A\u767B\u8A18"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "\u6709")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "\u5730\u5740"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "\u65B0\u5317\u5E02\u8606\u6D32\u5340\u9577\u8208\u8DEF"), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "\u5C4B\u9F61"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "10\u5E74")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "\u6B0A\u72C0\u576A\u6578"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, "47.5\u576A"), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, "\u6A13\u5C64"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "9\u6A13/\u517117\u6A13")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, "\u516C\u5171\u8A2D\u65BD"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, "0.0\u576A"), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, "\u8A72\u5C64\u6236\u6578"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "1\u6236")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "\u985E\u578B"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "\u6210\u5C4B"), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, "\u5927\u6A13\u671D\u5411"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, "\u897F")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, "\u7BA1\u7406\u8CBB"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, "$0 (\u4E0D\u542B\u79DF\u91D1\u5167)"), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, "\u8B66\u885B\u7BA1\u7406"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, "\u6709(\u5168\u5929)"))), __jsx(Introduction, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, __jsx(IntroTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, "\u7269\u4EF6\u7279\u8272"), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, "\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00 "), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, "\u7A69\u5B9A\u6536\u79DF\u6295\u8CC7\u81EA\u7528\u7686\u5B9C")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, "\u8FD1\u5927\u6C50\u6B62\u7D93\u8CBF\u5712\u5340"), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, "\u6C23\u6D3E\u9580\u9762\u5B8C\u5584\u7BA1\u7406"))), __jsx(Introduction, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, __jsx(IntroTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, "\u5468\u908A\u74B0\u5883"), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, "\u6377\u904B\u8CC7\u8A0A"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, "\u897F\u9580\u7AD9      \u677E\u5C71\u65B0\u5E97\u7DDA/\u677F\u5357\u7DDA")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, "\u5C0F\u5357\u9580\u7AD9  \u677E\u5C71\u65B0\u5E97\u7DDA")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "\u9F8D\u5C71\u5BFA\u7AD9  \u677F\u5357\u7DDA")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, "\u516C\u8ECA\u7AD9\u540D"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, "\u798F\u6797\u6A4B")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, "\u516C\u8ECA\u8DEF\u7DDA"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, "220\uFF0C224\uFF0C280"))))), __jsx(BigTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, __jsx(TitleImg, {
    src: "/static/img/t5_newItem.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  })), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, __jsx(_components_Card_newItemCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }), __jsx(_components_Card_newItemCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }), __jsx(_components_Card_newItemCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }), __jsx(_components_Card_newItemCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }))), __jsx(_components_nav_navHomeMobile__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

})
//# sourceMappingURL=item.js.e8d20ab42ff783808e6a.hot-update.js.map