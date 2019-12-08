module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Card/newItemCard.js":
/*!****************************************!*\
  !*** ./components/Card/newItemCard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/johnny/\u5341\u516B\u8A2D\u8A08/\u4FE1\u7FA9\u5168\u7403/components/Card/newItemCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Introduction = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  padding:10px 0px;
  background:#fff;
`;
const Card = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 23%;
  margin: 30px 10px;
  padding:0;
  cursor: pointer;
  flex-wrap: wrap;
  transition: all .5s;
  background: #fff;
  &:hover {
    box-shadow: 2px 10px 11px rgba(0,0,0,0.2);
  }
  @media (max-width: 768px){
    width: 100%;
    margin: 10px 10px;
  }
`;
const Img = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  width: 100%;
`;
const JustContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  font-size: 12px;
  justify-content: space-between;
  border-top: 1px solid #B4B4B4;
  padding: 10px 10px;
  display: flex;
  @media (max-width: 768px){
    display: none;
  }
`;
const JustContentMb = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  font-size: 12px;
  justify-content: space-between;
  border-top: 1px solid #B4B4B4;
  padding: 10px 10px;
  display: none;
  @media (max-width: 768px){
    display: flex;
  }
`;
const Monthly = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  font-size: 18px;
  position: relative;
  font-weight: 600;
  color: #00B1FF;
  padding: 0 10px;
  margin: 10px 0;
`;
const DownPrice = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: absolute;
  width: 60px;
  background: #EE0000;
  left: 40%;
  top: 3px;
  padding: 2px;
  border-radius: 5px;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  overflow:hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  font-size: 22px;
  font-weight: bold;
  padding: 0 10px;
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  overflow:hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
  font-size: 15px;
  font-weight: 300;
  color: #5A5A5A;
  /* margin:10px 0 20px 0; */
  padding: 0 10px;
`;

const ItemCard = () => {
  return __jsx(Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx(Img, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/img/25358613_1553657854750443_452107410832652332_o.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  })), __jsx(Introduction, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "\u4FE1\u7FA9\u7368\u68DF\u900F\u5929\u5225\u5885"), __jsx(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "\u53F0\u5317\u5E02\u4FE1\u7FA9\u5340\u4FE1\u7FA9\u8DEF\u4E94\u6BB5"), __jsx(Monthly, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "50\u842C\u5143/\u6708", __jsx(DownPrice, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "\u219316.81%")), __jsx(JustContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, "\u571F\u5730 114.6 \u576A"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "\u5EFA\u7269 62.3 \u576A")), __jsx(JustContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, "\u6A13\u5C64 1~2F/9F"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, "\u5C4B\u9F61 10.5 \u5E74")), __jsx(JustContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx("div", {
    className: "join",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, "\u52A0\u5165\u6BD4\u8F03")), __jsx(JustContentMb, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, "\u571F\u5730 114.6 \u576A"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, "\u5EFA\u7269 62.3 \u576A"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "\u6A13\u5C64 1~2F/9F")), __jsx(JustContentMb, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, "\u5C4B\u9F61 10.5 \u5E74"), __jsx("div", {
    className: "join",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, "\u52A0\u5165\u6BD4\u8F03"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemCard);

/***/ }),

/***/ "./components/footer/footer.js":
/*!*************************************!*\
  !*** ./components/footer/footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/johnny/\u5341\u516B\u8A2D\u8A08/\u4FE1\u7FA9\u5168\u7403/components/footer/footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // import Link from 'next/link'

const Block = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: block;
  @media (max-width: 768px){
    display: none;
  }
`;
const FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const FooterList = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 12%;
`;
const BgIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 100%;
  padding: 0;
  background: #3B4B55;
  display: flex;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #707070;
`;
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 100%;
  padding: 30px 0;
  color: #fff;
  text-align: center;
  background: #263843;
`;

class MyFooter extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showDropdownMenu1", event => {
      event.preventDefault();
      this.setState({
        displayMenu1: true
      }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showDropdownMenu2", event => {
      event.preventDefault();
      this.setState({
        displayMenu2: true
      }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showDropdownMenu3", event => {
      event.preventDefault();
      this.setState({
        displayMenu3: true
      }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "hideDropdownMenu", () => {
      this.setState({
        displayMenu1: false,
        displayMenu2: false,
        displayMenu3: false
      }, () => {
        document.removeEventListener('click', this.hideDropdownMenu);
      });
    });

    this.state = {
      displayMenu1: false,
      displayMenu2: false,
      displayMenu3: false
    };
  }

  render() {
    const coll01 = this.state.displayMenu1 ? 'drowActive' : 'drow';
    const coll02 = this.state.displayMenu2 ? 'drowActive' : 'drow';
    const coll03 = this.state.displayMenu3 ? 'drowActive' : 'drow';
    return __jsx(Block, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx(BgIcon, {
      className: "text-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx(FooterContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx(FooterList, {
      className: "iconList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("div", {
      className: "footerTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "\u4E3B\u984C\u7279\u8F2F")), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "\u4E3B\u984C1"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "\u4E3B\u984C2"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "\u4E3B\u984C3"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "\u4E3B\u984C4"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "\u4E3B\u984C5"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "\u4E3B\u984C6")), __jsx(FooterList, {
      className: "iconList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("div", {
      className: "footerTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "\u8CB7\u8CE3")), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "\u8FA6\u516C"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "\u5E97\u9762"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "\u5EE0\u623F"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "\u571F\u5730"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "\u5176\u4ED6")), __jsx(FooterList, {
      className: "iconList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("div", {
      className: "footerTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "\u79DF\u8CC3")), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "\u8FA6\u516C"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "\u5E97\u9762"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "\u571F\u5730"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "\u5176\u4ED6")), __jsx(FooterList, {
      className: "iconList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx("div", {
      className: "footerTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, "\u6A19\u552E")), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "\u670D\u52D9\u8207\u5BE6\u7E8C"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "\u6A19\u68481"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "\u6A19\u68482"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "\u6A19\u68483"), __jsx("div", {
      className: "footerTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, "\u65B0\u805E\u8207\u7814\u7A76")), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "\u7126\u9EDE\u65B0\u805E"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "\u5B63\u5831"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "\u6708\u5831"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "\u96FB\u5B50\u5831")), __jsx(FooterList, {
      className: "iconList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("div", {
      className: "footerTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, "\u5718\u968A\u4ECB\u7D39")), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "\u7E3D\u7D93\u7406"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "\u5546\u4EF2\u4E00\u90E8"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, "\u5546\u4EF2\u4E8C\u90E8"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "\u6295\u8CC7\u4E00\u90E8"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, "\u5DE5\u696D\u5730\u7522\u90E8"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "\u9867\u554F\u670D\u52D9\u5718\u968A"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "\u4F30\u50F9\u5E2B\u5718\u968A")), __jsx(FooterList, {
      className: "iconList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, __jsx("div", {
      className: "footerTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, "\u95DC\u65BC\u5168\u7403")), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, "\u516C\u53F8\u7C21\u4ECB"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, "\u52A0\u5165\u6211\u5011"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "\u670D\u52D9\u64DA\u9EDE")), __jsx(FooterList, {
      className: "iconList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, __jsx("div", {
      className: "footerTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, "\u96C6\u5718\u8207\u793E\u6703\u8CAC\u4EFB")), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, __jsx("a", {
      href: "https://www.sinyi.com.tw/aboutsinyi/aboutsinyi_aboutsinyi",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, "\u4E86\u89E3\u4FE1\u7FA9")), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, __jsx("span", {
      className: "flex",
      onClick: this.showDropdownMenu1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, "\u6295\u8CC7\u4EBA\u5C08\u5340", __jsx("div", {
      className: `drowLeft1 ${coll01}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    })), this.state.displayMenu1 ? __jsx("ul", {
      className: "footerList showblock",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, __jsx("a", {
      href: "https://www.sinyi.com.tw/investors/investors-ch_mainpage",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "\u6295\u8CC7\u4EBA\u5C08\u5340")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, __jsx("a", {
      href: "https://www.sinyi.com.tw/investors/investors-en_mainpage-en",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, "investor relations")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx("a", {
      href: "https://www.sinyi.com.tw/aboutsinyi/aboutsinyi_stakeholder",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, "\u5229\u5BB3\u95DC\u4FC2\u4EBA\u5C08\u5340"))) : null), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx("span", {
      className: "flex",
      onClick: this.showDropdownMenu2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, "\u4F01\u696D\u793E\u6703\u8CAC\u4EFB", __jsx("div", {
      className: `drowLeft2 ${coll02}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    })), this.state.displayMenu2 ? __jsx("ul", {
      className: "footerList showblock",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx("a", {
      href: "https://csr.sinyi.com.tw/",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, "\u4F01\u696D\u793E\u6703\u8CAC\u4EFB")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, __jsx("a", {
      href: "https://www.sinyicharity.org.tw/",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, "\u4FE1\u7FA9\u516C\u76CA\u57FA\u91D1\u6703")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, __jsx("a", {
      href: "https://www.sinyischool.org.tw/",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, "\u4FE1\u7FA9\u5B78\u5802")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx("a", {
      href: "https://www.taiwan4718.tw/",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, "\u793E\u5340\u4E00\u5BB6"))) : null), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, __jsx("span", {
      className: "flex",
      onClick: this.showDropdownMenu3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, "\u96C6\u5718\u4F01\u696D", __jsx("div", {
      className: `drowLeft3 ${coll03}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    })), this.state.displayMenu3 ? __jsx("ul", {
      className: "footerList showblock",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, __jsx("a", {
      href: "https://csr.sinyi.com.tw/",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, "\u4F01\u696D\u793E\u6703\u8CAC\u4EFB")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, __jsx("a", {
      href: "https://www.sinyicharity.org.tw/",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, "\u4FE1\u7FA9\u516C\u76CA\u57FA\u91D1\u6703")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, __jsx("a", {
      href: "https://www.sinyischool.org.tw/",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, "\u4FE1\u7FA9\u5B78\u5802")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, __jsx("a", {
      href: "https://www.taiwan4718.tw/",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, "\u793E\u5340\u4E00\u5BB6"))) : null)))), __jsx(Footer, {
      className: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, "\u4FE1\u7FA9\u5168\u7403\u8CC7\u7522\u7BA1\u7406\u80A1\u4EFD\u6709\u9650\u516C\u53F8 \xA92019 SINYI GLOBAL.\u7248\u6B0A\u6240\u6709"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyFooter);

/***/ }),

/***/ "./components/footer/mobileFooter.js":
/*!*******************************************!*\
  !*** ./components/footer/mobileFooter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/johnny/\u5341\u516B\u8A2D\u8A08/\u4FE1\u7FA9\u5168\u7403/components/footer/mobileFooter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // const Block = styled.div`
//   display: none;
//   @media (max-width: 768px){
//     display: bolck;
//   }
// `

const BgIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  padding: 10px 0;
  background: #263843;
  display: flex;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #707070;
`;
const BgIconList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  padding: 10px 0;
  height: 200px;
  background: #3B4B55;
  display: flex;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #707070;
`;
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 35px;
  & > img {
    width: 100%;
  }
`;
const IconTwo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 33px;
  & > img {
    width: 100%;
  }
`;
const FooterList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width:100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
const FooterTag = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  text-align: center;
  width: ${props => props.long ? '35%' : '30%'};
  margin: 10px 0;
`;
const FooterTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width:90%;
  margin:0 auto;
  margin-bottom: 50px;
`;
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  text-align: center;
  color: #fff;
  & > h5 {
    font-weight: 400;
    margin: 15px 0;
  }
  & > h6 {
    color: #fff;
    font-size: 12px;
    margin: 5px 0;
  }
`;
const BtnFooter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  display: flex;
  position: fixed;
  bottom:0;
  z-index: 1;
  background: linear-gradient(#00B1FF, #2B6ED2);
  color: #fff;
  cursor: pointer;
`;
const BtnBottomItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 35%
  font-size: 18px;
  text-align: center;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  padding: 10px 10px;
  display: flex;
  & > img {
    width: 15px;
    height: 15px;
    margin-top: 8px;
    margin-right: 5px;
  }
`;

class MobileFooter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
  }

  render() {
    return __jsx("div", {
      className: "mbFooter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx(BgIconList, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx(FooterTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx(FooterList, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx(FooterTag, {
      className: "textCenter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, "\u4E3B\u984C\u7279\u8F2F"), __jsx(FooterTag, {
      className: "textCenter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "\u8CB7\u8CE3"), __jsx(FooterTag, {
      className: "textCenter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "\u79DF\u8CC3")), __jsx(FooterList, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx(FooterTag, {
      className: "textCenter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "\u6A19\u552E"), __jsx(FooterTag, {
      className: "textCenter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "\u65B0\u805E\u8207\u7814\u7A76"), __jsx(FooterTag, {
      className: "textCenter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, "\u5718\u968A\u4ECB\u7D39")), __jsx(FooterList, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx(FooterTag, {
      className: "textCenter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "\u95DC\u65BC\u5168\u7403"), __jsx(FooterTag, {
      long: true,
      className: "textCenter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "\u96C6\u5718\u8207\u793E\u6703\u8CAC\u4EFB"), __jsx(FooterTag, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "\xA0")))), __jsx(BgIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx(Footer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "\u4FE1\u7FA9\u5168\u7403\u8CC7\u7522\u7BA1\u7406\u80A1\u4EFD\u6709\u9650\u516C\u53F8"), __jsx("h6", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "\xA92019 \u4FE1\u7FA9\u623F\u5C4B\u80A1\u4EFD\u6709\u9650\u516C\u53F8 \u7248\u6B0A\u6240\u6709"))), __jsx(BtnFooter, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, __jsx(BtnBottomItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, __jsx("img", {
      src: "/static/img/found.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }), "\u67E5\u627E\u7269\u4EF6"), __jsx(BtnBottomItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, __jsx("img", {
      src: "/static/img/phone.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }), "\u64A5\u6253\u96FB\u8A71"), __jsx(BtnBottomItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, __jsx("img", {
      src: "/static/img/messenger.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }), "\u5FEB\u901F\u7559\u8A00")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MobileFooter);

/***/ }),

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/johnny/\u5341\u516B\u8A2D\u8A08/\u4FE1\u7FA9\u5168\u7403/components/head.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = props => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("meta", {
  charSet: "UTF-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, props.title || ''), __jsx("meta", {
  name: "description",
  content: props.description || defaultDescription,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("link", {
  rel: "canonical",
  href: props.url,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  sizes: "192x192",
  href: "/static/touch-icon.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx("link", {
  rel: "apple-touch-icon",
  href: "/static/touch-icon.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx("link", {
  rel: "mask-icon",
  href: "/static/favicon-mask.svg",
  color: "#49B882",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx("link", {
  rel: "icon",
  href: "/static/sinylogo.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:url",
  content: props.url || defaultOGURL,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:title",
  content: props.title || '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:description",
  content: props.description || defaultDescription,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:site",
  content: props.url || defaultOGURL,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary_large_image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx("meta", {
  name: "twitter:image",
  content: props.ogImage || defaultOGImage,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:image",
  content: props.ogImage || defaultOGImage,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:image:width",
  content: "1200",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), __jsx("meta", {
  property: "og:image:height",
  content: "630",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "http://fonts.googleapis.com/earlyaccess/notosanstc.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}));

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  description: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  url: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  ogImage: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/icon.js":
/*!****************************!*\
  !*** ./components/icon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/johnny/\u5341\u516B\u8A2D\u8A08/\u4FE1\u7FA9\u5168\u7403/components/icon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BgIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  padding: 40px 0;
  background: #3B4B55;
  display: flex;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #707070;
`;
const IconList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 20%;
  margin: 0 auto;
  @media (max-width: 1366px){
    width:60%;
  }
  @media (max-width: 1280px){
    width:60%;
  }
  @media (max-width: 768px){
    width:100%;
  }
`;
const Img = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  width: 50px;
  margin: 0 20px;
`;

const myIcon = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(BgIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(IconList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://www.facebook.com/sinyiglobal",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(Img, {
    src: "static/img/icon_fb_w.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://www.instagram.com/sinyi.hr/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(Img, {
    src: "static/img/icon_ig_w.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://www.youtube.com/channel/UCOo6fpsDIaNGITs0bpK1_Sg",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx(Img, {
    src: "static/img/icon_youtube_w.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (myIcon);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./components/icon.js");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer */ "./components/footer/footer.js");
/* harmony import */ var _footer_mobileFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/mobileFooter */ "./components/footer/mobileFooter.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/index.css */ "./style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/johnny/\u5341\u516B\u8A2D\u8A08/\u4FE1\u7FA9\u5168\u7403/components/layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Layout = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.children, __jsx(_footer_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx(_footer_mobileFooter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/nav/navBar.js":
/*!**********************************!*\
  !*** ./components/nav/navBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/johnny/\u5341\u516B\u8A2D\u8A08/\u4FE1\u7FA9\u5168\u7403/components/nav/navBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Nav = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100px;
  line-height:60px;
  background: #3B4B55;
  color: #fff;
  font-weight: bold;
  @media (max-width: 985px){
    display: none;
  }
`;
const NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 85%;
  margin: 0 auto;
  @media (max-width: 1366px){
    width: 90%;
  }
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  flex-wrap: wrap;
`;
const ItemList = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul`
  background: #fff;
  width: 150px;
  color: #000;
  font-size: 15px;
  border-radius: 10px;
  margin-top: 10px;
`;
const ListLi = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  padding: 0 0 0 10px ;
  border-bottom: ${props => props.bottom ? '' : '1px solid #F0F0F0'};
  height: 50px;
  z-index: 5;
  &:hover{
    background: #D2D2D2;
    color: #00B1FF;
  }
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display:inline-block;
  width: 180px;
  @media (max-width: 768px){
    width: 100px;
  }
`;
const Img = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img`
	width:100%;
`;
const NavList = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  color: #fff;
`;
const List = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul`
  display: flex;
  list-style: none;
  font-size: 20px;
  /* & > li {
    font-weight: 200;
    margin: 0 30px;
    cursor: pointer;
    font-weight:500;
    color: #fff;
    width: ${props => props.two ? '50px' : '100px'};
  } */
`;
const ItemLi = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li`
  font-weight: 500;
  margin: 0 20px;
  cursor: pointer;
  font-weight:500;
  color: #fff;
  font-size: 18px;
  width: ${props => props.two ? '50px' : '100px'};
  @media (max-width: 1366px){
    margin: 0 22px;
    width: ${props => props.two ? '50px' : '80px'};
  }
`;
const Item = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span`
  margin: 0 10px;
  cursor: pointer;
  color: #fff;
`;
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img`
  width:40px;
`;

const NavBar = () => {
  return __jsx(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx(NavContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx(Img, {
    src: "static/img/logo.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }))), __jsx(NavList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx(ItemLi, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "\u4E3B\u984C\u7279\u8F2F"), __jsx(ItemLi, {
    two: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "\u8CB7\u8CE3"), __jsx(ItemLi, {
    two: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "\u79DF\u8CC3"), __jsx(ItemLi, {
    two: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, "\u6A19\u552E"), __jsx(ItemLi, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, "\u65B0\u805E\u8207\u7814\u7A76"), __jsx(ItemLi, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, "\u5718\u968A\u4ECB\u7D39"), __jsx(ItemLi, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx("a", {
    href: "",
    className: "linkText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "\u95DC\u65BC\u5168\u7403")), __jsx(ItemLi, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://www.facebook.com/sinyiglobal",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx(Icon, {
    src: "static/img/icon_fb_w.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/nav/navHomeMobile.js":
/*!*****************************************!*\
  !*** ./components/nav/navHomeMobile.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/index.css */ "./style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/johnny/\u5341\u516B\u8A2D\u8A08/\u4FE1\u7FA9\u5168\u7403/components/nav/navHomeMobile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const NavMB = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"])`
  width: 100%;
  position: fixed;
  top:0;
  background-color: #263843 !important;
  z-index: 999;
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display:inline-block;
  width: 125px;
  @media (max-width: 768px){
    width: 100px;
  }
`;
const Img = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img`
	width:100%;
`;
const Item = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span`
  margin: 0 15px;
  cursor: pointer;
  color: #fff;
`;
const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link)`
  text-align: center;
  padding: 10px 0 10px 0;
`;
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img`
  width:30px;
`;
const IconLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link)`
  text-align: center;
  padding: 50px;
`;
const ItemBod = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img`
  width: 120px;
`;

const NavHomeMobile = () => {
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => {
    setActive(!active);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(NavMB, {
    className: "navBlock",
    collapseOnSelect: true,
    expand: "lg",
    bg: "dark",
    variant: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx(Img, {
    src: "static/img/logo.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }))), __jsx("div", {
    className: `menu transition ${active === true ? 'active' : ''}`,
    onClick: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("div", {
    className: "bar bar1 transition",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx("div", {
    className: "bar bar2 transition",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx("div", {
    className: "bar bar3 transition",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx("ul", {
    className: "transition",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(NavLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "\u9996\u9801"))), __jsx(ItemBod, {
    src: "/static/img/navborder.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx(NavLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "\u4E3B\u984C\u7279\u8F2F"))), __jsx(ItemBod, {
    src: "/static/img/navborder.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx(NavLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "#features",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "\u8CB7\u8CE3"))), __jsx(ItemBod, {
    src: "/static/img/navborder.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx(NavLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/vacancies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "\u79DF\u8CC3"))), __jsx(ItemBod, {
    src: "/static/img/navborder.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx(NavLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/vacancies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "\u6A19\u552E"))), __jsx(ItemBod, {
    src: "/static/img/navborder.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx(NavLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/vacancies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "\u65B0\u805E\u8207\u7814\u7A76"))), __jsx(ItemBod, {
    src: "/static/img/navborder.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, __jsx(NavLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/vacancies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, "\u5718\u968A\u4ECB\u7D39"))), __jsx(ItemBod, {
    src: "/static/img/navborder.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx(NavLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/vacancies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "\u95DC\u65BC\u5168\u7403"))), __jsx(ItemBod, {
    src: "/static/img/navborder.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx(IconLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "https://www.facebook.com/sinyiglobal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, __jsx(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx(Icon, {
    src: "static/img/icon_fb_w.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavHomeMobile);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/item.js":
/*!***********************!*\
  !*** ./pages/item.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_nav_navBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/nav/navBar */ "./components/nav/navBar.js");
/* harmony import */ var _components_nav_navHomeMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/nav/navHomeMobile */ "./components/nav/navHomeMobile.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Card_newItemCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Card/newItemCard */ "./components/Card/newItemCard.js");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../style/index.css */ "./style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/johnny/\u5341\u516B\u8A2D\u8A08/\u4FE1\u7FA9\u5168\u7403/pages/item.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







 // import Gallery from '../components/Card/gallery'



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
	width: 80%;
  margin: 0 auto;
	padding: 150px 0 50px 0;
`;
const Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 60%;

`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  position:relative;
  vertical-align:text-bottom;
  & > h1{
    color: #000;
    font-size: 28px;
  }
  & > div{
    padding-top: 15px;
    color: #969696;
    font-size: 14px;
    margin-left: -250px;
  }
  & > h2{
    color: #00AAF5;
    font-size: 28px;
  }
`;
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
`;
const Specification = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 60%;
  justify-content: space-between;
  display: flex;
  margin-top: 22px;
  margin-bottom: 10px;
`;
const Cau = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 95%;
`;
const BigTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  text-align: center;
  // padding: 60px 0;
  padding: 60px 0 40px 0;
  @media (max-width: 768px){
    padding: 20px 0 40px 0;
    padding-bottom: 20px;
  }
`;
const TitleImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  width:112px;
  @media (max-width: 768px){
    width:112px;
  }
`;
const ItemContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 60%;
`;
const Introduction = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
`;
const IntroTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  /* width: 100%; */
  color: #00B1FF;
  font-size: 20px;
`;
const IndList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  border-top: 1px solid #F0F0F0;
  border-bottom: 1px solid #F0F0F0;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`;
const IndTag = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 7%;
  color: #969696;
  font-size: 14px;
`;
const IndName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 18%;
  font-size: 14px;
`;
const Business = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 310px;
  box-shadow: 0px 0px 10px ;
  padding: 20px;
  & > h3{
    font-size: 20px;
    color: #00B1FF;
    padding-left: 10px;
  }
`;
const BusPeople = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #E8E8E8;
`;
const Busconnection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  display: block;
  padding: 10px 0;
  border-bottom: 1px solid #E8E8E8;
`;
const Name = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  color: #969696;
  font-size: ${props => props.name ? '18px' : '14px'};
  margin-top: ${props => props.name ? '0px' : '10px'};
`;
const IptName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 5px 0;
  @media (max-width: 768px){
    width: 100%;
  }
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 120px;
  margin: 0 auto;
  background: #00B1FF;
  font-size: 16px;
  padding: 8px;
  text-align: center;
  color: #fff;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 5px;
`;
const BusCheck = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  font-size: 12px;
  & > a {
    color: #00B1FF;
  }
`;
const Join = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  color: #00B1FF;
  font-size: 23px;
  cursor: pointer;
`;

const Item = () => {
  const {
    0: index,
    1: setIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: direction,
    1: setDirection
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: nextIcon
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(__jsx("img", {
    className: "carouselArrow",
    src: "/static/img/arrow_wR.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }));
  const {
    0: prevIcon
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(__jsx("img", {
    className: "carouselArrow",
    src: "/static/img/arrow_wL.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }));

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "\u4FE1\u7FA9\u5168\u7403\u8CC7\u7522",
    description: "\u4FE1\u7FA9\u623F\u5C4B\u96C6\u5718\u4EBA\u624D\u62DB\u52DF\u57F9\u8A13\u4E2D\uFF0C\u63D0\u4F9B\u5404\u7A2E\u96C6\u5718\u71B1\u9580\u8077\u7F3A\u3001\u5FB5\u624D\u6D88\u606F\u3001\u85AA\u8CC7\u798F\u5229\u3002\u5B8C\u6574\u65B0\u4EBA\u57F9\u8A13\u8AB2\u7A0B\u4E0D\u7528\u6015\u6C92\u4EBA\u53EF\u4EE5\u554F\uFF0C\u6B61\u8FCE\u71B1\u5FF1\u7684\u4F60\u52A0\u5165\u6211\u5011\uFF0C\u8207\u6211\u5011\u4E00\u8D77\u5171\u5275\u6700\u5927\u50F9\u503C\u3002",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }), __jsx(_components_nav_navBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }), __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, __jsx("div", {
    className: "row juseBet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, __jsx(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, "\u52E4\u6A38\u8FA6\u516C\u5EE0\u623F\uFF21"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, "\u6848\u4EF6\u7DE8\u865F\uFF1A32092Y"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  }, "6,000\u5143/\u6708")), __jsx(SubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, __jsx("span", {
    className: "itemPlace",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, "\u5730\u5740"), __jsx("span", {
    className: "itemPlace2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, " \u65B0\u5317\u5E02\u8606\u6D32\u5340\u9577\u8208\u8DEF")), __jsx(Specification, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, __jsx("span", {
    className: "spcTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, "\u6B0A\u72C0"), __jsx("span", {
    className: "spcTitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }, "114.6 \u576A")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: undefined
  }, __jsx("span", {
    className: "spcTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, "\u51FA\u79DF"), __jsx("span", {
    className: "spcTitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, "62.3 \u576A")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, __jsx("span", {
    className: "spcTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, "\u6A13\u5C64"), __jsx("span", {
    className: "spcTitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }, "1\u6A13")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }, __jsx("span", {
    className: "spcTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, "\u5C4B\u9F61"), __jsx("span", {
    className: "spcTitle2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }, "10.5 \u5E74"))), __jsx(Cau, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
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
      lineNumber: 207
    },
    __self: undefined
  }, __jsx("div", {
    className: "cauimg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, __jsx("img", {
    className: "d-block cauHeight",
    src: "/static/img/sean-pollock-PhYq704ffdA-unsplash.jpg",
    alt: "First slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  })), __jsx("div", {
    className: "cauimg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  }, __jsx("img", {
    className: "d-block cauHeight",
    src: "/static/img/7152019128020115162m.jpg",
    alt: "Second slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  })), __jsx("div", {
    className: "cauimg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }, __jsx("img", {
    className: "d-block cauHeight",
    src: "/static/img/11-02607-005.jpg",
    alt: "Third slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }))))), __jsx(Business, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: undefined
  }, "\u672C\u6848\u7D93\u7D00\u4EBA\u54E1"), __jsx(BusPeople, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: undefined
  }, __jsx("div", {
    className: "busCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: undefined
  }, __jsx("div", {
    className: "busImg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: undefined
  }, __jsx("img", {
    className: "newsPhoto",
    src: "/static/img/bench-accounting-8D2k7a3wMKQ-unsplash.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: undefined
  }))), __jsx("div", {
    className: "busName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: undefined
  }, __jsx(Name, {
    name: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }, "\u8521\u4F73\u5B8F"), __jsx(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: undefined
  }, "\u9577\u6625\u5409\u6797\u5E97"), __jsx(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: undefined
  }, "0911259808"), __jsx(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: undefined
  }, "C02897523"))), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: undefined
  }, "\u8207\u6211\u806F\u7E6B"), __jsx(Busconnection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: undefined
  }, __jsx(IptName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: undefined
  }, __jsx("input", {
    className: "form-control",
    type: "text",
    placeholder: "\u59D3\u540D(\u5FC5\u586B)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: undefined
  })), __jsx(IptName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: undefined
  }, __jsx("input", {
    className: "form-control",
    type: "phone",
    placeholder: "\u806F\u7D61\u96FB\u8A71(\u5FC5\u586B)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: undefined
  })), __jsx(IptName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  }, __jsx("input", {
    className: "form-control",
    type: "text",
    placeholder: "\u96FB\u5B50\u90F5\u4EF6(\u5FC5\u586B)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
  })), __jsx(BusCheck, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: undefined
  }, __jsx("input", {
    type: "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: undefined
  }), " \u9001\u51FA\u8CC7\u6599\u524D\uFF0C\u8ACB\u9EDE\u9078\u540C\u610F\u672C\u7AD9 ", __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: undefined
  }, "\u96B1\u79C1\u6B0A\u653F\u7B56"), " \u53CA ", __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: undefined
  }, "\u670D\u52D9\u689D\u6B3E")), __jsx(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: undefined
  }, "\u9001\u51FA")), __jsx(Join, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: undefined
  }, "\u52A0\u5165\u6BD4\u8F03")), __jsx(ItemContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  }, __jsx(BigTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  }, __jsx(TitleImg, {
    src: "/static/img/t4_list.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: undefined
  })), __jsx("h3", {
    className: "itemConTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: undefined
  }, "\u52E4\u6A38\u8FA6\u516C\u5EE0\u623F\uFF21"), __jsx(Introduction, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: undefined
  }, __jsx(IntroTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: undefined
  }, "\u57FA\u672C\u8CC7\u6599"), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: undefined
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: undefined
  }, "\u5730\u5740"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: undefined
  }, "\u65B0\u5317\u5E02\u8606\u6D32\u5340\u9577\u8208\u8DEF"), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: undefined
  }, "\u7522\u6B0A\u767B\u8A18"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: undefined
  }, "\u6709")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: undefined
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: undefined
  }, "\u578B\u614B"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: undefined
  }, "\u5927\u6A13(11\u5C64\u542B\u4EE5\u4E0A\u6709\u96FB\u68AF)"), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: undefined
  }, "\u7522\u6B0A\u767B\u8A18"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: undefined
  }, "\u6709")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: undefined
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: undefined
  }, "\u5730\u5740"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: undefined
  }, "\u65B0\u5317\u5E02\u8606\u6D32\u5340\u9577\u8208\u8DEF"), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: undefined
  }, "\u5C4B\u9F61"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: undefined
  }, "10\u5E74")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: undefined
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: undefined
  }, "\u6B0A\u72C0\u576A\u6578"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: undefined
  }, "47.5\u576A"), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: undefined
  }, "\u6A13\u5C64"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: undefined
  }, "9\u6A13/\u517117\u6A13")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: undefined
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: undefined
  }, "\u516C\u5171\u8A2D\u65BD"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: undefined
  }, "0.0\u576A"), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: undefined
  }, "\u8A72\u5C64\u6236\u6578"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: undefined
  }, "1\u6236")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: undefined
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: undefined
  }, "\u985E\u578B"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: undefined
  }, "\u6210\u5C4B"), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: undefined
  }, "\u5927\u6A13\u671D\u5411"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: undefined
  }, "\u897F")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: undefined
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: undefined
  }, "\u7BA1\u7406\u8CBB"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: undefined
  }, "$0 (\u4E0D\u542B\u79DF\u91D1\u5167)"), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: undefined
  }, "\u8B66\u885B\u7BA1\u7406"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: undefined
  }, "\u6709(\u5168\u5929)"))), __jsx(Introduction, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: undefined
  }, __jsx(IntroTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: undefined
  }, "\u7269\u4EF6\u7279\u8272"), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: undefined
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: undefined
  }), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: undefined
  }, "\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u5341\u4E00 "), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: undefined
  }), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: undefined
  }, "\u7A69\u5B9A\u6536\u79DF\u6295\u8CC7\u81EA\u7528\u7686\u5B9C")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: undefined
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: undefined
  }), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: undefined
  }, "\u8FD1\u5927\u6C50\u6B62\u7D93\u8CBF\u5712\u5340"), __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: undefined
  }), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: undefined
  }, "\u6C23\u6D3E\u9580\u9762\u5B8C\u5584\u7BA1\u7406"))), __jsx(Introduction, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: undefined
  }, __jsx(IntroTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: undefined
  }, "\u5468\u908A\u74B0\u5883"), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: undefined
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: undefined
  }, "\u6377\u904B\u8CC7\u8A0A"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: undefined
  }, "\u897F\u9580\u7AD9      \u677E\u5C71\u65B0\u5E97\u7DDA/\u677F\u5357\u7DDA")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: undefined
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: undefined
  }), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: undefined
  }, "\u5C0F\u5357\u9580\u7AD9  \u677E\u5C71\u65B0\u5E97\u7DDA")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: undefined
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: undefined
  }), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: undefined
  }, "\u9F8D\u5C71\u5BFA\u7AD9  \u677F\u5357\u7DDA")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: undefined
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: undefined
  }, "\u516C\u8ECA\u7AD9\u540D"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: undefined
  }, "\u798F\u6797\u6A4B")), __jsx(IndList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: undefined
  }, __jsx(IndTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: undefined
  }, "\u516C\u8ECA\u8DEF\u7DDA"), __jsx(IndName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: undefined
  }, "220\uFF0C224\uFF0C280"))))), __jsx(BigTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: undefined
  }, __jsx(TitleImg, {
    src: "/static/img/t5_newItem.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: undefined
  })), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: undefined
  }, __jsx(_components_Card_newItemCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: undefined
  }), __jsx(_components_Card_newItemCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: undefined
  }), __jsx(_components_Card_newItemCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: undefined
  }), __jsx(_components_Card_newItemCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: undefined
  }))), __jsx(_components_nav_navHomeMobile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./style/index.css":
/*!*************************!*\
  !*** ./style/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/item.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/johnny/十八設計/信義全球/pages/item.js */"./pages/item.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=item.js.map