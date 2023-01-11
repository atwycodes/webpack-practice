/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/form-data/lib/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/form-data/lib/browser.js ***!
  \***********************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/* eslint-env browser */
module.exports = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' ? self.FormData : window.FormData;

/***/ }),

/***/ "./src/generateJoke.js":
/*!*****************************!*\
  !*** ./src/generateJoke.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

function generateJoke() {
  var config = {
    headers: {
      Accept: 'application/json'
    }
  };
  axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('https://icanhazdadjoke.com', config).then(function (res) {
    document.getElementById('joke').innerHTML = res.data.joke;
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateJoke);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #2fa8cc;\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n  padding: 20px;\n}\n\n.container {\n  background-color: #f4f4f4;\n  border-radius: 10px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n  padding: 50px 20px;\n  text-align: center;\n  max-width: 100%;\n  width: 800px;\n}\n\nh3 {\n  margin: 0;\n  opacity: 0.5;\n  letter-spacing: 2px;\n}\n\nimg {\n  width: 100px;\n  margin-bottom: 20px;\n}\n\n.joke {\n  font-size: 30px;\n  letter-spacing: 1px;\n  line-height: 40px;\n  margin: 50px auto;\n  max-width: 600px;\n}\n\n.btn {\n  background-color: #2fa8cc;\n  color: #f4f4f4;\n  border: 0;\n  border-radius: 10px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n  padding: 14px 40px;\n  font-size: 16px;\n  cursor: pointer;\n}\n.btn:active {\n  transform: scale(0.98);\n}\n.btn:focus {\n  outline: 0;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAMA;EACE,sBAAA;AAJF;;AAOA;EACE,yBATc;EAUd,iCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,gBAAA;EACA,SAAA;EACA,aAAA;AAJF;;AAOA;EACE,yBArBgB;EAsBhB,mBAAA;EACA,wEAtBW;EAuBX,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;AAJF;;AAOA;EACE,SAAA;EACA,YAAA;EACA,mBAAA;AAJF;;AAOA;EACE,YAAA;EACA,mBAAA;AAJF;;AAOA;EACE,eAAA;EACA,mBAAA;EACA,iBAAA;EACA,iBAAA;EACA,gBAAA;AAJF;;AAOA;EACE,yBAnDc;EAoDd,cAnDgB;EAoDhB,SAAA;EACA,mBAAA;EACA,uEAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;AAJF;AAME;EACE,sBAAA;AAJJ;AAOE;EACE,UAAA;AALJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\r\n\r\n$primary-color: #2fa8cc;\r\n$secondary-color: #f4f4f4;\r\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: $primary-color;\r\n  font-family: 'Roboto', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  padding: 20px;\r\n}\r\n\r\n.container {\r\n  background-color: $secondary-color;\r\n  border-radius: 10px;\r\n  box-shadow: $box-shadow;\r\n  padding: 50px 20px;\r\n  text-align: center;\r\n  max-width: 100%;\r\n  width: 800px;\r\n}\r\n\r\nh3 {\r\n  margin: 0;\r\n  opacity: 0.5;\r\n  letter-spacing: 2px;\r\n}\r\n\r\nimg {\r\n  width: 100px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.joke {\r\n  font-size: 30px;\r\n  letter-spacing: 1px;\r\n  line-height: 40px;\r\n  margin: 50px auto;\r\n  max-width: 600px;\r\n}\r\n\r\n.btn {\r\n  background-color: $primary-color;\r\n  color: $secondary-color;\r\n  border: 0;\r\n  border-radius: 10px;\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n  padding: 14px 40px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n\r\n  &:active {\r\n    transform: scale(0.98);\r\n  }\r\n\r\n  &:focus {\r\n    outline: 0;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/laughing.svg":
/*!*********************************!*\
  !*** ./src/assets/laughing.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "laughing.svg";

/***/ }),

/***/ "./node_modules/axios/lib/adapters/adapters.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/adapters/adapters.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.js */ "./node_modules/axios/lib/helpers/null.js");
/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr.js */ "./node_modules/axios/lib/adapters/xhr.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




var knownAdapters = {
  http: _http_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  xhr: _xhr_js__WEBPACK_IMPORTED_MODULE_1__["default"]
};
_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(knownAdapters, function (fn, value) {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {
        value: value
      });
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {
      value: value
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAdapter: function getAdapter(adapters) {
    adapters = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isArray(adapters) ? adapters : [adapters];
    var _adapters = adapters,
      length = _adapters.length;
    var nameOrAdapter;
    var adapter;
    for (var i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if (adapter = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
        break;
      }
    }
    if (!adapter) {
      if (adapter === false) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"]("Adapter ".concat(nameOrAdapter, " is not supported by the environment"), 'ERR_NOT_SUPPORT');
      }
      throw new Error(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hasOwnProp(knownAdapters, nameOrAdapter) ? "Adapter '".concat(nameOrAdapter, "' is not available in the build") : "Unknown adapter '".concat(nameOrAdapter, "'"));
    }
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }
    return adapter;
  },
  adapters: knownAdapters
});

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../core/settle.js */ "./node_modules/axios/lib/core/settle.js");
/* harmony import */ var _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../helpers/cookies.js */ "./node_modules/axios/lib/helpers/cookies.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../helpers/isURLSameOrigin.js */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defaults/transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/parseProtocol.js */ "./node_modules/axios/lib/helpers/parseProtocol.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/speedometer.js */ "./node_modules/axios/lib/helpers/speedometer.js");















function progressEventReducer(listener, isDownloadStream) {
  var bytesNotified = 0;
  var _speedometer = (0,_helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(50, 250);
  return function (e) {
    var loaded = e.loaded;
    var total = e.lengthComputable ? e.total : undefined;
    var progressBytes = loaded - bytesNotified;
    var rate = _speedometer(progressBytes);
    var inRange = loaded <= total;
    bytesNotified = loaded;
    var data = {
      loaded: loaded,
      total: total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };
    data[isDownloadStream ? 'download' : 'upload'] = true;
    listener(data);
  };
}
var isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers).normalize();
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFormData(requestData) && (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv || _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserWebWorkerEnv)) {
      requestHeaders.setContentType(false); // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }
    var fullPath = (0,_core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__["default"])(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
      var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }
    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Request aborted', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Network Error', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__["default"];
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"](timeoutErrorMessage, transitional.clarifyTimeoutError ? _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ETIMEDOUT : _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || (0,_helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__["default"])(fullPath)) && config.xsrfCookieName && _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__["default"].read(config.xsrfCookieName);
      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }
    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function onCanceled(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__["default"](null, config, request) : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }
    var protocol = (0,_helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__["default"])(fullPath);
    if (protocol && _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].protocols.indexOf(protocol) === -1) {
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Unsupported protocol ' + protocol + ':', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_BAD_REQUEST, config));
      return;
    }

    // Send the request
    request.send(requestData || null);
  });
});

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");
/* harmony import */ var _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios.js */ "./node_modules/axios/lib/core/Axios.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel/CancelToken.js */ "./node_modules/axios/lib/cancel/CancelToken.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/spread.js */ "./node_modules/axios/lib/helpers/spread.js");
/* harmony import */ var _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/isAxiosError.js */ "./node_modules/axios/lib/helpers/isAxiosError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/HttpStatusCode.js */ "./node_modules/axios/lib/helpers/HttpStatusCode.js");



















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"](defaultConfig);
  var instance = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.request, context);

  // Copy axios.prototype to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, context, {
    allOwnKeys: true
  });

  // Copy context to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, context, null, {
    allOwnKeys: true
  });

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance((0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultConfig, instanceConfig));
  };
  return instance;
}

// Create the default instance to be exported
var axios = createInstance(_defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

// Expose Axios class to allow class inheritance
axios.Axios = _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"];

// Expose Cancel & CancelToken
axios.CanceledError = _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__["default"];
axios.CancelToken = _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__["default"];
axios.isCancel = _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__["default"];
axios.VERSION = _env_data_js__WEBPACK_IMPORTED_MODULE_8__.VERSION;
axios.toFormData = _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__["default"];

// Expose AxiosError class
axios.AxiosError = _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__["default"];

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__["default"];

// Expose isAxiosError
axios.isAxiosError = _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__["default"];

// Expose mergeConfig
axios.mergeConfig = _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"];
axios.AxiosHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__["default"];
axios.formToJSON = function (thing) {
  return (0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);
};
axios.HttpStatusCode = _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_15__["default"];
axios["default"] = axios;

// this module should only have a default export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
var CancelToken = /*#__PURE__*/function () {
  function CancelToken(executor) {
    _classCallCheck(this, CancelToken);
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    var token = this;

    // eslint-disable-next-line func-names
    this.promise.then(function (cancel) {
      if (!token._listeners) return;
      var i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = function (onfulfilled) {
      var _resolve;
      // eslint-disable-next-line func-names
      var promise = new Promise(function (resolve) {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
      token.reason = new _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  _createClass(CancelToken, [{
    key: "throwIfRequested",
    value: function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }

    /**
     * Subscribe to the cancel signal
     */
  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }

    /**
     * Unsubscribe from the cancel signal
     */
  }, {
    key: "unsubscribe",
    value: function unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      var index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }

    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
  }], [{
    key: "source",
    value: function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token: token,
        cancel: cancel
      };
    }
  }]);
  return CancelToken;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelToken);

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CanceledError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, message == null ? 'canceled' : message, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}
_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].inherits(CanceledError, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __CANCEL__: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanceledError);

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCancel)
/* harmony export */ });


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterceptorManager.js */ "./node_modules/axios/lib/core/InterceptorManager.js");
/* harmony import */ var _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatchRequest.js */ "./node_modules/axios/lib/core/dispatchRequest.js");
/* harmony import */ var _mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/validator.js */ "./node_modules/axios/lib/helpers/validator.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








var validators = _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
var Axios = /*#__PURE__*/function () {
  function Axios(instanceConfig) {
    _classCallCheck(this, Axios);
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
      response: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  _createClass(Axios, [{
    key: "request",
    value: function request(configOrUrl, config) {
      /*eslint no-param-reassign:0*/
      // Allow for axios('example/url'[, config]) a la fetch API
      if (typeof configOrUrl === 'string') {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
      var _config = config,
        transitional = _config.transitional,
        paramsSerializer = _config.paramsSerializer,
        headers = _config.headers;
      if (transitional !== undefined) {
        _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators["boolean"]),
          forcedJSONParsing: validators.transitional(validators["boolean"]),
          clarifyTimeoutError: validators.transitional(validators["boolean"])
        }, false);
      }
      if (paramsSerializer !== undefined) {
        _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(paramsSerializer, {
          encode: validators["function"],
          serialize: validators["function"]
        }, true);
      }

      // Set config.method
      config.method = (config.method || this.defaults.method || 'get').toLowerCase();
      var contextHeaders;

      // Flatten headers
      contextHeaders = headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].merge(headers.common, headers[config.method]);
      contextHeaders && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (method) {
        delete headers[method];
      });
      config.headers = _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].concat(contextHeaders, headers);

      // filter out skipped interceptors
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      var i = 0;
      var len;
      if (!synchronousRequestInterceptors) {
        var chain = [_dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this), undefined];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      var newConfig = config;
      i = 0;
      while (i < len) {
        var onFulfilled = requestInterceptorChain[i++];
        var onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
  }, {
    key: "getUri",
    value: function getUri(config) {
      config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
      var fullPath = (0,_buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config.baseURL, config.url);
      return (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__["default"])(fullPath, config.params, config.paramsSerializer);
    }
  }]);
  return Axios;
}(); // Provide aliases for supported request methods
_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});
_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
        method: method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url: url,
        data: data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios);

/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosError.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError.prototype;
var descriptors = {};
['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(function (code) {
  descriptors[code] = {
    value: code
  };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {
  value: true
});

// eslint-disable-next-line func-names
AxiosError.from = function (error, code, config, request, response, customProps) {
  var axiosError = Object.create(prototype);
  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, function (prop) {
    return prop !== 'isAxiosError';
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosError);

/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosHeaders.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosHeaders.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseHeaders.js */ "./node_modules/axios/lib/helpers/parseHeaders.js");


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var $internals = Symbol('internals');
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  var tokens = Object.create(null);
  var tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  var match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
function isValidHeaderName(str) {
  return /^[-_a-zA-Z]+$/.test(str.trim());
}
function matchHeaderValue(context, value, header, filter) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(filter)) {
    return filter.call(this, value, header);
  }
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value)) return;
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(filter)) {
    return value.indexOf(filter) !== -1;
  }
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(filter)) {
    return filter.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, function (w, _char, str) {
    return _char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  var accessorName = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toCamelCase(' ' + header);
  ['get', 'set', 'has'].forEach(function (methodName) {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function value(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
var AxiosHeaders = /*#__PURE__*/function (_Symbol$iterator, _Symbol$toStringTag) {
  function AxiosHeaders(headers) {
    _classCallCheck(this, AxiosHeaders);
    headers && this.set(headers);
  }
  _createClass(AxiosHeaders, [{
    key: "set",
    value: function set(header, valueOrRewrite, rewrite) {
      var self = this;
      function setHeader(_value, _header, _rewrite) {
        var lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error('header name must be a non-empty string');
        }
        var key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, lHeader);
        if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
          self[key || _header] = normalizeValue(_value);
        }
      }
      var setHeaders = function setHeaders(headers, _rewrite) {
        return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers, function (_value, _header) {
          return setHeader(_value, _header, _rewrite);
        });
      };
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders((0,_helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"])(header), valueOrRewrite);
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
  }, {
    key: "get",
    value: function get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        var key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);
        if (key) {
          var value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError('parser must be boolean|regexp|function');
        }
      }
    }
  }, {
    key: "has",
    value: function has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        var key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);
        return !!(key && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
  }, {
    key: "delete",
    value: function _delete(header, matcher) {
      var self = this;
      var deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          var key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, _header);
          if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
            delete self[key];
            deleted = true;
          }
        }
      }
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
  }, {
    key: "clear",
    value: function clear() {
      return Object.keys(this).forEach(this["delete"].bind(this));
    }
  }, {
    key: "normalize",
    value: function normalize(format) {
      var self = this;
      var headers = {};
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, function (value, header) {
        var key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(headers, header);
        if (key) {
          self[key] = normalizeValue(value);
          delete self[header];
          return;
        }
        var normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self[header];
        }
        self[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
  }, {
    key: "concat",
    value: function concat() {
      var _this$constructor;
      for (var _len = arguments.length, targets = new Array(_len), _key = 0; _key < _len; _key++) {
        targets[_key] = arguments[_key];
      }
      return (_this$constructor = this.constructor).concat.apply(_this$constructor, [this].concat(targets));
    }
  }, {
    key: "toJSON",
    value: function toJSON(asStrings) {
      var obj = Object.create(null);
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, function (value, header) {
        value != null && value !== false && (obj[header] = asStrings && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.join(', ') : value);
      });
      return obj;
    }
  }, {
    key: _Symbol$iterator,
    value: function value() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
  }, {
    key: "toString",
    value: function toString() {
      return Object.entries(this.toJSON()).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          header = _ref2[0],
          value = _ref2[1];
        return header + ': ' + value;
      }).join('\n');
    }
  }, {
    key: _Symbol$toStringTag,
    get: function get() {
      return 'AxiosHeaders';
    }
  }], [{
    key: "from",
    value: function from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
  }, {
    key: "concat",
    value: function concat(first) {
      var computed = new this(first);
      for (var _len2 = arguments.length, targets = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        targets[_key2 - 1] = arguments[_key2];
      }
      targets.forEach(function (target) {
        return computed.set(target);
      });
      return computed;
    }
  }, {
    key: "accessor",
    value: function accessor(header) {
      var internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      var accessors = internals.accessors;
      var prototype = this.prototype;
      function defineAccessor(_header) {
        var lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype, _header);
          accessors[lHeader] = true;
        }
      }
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  }]);
  return AxiosHeaders;
}(Symbol.iterator, Symbol.toStringTag);
AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent']);
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders.prototype);
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosHeaders);

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var InterceptorManager = /*#__PURE__*/function () {
  function InterceptorManager() {
    _classCallCheck(this, InterceptorManager);
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  _createClass(InterceptorManager, [{
    key: "use",
    value: function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }

    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
  }, {
    key: "eject",
    value: function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }

    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
  }, {
    key: "clear",
    value: function clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }

    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
  }, {
    key: "forEach",
    value: function forEach(fn) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  }]);
  return InterceptorManager;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterceptorManager);

/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFullPath)
/* harmony export */ });
/* harmony import */ var _helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isAbsoluteURL.js */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
/* harmony import */ var _helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/combineURLs.js */ "./node_modules/axios/lib/helpers/combineURLs.js");





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0,_helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__["default"])(requestedURL)) {
    return (0,_helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseURL, requestedURL);
  }
  return requestedURL;
}

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dispatchRequest)
/* harmony export */ });
/* harmony import */ var _transformData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformData.js */ "./node_modules/axios/lib/core/transformData.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers);

  // Transform request data
  config.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(config, config.transformRequest);
  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }
  var adapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__["default"].getAdapter(config.adapter || _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(config, config.transformResponse, response);
    response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!(0,_cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__["default"])(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(config, config.transformResponse, reason.response);
        reason.response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeConfig)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");




var headersToObject = function headersToObject(thing) {
  return thing instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? thing.toJSON() : thing;
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  function getMergedValue(target, source, caseless) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(target) && _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge.call({
        caseless: caseless
      }, target, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge({}, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }
  var mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: function headers(a, b) {
      return mergeDeepProperties(headersToObject(a), headersToObject(b), true);
    }
  };
  _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(config1[prop], config2[prop], prop);
    _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ settle)
/* harmony export */ });
/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Request failed with status code ' + response.status, [_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_REQUEST, _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
  }
}

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transformData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  var config = this || _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  var context = response || config;
  var headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(context.headers);
  var data = context.data;
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });
  headers.normalize();
  return data;
}

/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "./node_modules/axios/lib/helpers/toURLEncodedForm.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");









var DEFAULT_CONTENT_TYPE = {
  'Content-Type': undefined
};

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: _transitional_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  adapter: ['xhr', 'http'],
  transformRequest: [function transformRequest(data, headers) {
    var contentType = headers.getContentType() || '';
    var hasJSONContentType = contentType.indexOf('application/json') > -1;
    var isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);
    if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {
      data = new FormData(data);
    }
    var isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);
    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data)) : data;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data)) {
      return data;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {
      return data.buffer;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }
    var isFileList;
    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data, this.formSerializer).toString();
      }
      if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        var _FormData = this.env && this.env.FormData;
        return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(isFileList ? {
          'files[]': data
        } : data, _FormData && new _FormData(), this.formSerializer);
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var JSONRequested = this.responseType === 'json';
    if (data && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      var silentJSONParsing = transitional && transitional.silentJSONParsing;
      var strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.FormData,
    Blob: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].merge(DEFAULT_CONTENT_TYPE);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaults);

/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});

/***/ }),

/***/ "./node_modules/axios/lib/env/classes/FormData.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/env/classes/FormData.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form_data__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": () => (/* binding */ VERSION)
/* harmony export */ });
var VERSION = "1.2.2";

/***/ }),

/***/ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js":
/*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  var charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, this, options);
}
var prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString(encoder) {
  var _encode = encoder ? function (value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosURLSearchParams);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/HttpStatusCode.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    key = _ref2[0],
    value = _ref2[1];
  HttpStatusCode[value] = key;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpStatusCode);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bind)
/* harmony export */ });


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildURL)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  var _encode = options && options.encode || encode;
  var serializeFn = options && options.serialize;
  var serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(params) ? params.toString() : new _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__["default"](params, options).toString(_encode);
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ combineURLs)
/* harmony export */ });


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStandardBrowserEnv ?
// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));
      if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }
      if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(path)) {
        cookie.push('path=' + path);
      }
      if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(domain)) {
        cookie.push('domain=' + domain);
      }
      if (secure === true) {
        cookie.push('secure');
      }
      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :
// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}());

/***/ }),

/***/ "./node_modules/axios/lib/helpers/formDataToJSON.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchAll(/\w+|\[(\w*)]/g, name).map(function (match) {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  var obj = {};
  var keys = Object.keys(arr);
  var i;
  var len = keys.length;
  var key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    var name = path[index++];
    var isNumericKey = Number.isFinite(+name);
    var isLast = index >= path.length;
    name = !name && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target) ? target.length : name;
    if (isLast) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(target[name])) {
      target[name] = [];
    }
    var result = buildPath(path, value, target[name], index);
    if (result && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(formData) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(formData.entries)) {
    var obj = {};
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEachEntry(formData, function (name, value) {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataToJSON);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAbsoluteURL)
/* harmony export */ });


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAxiosError)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(payload) && payload.isAxiosError === true;
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStandardBrowserEnv ?
// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;
    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :
// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}());

/***/ }),

/***/ "./node_modules/axios/lib/helpers/null.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line strict
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (rawHeaders) {
  var parsed = {};
  var key;
  var val;
  var i;
  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });
  return parsed;
});

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseProtocol.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseProtocol)
/* harmony export */ });


function parseProtocol(url) {
  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/speedometer.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/speedometer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  var bytes = new Array(samplesCount);
  var timestamps = new Array(samplesCount);
  var head = 0;
  var tail = 0;
  var firstSampleTS;
  min = min !== undefined ? min : 1000;
  return function push(chunkLength) {
    var now = Date.now();
    var startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    var i = tail;
    var bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    var passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (speedometer);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ spread)
/* harmony export */ });


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/toFormData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _env_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../env/classes/FormData.js */ "./node_modules/axios/lib/env/classes/FormData.js");


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(thing) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(arr) && !arr.some(isVisitable);
}
var predicates = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliant(thing) {
  return thing && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator];
}

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (_env_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"] || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(source[option]);
  });
  var metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  var visitor = options.visitor || defaultVisitor;
  var dots = options.dots;
  var indexes = options.indexes;
  var _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  var useBlob = _Blob && isSpecCompliant(formData);
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }
  function convertValue(value) {
    if (value === null) return '';
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(value)) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Blob is not supported. Use a Buffer instead.');
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    var arr = value;
    if (value && !path && _typeof(value) === 'object') {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) && isFlatArray(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]') && (arr = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(value))) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && formData.append(
          // eslint-disable-next-line no-nested-ternary
          indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  var stack = [];
  var exposedHelpers = Object.assign(predicates, {
    defaultVisitor: defaultVisitor,
    convertValue: convertValue,
    isVisitable: isVisitable
  });
  function build(value, path) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }
    stack.push(value);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(value, function each(el, key) {
      var result = !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && visitor.call(formData, el, _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(key) ? key.trim() : key, path, exposedHelpers);
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('data must be an object');
  }
  build(obj);
  return formData;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFormData);

/***/ }),

/***/ "./node_modules/axios/lib/helpers/toURLEncodedForm.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toURLEncodedForm)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");





function toURLEncodedForm(data, options) {
  return (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, new _platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].classes.URLSearchParams(), Object.assign({
    visitor: function visitor(value, key, path, helpers) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNode && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (type, i) {
  validators[type] = function validator(thing) {
    return _typeof(thing) === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});
var deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + _env_data_js__WEBPACK_IMPORTED_MODULE_0__.VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function (value, opt, opts) {
    if (validator === false) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_DEPRECATED);
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
    }
    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (_typeof(options) !== 'object') {
    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('options must be an object', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('option ' + opt + ' must be ' + result, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Unknown option ' + opt, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION);
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  assertOptions: assertOptions,
  validators: validators
});

/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/FormData.js":
/*!*********************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormData);

/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/URLSearchParams.js */ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js");
/* harmony import */ var _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormData.js */ "./node_modules/axios/lib/platform/browser/classes/FormData.js");



/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
var isStandardBrowserEnv = function () {
  var product;
  if (typeof navigator !== 'undefined' && ((product = navigator.product) === 'ReactNative' || product === 'NativeScript' || product === 'NS')) {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
var isStandardBrowserWebWorkerEnv = function () {
  return typeof WorkerGlobalScope !== 'undefined' &&
  // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isBrowser: true,
  classes: {
    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Blob: Blob
  },
  isStandardBrowserEnv: isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv: isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;
var getPrototypeOf = Object.getPrototypeOf;
var kindOf = function (cache) {
  return function (thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
}(Object.create(null));
var kindOfTest = function kindOfTest(type) {
  type = type.toLowerCase();
  return function (thing) {
    return kindOf(thing) === type;
  };
};
var typeOfTest = function typeOfTest(type) {
  return function (thing) {
    return _typeof(thing) === type;
  };
};

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
var isArray = Array.isArray;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
var isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
var isArrayBuffer = kindOfTest('ArrayBuffer');

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
var isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
var isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
var isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
var isObject = function isObject(thing) {
  return thing !== null && _typeof(thing) === 'object';
};

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
var isBoolean = function isBoolean(thing) {
  return thing === true || thing === false;
};

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
var isPlainObject = function isPlainObject(val) {
  if (kindOf(val) !== 'object') {
    return false;
  }
  var prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
var isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
var isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
var isStream = function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
};

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
var isFormData = function isFormData(thing) {
  var pattern = '[object FormData]';
  return thing && (typeof FormData === 'function' && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
var isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
var trim = function trim(str) {
  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$allOwnKeys = _ref.allOwnKeys,
    allOwnKeys = _ref$allOwnKeys === void 0 ? false : _ref$allOwnKeys;
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }
  var i;
  var l;

  // Force an array if not already something iterable
  if (_typeof(obj) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }
  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    var keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    var len = keys.length;
    var key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  var keys = Object.keys(obj);
  var i = keys.length;
  var _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
var _global = function () {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
}();
var isContextDefined = function isContextDefined(context) {
  return !isUndefined(context) && context !== _global;
};

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge( /* obj1, obj2, obj3, ... */
) {
  var _ref2 = isContextDefined(this) && this || {},
    caseless = _ref2.caseless;
  var result = {};
  var assignValue = function assignValue(val, key) {
    var targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (var i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
var extend = function extend(a, b, thisArg) {
  var _ref3 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
    allOwnKeys = _ref3.allOwnKeys;
  forEach(b, function (val, key) {
    if (thisArg && isFunction(val)) {
      a[key] = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__["default"])(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {
    allOwnKeys: allOwnKeys
  });
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
var stripBOM = function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
var inherits = function inherits(constructor, superConstructor, props, descriptors) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
var toFlatObject = function toFlatObject(sourceObj, destObj, filter, propFilter) {
  var props;
  var i;
  var prop;
  var merged = {};
  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
var endsWith = function endsWith(str, searchString, position) {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};

/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
var toArray = function toArray(thing) {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  var i = thing.length;
  if (!isNumber(i)) return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
var isTypedArray = function (TypedArray) {
  // eslint-disable-next-line func-names
  return function (thing) {
    return TypedArray && thing instanceof TypedArray;
  };
}(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
var forEachEntry = function forEachEntry(obj, fn) {
  var generator = obj && obj[Symbol.iterator];
  var iterator = generator.call(obj);
  var result;
  while ((result = iterator.next()) && !result.done) {
    var pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
var matchAll = function matchAll(regExp, str) {
  var matches;
  var arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
var isHTMLForm = kindOfTest('HTMLFormElement');
var toCamelCase = function toCamelCase(str) {
  return str.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};

/* Creating a function that will check if an object has a property. */
var hasOwnProperty = function (_ref4) {
  var hasOwnProperty = _ref4.hasOwnProperty;
  return function (obj, prop) {
    return hasOwnProperty.call(obj, prop);
  };
}(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
var isRegExp = kindOfTest('RegExp');
var reduceDescriptors = function reduceDescriptors(obj, reducer) {
  var descriptors = Object.getOwnPropertyDescriptors(obj);
  var reducedDescriptors = {};
  forEach(descriptors, function (descriptor, name) {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

var freezeMethods = function freezeMethods(obj) {
  reduceDescriptors(obj, function (descriptor, name) {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }
    var value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;
    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = function () {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};
var toObjectSet = function toObjectSet(arrayOrString, delimiter) {
  var obj = {};
  var define = function define(arr) {
    arr.forEach(function (value) {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
var noop = function noop() {};
var toFiniteNumber = function toFiniteNumber(value, defaultValue) {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};
var toJSONObject = function toJSONObject(obj) {
  var stack = new Array(10);
  var visit = function visit(source, i) {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!('toJSON' in source)) {
        stack[i] = source;
        var target = isArray(source) ? [] : {};
        forEach(source, function (value, key) {
          var reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = undefined;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isBoolean: isBoolean,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isRegExp: isRegExp,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isTypedArray: isTypedArray,
  isFileList: isFileList,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM,
  inherits: inherits,
  toFlatObject: toFlatObject,
  kindOf: kindOf,
  kindOfTest: kindOfTest,
  endsWith: endsWith,
  toArray: toArray,
  forEachEntry: forEachEntry,
  matchAll: matchAll,
  isHTMLForm: isHTMLForm,
  hasOwnProperty: hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: reduceDescriptors,
  freezeMethods: freezeMethods,
  toObjectSet: toObjectSet,
  toCamelCase: toCamelCase,
  noop: noop,
  toFiniteNumber: toFiniteNumber,
  findKey: findKey,
  global: _global,
  isContextDefined: isContextDefined,
  toJSONObject: toJSONObject
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generateJoke__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateJoke */ "./src/generateJoke.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _assets_laughing_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/laughing.svg */ "./src/assets/laughing.svg");



var laughImg = document.getElementById('laughImg');
laughImg.src = _assets_laughing_svg__WEBPACK_IMPORTED_MODULE_2__;
var jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', function () {
  return (0,_generateJoke__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
(0,_generateJoke__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2Zvcm0tZGF0YS9saWIvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vc3JjL2dlbmVyYXRlSm9rZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy9hZGFwdGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3NFcnJvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zSGVhZGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMvdHJhbnNpdGlvbmFsLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2Vudi9jbGFzc2VzL0Zvcm1EYXRhLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2Vudi9kYXRhLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9IdHRwU3RhdHVzQ29kZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQXhpb3NFcnJvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL251bGwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZVByb3RvY29sLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3BlZWRvbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy90b0Zvcm1EYXRhLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdG9VUkxFbmNvZGVkRm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2NsYXNzZXMvRm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9jbGFzc2VzL1VSTFNlYXJjaFBhcmFtcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyA/IHNlbGYuRm9ybURhdGEgOiB3aW5kb3cuRm9ybURhdGE7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUpva2UgKCkge1xyXG4gIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF4aW9zLmdldCAoJ2h0dHBzOi8vaWNhbmhhemRhZGpva2UuY29tJywgY29uZmlnKS50aGVuKChyZXMpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqb2tlJykuaW5uZXJIVE1MID0gcmVzLmRhdGEuam9rZVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlSm9rZSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmYThjYztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgcGFkZGluZzogNTBweCAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDA7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmpva2Uge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZmE4Y2M7XFxuICBjb2xvcjogI2Y0ZjRmNDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHBhZGRpbmc6IDE0cHggNDBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ0bjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG59XFxuLmJ0bjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQTtFQUNFLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFUYztFQVVkLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFyQmdCO0VBc0JoQixtQkFBQTtFQUNBLHdFQXRCVztFQXVCWCxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFKRjs7QUFPQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFuRGM7RUFvRGQsY0FuRGdCO0VBb0RoQixTQUFBO0VBQ0EsbUJBQUE7RUFDQSx1RUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFKRjtBQU1FO0VBQ0Usc0JBQUE7QUFKSjtBQU9FO0VBQ0UsVUFBQTtBQUxKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuJHByaW1hcnktY29sb3I6ICMyZmE4Y2M7XFxyXFxuJHNlY29uZGFyeS1jb2xvcjogI2Y0ZjRmNDtcXHJcXG4kYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XFxyXFxuICBwYWRkaW5nOiA1MHB4IDIwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICB3aWR0aDogODAwcHg7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uam9rZSB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG4gIG1heC13aWR0aDogNjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIHBhZGRpbmc6IDE0cHggNDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICY6YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBodHRwQWRhcHRlciBmcm9tICcuL2h0dHAuanMnO1xuaW1wb3J0IHhockFkYXB0ZXIgZnJvbSAnLi94aHIuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSBcIi4uL2NvcmUvQXhpb3NFcnJvci5qc1wiO1xuXG5jb25zdCBrbm93bkFkYXB0ZXJzID0ge1xuICBodHRwOiBodHRwQWRhcHRlcixcbiAgeGhyOiB4aHJBZGFwdGVyXG59XG5cbnV0aWxzLmZvckVhY2goa25vd25BZGFwdGVycywgKGZuLCB2YWx1ZSkgPT4ge1xuICBpZihmbikge1xuICAgIHRyeSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sICduYW1lJywge3ZhbHVlfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgJ2FkYXB0ZXJOYW1lJywge3ZhbHVlfSk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEFkYXB0ZXI6IChhZGFwdGVycykgPT4ge1xuICAgIGFkYXB0ZXJzID0gdXRpbHMuaXNBcnJheShhZGFwdGVycykgPyBhZGFwdGVycyA6IFthZGFwdGVyc107XG5cbiAgICBjb25zdCB7bGVuZ3RofSA9IGFkYXB0ZXJzO1xuICAgIGxldCBuYW1lT3JBZGFwdGVyO1xuICAgIGxldCBhZGFwdGVyO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbmFtZU9yQWRhcHRlciA9IGFkYXB0ZXJzW2ldO1xuICAgICAgaWYoKGFkYXB0ZXIgPSB1dGlscy5pc1N0cmluZyhuYW1lT3JBZGFwdGVyKSA/IGtub3duQWRhcHRlcnNbbmFtZU9yQWRhcHRlci50b0xvd2VyQ2FzZSgpXSA6IG5hbWVPckFkYXB0ZXIpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghYWRhcHRlcikge1xuICAgICAgaWYgKGFkYXB0ZXIgPT09IGZhbHNlKSB7XG4gICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICAgIGBBZGFwdGVyICR7bmFtZU9yQWRhcHRlcn0gaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgZW52aXJvbm1lbnRgLFxuICAgICAgICAgICdFUlJfTk9UX1NVUFBPUlQnXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgdXRpbHMuaGFzT3duUHJvcChrbm93bkFkYXB0ZXJzLCBuYW1lT3JBZGFwdGVyKSA/XG4gICAgICAgICAgYEFkYXB0ZXIgJyR7bmFtZU9yQWRhcHRlcn0nIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhlIGJ1aWxkYCA6XG4gICAgICAgICAgYFVua25vd24gYWRhcHRlciAnJHtuYW1lT3JBZGFwdGVyfSdgXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghdXRpbHMuaXNGdW5jdGlvbihhZGFwdGVyKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYWRhcHRlciBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgIH1cblxuICAgIHJldHVybiBhZGFwdGVyO1xuICB9LFxuICBhZGFwdGVyczoga25vd25BZGFwdGVyc1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgc2V0dGxlIGZyb20gJy4vLi4vY29yZS9zZXR0bGUuanMnO1xuaW1wb3J0IGNvb2tpZXMgZnJvbSAnLi8uLi9oZWxwZXJzL2Nvb2tpZXMuanMnO1xuaW1wb3J0IGJ1aWxkVVJMIGZyb20gJy4vLi4vaGVscGVycy9idWlsZFVSTC5qcyc7XG5pbXBvcnQgYnVpbGRGdWxsUGF0aCBmcm9tICcuLi9jb3JlL2J1aWxkRnVsbFBhdGguanMnO1xuaW1wb3J0IGlzVVJMU2FtZU9yaWdpbiBmcm9tICcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzJztcbmltcG9ydCB0cmFuc2l0aW9uYWxEZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy90cmFuc2l0aW9uYWwuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4uL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzJztcbmltcG9ydCBwYXJzZVByb3RvY29sIGZyb20gJy4uL2hlbHBlcnMvcGFyc2VQcm90b2NvbC5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5pbXBvcnQgc3BlZWRvbWV0ZXIgZnJvbSAnLi4vaGVscGVycy9zcGVlZG9tZXRlci5qcyc7XG5cbmZ1bmN0aW9uIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGxpc3RlbmVyLCBpc0Rvd25sb2FkU3RyZWFtKSB7XG4gIGxldCBieXRlc05vdGlmaWVkID0gMDtcbiAgY29uc3QgX3NwZWVkb21ldGVyID0gc3BlZWRvbWV0ZXIoNTAsIDI1MCk7XG5cbiAgcmV0dXJuIGUgPT4ge1xuICAgIGNvbnN0IGxvYWRlZCA9IGUubG9hZGVkO1xuICAgIGNvbnN0IHRvdGFsID0gZS5sZW5ndGhDb21wdXRhYmxlID8gZS50b3RhbCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBwcm9ncmVzc0J5dGVzID0gbG9hZGVkIC0gYnl0ZXNOb3RpZmllZDtcbiAgICBjb25zdCByYXRlID0gX3NwZWVkb21ldGVyKHByb2dyZXNzQnl0ZXMpO1xuICAgIGNvbnN0IGluUmFuZ2UgPSBsb2FkZWQgPD0gdG90YWw7XG5cbiAgICBieXRlc05vdGlmaWVkID0gbG9hZGVkO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGxvYWRlZCxcbiAgICAgIHRvdGFsLFxuICAgICAgcHJvZ3Jlc3M6IHRvdGFsID8gKGxvYWRlZCAvIHRvdGFsKSA6IHVuZGVmaW5lZCxcbiAgICAgIGJ5dGVzOiBwcm9ncmVzc0J5dGVzLFxuICAgICAgcmF0ZTogcmF0ZSA/IHJhdGUgOiB1bmRlZmluZWQsXG4gICAgICBlc3RpbWF0ZWQ6IHJhdGUgJiYgdG90YWwgJiYgaW5SYW5nZSA/ICh0b3RhbCAtIGxvYWRlZCkgLyByYXRlIDogdW5kZWZpbmVkLFxuICAgICAgZXZlbnQ6IGVcbiAgICB9O1xuXG4gICAgZGF0YVtpc0Rvd25sb2FkU3RyZWFtID8gJ2Rvd25sb2FkJyA6ICd1cGxvYWQnXSA9IHRydWU7XG5cbiAgICBsaXN0ZW5lcihkYXRhKTtcbiAgfTtcbn1cblxuY29uc3QgaXNYSFJBZGFwdGVyU3VwcG9ydGVkID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0IGRlZmF1bHQgaXNYSFJBZGFwdGVyU3VwcG9ydGVkICYmIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBsZXQgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICBjb25zdCByZXF1ZXN0SGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbmZpZy5oZWFkZXJzKS5ub3JtYWxpemUoKTtcbiAgICBjb25zdCByZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgIGxldCBvbkNhbmNlbGVkO1xuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi51bnN1YnNjcmliZShvbkNhbmNlbGVkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5zaWduYWwpIHtcbiAgICAgICAgY29uZmlnLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSAmJiAocGxhdGZvcm0uaXNTdGFuZGFyZEJyb3dzZXJFbnYgfHwgcGxhdGZvcm0uaXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYpKSB7XG4gICAgICByZXF1ZXN0SGVhZGVycy5zZXRDb250ZW50VHlwZShmYWxzZSk7IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgY29uc3QgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIGNvbnN0IHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgPyB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoY29uZmlnLmF1dGgucGFzc3dvcmQpKSA6ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpKTtcbiAgICB9XG5cbiAgICBjb25zdCBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgZnVuY3Rpb24gb25sb2FkZW5kKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICBjb25zdCByZXNwb25zZUhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShcbiAgICAgICAgJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCAmJiByZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG4gICAgICApO1xuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gIXJlc3BvbnNlVHlwZSB8fCByZXNwb25zZVR5cGUgPT09ICd0ZXh0JyB8fCByZXNwb25zZVR5cGUgPT09ICdqc29uJyA/XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShmdW5jdGlvbiBfcmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSwgZnVuY3Rpb24gX3JlamVjdChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCdvbmxvYWRlbmQnIGluIHJlcXVlc3QpIHtcbiAgICAgIC8vIFVzZSBvbmxvYWRlbmQgaWYgYXZhaWxhYmxlXG4gICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IG9ubG9hZGVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZSB0byBlbXVsYXRlIG9ubG9hZGVuZFxuICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlYWR5c3RhdGUgaGFuZGxlciBpcyBjYWxsaW5nIGJlZm9yZSBvbmVycm9yIG9yIG9udGltZW91dCBoYW5kbGVycyxcbiAgICAgICAgLy8gc28gd2Ugc2hvdWxkIGNhbGwgb25sb2FkZW5kIG9uIHRoZSBuZXh0ICd0aWNrJ1xuICAgICAgICBzZXRUaW1lb3V0KG9ubG9hZGVuZCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgQXhpb3NFcnJvci5FQ09OTkFCT1JURUQsIGNvbmZpZywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcignTmV0d29yayBFcnJvcicsIEF4aW9zRXJyb3IuRVJSX05FVFdPUkssIGNvbmZpZywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICBsZXQgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0ID8gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJyA6ICd0aW1lb3V0IGV4Y2VlZGVkJztcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25hbCA9IGNvbmZpZy50cmFuc2l0aW9uYWwgfHwgdHJhbnNpdGlvbmFsRGVmYXVsdHM7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlLFxuICAgICAgICB0cmFuc2l0aW9uYWwuY2xhcmlmeVRpbWVvdXRFcnJvciA/IEF4aW9zRXJyb3IuRVRJTUVET1VUIDogQXhpb3NFcnJvci5FQ09OTkFCT1JURUQsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAocGxhdGZvcm0uaXNTdGFuZGFyZEJyb3dzZXJFbnYpIHtcbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgY29uc3QgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSlcbiAgICAgICAgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lICYmIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzLnNldChjb25maWcueHNyZkhlYWRlck5hbWUsIHhzcmZWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgIHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQgJiYgcmVxdWVzdEhlYWRlcnMuc2V0Q29udGVudFR5cGUobnVsbCk7XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycy50b0pTT04oKSwgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAocmVzcG9uc2VUeXBlICYmIHJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MsIHRydWUpKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcHJvZ3Jlc3NFdmVudFJlZHVjZXIoY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuIHx8IGNvbmZpZy5zaWduYWwpIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICBvbkNhbmNlbGVkID0gY2FuY2VsID0+IHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlamVjdCghY2FuY2VsIHx8IGNhbmNlbC50eXBlID8gbmV3IENhbmNlbGVkRXJyb3IobnVsbCwgY29uZmlnLCByZXF1ZXN0KSA6IGNhbmNlbCk7XG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9O1xuXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4gJiYgY29uZmlnLmNhbmNlbFRva2VuLnN1YnNjcmliZShvbkNhbmNlbGVkKTtcbiAgICAgIGlmIChjb25maWcuc2lnbmFsKSB7XG4gICAgICAgIGNvbmZpZy5zaWduYWwuYWJvcnRlZCA/IG9uQ2FuY2VsZWQoKSA6IGNvbmZpZy5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbkNhbmNlbGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcm90b2NvbCA9IHBhcnNlUHJvdG9jb2woZnVsbFBhdGgpO1xuXG4gICAgaWYgKHByb3RvY29sICYmIHBsYXRmb3JtLnByb3RvY29scy5pbmRleE9mKHByb3RvY29sKSA9PT0gLTEpIHtcbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcignVW5zdXBwb3J0ZWQgcHJvdG9jb2wgJyArIHByb3RvY29sICsgJzonLCBBeGlvc0Vycm9yLkVSUl9CQURfUkVRVUVTVCwgY29uZmlnKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhIHx8IG51bGwpO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IGJpbmQgZnJvbSAnLi9oZWxwZXJzL2JpbmQuanMnO1xuaW1wb3J0IEF4aW9zIGZyb20gJy4vY29yZS9BeGlvcy5qcyc7XG5pbXBvcnQgbWVyZ2VDb25maWcgZnJvbSAnLi9jb3JlL21lcmdlQ29uZmlnLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHRzL2luZGV4LmpzJztcbmltcG9ydCBmb3JtRGF0YVRvSlNPTiBmcm9tICcuL2hlbHBlcnMvZm9ybURhdGFUb0pTT04uanMnO1xuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XG5pbXBvcnQgQ2FuY2VsVG9rZW4gZnJvbSAnLi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMnO1xuaW1wb3J0IGlzQ2FuY2VsIGZyb20gJy4vY2FuY2VsL2lzQ2FuY2VsLmpzJztcbmltcG9ydCB7VkVSU0lPTn0gZnJvbSAnLi9lbnYvZGF0YS5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL2hlbHBlcnMvdG9Gb3JtRGF0YS5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgc3ByZWFkIGZyb20gJy4vaGVscGVycy9zcHJlYWQuanMnO1xuaW1wb3J0IGlzQXhpb3NFcnJvciBmcm9tICcuL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSBcIi4vY29yZS9BeGlvc0hlYWRlcnMuanNcIjtcbmltcG9ydCBIdHRwU3RhdHVzQ29kZSBmcm9tICcuL2hlbHBlcnMvSHR0cFN0YXR1c0NvZGUuanMnO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKlxuICogQHJldHVybnMge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIGNvbnN0IGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQsIHthbGxPd25LZXlzOiB0cnVlfSk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCwgbnVsbCwge2FsbE93bktleXM6IHRydWV9KTtcblxuICAvLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG4gIGluc3RhbmNlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICAgIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhkZWZhdWx0Q29uZmlnLCBpbnN0YW5jZUNvbmZpZykpO1xuICB9O1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG5jb25zdCBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbGVkRXJyb3IgPSBDYW5jZWxlZEVycm9yO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSBDYW5jZWxUb2tlbjtcbmF4aW9zLmlzQ2FuY2VsID0gaXNDYW5jZWw7XG5heGlvcy5WRVJTSU9OID0gVkVSU0lPTjtcbmF4aW9zLnRvRm9ybURhdGEgPSB0b0Zvcm1EYXRhO1xuXG4vLyBFeHBvc2UgQXhpb3NFcnJvciBjbGFzc1xuYXhpb3MuQXhpb3NFcnJvciA9IEF4aW9zRXJyb3I7XG5cbi8vIGFsaWFzIGZvciBDYW5jZWxlZEVycm9yIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5heGlvcy5DYW5jZWwgPSBheGlvcy5DYW5jZWxlZEVycm9yO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuXG5heGlvcy5zcHJlYWQgPSBzcHJlYWQ7XG5cbi8vIEV4cG9zZSBpc0F4aW9zRXJyb3JcbmF4aW9zLmlzQXhpb3NFcnJvciA9IGlzQXhpb3NFcnJvcjtcblxuLy8gRXhwb3NlIG1lcmdlQ29uZmlnXG5heGlvcy5tZXJnZUNvbmZpZyA9IG1lcmdlQ29uZmlnO1xuXG5heGlvcy5BeGlvc0hlYWRlcnMgPSBBeGlvc0hlYWRlcnM7XG5cbmF4aW9zLmZvcm1Ub0pTT04gPSB0aGluZyA9PiBmb3JtRGF0YVRvSlNPTih1dGlscy5pc0hUTUxGb3JtKHRoaW5nKSA/IG5ldyBGb3JtRGF0YSh0aGluZykgOiB0aGluZyk7XG5cbmF4aW9zLkh0dHBTdGF0dXNDb2RlID0gSHR0cFN0YXR1c0NvZGU7XG5cbmF4aW9zLmRlZmF1bHQgPSBheGlvcztcblxuLy8gdGhpcyBtb2R1bGUgc2hvdWxkIG9ubHkgaGF2ZSBhIGRlZmF1bHQgZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBheGlvc1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuL0NhbmNlbGVkRXJyb3IuanMnO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtDYW5jZWxUb2tlbn1cbiAqL1xuY2xhc3MgQ2FuY2VsVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihleGVjdXRvcikge1xuICAgIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzb2x2ZVByb21pc2U7XG5cbiAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICB0aGlzLnByb21pc2UudGhlbihjYW5jZWwgPT4ge1xuICAgICAgaWYgKCF0b2tlbi5fbGlzdGVuZXJzKSByZXR1cm47XG5cbiAgICAgIGxldCBpID0gdG9rZW4uX2xpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgICAgIHRva2VuLl9saXN0ZW5lcnNbaV0oY2FuY2VsKTtcbiAgICAgIH1cbiAgICAgIHRva2VuLl9saXN0ZW5lcnMgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICB0aGlzLnByb21pc2UudGhlbiA9IG9uZnVsZmlsbGVkID0+IHtcbiAgICAgIGxldCBfcmVzb2x2ZTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHRva2VuLnN1YnNjcmliZShyZXNvbHZlKTtcbiAgICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgfSkudGhlbihvbmZ1bGZpbGxlZCk7XG5cbiAgICAgIHByb21pc2UuY2FuY2VsID0gZnVuY3Rpb24gcmVqZWN0KCkge1xuICAgICAgICB0b2tlbi51bnN1YnNjcmliZShfcmVzb2x2ZSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCkge1xuICAgICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsZWRFcnJvcihtZXNzYWdlLCBjb25maWcsIHJlcXVlc3QpO1xuICAgICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaHJvd3MgYSBgQ2FuY2VsZWRFcnJvcmAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAgICovXG4gIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gICAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHRoZSBjYW5jZWwgc2lnbmFsXG4gICAqL1xuXG4gIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0aGlzLnJlYXNvbikge1xuICAgICAgbGlzdGVuZXIodGhpcy5yZWFzb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzID0gW2xpc3RlbmVyXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVW5zdWJzY3JpYmUgZnJvbSB0aGUgY2FuY2VsIHNpZ25hbFxuICAgKi9cblxuICB1bnN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gICAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gICAqL1xuICBzdGF0aWMgc291cmNlKCkge1xuICAgIGxldCBjYW5jZWw7XG4gICAgY29uc3QgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgICAgY2FuY2VsID0gYztcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW4sXG4gICAgICBjYW5jZWxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBBIGBDYW5jZWxlZEVycm9yYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3Q9fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gcmVxdWVzdCBUaGUgcmVxdWVzdC5cbiAqXG4gKiBAcmV0dXJucyB7Q2FuY2VsZWRFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbGVkRXJyb3IobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuICBBeGlvc0Vycm9yLmNhbGwodGhpcywgbWVzc2FnZSA9PSBudWxsID8gJ2NhbmNlbGVkJyA6IG1lc3NhZ2UsIEF4aW9zRXJyb3IuRVJSX0NBTkNFTEVELCBjb25maWcsIHJlcXVlc3QpO1xuICB0aGlzLm5hbWUgPSAnQ2FuY2VsZWRFcnJvcic7XG59XG5cbnV0aWxzLmluaGVyaXRzKENhbmNlbGVkRXJyb3IsIEF4aW9zRXJyb3IsIHtcbiAgX19DQU5DRUxfXzogdHJ1ZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbGVkRXJyb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IGJ1aWxkVVJMIGZyb20gJy4uL2hlbHBlcnMvYnVpbGRVUkwuanMnO1xuaW1wb3J0IEludGVyY2VwdG9yTWFuYWdlciBmcm9tICcuL0ludGVyY2VwdG9yTWFuYWdlci5qcyc7XG5pbXBvcnQgZGlzcGF0Y2hSZXF1ZXN0IGZyb20gJy4vZGlzcGF0Y2hSZXF1ZXN0LmpzJztcbmltcG9ydCBtZXJnZUNvbmZpZyBmcm9tICcuL21lcmdlQ29uZmlnLmpzJztcbmltcG9ydCBidWlsZEZ1bGxQYXRoIGZyb20gJy4vYnVpbGRGdWxsUGF0aC5qcyc7XG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gJy4uL2hlbHBlcnMvdmFsaWRhdG9yLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi9BeGlvc0hlYWRlcnMuanMnO1xuXG5jb25zdCB2YWxpZGF0b3JzID0gdmFsaWRhdG9yLnZhbGlkYXRvcnM7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKlxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmNsYXNzIEF4aW9zIHtcbiAgY29uc3RydWN0b3IoaW5zdGFuY2VDb25maWcpIHtcbiAgICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBjb25maWdPclVybCBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gICAqIEBwYXJhbSB7P09iamVjdH0gY29uZmlnXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAgICovXG4gIHJlcXVlc3QoY29uZmlnT3JVcmwsIGNvbmZpZykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgICBpZiAodHlwZW9mIGNvbmZpZ09yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgICAgY29uZmlnLnVybCA9IGNvbmZpZ09yVXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcgPSBjb25maWdPclVybCB8fCB7fTtcbiAgICB9XG5cbiAgICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gICAgY29uc3Qge3RyYW5zaXRpb25hbCwgcGFyYW1zU2VyaWFsaXplciwgaGVhZGVyc30gPSBjb25maWc7XG5cbiAgICBpZiAodHJhbnNpdGlvbmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbGlkYXRvci5hc3NlcnRPcHRpb25zKHRyYW5zaXRpb25hbCwge1xuICAgICAgICBzaWxlbnRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgICAgZm9yY2VkSlNPTlBhcnNpbmc6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICAgIGNsYXJpZnlUaW1lb3V0RXJyb3I6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbilcbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zU2VyaWFsaXplciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWxpZGF0b3IuYXNzZXJ0T3B0aW9ucyhwYXJhbXNTZXJpYWxpemVyLCB7XG4gICAgICAgIGVuY29kZTogdmFsaWRhdG9ycy5mdW5jdGlvbixcbiAgICAgICAgc2VyaWFsaXplOiB2YWxpZGF0b3JzLmZ1bmN0aW9uXG4gICAgICB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgY29uZmlnLm1ldGhvZFxuICAgIGNvbmZpZy5tZXRob2QgPSAoY29uZmlnLm1ldGhvZCB8fCB0aGlzLmRlZmF1bHRzLm1ldGhvZCB8fCAnZ2V0JykudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBjb250ZXh0SGVhZGVycztcblxuICAgIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICAgIGNvbnRleHRIZWFkZXJzID0gaGVhZGVycyAmJiB1dGlscy5tZXJnZShcbiAgICAgIGhlYWRlcnMuY29tbW9uLFxuICAgICAgaGVhZGVyc1tjb25maWcubWV0aG9kXVxuICAgICk7XG5cbiAgICBjb250ZXh0SGVhZGVycyAmJiB1dGlscy5mb3JFYWNoKFxuICAgICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgICAobWV0aG9kKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBoZWFkZXJzW21ldGhvZF07XG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbmZpZy5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmNvbmNhdChjb250ZXh0SGVhZGVycywgaGVhZGVycyk7XG5cbiAgICAvLyBmaWx0ZXIgb3V0IHNraXBwZWQgaW50ZXJjZXB0b3JzXG4gICAgY29uc3QgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgICBsZXQgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gdHJ1ZTtcbiAgICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICAgIGlmICh0eXBlb2YgaW50ZXJjZXB0b3IucnVuV2hlbiA9PT0gJ2Z1bmN0aW9uJyAmJiBpbnRlcmNlcHRvci5ydW5XaGVuKGNvbmZpZykgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzICYmIGludGVyY2VwdG9yLnN5bmNocm9ub3VzO1xuXG4gICAgICByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluID0gW107XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICAgIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICAgIH0pO1xuXG4gICAgbGV0IHByb21pc2U7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBsZW47XG5cbiAgICBpZiAoIXN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycykge1xuICAgICAgY29uc3QgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LmJpbmQodGhpcyksIHVuZGVmaW5lZF07XG4gICAgICBjaGFpbi51bnNoaWZ0LmFwcGx5KGNoYWluLCByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbik7XG4gICAgICBjaGFpbi5wdXNoLmFwcGx5KGNoYWluLCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4pO1xuICAgICAgbGVuID0gY2hhaW4ubGVuZ3RoO1xuXG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW5baSsrXSwgY2hhaW5baSsrXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGxlbiA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLmxlbmd0aDtcblxuICAgIGxldCBuZXdDb25maWcgPSBjb25maWc7XG5cbiAgICBpID0gMDtcblxuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICBjb25zdCBvbkZ1bGZpbGxlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluW2krK107XG4gICAgICBjb25zdCBvblJlamVjdGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW5baSsrXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ld0NvbmZpZyA9IG9uRnVsZmlsbGVkKG5ld0NvbmZpZyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBvblJlamVjdGVkLmNhbGwodGhpcywgZXJyb3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcHJvbWlzZSA9IGRpc3BhdGNoUmVxdWVzdC5jYWxsKHRoaXMsIG5ld0NvbmZpZyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuXG4gICAgaSA9IDA7XG4gICAgbGVuID0gcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLmxlbmd0aDtcblxuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbltpKytdLCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW5baSsrXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBnZXRVcmkoY29uZmlnKSB7XG4gICAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgICBjb25zdCBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHJldHVybiBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpO1xuICB9XG59XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kLFxuICAgICAgdXJsLFxuICAgICAgZGF0YTogKGNvbmZpZyB8fCB7fSkuZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlSFRUUE1ldGhvZChpc0Zvcm0pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaHR0cE1ldGhvZCh1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBoZWFkZXJzOiBpc0Zvcm0gPyB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICB9IDoge30sXG4gICAgICAgIHVybCxcbiAgICAgICAgZGF0YVxuICAgICAgfSkpO1xuICAgIH07XG4gIH1cblxuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGdlbmVyYXRlSFRUUE1ldGhvZCgpO1xuXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2QgKyAnRm9ybSddID0gZ2VuZXJhdGVIVFRQTWV0aG9kKHRydWUpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW2NvbmZpZ10gVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xuZnVuY3Rpb24gQXhpb3NFcnJvcihtZXNzYWdlLCBjb2RlLCBjb25maWcsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIEVycm9yLmNhbGwodGhpcyk7XG5cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zdGFjayA9IChuZXcgRXJyb3IoKSkuc3RhY2s7XG4gIH1cblxuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB0aGlzLm5hbWUgPSAnQXhpb3NFcnJvcic7XG4gIGNvZGUgJiYgKHRoaXMuY29kZSA9IGNvZGUpO1xuICBjb25maWcgJiYgKHRoaXMuY29uZmlnID0gY29uZmlnKTtcbiAgcmVxdWVzdCAmJiAodGhpcy5yZXF1ZXN0ID0gcmVxdWVzdCk7XG4gIHJlc3BvbnNlICYmICh0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2UpO1xufVxuXG51dGlscy5pbmhlcml0cyhBeGlvc0Vycm9yLCBFcnJvciwge1xuICB0b0pTT046IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB1dGlscy50b0pTT05PYmplY3QodGhpcy5jb25maWcpLFxuICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgc3RhdHVzOiB0aGlzLnJlc3BvbnNlICYmIHRoaXMucmVzcG9uc2Uuc3RhdHVzID8gdGhpcy5yZXNwb25zZS5zdGF0dXMgOiBudWxsXG4gICAgfTtcbiAgfVxufSk7XG5cbmNvbnN0IHByb3RvdHlwZSA9IEF4aW9zRXJyb3IucHJvdG90eXBlO1xuY29uc3QgZGVzY3JpcHRvcnMgPSB7fTtcblxuW1xuICAnRVJSX0JBRF9PUFRJT05fVkFMVUUnLFxuICAnRVJSX0JBRF9PUFRJT04nLFxuICAnRUNPTk5BQk9SVEVEJyxcbiAgJ0VUSU1FRE9VVCcsXG4gICdFUlJfTkVUV09SSycsXG4gICdFUlJfRlJfVE9PX01BTllfUkVESVJFQ1RTJyxcbiAgJ0VSUl9ERVBSRUNBVEVEJyxcbiAgJ0VSUl9CQURfUkVTUE9OU0UnLFxuICAnRVJSX0JBRF9SRVFVRVNUJyxcbiAgJ0VSUl9DQU5DRUxFRCcsXG4gICdFUlJfTk9UX1NVUFBPUlQnLFxuICAnRVJSX0lOVkFMSURfVVJMJ1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbl0uZm9yRWFjaChjb2RlID0+IHtcbiAgZGVzY3JpcHRvcnNbY29kZV0gPSB7dmFsdWU6IGNvZGV9O1xufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEF4aW9zRXJyb3IsIGRlc2NyaXB0b3JzKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsICdpc0F4aW9zRXJyb3InLCB7dmFsdWU6IHRydWV9KTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbkF4aW9zRXJyb3IuZnJvbSA9IChlcnJvciwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSwgY3VzdG9tUHJvcHMpID0+IHtcbiAgY29uc3QgYXhpb3NFcnJvciA9IE9iamVjdC5jcmVhdGUocHJvdG90eXBlKTtcblxuICB1dGlscy50b0ZsYXRPYmplY3QoZXJyb3IsIGF4aW9zRXJyb3IsIGZ1bmN0aW9uIGZpbHRlcihvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBFcnJvci5wcm90b3R5cGU7XG4gIH0sIHByb3AgPT4ge1xuICAgIHJldHVybiBwcm9wICE9PSAnaXNBeGlvc0Vycm9yJztcbiAgfSk7XG5cbiAgQXhpb3NFcnJvci5jYWxsKGF4aW9zRXJyb3IsIGVycm9yLm1lc3NhZ2UsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UpO1xuXG4gIGF4aW9zRXJyb3IuY2F1c2UgPSBlcnJvcjtcblxuICBheGlvc0Vycm9yLm5hbWUgPSBlcnJvci5uYW1lO1xuXG4gIGN1c3RvbVByb3BzICYmIE9iamVjdC5hc3NpZ24oYXhpb3NFcnJvciwgY3VzdG9tUHJvcHMpO1xuXG4gIHJldHVybiBheGlvc0Vycm9yO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3NFcnJvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBwYXJzZUhlYWRlcnMgZnJvbSAnLi4vaGVscGVycy9wYXJzZUhlYWRlcnMuanMnO1xuXG5jb25zdCAkaW50ZXJuYWxzID0gU3ltYm9sKCdpbnRlcm5hbHMnKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyKGhlYWRlcikge1xuICByZXR1cm4gaGVhZGVyICYmIFN0cmluZyhoZWFkZXIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gdXRpbHMuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5tYXAobm9ybWFsaXplVmFsdWUpIDogU3RyaW5nKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUb2tlbnMoc3RyKSB7XG4gIGNvbnN0IHRva2VucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGNvbnN0IHRva2Vuc1JFID0gLyhbXlxccyw7PV0rKVxccyooPzo9XFxzKihbXiw7XSspKT8vZztcbiAgbGV0IG1hdGNoO1xuXG4gIHdoaWxlICgobWF0Y2ggPSB0b2tlbnNSRS5leGVjKHN0cikpKSB7XG4gICAgdG9rZW5zW21hdGNoWzFdXSA9IG1hdGNoWzJdO1xuICB9XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEhlYWRlck5hbWUoc3RyKSB7XG4gIHJldHVybiAvXlstX2EtekEtWl0rJC8udGVzdChzdHIudHJpbSgpKTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hIZWFkZXJWYWx1ZShjb250ZXh0LCB2YWx1ZSwgaGVhZGVyLCBmaWx0ZXIpIHtcbiAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZmlsdGVyKSkge1xuICAgIHJldHVybiBmaWx0ZXIuY2FsbCh0aGlzLCB2YWx1ZSwgaGVhZGVyKTtcbiAgfVxuXG4gIGlmICghdXRpbHMuaXNTdHJpbmcodmFsdWUpKSByZXR1cm47XG5cbiAgaWYgKHV0aWxzLmlzU3RyaW5nKGZpbHRlcikpIHtcbiAgICByZXR1cm4gdmFsdWUuaW5kZXhPZihmaWx0ZXIpICE9PSAtMTtcbiAgfVxuXG4gIGlmICh1dGlscy5pc1JlZ0V4cChmaWx0ZXIpKSB7XG4gICAgcmV0dXJuIGZpbHRlci50ZXN0KHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRIZWFkZXIoaGVhZGVyKSB7XG4gIHJldHVybiBoZWFkZXIudHJpbSgpXG4gICAgLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvKFthLXpcXGRdKShcXHcqKS9nLCAodywgY2hhciwgc3RyKSA9PiB7XG4gICAgICByZXR1cm4gY2hhci50b1VwcGVyQ2FzZSgpICsgc3RyO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBidWlsZEFjY2Vzc29ycyhvYmosIGhlYWRlcikge1xuICBjb25zdCBhY2Nlc3Nvck5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZSgnICcgKyBoZWFkZXIpO1xuXG4gIFsnZ2V0JywgJ3NldCcsICdoYXMnXS5mb3JFYWNoKG1ldGhvZE5hbWUgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIG1ldGhvZE5hbWUgKyBhY2Nlc3Nvck5hbWUsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbihhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgICAgIHJldHVybiB0aGlzW21ldGhvZE5hbWVdLmNhbGwodGhpcywgaGVhZGVyLCBhcmcxLCBhcmcyLCBhcmczKTtcbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfSk7XG59XG5cbmNsYXNzIEF4aW9zSGVhZGVycyB7XG4gIGNvbnN0cnVjdG9yKGhlYWRlcnMpIHtcbiAgICBoZWFkZXJzICYmIHRoaXMuc2V0KGhlYWRlcnMpO1xuICB9XG5cbiAgc2V0KGhlYWRlciwgdmFsdWVPclJld3JpdGUsIHJld3JpdGUpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIHNldEhlYWRlcihfdmFsdWUsIF9oZWFkZXIsIF9yZXdyaXRlKSB7XG4gICAgICBjb25zdCBsSGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xuXG4gICAgICBpZiAoIWxIZWFkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoZWFkZXIgbmFtZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHNlbGYsIGxIZWFkZXIpO1xuXG4gICAgICBpZigha2V5IHx8IHNlbGZba2V5XSA9PT0gdW5kZWZpbmVkIHx8IF9yZXdyaXRlID09PSB0cnVlIHx8IChfcmV3cml0ZSA9PT0gdW5kZWZpbmVkICYmIHNlbGZba2V5XSAhPT0gZmFsc2UpKSB7XG4gICAgICAgIHNlbGZba2V5IHx8IF9oZWFkZXJdID0gbm9ybWFsaXplVmFsdWUoX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRIZWFkZXJzID0gKGhlYWRlcnMsIF9yZXdyaXRlKSA9PlxuICAgICAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCAoX3ZhbHVlLCBfaGVhZGVyKSA9PiBzZXRIZWFkZXIoX3ZhbHVlLCBfaGVhZGVyLCBfcmV3cml0ZSkpO1xuXG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QoaGVhZGVyKSB8fCBoZWFkZXIgaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yKSB7XG4gICAgICBzZXRIZWFkZXJzKGhlYWRlciwgdmFsdWVPclJld3JpdGUpXG4gICAgfSBlbHNlIGlmKHV0aWxzLmlzU3RyaW5nKGhlYWRlcikgJiYgKGhlYWRlciA9IGhlYWRlci50cmltKCkpICYmICFpc1ZhbGlkSGVhZGVyTmFtZShoZWFkZXIpKSB7XG4gICAgICBzZXRIZWFkZXJzKHBhcnNlSGVhZGVycyhoZWFkZXIpLCB2YWx1ZU9yUmV3cml0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlciAhPSBudWxsICYmIHNldEhlYWRlcih2YWx1ZU9yUmV3cml0ZSwgaGVhZGVyLCByZXdyaXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldChoZWFkZXIsIHBhcnNlcikge1xuICAgIGhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpO1xuXG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleSh0aGlzLCBoZWFkZXIpO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpc1trZXldO1xuXG4gICAgICAgIGlmICghcGFyc2VyKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnNlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZVRva2Vucyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihwYXJzZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlci5jYWxsKHRoaXMsIHZhbHVlLCBrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzUmVnRXhwKHBhcnNlcikpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VyLmV4ZWModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyc2VyIG11c3QgYmUgYm9vbGVhbnxyZWdleHB8ZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYXMoaGVhZGVyLCBtYXRjaGVyKSB7XG4gICAgaGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKGhlYWRlcik7XG5cbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KHRoaXMsIGhlYWRlcik7XG5cbiAgICAgIHJldHVybiAhIShrZXkgJiYgKCFtYXRjaGVyIHx8IG1hdGNoSGVhZGVyVmFsdWUodGhpcywgdGhpc1trZXldLCBrZXksIG1hdGNoZXIpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZGVsZXRlKGhlYWRlciwgbWF0Y2hlcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBkZWxldGVkID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBkZWxldGVIZWFkZXIoX2hlYWRlcikge1xuICAgICAgX2hlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKF9oZWFkZXIpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleShzZWxmLCBfaGVhZGVyKTtcblxuICAgICAgICBpZiAoa2V5ICYmICghbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHNlbGYsIHNlbGZba2V5XSwga2V5LCBtYXRjaGVyKSkpIHtcbiAgICAgICAgICBkZWxldGUgc2VsZltrZXldO1xuXG4gICAgICAgICAgZGVsZXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheShoZWFkZXIpKSB7XG4gICAgICBoZWFkZXIuZm9yRWFjaChkZWxldGVIZWFkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGVIZWFkZXIoaGVhZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVsZXRlZDtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKHRoaXMuZGVsZXRlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgbm9ybWFsaXplKGZvcm1hdCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcblxuICAgIHV0aWxzLmZvckVhY2godGhpcywgKHZhbHVlLCBoZWFkZXIpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkoaGVhZGVycywgaGVhZGVyKTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBzZWxmW2tleV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIGRlbGV0ZSBzZWxmW2hlYWRlcl07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IGZvcm1hdCA/IGZvcm1hdEhlYWRlcihoZWFkZXIpIDogU3RyaW5nKGhlYWRlcikudHJpbSgpO1xuXG4gICAgICBpZiAobm9ybWFsaXplZCAhPT0gaGVhZGVyKSB7XG4gICAgICAgIGRlbGV0ZSBzZWxmW2hlYWRlcl07XG4gICAgICB9XG5cbiAgICAgIHNlbGZbbm9ybWFsaXplZF0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG5cbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZF0gPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb25jYXQoLi4udGFyZ2V0cykge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmNvbmNhdCh0aGlzLCAuLi50YXJnZXRzKTtcbiAgfVxuXG4gIHRvSlNPTihhc1N0cmluZ3MpIHtcbiAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLCAodmFsdWUsIGhlYWRlcikgPT4ge1xuICAgICAgdmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gZmFsc2UgJiYgKG9ialtoZWFkZXJdID0gYXNTdHJpbmdzICYmIHV0aWxzLmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignLCAnKSA6IHZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy50b0pTT04oKSlbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMudG9KU09OKCkpLm1hcCgoW2hlYWRlciwgdmFsdWVdKSA9PiBoZWFkZXIgKyAnOiAnICsgdmFsdWUpLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgIHJldHVybiAnQXhpb3NIZWFkZXJzJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tKHRoaW5nKSB7XG4gICAgcmV0dXJuIHRoaW5nIGluc3RhbmNlb2YgdGhpcyA/IHRoaW5nIDogbmV3IHRoaXModGhpbmcpO1xuICB9XG5cbiAgc3RhdGljIGNvbmNhdChmaXJzdCwgLi4udGFyZ2V0cykge1xuICAgIGNvbnN0IGNvbXB1dGVkID0gbmV3IHRoaXMoZmlyc3QpO1xuXG4gICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IGNvbXB1dGVkLnNldCh0YXJnZXQpKTtcblxuICAgIHJldHVybiBjb21wdXRlZDtcbiAgfVxuXG4gIHN0YXRpYyBhY2Nlc3NvcihoZWFkZXIpIHtcbiAgICBjb25zdCBpbnRlcm5hbHMgPSB0aGlzWyRpbnRlcm5hbHNdID0gKHRoaXNbJGludGVybmFsc10gPSB7XG4gICAgICBhY2Nlc3NvcnM6IHt9XG4gICAgfSk7XG5cbiAgICBjb25zdCBhY2Nlc3NvcnMgPSBpbnRlcm5hbHMuYWNjZXNzb3JzO1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IHRoaXMucHJvdG90eXBlO1xuXG4gICAgZnVuY3Rpb24gZGVmaW5lQWNjZXNzb3IoX2hlYWRlcikge1xuICAgICAgY29uc3QgbEhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKCFhY2Nlc3NvcnNbbEhlYWRlcl0pIHtcbiAgICAgICAgYnVpbGRBY2Nlc3NvcnMocHJvdG90eXBlLCBfaGVhZGVyKTtcbiAgICAgICAgYWNjZXNzb3JzW2xIZWFkZXJdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1dGlscy5pc0FycmF5KGhlYWRlcikgPyBoZWFkZXIuZm9yRWFjaChkZWZpbmVBY2Nlc3NvcikgOiBkZWZpbmVBY2Nlc3NvcihoZWFkZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuQXhpb3NIZWFkZXJzLmFjY2Vzc29yKFsnQ29udGVudC1UeXBlJywgJ0NvbnRlbnQtTGVuZ3RoJywgJ0FjY2VwdCcsICdBY2NlcHQtRW5jb2RpbmcnLCAnVXNlci1BZ2VudCddKTtcblxudXRpbHMuZnJlZXplTWV0aG9kcyhBeGlvc0hlYWRlcnMucHJvdG90eXBlKTtcbnV0aWxzLmZyZWV6ZU1ldGhvZHMoQXhpb3NIZWFkZXJzKTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3NIZWFkZXJzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5cbmNsYXNzIEludGVyY2VwdG9yTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICAgKi9cbiAgdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgICAgZnVsZmlsbGVkLFxuICAgICAgcmVqZWN0ZWQsXG4gICAgICBzeW5jaHJvbm91czogb3B0aW9ucyA/IG9wdGlvbnMuc3luY2hyb25vdXMgOiBmYWxzZSxcbiAgICAgIHJ1bldoZW46IG9wdGlvbnMgPyBvcHRpb25zLnJ1bldoZW4gOiBudWxsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICAgKlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBpbnRlcmNlcHRvciB3YXMgcmVtb3ZlZCwgYGZhbHNlYCBvdGhlcndpc2VcbiAgICovXG4gIGVqZWN0KGlkKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBpbnRlcmNlcHRvcnMgZnJvbSB0aGUgc3RhY2tcbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBjbGVhcigpIHtcbiAgICBpZiAodGhpcy5oYW5kbGVycykge1xuICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICAgKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmb3JFYWNoKGZuKSB7XG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgICBmbihoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBpc0Fic29sdXRlVVJMIGZyb20gJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyc7XG5pbXBvcnQgY29tYmluZVVSTHMgZnJvbSAnLi4vaGVscGVycy9jb21iaW5lVVJMcy5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHRyYW5zZm9ybURhdGEgZnJvbSAnLi90cmFuc2Zvcm1EYXRhLmpzJztcbmltcG9ydCBpc0NhbmNlbCBmcm9tICcuLi9jYW5jZWwvaXNDYW5jZWwuanMnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL2RlZmF1bHRzL2luZGV4LmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4uL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xuaW1wb3J0IGFkYXB0ZXJzIGZyb20gXCIuLi9hZGFwdGVycy9hZGFwdGVycy5qc1wiO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxlZEVycm9yYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5zaWduYWwgJiYgY29uZmlnLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgdGhyb3cgbmV3IENhbmNlbGVkRXJyb3IobnVsbCwgY29uZmlnKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIGNvbmZpZy5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oY29uZmlnLmhlYWRlcnMpO1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgY29uZmlnLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgaWYgKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXS5pbmRleE9mKGNvbmZpZy5tZXRob2QpICE9PSAtMSkge1xuICAgIGNvbmZpZy5oZWFkZXJzLnNldENvbnRlbnRUeXBlKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLCBmYWxzZSk7XG4gIH1cblxuICBjb25zdCBhZGFwdGVyID0gYWRhcHRlcnMuZ2V0QWRhcHRlcihjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyKTtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICAgIGNvbmZpZyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZSxcbiAgICAgIHJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJlc3BvbnNlLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShyZXNwb25zZS5oZWFkZXJzKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShyZWFzb24ucmVzcG9uc2UuaGVhZGVycyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tIFwiLi9BeGlvc0hlYWRlcnMuanNcIjtcblxuY29uc3QgaGVhZGVyc1RvT2JqZWN0ID0gKHRoaW5nKSA9PiB0aGluZyBpbnN0YW5jZW9mIEF4aW9zSGVhZGVycyA/IHRoaW5nLnRvSlNPTigpIDogdGhpbmc7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIGNvbnN0IGNvbmZpZyA9IHt9O1xuXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlLCBjYXNlbGVzcykge1xuICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHRhcmdldCkgJiYgdXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2UuY2FsbCh7Y2FzZWxlc3N9LCB0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMoYSwgYiwgY2FzZWxlc3MpIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUoYSwgYiwgY2FzZWxlc3MpO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGEpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBhLCBjYXNlbGVzcyk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIoYSwgYikge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKGEsIGIpIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBiKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChhKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIG1lcmdlRGlyZWN0S2V5cyhhLCBiLCBwcm9wKSB7XG4gICAgaWYgKHByb3AgaW4gY29uZmlnMikge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKGEsIGIpO1xuICAgIH0gZWxzZSBpZiAocHJvcCBpbiBjb25maWcxKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBhKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtZXJnZU1hcCA9IHtcbiAgICB1cmw6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgbWV0aG9kOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIGRhdGE6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgYmFzZVVSTDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRyYW5zZm9ybVJlc3BvbnNlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHBhcmFtc1NlcmlhbGl6ZXI6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdGltZW91dDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0aW1lb3V0TWVzc2FnZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB3aXRoQ3JlZGVudGlhbHM6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgYWRhcHRlcjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICByZXNwb25zZVR5cGU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgeHNyZkNvb2tpZU5hbWU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgeHNyZkhlYWRlck5hbWU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgb25VcGxvYWRQcm9ncmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgZGVjb21wcmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBtYXhDb250ZW50TGVuZ3RoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG1heEJvZHlMZW5ndGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgYmVmb3JlUmVkaXJlY3Q6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNwb3J0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGh0dHBBZ2VudDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBodHRwc0FnZW50OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGNhbmNlbFRva2VuOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHNvY2tldFBhdGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcmVzcG9uc2VFbmNvZGluZzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB2YWxpZGF0ZVN0YXR1czogbWVyZ2VEaXJlY3RLZXlzLFxuICAgIGhlYWRlcnM6IChhLCBiKSA9PiBtZXJnZURlZXBQcm9wZXJ0aWVzKGhlYWRlcnNUb09iamVjdChhKSwgaGVhZGVyc1RvT2JqZWN0KGIpLCB0cnVlKVxuICB9O1xuXG4gIHV0aWxzLmZvckVhY2goT2JqZWN0LmtleXMoY29uZmlnMSkuY29uY2F0KE9iamVjdC5rZXlzKGNvbmZpZzIpKSwgZnVuY3Rpb24gY29tcHV0ZUNvbmZpZ1ZhbHVlKHByb3ApIHtcbiAgICBjb25zdCBtZXJnZSA9IG1lcmdlTWFwW3Byb3BdIHx8IG1lcmdlRGVlcFByb3BlcnRpZXM7XG4gICAgY29uc3QgY29uZmlnVmFsdWUgPSBtZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdLCBwcm9wKTtcbiAgICAodXRpbHMuaXNVbmRlZmluZWQoY29uZmlnVmFsdWUpICYmIG1lcmdlICE9PSBtZXJnZURpcmVjdEtleXMpIHx8IChjb25maWdbcHJvcF0gPSBjb25maWdWYWx1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4vQXhpb3NFcnJvci5qcyc7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybnMge29iamVjdH0gVGhlIHJlc3BvbnNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICBjb25zdCB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgW0F4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0VdW01hdGguZmxvb3IocmVzcG9uc2Uuc3RhdHVzIC8gMTAwKSAtIDRdLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL2RlZmF1bHRzL2luZGV4LmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcGFyYW0gez9PYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZSBvYmplY3RcbiAqXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZm5zLCByZXNwb25zZSkge1xuICBjb25zdCBjb25maWcgPSB0aGlzIHx8IGRlZmF1bHRzO1xuICBjb25zdCBjb250ZXh0ID0gcmVzcG9uc2UgfHwgY29uZmlnO1xuICBjb25zdCBoZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oY29udGV4dC5oZWFkZXJzKTtcbiAgbGV0IGRhdGEgPSBjb250ZXh0LmRhdGE7XG5cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbi5jYWxsKGNvbmZpZywgZGF0YSwgaGVhZGVycy5ub3JtYWxpemUoKSwgcmVzcG9uc2UgPyByZXNwb25zZS5zdGF0dXMgOiB1bmRlZmluZWQpO1xuICB9KTtcblxuICBoZWFkZXJzLm5vcm1hbGl6ZSgpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCB0cmFuc2l0aW9uYWxEZWZhdWx0cyBmcm9tICcuL3RyYW5zaXRpb25hbC5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuLi9oZWxwZXJzL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IHRvVVJMRW5jb2RlZEZvcm0gZnJvbSAnLi4vaGVscGVycy90b1VSTEVuY29kZWRGb3JtLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5pbXBvcnQgZm9ybURhdGFUb0pTT04gZnJvbSAnLi4vaGVscGVycy9mb3JtRGF0YVRvSlNPTi5qcyc7XG5cbmNvbnN0IERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogdW5kZWZpbmVkXG59O1xuXG4vKipcbiAqIEl0IHRha2VzIGEgc3RyaW5nLCB0cmllcyB0byBwYXJzZSBpdCwgYW5kIGlmIGl0IGZhaWxzLCBpdCByZXR1cm5zIHRoZSBzdHJpbmdpZmllZCB2ZXJzaW9uXG4gKiBvZiB0aGUgaW5wdXRcbiAqXG4gKiBAcGFyYW0ge2FueX0gcmF3VmFsdWUgLSBUaGUgdmFsdWUgdG8gYmUgc3RyaW5naWZpZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXJzZXIgLSBBIGZ1bmN0aW9uIHRoYXQgcGFyc2VzIGEgc3RyaW5nIGludG8gYSBKYXZhU2NyaXB0IG9iamVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVuY29kZXIgLSBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSB2YWx1ZSBhbmQgcmV0dXJucyBhIHN0cmluZy5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZ2lmaWVkIHZlcnNpb24gb2YgdGhlIHJhd1ZhbHVlLlxuICovXG5mdW5jdGlvbiBzdHJpbmdpZnlTYWZlbHkocmF3VmFsdWUsIHBhcnNlciwgZW5jb2Rlcikge1xuICBpZiAodXRpbHMuaXNTdHJpbmcocmF3VmFsdWUpKSB7XG4gICAgdHJ5IHtcbiAgICAgIChwYXJzZXIgfHwgSlNPTi5wYXJzZSkocmF3VmFsdWUpO1xuICAgICAgcmV0dXJuIHV0aWxzLnRyaW0ocmF3VmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgIT09ICdTeW50YXhFcnJvcicpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKGVuY29kZXIgfHwgSlNPTi5zdHJpbmdpZnkpKHJhd1ZhbHVlKTtcbn1cblxuY29uc3QgZGVmYXVsdHMgPSB7XG5cbiAgdHJhbnNpdGlvbmFsOiB0cmFuc2l0aW9uYWxEZWZhdWx0cyxcblxuICBhZGFwdGVyOiBbJ3hocicsICdodHRwJ10sXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gaGVhZGVycy5nZXRDb250ZW50VHlwZSgpIHx8ICcnO1xuICAgIGNvbnN0IGhhc0pTT05Db250ZW50VHlwZSA9IGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSA+IC0xO1xuICAgIGNvbnN0IGlzT2JqZWN0UGF5bG9hZCA9IHV0aWxzLmlzT2JqZWN0KGRhdGEpO1xuXG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCAmJiB1dGlscy5pc0hUTUxGb3JtKGRhdGEpKSB7XG4gICAgICBkYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzRm9ybURhdGEgPSB1dGlscy5pc0Zvcm1EYXRhKGRhdGEpO1xuXG4gICAgaWYgKGlzRm9ybURhdGEpIHtcbiAgICAgIGlmICghaGFzSlNPTkNvbnRlbnRUeXBlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc0pTT05Db250ZW50VHlwZSA/IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhVG9KU09OKGRhdGEpKSA6IGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBoZWFkZXJzLnNldENvbnRlbnRUeXBlKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcsIGZhbHNlKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgbGV0IGlzRmlsZUxpc3Q7XG5cbiAgICBpZiAoaXNPYmplY3RQYXlsb2FkKSB7XG4gICAgICBpZiAoY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykgPiAtMSkge1xuICAgICAgICByZXR1cm4gdG9VUkxFbmNvZGVkRm9ybShkYXRhLCB0aGlzLmZvcm1TZXJpYWxpemVyKS50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGlzRmlsZUxpc3QgPSB1dGlscy5pc0ZpbGVMaXN0KGRhdGEpKSB8fCBjb250ZW50VHlwZS5pbmRleE9mKCdtdWx0aXBhcnQvZm9ybS1kYXRhJykgPiAtMSkge1xuICAgICAgICBjb25zdCBfRm9ybURhdGEgPSB0aGlzLmVudiAmJiB0aGlzLmVudi5Gb3JtRGF0YTtcblxuICAgICAgICByZXR1cm4gdG9Gb3JtRGF0YShcbiAgICAgICAgICBpc0ZpbGVMaXN0ID8geydmaWxlc1tdJzogZGF0YX0gOiBkYXRhLFxuICAgICAgICAgIF9Gb3JtRGF0YSAmJiBuZXcgX0Zvcm1EYXRhKCksXG4gICAgICAgICAgdGhpcy5mb3JtU2VyaWFsaXplclxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdFBheWxvYWQgfHwgaGFzSlNPTkNvbnRlbnRUeXBlICkge1xuICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24vanNvbicsIGZhbHNlKTtcbiAgICAgIHJldHVybiBzdHJpbmdpZnlTYWZlbHkoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIGNvbnN0IHRyYW5zaXRpb25hbCA9IHRoaXMudHJhbnNpdGlvbmFsIHx8IGRlZmF1bHRzLnRyYW5zaXRpb25hbDtcbiAgICBjb25zdCBmb3JjZWRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuZm9yY2VkSlNPTlBhcnNpbmc7XG4gICAgY29uc3QgSlNPTlJlcXVlc3RlZCA9IHRoaXMucmVzcG9uc2VUeXBlID09PSAnanNvbic7XG5cbiAgICBpZiAoZGF0YSAmJiB1dGlscy5pc1N0cmluZyhkYXRhKSAmJiAoKGZvcmNlZEpTT05QYXJzaW5nICYmICF0aGlzLnJlc3BvbnNlVHlwZSkgfHwgSlNPTlJlcXVlc3RlZCkpIHtcbiAgICAgIGNvbnN0IHNpbGVudEpTT05QYXJzaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5zaWxlbnRKU09OUGFyc2luZztcbiAgICAgIGNvbnN0IHN0cmljdEpTT05QYXJzaW5nID0gIXNpbGVudEpTT05QYXJzaW5nICYmIEpTT05SZXF1ZXN0ZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoc3RyaWN0SlNPTlBhcnNpbmcpIHtcbiAgICAgICAgICBpZiAoZS5uYW1lID09PSAnU3ludGF4RXJyb3InKSB7XG4gICAgICAgICAgICB0aHJvdyBBeGlvc0Vycm9yLmZyb20oZSwgQXhpb3NFcnJvci5FUlJfQkFEX1JFU1BPTlNFLCB0aGlzLCBudWxsLCB0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcbiAgbWF4Qm9keUxlbmd0aDogLTEsXG5cbiAgZW52OiB7XG4gICAgRm9ybURhdGE6IHBsYXRmb3JtLmNsYXNzZXMuRm9ybURhdGEsXG4gICAgQmxvYjogcGxhdGZvcm0uY2xhc3Nlcy5CbG9iXG4gIH0sXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfSxcblxuICBoZWFkZXJzOiB7XG4gICAgY29tbW9uOiB7XG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNpbGVudEpTT05QYXJzaW5nOiB0cnVlLFxuICBmb3JjZWRKU09OUGFyc2luZzogdHJ1ZSxcbiAgY2xhcmlmeVRpbWVvdXRFcnJvcjogZmFsc2Vcbn07XG4iLCJpbXBvcnQgRm9ybURhdGEgZnJvbSAnZm9ybS1kYXRhJztcbmV4cG9ydCBkZWZhdWx0IEZvcm1EYXRhO1xuIiwiZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBcIjEuMi4yXCI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL3RvRm9ybURhdGEuanMnO1xuXG4vKipcbiAqIEl0IGVuY29kZXMgYSBzdHJpbmcgYnkgcmVwbGFjaW5nIGFsbCBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBpbiB0aGUgdW5yZXNlcnZlZCBzZXQgd2l0aFxuICogdGhlaXIgcGVyY2VudC1lbmNvZGVkIGVxdWl2YWxlbnRzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gZW5jb2RlLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBlbmNvZGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlKHN0cikge1xuICBjb25zdCBjaGFyTWFwID0ge1xuICAgICchJzogJyUyMScsXG4gICAgXCInXCI6ICclMjcnLFxuICAgICcoJzogJyUyOCcsXG4gICAgJyknOiAnJTI5JyxcbiAgICAnfic6ICclN0UnLFxuICAgICclMjAnOiAnKycsXG4gICAgJyUwMCc6ICdcXHgwMCdcbiAgfTtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoL1shJygpfl18JTIwfCUwMC9nLCBmdW5jdGlvbiByZXBsYWNlcihtYXRjaCkge1xuICAgIHJldHVybiBjaGFyTWFwW21hdGNoXTtcbiAgfSk7XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSBwYXJhbXMgb2JqZWN0IGFuZCBjb252ZXJ0cyBpdCB0byBhIEZvcm1EYXRhIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gcGFyYW1zIC0gVGhlIHBhcmFtZXRlcnMgdG8gYmUgY29udmVydGVkIHRvIGEgRm9ybURhdGEgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgb2JqZWN0IHBhc3NlZCB0byB0aGUgQXhpb3MgY29uc3RydWN0b3IuXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIEF4aW9zVVJMU2VhcmNoUGFyYW1zKHBhcmFtcywgb3B0aW9ucykge1xuICB0aGlzLl9wYWlycyA9IFtdO1xuXG4gIHBhcmFtcyAmJiB0b0Zvcm1EYXRhKHBhcmFtcywgdGhpcywgb3B0aW9ucyk7XG59XG5cbmNvbnN0IHByb3RvdHlwZSA9IEF4aW9zVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZTtcblxucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIGFwcGVuZChuYW1lLCB2YWx1ZSkge1xuICB0aGlzLl9wYWlycy5wdXNoKFtuYW1lLCB2YWx1ZV0pO1xufTtcblxucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoZW5jb2Rlcikge1xuICBjb25zdCBfZW5jb2RlID0gZW5jb2RlciA/IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGVuY29kZXIuY2FsbCh0aGlzLCB2YWx1ZSwgZW5jb2RlKTtcbiAgfSA6IGVuY29kZTtcblxuICByZXR1cm4gdGhpcy5fcGFpcnMubWFwKGZ1bmN0aW9uIGVhY2gocGFpcikge1xuICAgIHJldHVybiBfZW5jb2RlKHBhaXJbMF0pICsgJz0nICsgX2VuY29kZShwYWlyWzFdKTtcbiAgfSwgJycpLmpvaW4oJyYnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zVVJMU2VhcmNoUGFyYW1zO1xuIiwiY29uc3QgSHR0cFN0YXR1c0NvZGUgPSB7XG4gIENvbnRpbnVlOiAxMDAsXG4gIFN3aXRjaGluZ1Byb3RvY29sczogMTAxLFxuICBQcm9jZXNzaW5nOiAxMDIsXG4gIEVhcmx5SGludHM6IDEwMyxcbiAgT2s6IDIwMCxcbiAgQ3JlYXRlZDogMjAxLFxuICBBY2NlcHRlZDogMjAyLFxuICBOb25BdXRob3JpdGF0aXZlSW5mb3JtYXRpb246IDIwMyxcbiAgTm9Db250ZW50OiAyMDQsXG4gIFJlc2V0Q29udGVudDogMjA1LFxuICBQYXJ0aWFsQ29udGVudDogMjA2LFxuICBNdWx0aVN0YXR1czogMjA3LFxuICBBbHJlYWR5UmVwb3J0ZWQ6IDIwOCxcbiAgSW1Vc2VkOiAyMjYsXG4gIE11bHRpcGxlQ2hvaWNlczogMzAwLFxuICBNb3ZlZFBlcm1hbmVudGx5OiAzMDEsXG4gIEZvdW5kOiAzMDIsXG4gIFNlZU90aGVyOiAzMDMsXG4gIE5vdE1vZGlmaWVkOiAzMDQsXG4gIFVzZVByb3h5OiAzMDUsXG4gIFVudXNlZDogMzA2LFxuICBUZW1wb3JhcnlSZWRpcmVjdDogMzA3LFxuICBQZXJtYW5lbnRSZWRpcmVjdDogMzA4LFxuICBCYWRSZXF1ZXN0OiA0MDAsXG4gIFVuYXV0aG9yaXplZDogNDAxLFxuICBQYXltZW50UmVxdWlyZWQ6IDQwMixcbiAgRm9yYmlkZGVuOiA0MDMsXG4gIE5vdEZvdW5kOiA0MDQsXG4gIE1ldGhvZE5vdEFsbG93ZWQ6IDQwNSxcbiAgTm90QWNjZXB0YWJsZTogNDA2LFxuICBQcm94eUF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IDQwNyxcbiAgUmVxdWVzdFRpbWVvdXQ6IDQwOCxcbiAgQ29uZmxpY3Q6IDQwOSxcbiAgR29uZTogNDEwLFxuICBMZW5ndGhSZXF1aXJlZDogNDExLFxuICBQcmVjb25kaXRpb25GYWlsZWQ6IDQxMixcbiAgUGF5bG9hZFRvb0xhcmdlOiA0MTMsXG4gIFVyaVRvb0xvbmc6IDQxNCxcbiAgVW5zdXBwb3J0ZWRNZWRpYVR5cGU6IDQxNSxcbiAgUmFuZ2VOb3RTYXRpc2ZpYWJsZTogNDE2LFxuICBFeHBlY3RhdGlvbkZhaWxlZDogNDE3LFxuICBJbUFUZWFwb3Q6IDQxOCxcbiAgTWlzZGlyZWN0ZWRSZXF1ZXN0OiA0MjEsXG4gIFVucHJvY2Vzc2FibGVFbnRpdHk6IDQyMixcbiAgTG9ja2VkOiA0MjMsXG4gIEZhaWxlZERlcGVuZGVuY3k6IDQyNCxcbiAgVG9vRWFybHk6IDQyNSxcbiAgVXBncmFkZVJlcXVpcmVkOiA0MjYsXG4gIFByZWNvbmRpdGlvblJlcXVpcmVkOiA0MjgsXG4gIFRvb01hbnlSZXF1ZXN0czogNDI5LFxuICBSZXF1ZXN0SGVhZGVyRmllbGRzVG9vTGFyZ2U6IDQzMSxcbiAgVW5hdmFpbGFibGVGb3JMZWdhbFJlYXNvbnM6IDQ1MSxcbiAgSW50ZXJuYWxTZXJ2ZXJFcnJvcjogNTAwLFxuICBOb3RJbXBsZW1lbnRlZDogNTAxLFxuICBCYWRHYXRld2F5OiA1MDIsXG4gIFNlcnZpY2VVbmF2YWlsYWJsZTogNTAzLFxuICBHYXRld2F5VGltZW91dDogNTA0LFxuICBIdHRwVmVyc2lvbk5vdFN1cHBvcnRlZDogNTA1LFxuICBWYXJpYW50QWxzb05lZ290aWF0ZXM6IDUwNixcbiAgSW5zdWZmaWNpZW50U3RvcmFnZTogNTA3LFxuICBMb29wRGV0ZWN0ZWQ6IDUwOCxcbiAgTm90RXh0ZW5kZWQ6IDUxMCxcbiAgTmV0d29ya0F1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IDUxMSxcbn07XG5cbk9iamVjdC5lbnRyaWVzKEh0dHBTdGF0dXNDb2RlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgSHR0cFN0YXR1c0NvZGVbdmFsdWVdID0ga2V5O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEh0dHBTdGF0dXNDb2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmd1bWVudHMpO1xuICB9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zVVJMU2VhcmNoUGFyYW1zIGZyb20gJy4uL2hlbHBlcnMvQXhpb3NVUkxTZWFyY2hQYXJhbXMuanMnO1xuXG4vKipcbiAqIEl0IHJlcGxhY2VzIGFsbCBpbnN0YW5jZXMgb2YgdGhlIGNoYXJhY3RlcnMgYDpgLCBgJGAsIGAsYCwgYCtgLCBgW2AsIGFuZCBgXWAgd2l0aCB0aGVpclxuICogVVJJIGVuY29kZWQgY291bnRlcnBhcnRzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbCBUaGUgdmFsdWUgdG8gYmUgZW5jb2RlZC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZW5jb2RlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEBwYXJhbSB7P29iamVjdH0gb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBvcHRpb25zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgXG4gIGNvbnN0IF9lbmNvZGUgPSBvcHRpb25zICYmIG9wdGlvbnMuZW5jb2RlIHx8IGVuY29kZTtcblxuICBjb25zdCBzZXJpYWxpemVGbiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5zZXJpYWxpemU7XG5cbiAgbGV0IHNlcmlhbGl6ZWRQYXJhbXM7XG5cbiAgaWYgKHNlcmlhbGl6ZUZuKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHNlcmlhbGl6ZUZuKHBhcmFtcywgb3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykgP1xuICAgICAgcGFyYW1zLnRvU3RyaW5nKCkgOlxuICAgICAgbmV3IEF4aW9zVVJMU2VhcmNoUGFyYW1zKHBhcmFtcywgb3B0aW9ucykudG9TdHJpbmcoX2VuY29kZSk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIGNvbnN0IGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIik7XG5cbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXRmb3JtLmlzU3RhbmRhcmRCcm93c2VyRW52ID9cblxuLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgY29uc3QgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4vLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBJdCB0YWtlcyBhIHN0cmluZyBsaWtlIGBmb29beF1beV1bel1gIGFuZCByZXR1cm5zIGFuIGFycmF5IGxpa2UgYFsnZm9vJywgJ3gnLCAneScsICd6J11cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKlxuICogQHJldHVybnMgQW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAqL1xuZnVuY3Rpb24gcGFyc2VQcm9wUGF0aChuYW1lKSB7XG4gIC8vIGZvb1t4XVt5XVt6XVxuICAvLyBmb28ueC55LnpcbiAgLy8gZm9vLXgteS16XG4gIC8vIGZvbyB4IHkgelxuICByZXR1cm4gdXRpbHMubWF0Y2hBbGwoL1xcdyt8XFxbKFxcdyopXS9nLCBuYW1lKS5tYXAobWF0Y2ggPT4ge1xuICAgIHJldHVybiBtYXRjaFswXSA9PT0gJ1tdJyA/ICcnIDogbWF0Y2hbMV0gfHwgbWF0Y2hbMF07XG4gIH0pO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gYXJyYXkgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyIC0gVGhlIGFycmF5IHRvIGNvbnZlcnQgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIGtleXMgYW5kIHZhbHVlcyBhcyB0aGUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9PYmplY3QoYXJyKSB7XG4gIGNvbnN0IG9iaiA9IHt9O1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXJyKTtcbiAgbGV0IGk7XG4gIGNvbnN0IGxlbiA9IGtleXMubGVuZ3RoO1xuICBsZXQga2V5O1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIG9ialtrZXldID0gYXJyW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIEZvcm1EYXRhIG9iamVjdCBhbmQgcmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1EYXRhIFRoZSBGb3JtRGF0YSBvYmplY3QgdG8gY29udmVydCB0byBKU09OLlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3Q8c3RyaW5nLCBhbnk+IHwgbnVsbH0gVGhlIGNvbnZlcnRlZCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGZvcm1EYXRhVG9KU09OKGZvcm1EYXRhKSB7XG4gIGZ1bmN0aW9uIGJ1aWxkUGF0aChwYXRoLCB2YWx1ZSwgdGFyZ2V0LCBpbmRleCkge1xuICAgIGxldCBuYW1lID0gcGF0aFtpbmRleCsrXTtcbiAgICBjb25zdCBpc051bWVyaWNLZXkgPSBOdW1iZXIuaXNGaW5pdGUoK25hbWUpO1xuICAgIGNvbnN0IGlzTGFzdCA9IGluZGV4ID49IHBhdGgubGVuZ3RoO1xuICAgIG5hbWUgPSAhbmFtZSAmJiB1dGlscy5pc0FycmF5KHRhcmdldCkgPyB0YXJnZXQubGVuZ3RoIDogbmFtZTtcblxuICAgIGlmIChpc0xhc3QpIHtcbiAgICAgIGlmICh1dGlscy5oYXNPd25Qcm9wKHRhcmdldCwgbmFtZSkpIHtcbiAgICAgICAgdGFyZ2V0W25hbWVdID0gW3RhcmdldFtuYW1lXSwgdmFsdWVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhaXNOdW1lcmljS2V5O1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0W25hbWVdIHx8ICF1dGlscy5pc09iamVjdCh0YXJnZXRbbmFtZV0pKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBidWlsZFBhdGgocGF0aCwgdmFsdWUsIHRhcmdldFtuYW1lXSwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCAmJiB1dGlscy5pc0FycmF5KHRhcmdldFtuYW1lXSkpIHtcbiAgICAgIHRhcmdldFtuYW1lXSA9IGFycmF5VG9PYmplY3QodGFyZ2V0W25hbWVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWlzTnVtZXJpY0tleTtcbiAgfVxuXG4gIGlmICh1dGlscy5pc0Zvcm1EYXRhKGZvcm1EYXRhKSAmJiB1dGlscy5pc0Z1bmN0aW9uKGZvcm1EYXRhLmVudHJpZXMpKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG5cbiAgICB1dGlscy5mb3JFYWNoRW50cnkoZm9ybURhdGEsIChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgYnVpbGRQYXRoKHBhcnNlUHJvcFBhdGgobmFtZSksIHZhbHVlLCBvYmosIDApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtRGF0YVRvSlNPTjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGQrXFwtLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvc1xuICpcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvcywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQXhpb3NFcnJvcihwYXlsb2FkKSB7XG4gIHJldHVybiB1dGlscy5pc09iamVjdChwYXlsb2FkKSAmJiAocGF5bG9hZC5pc0F4aW9zRXJyb3IgPT09IHRydWUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBwbGF0Zm9ybS5pc1N0YW5kYXJkQnJvd3NlckVudiA/XG5cbi8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgY29uc3QgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgY29uc3QgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGV0IG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICBsZXQgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgY29uc3QgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKTtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzdHJpY3RcbmV4cG9ydCBkZWZhdWx0IG51bGw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcblxuLy8gUmF3QXhpb3NIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xuY29uc3QgaWdub3JlRHVwbGljYXRlT2YgPSB1dGlscy50b09iamVjdFNldChbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXSk7XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSByYXdIZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCByYXdIZWFkZXJzID0+IHtcbiAgY29uc3QgcGFyc2VkID0ge307XG4gIGxldCBrZXk7XG4gIGxldCB2YWw7XG4gIGxldCBpO1xuXG4gIHJhd0hlYWRlcnMgJiYgcmF3SGVhZGVycy5zcGxpdCgnXFxuJykuZm9yRWFjaChmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSBsaW5lLnN1YnN0cmluZygwLCBpKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSBsaW5lLnN1YnN0cmluZyhpICsgMSkudHJpbSgpO1xuXG4gICAgaWYgKCFrZXkgfHwgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mW2tleV0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0pIHtcbiAgICAgICAgcGFyc2VkW2tleV0ucHVzaCh2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBbdmFsXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZVByb3RvY29sKHVybCkge1xuICBjb25zdCBtYXRjaCA9IC9eKFstK1xcd117MSwyNX0pKDo/XFwvXFwvfDopLy5leGVjKHVybCk7XG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDYWxjdWxhdGUgZGF0YSBtYXhSYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW3NhbXBsZXNDb3VudD0gMTBdXG4gKiBAcGFyYW0ge051bWJlcn0gW21pbj0gMTAwMF1cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gc3BlZWRvbWV0ZXIoc2FtcGxlc0NvdW50LCBtaW4pIHtcbiAgc2FtcGxlc0NvdW50ID0gc2FtcGxlc0NvdW50IHx8IDEwO1xuICBjb25zdCBieXRlcyA9IG5ldyBBcnJheShzYW1wbGVzQ291bnQpO1xuICBjb25zdCB0aW1lc3RhbXBzID0gbmV3IEFycmF5KHNhbXBsZXNDb3VudCk7XG4gIGxldCBoZWFkID0gMDtcbiAgbGV0IHRhaWwgPSAwO1xuICBsZXQgZmlyc3RTYW1wbGVUUztcblxuICBtaW4gPSBtaW4gIT09IHVuZGVmaW5lZCA/IG1pbiA6IDEwMDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1c2goY2h1bmtMZW5ndGgpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuXG4gICAgY29uc3Qgc3RhcnRlZEF0ID0gdGltZXN0YW1wc1t0YWlsXTtcblxuICAgIGlmICghZmlyc3RTYW1wbGVUUykge1xuICAgICAgZmlyc3RTYW1wbGVUUyA9IG5vdztcbiAgICB9XG5cbiAgICBieXRlc1toZWFkXSA9IGNodW5rTGVuZ3RoO1xuICAgIHRpbWVzdGFtcHNbaGVhZF0gPSBub3c7XG5cbiAgICBsZXQgaSA9IHRhaWw7XG4gICAgbGV0IGJ5dGVzQ291bnQgPSAwO1xuXG4gICAgd2hpbGUgKGkgIT09IGhlYWQpIHtcbiAgICAgIGJ5dGVzQ291bnQgKz0gYnl0ZXNbaSsrXTtcbiAgICAgIGkgPSBpICUgc2FtcGxlc0NvdW50O1xuICAgIH1cblxuICAgIGhlYWQgPSAoaGVhZCArIDEpICUgc2FtcGxlc0NvdW50O1xuXG4gICAgaWYgKGhlYWQgPT09IHRhaWwpIHtcbiAgICAgIHRhaWwgPSAodGFpbCArIDEpICUgc2FtcGxlc0NvdW50O1xuICAgIH1cblxuICAgIGlmIChub3cgLSBmaXJzdFNhbXBsZVRTIDwgbWluKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFzc2VkID0gc3RhcnRlZEF0ICYmIG5vdyAtIHN0YXJ0ZWRBdDtcblxuICAgIHJldHVybiBwYXNzZWQgPyBNYXRoLnJvdW5kKGJ5dGVzQ291bnQgKiAxMDAwIC8gcGFzc2VkKSA6IHVuZGVmaW5lZDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3BlZWRvbWV0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCBlbnZGb3JtRGF0YSBmcm9tICcuLi9lbnYvY2xhc3Nlcy9Gb3JtRGF0YS5qcyc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZ2l2ZW4gdGhpbmcgaXMgYSBhcnJheSBvciBqcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRoaW5nIC0gVGhlIG9iamVjdCBvciBhcnJheSB0byBiZSB2aXNpdGVkLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1Zpc2l0YWJsZSh0aGluZykge1xuICByZXR1cm4gdXRpbHMuaXNQbGFpbk9iamVjdCh0aGluZykgfHwgdXRpbHMuaXNBcnJheSh0aGluZyk7XG59XG5cbi8qKlxuICogSXQgcmVtb3ZlcyB0aGUgYnJhY2tldHMgZnJvbSB0aGUgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIHBhcmFtZXRlci5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUga2V5IHdpdGhvdXQgdGhlIGJyYWNrZXRzLlxuICovXG5mdW5jdGlvbiByZW1vdmVCcmFja2V0cyhrZXkpIHtcbiAgcmV0dXJuIHV0aWxzLmVuZHNXaXRoKGtleSwgJ1tdJykgPyBrZXkuc2xpY2UoMCwgLTIpIDoga2V5O1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcGF0aCwgYSBrZXksIGFuZCBhIGJvb2xlYW4sIGFuZCByZXR1cm5zIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBUaGUgcGF0aCB0byB0aGUgY3VycmVudCBrZXkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgY3VycmVudCBvYmplY3QgYmVpbmcgaXRlcmF0ZWQgb3Zlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkb3RzIC0gSWYgdHJ1ZSwgdGhlIGtleSB3aWxsIGJlIHJlbmRlcmVkIHdpdGggZG90cyBpbnN0ZWFkIG9mIGJyYWNrZXRzLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwYXRoIHRvIHRoZSBjdXJyZW50IGtleS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyS2V5KHBhdGgsIGtleSwgZG90cykge1xuICBpZiAoIXBhdGgpIHJldHVybiBrZXk7XG4gIHJldHVybiBwYXRoLmNvbmNhdChrZXkpLm1hcChmdW5jdGlvbiBlYWNoKHRva2VuLCBpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdG9rZW4gPSByZW1vdmVCcmFja2V0cyh0b2tlbik7XG4gICAgcmV0dXJuICFkb3RzICYmIGkgPyAnWycgKyB0b2tlbiArICddJyA6IHRva2VuO1xuICB9KS5qb2luKGRvdHMgPyAnLicgOiAnJyk7XG59XG5cbi8qKlxuICogSWYgdGhlIGFycmF5IGlzIGFuIGFycmF5IGFuZCBub25lIG9mIGl0cyBlbGVtZW50cyBhcmUgdmlzaXRhYmxlLCB0aGVuIGl0J3MgYSBmbGF0IGFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyIC0gVGhlIGFycmF5IHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRmxhdEFycmF5KGFycikge1xuICByZXR1cm4gdXRpbHMuaXNBcnJheShhcnIpICYmICFhcnIuc29tZShpc1Zpc2l0YWJsZSk7XG59XG5cbmNvbnN0IHByZWRpY2F0ZXMgPSB1dGlscy50b0ZsYXRPYmplY3QodXRpbHMsIHt9LCBudWxsLCBmdW5jdGlvbiBmaWx0ZXIocHJvcCkge1xuICByZXR1cm4gL15pc1tBLVpdLy50ZXN0KHByb3ApO1xufSk7XG5cbi8qKlxuICogSWYgdGhlIHRoaW5nIGlzIGEgRm9ybURhdGEgb2JqZWN0LCByZXR1cm4gdHJ1ZSwgb3RoZXJ3aXNlIHJldHVybiBmYWxzZS5cbiAqXG4gKiBAcGFyYW0ge3Vua25vd259IHRoaW5nIC0gVGhlIHRoaW5nIHRvIGNoZWNrLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1NwZWNDb21wbGlhbnQodGhpbmcpIHtcbiAgcmV0dXJuIHRoaW5nICYmIHV0aWxzLmlzRnVuY3Rpb24odGhpbmcuYXBwZW5kKSAmJiB0aGluZ1tTeW1ib2wudG9TdHJpbmdUYWddID09PSAnRm9ybURhdGEnICYmIHRoaW5nW1N5bWJvbC5pdGVyYXRvcl07XG59XG5cbi8qKlxuICogQ29udmVydCBhIGRhdGEgb2JqZWN0IHRvIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHs/T2JqZWN0fSBbZm9ybURhdGFdXG4gKiBAcGFyYW0gez9PYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMudmlzaXRvcl1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWV0YVRva2VucyA9IHRydWVdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRvdHMgPSBmYWxzZV1cbiAqIEBwYXJhbSB7P0Jvb2xlYW59IFtvcHRpb25zLmluZGV4ZXMgPSBmYWxzZV1cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICoqL1xuXG4vKipcbiAqIEl0IGNvbnZlcnRzIGFuIG9iamVjdCBpbnRvIGEgRm9ybURhdGEgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3Q8YW55LCBhbnk+fSBvYmogLSBUaGUgb2JqZWN0IHRvIGNvbnZlcnQgdG8gZm9ybSBkYXRhLlxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1EYXRhIC0gVGhlIEZvcm1EYXRhIG9iamVjdCB0byBhcHBlbmQgdG8uXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiB0b0Zvcm1EYXRhKG9iaiwgZm9ybURhdGEsIG9wdGlvbnMpIHtcbiAgaWYgKCF1dGlscy5pc09iamVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGFyZ2V0IG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgZm9ybURhdGEgPSBmb3JtRGF0YSB8fCBuZXcgKGVudkZvcm1EYXRhIHx8IEZvcm1EYXRhKSgpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBvcHRpb25zID0gdXRpbHMudG9GbGF0T2JqZWN0KG9wdGlvbnMsIHtcbiAgICBtZXRhVG9rZW5zOiB0cnVlLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIGluZGV4ZXM6IGZhbHNlXG4gIH0sIGZhbHNlLCBmdW5jdGlvbiBkZWZpbmVkKG9wdGlvbiwgc291cmNlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsZXFlcWVxXG4gICAgcmV0dXJuICF1dGlscy5pc1VuZGVmaW5lZChzb3VyY2Vbb3B0aW9uXSk7XG4gIH0pO1xuXG4gIGNvbnN0IG1ldGFUb2tlbnMgPSBvcHRpb25zLm1ldGFUb2tlbnM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICBjb25zdCB2aXNpdG9yID0gb3B0aW9ucy52aXNpdG9yIHx8IGRlZmF1bHRWaXNpdG9yO1xuICBjb25zdCBkb3RzID0gb3B0aW9ucy5kb3RzO1xuICBjb25zdCBpbmRleGVzID0gb3B0aW9ucy5pbmRleGVzO1xuICBjb25zdCBfQmxvYiA9IG9wdGlvbnMuQmxvYiB8fCB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgQmxvYjtcbiAgY29uc3QgdXNlQmxvYiA9IF9CbG9iICYmIGlzU3BlY0NvbXBsaWFudChmb3JtRGF0YSk7XG5cbiAgaWYgKCF1dGlscy5pc0Z1bmN0aW9uKHZpc2l0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmlzaXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuICcnO1xuXG4gICAgaWYgKHV0aWxzLmlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZS50b0lTT1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmICghdXNlQmxvYiAmJiB1dGlscy5pc0Jsb2IodmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignQmxvYiBpcyBub3Qgc3VwcG9ydGVkLiBVc2UgYSBCdWZmZXIgaW5zdGVhZC4nKTtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlcih2YWx1ZSkgfHwgdXRpbHMuaXNUeXBlZEFycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHVzZUJsb2IgJiYgdHlwZW9mIEJsb2IgPT09ICdmdW5jdGlvbicgPyBuZXcgQmxvYihbdmFsdWVdKSA6IEJ1ZmZlci5mcm9tKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCB2aXNpdG9yLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0ga2V5XG4gICAqIEBwYXJhbSB7QXJyYXk8U3RyaW5nfE51bWJlcj59IHBhdGhcbiAgICogQHRoaXMge0Zvcm1EYXRhfVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmV0dXJuIHRydWUgdG8gdmlzaXQgdGhlIGVhY2ggcHJvcCBvZiB0aGUgdmFsdWUgcmVjdXJzaXZlbHlcbiAgICovXG4gIGZ1bmN0aW9uIGRlZmF1bHRWaXNpdG9yKHZhbHVlLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgYXJyID0gdmFsdWU7XG5cbiAgICBpZiAodmFsdWUgJiYgIXBhdGggJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHV0aWxzLmVuZHNXaXRoKGtleSwgJ3t9JykpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGtleSA9IG1ldGFUb2tlbnMgPyBrZXkgOiBrZXkuc2xpY2UoMCwgLTIpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAodXRpbHMuaXNBcnJheSh2YWx1ZSkgJiYgaXNGbGF0QXJyYXkodmFsdWUpKSB8fFxuICAgICAgICAodXRpbHMuaXNGaWxlTGlzdCh2YWx1ZSkgfHwgdXRpbHMuZW5kc1dpdGgoa2V5LCAnW10nKSAmJiAoYXJyID0gdXRpbHMudG9BcnJheSh2YWx1ZSkpXG4gICAgICAgICkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGtleSA9IHJlbW92ZUJyYWNrZXRzKGtleSk7XG5cbiAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gZWFjaChlbCwgaW5kZXgpIHtcbiAgICAgICAgICAhKHV0aWxzLmlzVW5kZWZpbmVkKGVsKSB8fCBlbCA9PT0gbnVsbCkgJiYgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgICAgICBpbmRleGVzID09PSB0cnVlID8gcmVuZGVyS2V5KFtrZXldLCBpbmRleCwgZG90cykgOiAoaW5kZXhlcyA9PT0gbnVsbCA/IGtleSA6IGtleSArICdbXScpLFxuICAgICAgICAgICAgY29udmVydFZhbHVlKGVsKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzVmlzaXRhYmxlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9ybURhdGEuYXBwZW5kKHJlbmRlcktleShwYXRoLCBrZXksIGRvdHMpLCBjb252ZXJ0VmFsdWUodmFsdWUpKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHN0YWNrID0gW107XG5cbiAgY29uc3QgZXhwb3NlZEhlbHBlcnMgPSBPYmplY3QuYXNzaWduKHByZWRpY2F0ZXMsIHtcbiAgICBkZWZhdWx0VmlzaXRvcixcbiAgICBjb252ZXJ0VmFsdWUsXG4gICAgaXNWaXNpdGFibGVcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYnVpbGQodmFsdWUsIHBhdGgpIHtcbiAgICBpZiAodXRpbHMuaXNVbmRlZmluZWQodmFsdWUpKSByZXR1cm47XG5cbiAgICBpZiAoc3RhY2suaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG4gICAgICB0aHJvdyBFcnJvcignQ2lyY3VsYXIgcmVmZXJlbmNlIGRldGVjdGVkIGluICcgKyBwYXRoLmpvaW4oJy4nKSk7XG4gICAgfVxuXG4gICAgc3RhY2sucHVzaCh2YWx1ZSk7XG5cbiAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiBlYWNoKGVsLCBrZXkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9ICEodXRpbHMuaXNVbmRlZmluZWQoZWwpIHx8IGVsID09PSBudWxsKSAmJiB2aXNpdG9yLmNhbGwoXG4gICAgICAgIGZvcm1EYXRhLCBlbCwgdXRpbHMuaXNTdHJpbmcoa2V5KSA/IGtleS50cmltKCkgOiBrZXksIHBhdGgsIGV4cG9zZWRIZWxwZXJzXG4gICAgICApO1xuXG4gICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIGJ1aWxkKGVsLCBwYXRoID8gcGF0aC5jb25jYXQoa2V5KSA6IFtrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0YWNrLnBvcCgpO1xuICB9XG5cbiAgaWYgKCF1dGlscy5pc09iamVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZGF0YSBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICB9XG5cbiAgYnVpbGQob2JqKTtcblxuICByZXR1cm4gZm9ybURhdGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvRm9ybURhdGE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9VUkxFbmNvZGVkRm9ybShkYXRhLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b0Zvcm1EYXRhKGRhdGEsIG5ldyBwbGF0Zm9ybS5jbGFzc2VzLlVSTFNlYXJjaFBhcmFtcygpLCBPYmplY3QuYXNzaWduKHtcbiAgICB2aXNpdG9yOiBmdW5jdGlvbih2YWx1ZSwga2V5LCBwYXRoLCBoZWxwZXJzKSB7XG4gICAgICBpZiAocGxhdGZvcm0uaXNOb2RlICYmIHV0aWxzLmlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlLnRvU3RyaW5nKCdiYXNlNjQnKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhlbHBlcnMuZGVmYXVsdFZpc2l0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIG9wdGlvbnMpKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtWRVJTSU9OfSBmcm9tICcuLi9lbnYvZGF0YS5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuXG5jb25zdCB2YWxpZGF0b3JzID0ge307XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5bJ29iamVjdCcsICdib29sZWFuJywgJ251bWJlcicsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnc3ltYm9sJ10uZm9yRWFjaCgodHlwZSwgaSkgPT4ge1xuICB2YWxpZGF0b3JzW3R5cGVdID0gZnVuY3Rpb24gdmFsaWRhdG9yKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gdHlwZSB8fCAnYScgKyAoaSA8IDEgPyAnbiAnIDogJyAnKSArIHR5cGU7XG4gIH07XG59KTtcblxuY29uc3QgZGVwcmVjYXRlZFdhcm5pbmdzID0ge307XG5cbi8qKlxuICogVHJhbnNpdGlvbmFsIG9wdGlvbiB2YWxpZGF0b3JcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufGJvb2xlYW4/fSB2YWxpZGF0b3IgLSBzZXQgdG8gZmFsc2UgaWYgdGhlIHRyYW5zaXRpb25hbCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZFxuICogQHBhcmFtIHtzdHJpbmc/fSB2ZXJzaW9uIC0gZGVwcmVjYXRlZCB2ZXJzaW9uIC8gcmVtb3ZlZCBzaW5jZSB2ZXJzaW9uXG4gKiBAcGFyYW0ge3N0cmluZz99IG1lc3NhZ2UgLSBzb21lIG1lc3NhZ2Ugd2l0aCBhZGRpdGlvbmFsIGluZm9cbiAqXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbnZhbGlkYXRvcnMudHJhbnNpdGlvbmFsID0gZnVuY3Rpb24gdHJhbnNpdGlvbmFsKHZhbGlkYXRvciwgdmVyc2lvbiwgbWVzc2FnZSkge1xuICBmdW5jdGlvbiBmb3JtYXRNZXNzYWdlKG9wdCwgZGVzYykge1xuICAgIHJldHVybiAnW0F4aW9zIHYnICsgVkVSU0lPTiArICddIFRyYW5zaXRpb25hbCBvcHRpb24gXFwnJyArIG9wdCArICdcXCcnICsgZGVzYyArIChtZXNzYWdlID8gJy4gJyArIG1lc3NhZ2UgOiAnJyk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICByZXR1cm4gKHZhbHVlLCBvcHQsIG9wdHMpID0+IHtcbiAgICBpZiAodmFsaWRhdG9yID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoXG4gICAgICAgIGZvcm1hdE1lc3NhZ2Uob3B0LCAnIGhhcyBiZWVuIHJlbW92ZWQnICsgKHZlcnNpb24gPyAnIGluICcgKyB2ZXJzaW9uIDogJycpKSxcbiAgICAgICAgQXhpb3NFcnJvci5FUlJfREVQUkVDQVRFRFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbiAmJiAhZGVwcmVjYXRlZFdhcm5pbmdzW29wdF0pIHtcbiAgICAgIGRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdID0gdHJ1ZTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGZvcm1hdE1lc3NhZ2UoXG4gICAgICAgICAgb3B0LFxuICAgICAgICAgICcgaGFzIGJlZW4gZGVwcmVjYXRlZCBzaW5jZSB2JyArIHZlcnNpb24gKyAnIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5lYXIgZnV0dXJlJ1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3IgPyB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0cykgOiB0cnVlO1xuICB9O1xufTtcblxuLyoqXG4gKiBBc3NlcnQgb2JqZWN0J3MgcHJvcGVydGllcyB0eXBlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBzY2hlbWFcbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGFsbG93VW5rbm93blxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gYXNzZXJ0T3B0aW9ucyhvcHRpb25zLCBzY2hlbWEsIGFsbG93VW5rbm93bikge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnLCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OX1ZBTFVFKTtcbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG4gIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgY29uc3Qgb3B0ID0ga2V5c1tpXTtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSBzY2hlbWFbb3B0XTtcbiAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNbb3B0XTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignb3B0aW9uICcgKyBvcHQgKyAnIG11c3QgYmUgJyArIHJlc3VsdCwgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTl9WQUxVRSk7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFsbG93VW5rbm93biAhPT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ1Vua25vd24gb3B0aW9uICcgKyBvcHQsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT04pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFzc2VydE9wdGlvbnMsXG4gIHZhbGlkYXRvcnNcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1EYXRhO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQXhpb3NVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vLi4vaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyc7XG5leHBvcnQgZGVmYXVsdCB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyA/IFVSTFNlYXJjaFBhcmFtcyA6IEF4aW9zVVJMU2VhcmNoUGFyYW1zO1xuIiwiaW1wb3J0IFVSTFNlYXJjaFBhcmFtcyBmcm9tICcuL2NsYXNzZXMvVVJMU2VhcmNoUGFyYW1zLmpzJ1xuaW1wb3J0IEZvcm1EYXRhIGZyb20gJy4vY2xhc3Nlcy9Gb3JtRGF0YS5qcydcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGlzU3RhbmRhcmRCcm93c2VyRW52ID0gKCgpID0+IHtcbiAgbGV0IHByb2R1Y3Q7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAoXG4gICAgKHByb2R1Y3QgPSBuYXZpZ2F0b3IucHJvZHVjdCkgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICBwcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fFxuICAgIHByb2R1Y3QgPT09ICdOUycpXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xufSkoKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgd2ViV29ya2VyIGVudmlyb25tZW50XG4gKlxuICogQWx0aG91Z2ggdGhlIGBpc1N0YW5kYXJkQnJvd3NlckVudmAgbWV0aG9kIGluZGljYXRlcyB0aGF0XG4gKiBgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXJgLCB0aGUgV2ViV29ya2VyIHdpbGwgc3RpbGwgYmVcbiAqIGZpbHRlcmVkIG91dCBkdWUgdG8gaXRzIGp1ZGdtZW50IHN0YW5kYXJkXG4gKiBgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ2AuXG4gKiBUaGlzIGxlYWRzIHRvIGEgcHJvYmxlbSB3aGVuIGF4aW9zIHBvc3QgYEZvcm1EYXRhYCBpbiB3ZWJXb3JrZXJcbiAqL1xuIGNvbnN0IGlzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52ID0gKCgpID0+IHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlICYmXG4gICAgdHlwZW9mIHNlbGYuaW1wb3J0U2NyaXB0cyA9PT0gJ2Z1bmN0aW9uJ1xuICApO1xufSkoKTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzQnJvd3NlcjogdHJ1ZSxcbiAgY2xhc3Nlczoge1xuICAgIFVSTFNlYXJjaFBhcmFtcyxcbiAgICBGb3JtRGF0YSxcbiAgICBCbG9iXG4gIH0sXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBpc1N0YW5kYXJkQnJvd3NlcldlYldvcmtlckVudixcbiAgcHJvdG9jb2xzOiBbJ2h0dHAnLCAnaHR0cHMnLCAnZmlsZScsICdibG9iJywgJ3VybCcsICdkYXRhJ11cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBiaW5kIGZyb20gJy4vaGVscGVycy9iaW5kLmpzJztcblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxuY29uc3Qge3RvU3RyaW5nfSA9IE9iamVjdC5wcm90b3R5cGU7XG5jb25zdCB7Z2V0UHJvdG90eXBlT2Z9ID0gT2JqZWN0O1xuXG5jb25zdCBraW5kT2YgPSAoY2FjaGUgPT4gdGhpbmcgPT4ge1xuICAgIGNvbnN0IHN0ciA9IHRvU3RyaW5nLmNhbGwodGhpbmcpO1xuICAgIHJldHVybiBjYWNoZVtzdHJdIHx8IChjYWNoZVtzdHJdID0gc3RyLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpKTtcbn0pKE9iamVjdC5jcmVhdGUobnVsbCkpO1xuXG5jb25zdCBraW5kT2ZUZXN0ID0gKHR5cGUpID0+IHtcbiAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuICh0aGluZykgPT4ga2luZE9mKHRoaW5nKSA9PT0gdHlwZVxufVxuXG5jb25zdCB0eXBlT2ZUZXN0ID0gdHlwZSA9PiB0aGluZyA9PiB0eXBlb2YgdGhpbmcgPT09IHR5cGU7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCB7aXNBcnJheX0gPSBBcnJheTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1VuZGVmaW5lZCA9IHR5cGVPZlRlc3QoJ3VuZGVmaW5lZCcpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIGlzRnVuY3Rpb24odmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKSAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0FycmF5QnVmZmVyID0ga2luZE9mVGVzdCgnQXJyYXlCdWZmZXInKTtcblxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIGxldCByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKGlzQXJyYXlCdWZmZXIodmFsLmJ1ZmZlcikpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNTdHJpbmcgPSB0eXBlT2ZUZXN0KCdzdHJpbmcnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Z1bmN0aW9uID0gdHlwZU9mVGVzdCgnZnVuY3Rpb24nKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc051bWJlciA9IHR5cGVPZlRlc3QoJ251bWJlcicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc09iamVjdCA9ICh0aGluZykgPT4gdGhpbmcgIT09IG51bGwgJiYgdHlwZW9mIHRoaW5nID09PSAnb2JqZWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJvb2xlYW5cbiAqXG4gKiBAcGFyYW0geyp9IHRoaW5nIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJvb2xlYW4sIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Jvb2xlYW4gPSB0aGluZyA9PiB0aGluZyA9PT0gdHJ1ZSB8fCB0aGluZyA9PT0gZmFsc2U7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNQbGFpbk9iamVjdCA9ICh2YWwpID0+IHtcbiAgaWYgKGtpbmRPZih2YWwpICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKHZhbCk7XG4gIHJldHVybiAocHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZSB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKSA9PT0gbnVsbCkgJiYgIShTeW1ib2wudG9TdHJpbmdUYWcgaW4gdmFsKSAmJiAhKFN5bWJvbC5pdGVyYXRvciBpbiB2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNEYXRlID0ga2luZE9mVGVzdCgnRGF0ZScpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGaWxlID0ga2luZE9mVGVzdCgnRmlsZScpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNCbG9iID0ga2luZE9mVGVzdCgnQmxvYicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZUxpc3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRmlsZUxpc3QgPSBraW5kT2ZUZXN0KCdGaWxlTGlzdCcpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzU3RyZWFtID0gKHZhbCkgPT4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGb3JtRGF0YSA9ICh0aGluZykgPT4ge1xuICBjb25zdCBwYXR0ZXJuID0gJ1tvYmplY3QgRm9ybURhdGFdJztcbiAgcmV0dXJuIHRoaW5nICYmIChcbiAgICAodHlwZW9mIEZvcm1EYXRhID09PSAnZnVuY3Rpb24nICYmIHRoaW5nIGluc3RhbmNlb2YgRm9ybURhdGEpIHx8XG4gICAgdG9TdHJpbmcuY2FsbCh0aGluZykgPT09IHBhdHRlcm4gfHxcbiAgICAoaXNGdW5jdGlvbih0aGluZy50b1N0cmluZykgJiYgdGhpbmcudG9TdHJpbmcoKSA9PT0gcGF0dGVybilcbiAgKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzVVJMU2VhcmNoUGFyYW1zID0ga2luZE9mVGVzdCgnVVJMU2VhcmNoUGFyYW1zJyk7XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmNvbnN0IHRyaW0gPSAoc3RyKSA9PiBzdHIudHJpbSA/XG4gIHN0ci50cmltKCkgOiBzdHIucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csICcnKTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2FsbE93bktleXMgPSBmYWxzZV1cbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbiwge2FsbE93bktleXMgPSBmYWxzZX0gPSB7fSkge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBpO1xuICBsZXQgbDtcblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAoaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgY29uc3Qga2V5cyA9IGFsbE93bktleXMgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopIDogT2JqZWN0LmtleXMob2JqKTtcbiAgICBjb25zdCBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgICBsZXQga2V5O1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iaiwga2V5KSB7XG4gIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcbiAgbGV0IF9rZXk7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgX2tleSA9IGtleXNbaV07XG4gICAgaWYgKGtleSA9PT0gX2tleS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICByZXR1cm4gX2tleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IF9nbG9iYWwgPSAoKCkgPT4ge1xuICAvKmVzbGludCBuby11bmRlZjowKi9cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZ2xvYmFsVGhpcztcbiAgcmV0dXJuIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbClcbn0pKCk7XG5cbmNvbnN0IGlzQ29udGV4dERlZmluZWQgPSAoY29udGV4dCkgPT4gIWlzVW5kZWZpbmVkKGNvbnRleHQpICYmIGNvbnRleHQgIT09IF9nbG9iYWw7XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgY29uc3Qge2Nhc2VsZXNzfSA9IGlzQ29udGV4dERlZmluZWQodGhpcykgJiYgdGhpcyB8fCB7fTtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGNvbnN0IGFzc2lnblZhbHVlID0gKHZhbCwga2V5KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0S2V5ID0gY2FzZWxlc3MgJiYgZmluZEtleShyZXN1bHQsIGtleSkgfHwga2V5O1xuICAgIGlmIChpc1BsYWluT2JqZWN0KHJlc3VsdFt0YXJnZXRLZXldKSAmJiBpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gbWVyZ2UocmVzdWx0W3RhcmdldEtleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gbWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbCkpIHtcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gdmFsLnNsaWNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFt0YXJnZXRLZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGFyZ3VtZW50c1tpXSAmJiBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFthbGxPd25LZXlzXVxuICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5jb25zdCBleHRlbmQgPSAoYSwgYiwgdGhpc0FyZywge2FsbE93bktleXN9PSB7fSkgPT4ge1xuICBmb3JFYWNoKGIsICh2YWwsIGtleSkgPT4ge1xuICAgIGlmICh0aGlzQXJnICYmIGlzRnVuY3Rpb24odmFsKSkge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9LCB7YWxsT3duS2V5c30pO1xuICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYnl0ZSBvcmRlciBtYXJrZXIuIFRoaXMgY2F0Y2hlcyBFRiBCQiBCRiAodGhlIFVURi04IEJPTSlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCB3aXRoIEJPTVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuY29uc3Qgc3RyaXBCT00gPSAoY29udGVudCkgPT4ge1xuICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge29iamVjdH0gW3Byb3BzXVxuICogQHBhcmFtIHtvYmplY3R9IFtkZXNjcmlwdG9yc11cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuY29uc3QgaW5oZXJpdHMgPSAoY29uc3RydWN0b3IsIHN1cGVyQ29uc3RydWN0b3IsIHByb3BzLCBkZXNjcmlwdG9ycykgPT4ge1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ29uc3RydWN0b3IucHJvdG90eXBlLCBkZXNjcmlwdG9ycyk7XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uc3RydWN0b3IsICdzdXBlcicsIHtcbiAgICB2YWx1ZTogc3VwZXJDb25zdHJ1Y3Rvci5wcm90b3R5cGVcbiAgfSk7XG4gIHByb3BzICYmIE9iamVjdC5hc3NpZ24oY29uc3RydWN0b3IucHJvdG90eXBlLCBwcm9wcyk7XG59XG5cbi8qKlxuICogUmVzb2x2ZSBvYmplY3Qgd2l0aCBkZWVwIHByb3RvdHlwZSBjaGFpbiB0byBhIGZsYXQgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlT2JqIHNvdXJjZSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGVzdE9ial1cbiAqIEBwYXJhbSB7RnVuY3Rpb258Qm9vbGVhbn0gW2ZpbHRlcl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcm9wRmlsdGVyXVxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmNvbnN0IHRvRmxhdE9iamVjdCA9IChzb3VyY2VPYmosIGRlc3RPYmosIGZpbHRlciwgcHJvcEZpbHRlcikgPT4ge1xuICBsZXQgcHJvcHM7XG4gIGxldCBpO1xuICBsZXQgcHJvcDtcbiAgY29uc3QgbWVyZ2VkID0ge307XG5cbiAgZGVzdE9iaiA9IGRlc3RPYmogfHwge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuICBpZiAoc291cmNlT2JqID09IG51bGwpIHJldHVybiBkZXN0T2JqO1xuXG4gIGRvIHtcbiAgICBwcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZU9iaik7XG4gICAgaSA9IHByb3BzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tID4gMCkge1xuICAgICAgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgaWYgKCghcHJvcEZpbHRlciB8fCBwcm9wRmlsdGVyKHByb3AsIHNvdXJjZU9iaiwgZGVzdE9iaikpICYmICFtZXJnZWRbcHJvcF0pIHtcbiAgICAgICAgZGVzdE9ialtwcm9wXSA9IHNvdXJjZU9ialtwcm9wXTtcbiAgICAgICAgbWVyZ2VkW3Byb3BdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc291cmNlT2JqID0gZmlsdGVyICE9PSBmYWxzZSAmJiBnZXRQcm90b3R5cGVPZihzb3VyY2VPYmopO1xuICB9IHdoaWxlIChzb3VyY2VPYmogJiYgKCFmaWx0ZXIgfHwgZmlsdGVyKHNvdXJjZU9iaiwgZGVzdE9iaikpICYmIHNvdXJjZU9iaiAhPT0gT2JqZWN0LnByb3RvdHlwZSk7XG5cbiAgcmV0dXJuIGRlc3RPYmo7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgc3RyaW5nIGVuZHMgd2l0aCB0aGUgY2hhcmFjdGVycyBvZiBhIHNwZWNpZmllZCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VhcmNoU3RyaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uPSAwXVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBlbmRzV2l0aCA9IChzdHIsIHNlYXJjaFN0cmluZywgcG9zaXRpb24pID0+IHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHBvc2l0aW9uID4gc3RyLmxlbmd0aCkge1xuICAgIHBvc2l0aW9uID0gc3RyLmxlbmd0aDtcbiAgfVxuICBwb3NpdGlvbiAtPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuICBjb25zdCBsYXN0SW5kZXggPSBzdHIuaW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTtcbiAgcmV0dXJuIGxhc3RJbmRleCAhPT0gLTEgJiYgbGFzdEluZGV4ID09PSBwb3NpdGlvbjtcbn1cblxuXG4vKipcbiAqIFJldHVybnMgbmV3IGFycmF5IGZyb20gYXJyYXkgbGlrZSBvYmplY3Qgb3IgbnVsbCBpZiBmYWlsZWRcbiAqXG4gKiBAcGFyYW0geyp9IFt0aGluZ11cbiAqXG4gKiBAcmV0dXJucyB7P0FycmF5fVxuICovXG5jb25zdCB0b0FycmF5ID0gKHRoaW5nKSA9PiB7XG4gIGlmICghdGhpbmcpIHJldHVybiBudWxsO1xuICBpZiAoaXNBcnJheSh0aGluZykpIHJldHVybiB0aGluZztcbiAgbGV0IGkgPSB0aGluZy5sZW5ndGg7XG4gIGlmICghaXNOdW1iZXIoaSkpIHJldHVybiBudWxsO1xuICBjb25zdCBhcnIgPSBuZXcgQXJyYXkoaSk7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgYXJyW2ldID0gdGhpbmdbaV07XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuLyoqXG4gKiBDaGVja2luZyBpZiB0aGUgVWludDhBcnJheSBleGlzdHMgYW5kIGlmIGl0IGRvZXMsIGl0IHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBpZiB0aGVcbiAqIHRoaW5nIHBhc3NlZCBpbiBpcyBhbiBpbnN0YW5jZSBvZiBVaW50OEFycmF5XG4gKlxuICogQHBhcmFtIHtUeXBlZEFycmF5fVxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbmNvbnN0IGlzVHlwZWRBcnJheSA9IChUeXBlZEFycmF5ID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgcmV0dXJuIHRoaW5nID0+IHtcbiAgICByZXR1cm4gVHlwZWRBcnJheSAmJiB0aGluZyBpbnN0YW5jZW9mIFR5cGVkQXJyYXk7XG4gIH07XG59KSh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2V0UHJvdG90eXBlT2YoVWludDhBcnJheSkpO1xuXG4vKipcbiAqIEZvciBlYWNoIGVudHJ5IGluIHRoZSBvYmplY3QsIGNhbGwgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGtleSBhbmQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtPYmplY3Q8YW55LCBhbnk+fSBvYmogLSBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggZW50cnkuXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmNvbnN0IGZvckVhY2hFbnRyeSA9IChvYmosIGZuKSA9PiB7XG4gIGNvbnN0IGdlbmVyYXRvciA9IG9iaiAmJiBvYmpbU3ltYm9sLml0ZXJhdG9yXTtcblxuICBjb25zdCBpdGVyYXRvciA9IGdlbmVyYXRvci5jYWxsKG9iaik7XG5cbiAgbGV0IHJlc3VsdDtcblxuICB3aGlsZSAoKHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKSkgJiYgIXJlc3VsdC5kb25lKSB7XG4gICAgY29uc3QgcGFpciA9IHJlc3VsdC52YWx1ZTtcbiAgICBmbi5jYWxsKG9iaiwgcGFpclswXSwgcGFpclsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBhbmQgYSBzdHJpbmcsIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIGFsbCB0aGUgbWF0Y2hlc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWdFeHAgLSBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBzZWFyY2guXG4gKlxuICogQHJldHVybnMge0FycmF5PGJvb2xlYW4+fVxuICovXG5jb25zdCBtYXRjaEFsbCA9IChyZWdFeHAsIHN0cikgPT4ge1xuICBsZXQgbWF0Y2hlcztcbiAgY29uc3QgYXJyID0gW107XG5cbiAgd2hpbGUgKChtYXRjaGVzID0gcmVnRXhwLmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICBhcnIucHVzaChtYXRjaGVzKTtcbiAgfVxuXG4gIHJldHVybiBhcnI7XG59XG5cbi8qIENoZWNraW5nIGlmIHRoZSBraW5kT2ZUZXN0IGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSB3aGVuIHBhc3NlZCBhbiBIVE1MRm9ybUVsZW1lbnQuICovXG5jb25zdCBpc0hUTUxGb3JtID0ga2luZE9mVGVzdCgnSFRNTEZvcm1FbGVtZW50Jyk7XG5cbmNvbnN0IHRvQ2FtZWxDYXNlID0gc3RyID0+IHtcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1tfLVxcc10oW2EtelxcZF0pKFxcdyopL2csXG4gICAgZnVuY3Rpb24gcmVwbGFjZXIobSwgcDEsIHAyKSB7XG4gICAgICByZXR1cm4gcDEudG9VcHBlckNhc2UoKSArIHAyO1xuICAgIH1cbiAgKTtcbn07XG5cbi8qIENyZWF0aW5nIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIGlmIGFuIG9iamVjdCBoYXMgYSBwcm9wZXJ0eS4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gKCh7aGFzT3duUHJvcGVydHl9KSA9PiAob2JqLCBwcm9wKSA9PiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpKE9iamVjdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgUmVnRXhwIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBSZWdFeHAgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNSZWdFeHAgPSBraW5kT2ZUZXN0KCdSZWdFeHAnKTtcblxuY29uc3QgcmVkdWNlRGVzY3JpcHRvcnMgPSAob2JqLCByZWR1Y2VyKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKTtcbiAgY29uc3QgcmVkdWNlZERlc2NyaXB0b3JzID0ge307XG5cbiAgZm9yRWFjaChkZXNjcmlwdG9ycywgKGRlc2NyaXB0b3IsIG5hbWUpID0+IHtcbiAgICBpZiAocmVkdWNlcihkZXNjcmlwdG9yLCBuYW1lLCBvYmopICE9PSBmYWxzZSkge1xuICAgICAgcmVkdWNlZERlc2NyaXB0b3JzW25hbWVdID0gZGVzY3JpcHRvcjtcbiAgICB9XG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG9iaiwgcmVkdWNlZERlc2NyaXB0b3JzKTtcbn1cblxuLyoqXG4gKiBNYWtlcyBhbGwgbWV0aG9kcyByZWFkLW9ubHlcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqL1xuXG5jb25zdCBmcmVlemVNZXRob2RzID0gKG9iaikgPT4ge1xuICByZWR1Y2VEZXNjcmlwdG9ycyhvYmosIChkZXNjcmlwdG9yLCBuYW1lKSA9PiB7XG4gICAgLy8gc2tpcCByZXN0cmljdGVkIHByb3BzIGluIHN0cmljdCBtb2RlXG4gICAgaWYgKGlzRnVuY3Rpb24ob2JqKSAmJiBbJ2FyZ3VtZW50cycsICdjYWxsZXInLCAnY2FsbGVlJ10uaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IG9ialtuYW1lXTtcblxuICAgIGlmICghaXNGdW5jdGlvbih2YWx1ZSkpIHJldHVybjtcblxuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGZhbHNlO1xuXG4gICAgaWYgKCd3cml0YWJsZScgaW4gZGVzY3JpcHRvcikge1xuICAgICAgZGVzY3JpcHRvci53cml0YWJsZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgIGRlc2NyaXB0b3Iuc2V0ID0gKCkgPT4ge1xuICAgICAgICB0aHJvdyBFcnJvcignQ2FuIG5vdCByZXdyaXRlIHJlYWQtb25seSBtZXRob2QgXFwnJyArIG5hbWUgKyAnXFwnJyk7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IHRvT2JqZWN0U2V0ID0gKGFycmF5T3JTdHJpbmcsIGRlbGltaXRlcikgPT4ge1xuICBjb25zdCBvYmogPSB7fTtcblxuICBjb25zdCBkZWZpbmUgPSAoYXJyKSA9PiB7XG4gICAgYXJyLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgb2JqW3ZhbHVlXSA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBpc0FycmF5KGFycmF5T3JTdHJpbmcpID8gZGVmaW5lKGFycmF5T3JTdHJpbmcpIDogZGVmaW5lKFN0cmluZyhhcnJheU9yU3RyaW5nKS5zcGxpdChkZWxpbWl0ZXIpKTtcblxuICByZXR1cm4gb2JqO1xufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgdG9GaW5pdGVOdW1iZXIgPSAodmFsdWUsIGRlZmF1bHRWYWx1ZSkgPT4ge1xuICB2YWx1ZSA9ICt2YWx1ZTtcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbn1cblxuY29uc3QgdG9KU09OT2JqZWN0ID0gKG9iaikgPT4ge1xuICBjb25zdCBzdGFjayA9IG5ldyBBcnJheSgxMCk7XG5cbiAgY29uc3QgdmlzaXQgPSAoc291cmNlLCBpKSA9PiB7XG5cbiAgICBpZiAoaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgaWYgKHN0YWNrLmluZGV4T2Yoc291cmNlKSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoISgndG9KU09OJyBpbiBzb3VyY2UpKSB7XG4gICAgICAgIHN0YWNrW2ldID0gc291cmNlO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBpc0FycmF5KHNvdXJjZSkgPyBbXSA6IHt9O1xuXG4gICAgICAgIGZvckVhY2goc291cmNlLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZHVjZWRWYWx1ZSA9IHZpc2l0KHZhbHVlLCBpICsgMSk7XG4gICAgICAgICAgIWlzVW5kZWZpbmVkKHJlZHVjZWRWYWx1ZSkgJiYgKHRhcmdldFtrZXldID0gcmVkdWNlZFZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RhY2tbaV0gPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgcmV0dXJuIHZpc2l0KG9iaiwgMCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXIsXG4gIGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZyxcbiAgaXNOdW1iZXIsXG4gIGlzQm9vbGVhbixcbiAgaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3QsXG4gIGlzVW5kZWZpbmVkLFxuICBpc0RhdGUsXG4gIGlzRmlsZSxcbiAgaXNCbG9iLFxuICBpc1JlZ0V4cCxcbiAgaXNGdW5jdGlvbixcbiAgaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1R5cGVkQXJyYXksXG4gIGlzRmlsZUxpc3QsXG4gIGZvckVhY2gsXG4gIG1lcmdlLFxuICBleHRlbmQsXG4gIHRyaW0sXG4gIHN0cmlwQk9NLFxuICBpbmhlcml0cyxcbiAgdG9GbGF0T2JqZWN0LFxuICBraW5kT2YsXG4gIGtpbmRPZlRlc3QsXG4gIGVuZHNXaXRoLFxuICB0b0FycmF5LFxuICBmb3JFYWNoRW50cnksXG4gIG1hdGNoQWxsLFxuICBpc0hUTUxGb3JtLFxuICBoYXNPd25Qcm9wZXJ0eSxcbiAgaGFzT3duUHJvcDogaGFzT3duUHJvcGVydHksIC8vIGFuIGFsaWFzIHRvIGF2b2lkIEVTTGludCBuby1wcm90b3R5cGUtYnVpbHRpbnMgZGV0ZWN0aW9uXG4gIHJlZHVjZURlc2NyaXB0b3JzLFxuICBmcmVlemVNZXRob2RzLFxuICB0b09iamVjdFNldCxcbiAgdG9DYW1lbENhc2UsXG4gIG5vb3AsXG4gIHRvRmluaXRlTnVtYmVyLFxuICBmaW5kS2V5LFxuICBnbG9iYWw6IF9nbG9iYWwsXG4gIGlzQ29udGV4dERlZmluZWQsXG4gIHRvSlNPTk9iamVjdFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgZ2VuZXJhdGVKb2tlIGZyb20gXCIuL2dlbmVyYXRlSm9rZVwiO1xyXG5pbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XHJcbmltcG9ydCBsYXVnaGluZyBmcm9tICcuL2Fzc2V0cy9sYXVnaGluZy5zdmcnXHJcblxyXG5jb25zdCBsYXVnaEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXVnaEltZycpXHJcbmxhdWdoSW1nLnNyYyA9IGxhdWdoaW5nXHJcblxyXG5jb25zdCBqb2tlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pva2VCdG4nKVxyXG5qb2tlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZ2VuZXJhdGVKb2tlKCkpXHJcblxyXG5nZW5lcmF0ZUpva2UoKSJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzZWxmIiwiRm9ybURhdGEiLCJ3aW5kb3ciLCJheGlvcyIsImdlbmVyYXRlSm9rZSIsImNvbmZpZyIsImhlYWRlcnMiLCJBY2NlcHQiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImpva2UiLCJ1dGlscyIsImh0dHBBZGFwdGVyIiwieGhyQWRhcHRlciIsIkF4aW9zRXJyb3IiLCJrbm93bkFkYXB0ZXJzIiwiaHR0cCIsInhociIsImZvckVhY2giLCJmbiIsInZhbHVlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlIiwiZ2V0QWRhcHRlciIsImFkYXB0ZXJzIiwiaXNBcnJheSIsIm5hbWVPckFkYXB0ZXIiLCJhZGFwdGVyIiwiaXNTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsIkVycm9yIiwiaGFzT3duUHJvcCIsImlzRnVuY3Rpb24iLCJUeXBlRXJyb3IiLCJzZXR0bGUiLCJjb29raWVzIiwiYnVpbGRVUkwiLCJidWlsZEZ1bGxQYXRoIiwiaXNVUkxTYW1lT3JpZ2luIiwidHJhbnNpdGlvbmFsRGVmYXVsdHMiLCJDYW5jZWxlZEVycm9yIiwicGFyc2VQcm90b2NvbCIsInBsYXRmb3JtIiwiQXhpb3NIZWFkZXJzIiwic3BlZWRvbWV0ZXIiLCJwcm9ncmVzc0V2ZW50UmVkdWNlciIsImxpc3RlbmVyIiwiaXNEb3dubG9hZFN0cmVhbSIsImJ5dGVzTm90aWZpZWQiLCJfc3BlZWRvbWV0ZXIiLCJsb2FkZWQiLCJ0b3RhbCIsImxlbmd0aENvbXB1dGFibGUiLCJwcm9ncmVzc0J5dGVzIiwicmF0ZSIsImluUmFuZ2UiLCJwcm9ncmVzcyIsImJ5dGVzIiwiZXN0aW1hdGVkIiwiZXZlbnQiLCJpc1hIUkFkYXB0ZXJTdXBwb3J0ZWQiLCJYTUxIdHRwUmVxdWVzdCIsIlByb21pc2UiLCJkaXNwYXRjaFhoclJlcXVlc3QiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdERhdGEiLCJyZXF1ZXN0SGVhZGVycyIsImZyb20iLCJub3JtYWxpemUiLCJyZXNwb25zZVR5cGUiLCJvbkNhbmNlbGVkIiwiZG9uZSIsImNhbmNlbFRva2VuIiwidW5zdWJzY3JpYmUiLCJzaWduYWwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNGb3JtRGF0YSIsImlzU3RhbmRhcmRCcm93c2VyRW52IiwiaXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYiLCJzZXRDb250ZW50VHlwZSIsInJlcXVlc3QiLCJhdXRoIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInNldCIsImZ1bGxQYXRoIiwiYmFzZVVSTCIsInVybCIsIm9wZW4iLCJtZXRob2QiLCJ0b1VwcGVyQ2FzZSIsInBhcmFtcyIsInBhcmFtc1NlcmlhbGl6ZXIiLCJ0aW1lb3V0Iiwib25sb2FkZW5kIiwicmVzcG9uc2VIZWFkZXJzIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwicmVzcG9uc2VEYXRhIiwicmVzcG9uc2VUZXh0IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiX3Jlc29sdmUiLCJfcmVqZWN0IiwiZXJyIiwib25yZWFkeXN0YXRlY2hhbmdlIiwiaGFuZGxlTG9hZCIsInJlYWR5U3RhdGUiLCJyZXNwb25zZVVSTCIsImluZGV4T2YiLCJzZXRUaW1lb3V0Iiwib25hYm9ydCIsImhhbmRsZUFib3J0IiwiRUNPTk5BQk9SVEVEIiwib25lcnJvciIsImhhbmRsZUVycm9yIiwiRVJSX05FVFdPUksiLCJvbnRpbWVvdXQiLCJoYW5kbGVUaW1lb3V0IiwidGltZW91dEVycm9yTWVzc2FnZSIsInRyYW5zaXRpb25hbCIsImNsYXJpZnlUaW1lb3V0RXJyb3IiLCJFVElNRURPVVQiLCJ4c3JmVmFsdWUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ4c3JmQ29va2llTmFtZSIsInJlYWQiLCJ4c3JmSGVhZGVyTmFtZSIsInRvSlNPTiIsInNldFJlcXVlc3RIZWFkZXIiLCJ2YWwiLCJrZXkiLCJpc1VuZGVmaW5lZCIsIm9uRG93bmxvYWRQcm9ncmVzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblVwbG9hZFByb2dyZXNzIiwidXBsb2FkIiwiY2FuY2VsIiwidHlwZSIsImFib3J0Iiwic3Vic2NyaWJlIiwiYWJvcnRlZCIsInByb3RvY29sIiwicHJvdG9jb2xzIiwiRVJSX0JBRF9SRVFVRVNUIiwic2VuZCIsImJpbmQiLCJBeGlvcyIsIm1lcmdlQ29uZmlnIiwiZGVmYXVsdHMiLCJmb3JtRGF0YVRvSlNPTiIsIkNhbmNlbFRva2VuIiwiaXNDYW5jZWwiLCJWRVJTSU9OIiwidG9Gb3JtRGF0YSIsInNwcmVhZCIsImlzQXhpb3NFcnJvciIsIkh0dHBTdGF0dXNDb2RlIiwiY3JlYXRlSW5zdGFuY2UiLCJkZWZhdWx0Q29uZmlnIiwiY29udGV4dCIsImluc3RhbmNlIiwicHJvdG90eXBlIiwiZXh0ZW5kIiwiYWxsT3duS2V5cyIsImNyZWF0ZSIsImluc3RhbmNlQ29uZmlnIiwiQ2FuY2VsIiwiYWxsIiwicHJvbWlzZXMiLCJmb3JtVG9KU09OIiwidGhpbmciLCJpc0hUTUxGb3JtIiwiZXhlY3V0b3IiLCJyZXNvbHZlUHJvbWlzZSIsInByb21pc2UiLCJwcm9taXNlRXhlY3V0b3IiLCJ0b2tlbiIsIl9saXN0ZW5lcnMiLCJvbmZ1bGZpbGxlZCIsIm1lc3NhZ2UiLCJyZWFzb24iLCJpbmRleCIsInNwbGljZSIsImMiLCJjYWxsIiwiRVJSX0NBTkNFTEVEIiwibmFtZSIsImluaGVyaXRzIiwiX19DQU5DRUxfXyIsIkludGVyY2VwdG9yTWFuYWdlciIsImRpc3BhdGNoUmVxdWVzdCIsInZhbGlkYXRvciIsInZhbGlkYXRvcnMiLCJpbnRlcmNlcHRvcnMiLCJjb25maWdPclVybCIsImFzc2VydE9wdGlvbnMiLCJzaWxlbnRKU09OUGFyc2luZyIsImZvcmNlZEpTT05QYXJzaW5nIiwiZW5jb2RlIiwic2VyaWFsaXplIiwiY29udGV4dEhlYWRlcnMiLCJtZXJnZSIsImNvbW1vbiIsInJlcXVlc3RJbnRlcmNlcHRvckNoYWluIiwic3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzIiwidW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMiLCJpbnRlcmNlcHRvciIsInJ1bldoZW4iLCJzeW5jaHJvbm91cyIsInVuc2hpZnQiLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsInJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbiIsInB1c2hSZXNwb25zZUludGVyY2VwdG9ycyIsImxlbiIsImNoYWluIiwiYXBwbHkiLCJuZXdDb25maWciLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJlcnJvciIsImZvckVhY2hNZXRob2ROb0RhdGEiLCJmb3JFYWNoTWV0aG9kV2l0aERhdGEiLCJnZW5lcmF0ZUhUVFBNZXRob2QiLCJpc0Zvcm0iLCJodHRwTWV0aG9kIiwiY29kZSIsImNhcHR1cmVTdGFja1RyYWNlIiwiY29uc3RydWN0b3IiLCJzdGFjayIsImRlc2NyaXB0aW9uIiwibnVtYmVyIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwidG9KU09OT2JqZWN0IiwiZGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiY3VzdG9tUHJvcHMiLCJheGlvc0Vycm9yIiwidG9GbGF0T2JqZWN0IiwiZmlsdGVyIiwib2JqIiwicHJvcCIsImNhdXNlIiwiYXNzaWduIiwicGFyc2VIZWFkZXJzIiwiJGludGVybmFscyIsIlN5bWJvbCIsIm5vcm1hbGl6ZUhlYWRlciIsImhlYWRlciIsIlN0cmluZyIsInRyaW0iLCJub3JtYWxpemVWYWx1ZSIsInBhcnNlVG9rZW5zIiwic3RyIiwidG9rZW5zIiwidG9rZW5zUkUiLCJtYXRjaCIsImV4ZWMiLCJpc1ZhbGlkSGVhZGVyTmFtZSIsInRlc3QiLCJtYXRjaEhlYWRlclZhbHVlIiwiaXNSZWdFeHAiLCJmb3JtYXRIZWFkZXIiLCJyZXBsYWNlIiwidyIsImNoYXIiLCJidWlsZEFjY2Vzc29ycyIsImFjY2Vzc29yTmFtZSIsInRvQ2FtZWxDYXNlIiwibWV0aG9kTmFtZSIsImFyZzEiLCJhcmcyIiwiYXJnMyIsImNvbmZpZ3VyYWJsZSIsInZhbHVlT3JSZXdyaXRlIiwicmV3cml0ZSIsInNldEhlYWRlciIsIl92YWx1ZSIsIl9oZWFkZXIiLCJfcmV3cml0ZSIsImxIZWFkZXIiLCJmaW5kS2V5Iiwic2V0SGVhZGVycyIsImlzUGxhaW5PYmplY3QiLCJwYXJzZXIiLCJtYXRjaGVyIiwiZGVsZXRlZCIsImRlbGV0ZUhlYWRlciIsImtleXMiLCJmb3JtYXQiLCJub3JtYWxpemVkIiwidGFyZ2V0cyIsImFzU3RyaW5ncyIsImVudHJpZXMiLCJpdGVyYXRvciIsImZpcnN0IiwiY29tcHV0ZWQiLCJ0YXJnZXQiLCJpbnRlcm5hbHMiLCJhY2Nlc3NvcnMiLCJkZWZpbmVBY2Nlc3NvciIsInRvU3RyaW5nVGFnIiwiYWNjZXNzb3IiLCJmcmVlemVNZXRob2RzIiwiaGFuZGxlcnMiLCJvcHRpb25zIiwiZm9yRWFjaEhhbmRsZXIiLCJoIiwiaXNBYnNvbHV0ZVVSTCIsImNvbWJpbmVVUkxzIiwicmVxdWVzdGVkVVJMIiwidHJhbnNmb3JtRGF0YSIsInRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQiLCJ0aHJvd0lmUmVxdWVzdGVkIiwidHJhbnNmb3JtUmVxdWVzdCIsIm9uQWRhcHRlclJlc29sdXRpb24iLCJ0cmFuc2Zvcm1SZXNwb25zZSIsIm9uQWRhcHRlclJlamVjdGlvbiIsImhlYWRlcnNUb09iamVjdCIsImNvbmZpZzEiLCJjb25maWcyIiwiZ2V0TWVyZ2VkVmFsdWUiLCJzb3VyY2UiLCJjYXNlbGVzcyIsInNsaWNlIiwibWVyZ2VEZWVwUHJvcGVydGllcyIsImEiLCJiIiwidmFsdWVGcm9tQ29uZmlnMiIsImRlZmF1bHRUb0NvbmZpZzIiLCJtZXJnZURpcmVjdEtleXMiLCJtZXJnZU1hcCIsInRpbWVvdXRNZXNzYWdlIiwiZGVjb21wcmVzcyIsIm1heENvbnRlbnRMZW5ndGgiLCJtYXhCb2R5TGVuZ3RoIiwiYmVmb3JlUmVkaXJlY3QiLCJ0cmFuc3BvcnQiLCJodHRwQWdlbnQiLCJodHRwc0FnZW50Iiwic29ja2V0UGF0aCIsInJlc3BvbnNlRW5jb2RpbmciLCJ2YWxpZGF0ZVN0YXR1cyIsImNvbXB1dGVDb25maWdWYWx1ZSIsImNvbmZpZ1ZhbHVlIiwiRVJSX0JBRF9SRVNQT05TRSIsIk1hdGgiLCJmbG9vciIsImZucyIsInRyYW5zZm9ybSIsInRvVVJMRW5jb2RlZEZvcm0iLCJERUZBVUxUX0NPTlRFTlRfVFlQRSIsInN0cmluZ2lmeVNhZmVseSIsInJhd1ZhbHVlIiwiZW5jb2RlciIsInBhcnNlIiwiY29udGVudFR5cGUiLCJnZXRDb250ZW50VHlwZSIsImhhc0pTT05Db250ZW50VHlwZSIsImlzT2JqZWN0UGF5bG9hZCIsImlzT2JqZWN0IiwiaXNBcnJheUJ1ZmZlciIsImlzQnVmZmVyIiwiaXNTdHJlYW0iLCJpc0ZpbGUiLCJpc0Jsb2IiLCJpc0FycmF5QnVmZmVyVmlldyIsImJ1ZmZlciIsImlzVVJMU2VhcmNoUGFyYW1zIiwiaXNGaWxlTGlzdCIsImZvcm1TZXJpYWxpemVyIiwiX0Zvcm1EYXRhIiwiZW52IiwiSlNPTlJlcXVlc3RlZCIsInN0cmljdEpTT05QYXJzaW5nIiwiY2xhc3NlcyIsIkJsb2IiLCJjaGFyTWFwIiwicmVwbGFjZXIiLCJBeGlvc1VSTFNlYXJjaFBhcmFtcyIsIl9wYWlycyIsImFwcGVuZCIsIl9lbmNvZGUiLCJlYWNoIiwicGFpciIsIkNvbnRpbnVlIiwiU3dpdGNoaW5nUHJvdG9jb2xzIiwiUHJvY2Vzc2luZyIsIkVhcmx5SGludHMiLCJPayIsIkNyZWF0ZWQiLCJBY2NlcHRlZCIsIk5vbkF1dGhvcml0YXRpdmVJbmZvcm1hdGlvbiIsIk5vQ29udGVudCIsIlJlc2V0Q29udGVudCIsIlBhcnRpYWxDb250ZW50IiwiTXVsdGlTdGF0dXMiLCJBbHJlYWR5UmVwb3J0ZWQiLCJJbVVzZWQiLCJNdWx0aXBsZUNob2ljZXMiLCJNb3ZlZFBlcm1hbmVudGx5IiwiRm91bmQiLCJTZWVPdGhlciIsIk5vdE1vZGlmaWVkIiwiVXNlUHJveHkiLCJVbnVzZWQiLCJUZW1wb3JhcnlSZWRpcmVjdCIsIlBlcm1hbmVudFJlZGlyZWN0IiwiQmFkUmVxdWVzdCIsIlVuYXV0aG9yaXplZCIsIlBheW1lbnRSZXF1aXJlZCIsIkZvcmJpZGRlbiIsIk5vdEZvdW5kIiwiTWV0aG9kTm90QWxsb3dlZCIsIk5vdEFjY2VwdGFibGUiLCJQcm94eUF1dGhlbnRpY2F0aW9uUmVxdWlyZWQiLCJSZXF1ZXN0VGltZW91dCIsIkNvbmZsaWN0IiwiR29uZSIsIkxlbmd0aFJlcXVpcmVkIiwiUHJlY29uZGl0aW9uRmFpbGVkIiwiUGF5bG9hZFRvb0xhcmdlIiwiVXJpVG9vTG9uZyIsIlVuc3VwcG9ydGVkTWVkaWFUeXBlIiwiUmFuZ2VOb3RTYXRpc2ZpYWJsZSIsIkV4cGVjdGF0aW9uRmFpbGVkIiwiSW1BVGVhcG90IiwiTWlzZGlyZWN0ZWRSZXF1ZXN0IiwiVW5wcm9jZXNzYWJsZUVudGl0eSIsIkxvY2tlZCIsIkZhaWxlZERlcGVuZGVuY3kiLCJUb29FYXJseSIsIlVwZ3JhZGVSZXF1aXJlZCIsIlByZWNvbmRpdGlvblJlcXVpcmVkIiwiVG9vTWFueVJlcXVlc3RzIiwiUmVxdWVzdEhlYWRlckZpZWxkc1Rvb0xhcmdlIiwiVW5hdmFpbGFibGVGb3JMZWdhbFJlYXNvbnMiLCJJbnRlcm5hbFNlcnZlckVycm9yIiwiTm90SW1wbGVtZW50ZWQiLCJCYWRHYXRld2F5IiwiU2VydmljZVVuYXZhaWxhYmxlIiwiR2F0ZXdheVRpbWVvdXQiLCJIdHRwVmVyc2lvbk5vdFN1cHBvcnRlZCIsIlZhcmlhbnRBbHNvTmVnb3RpYXRlcyIsIkluc3VmZmljaWVudFN0b3JhZ2UiLCJMb29wRGV0ZWN0ZWQiLCJOb3RFeHRlbmRlZCIsIk5ldHdvcmtBdXRoZW50aWNhdGlvblJlcXVpcmVkIiwidGhpc0FyZyIsIndyYXAiLCJhcmd1bWVudHMiLCJzZXJpYWxpemVGbiIsInNlcmlhbGl6ZWRQYXJhbXMiLCJoYXNobWFya0luZGV4IiwicmVsYXRpdmVVUkwiLCJzdGFuZGFyZEJyb3dzZXJFbnYiLCJ3cml0ZSIsImV4cGlyZXMiLCJwYXRoIiwiZG9tYWluIiwic2VjdXJlIiwiY29va2llIiwiaXNOdW1iZXIiLCJEYXRlIiwidG9HTVRTdHJpbmciLCJSZWdFeHAiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZW1vdmUiLCJub3ciLCJub25TdGFuZGFyZEJyb3dzZXJFbnYiLCJwYXJzZVByb3BQYXRoIiwibWF0Y2hBbGwiLCJhcnJheVRvT2JqZWN0IiwiYXJyIiwiZm9ybURhdGEiLCJidWlsZFBhdGgiLCJpc051bWVyaWNLZXkiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsImlzTGFzdCIsInJlc3VsdCIsImZvckVhY2hFbnRyeSIsInBheWxvYWQiLCJtc2llIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidXJsUGFyc2luZ05vZGUiLCJjcmVhdGVFbGVtZW50Iiwib3JpZ2luVVJMIiwicmVzb2x2ZVVSTCIsImhyZWYiLCJzZXRBdHRyaWJ1dGUiLCJob3N0Iiwic2VhcmNoIiwiaGFzaCIsImhvc3RuYW1lIiwicG9ydCIsInBhdGhuYW1lIiwiY2hhckF0IiwibG9jYXRpb24iLCJyZXF1ZXN0VVJMIiwicGFyc2VkIiwiaWdub3JlRHVwbGljYXRlT2YiLCJ0b09iamVjdFNldCIsInJhd0hlYWRlcnMiLCJzcGxpdCIsImxpbmUiLCJzdWJzdHJpbmciLCJzYW1wbGVzQ291bnQiLCJtaW4iLCJBcnJheSIsInRpbWVzdGFtcHMiLCJoZWFkIiwidGFpbCIsImZpcnN0U2FtcGxlVFMiLCJjaHVua0xlbmd0aCIsInN0YXJ0ZWRBdCIsImJ5dGVzQ291bnQiLCJwYXNzZWQiLCJyb3VuZCIsImNhbGxiYWNrIiwiZW52Rm9ybURhdGEiLCJpc1Zpc2l0YWJsZSIsInJlbW92ZUJyYWNrZXRzIiwiZW5kc1dpdGgiLCJyZW5kZXJLZXkiLCJkb3RzIiwiaXNGbGF0QXJyYXkiLCJzb21lIiwicHJlZGljYXRlcyIsImlzU3BlY0NvbXBsaWFudCIsIm1ldGFUb2tlbnMiLCJpbmRleGVzIiwiZGVmaW5lZCIsIm9wdGlvbiIsInZpc2l0b3IiLCJkZWZhdWx0VmlzaXRvciIsIl9CbG9iIiwidXNlQmxvYiIsImNvbnZlcnRWYWx1ZSIsImlzRGF0ZSIsInRvSVNPU3RyaW5nIiwiaXNUeXBlZEFycmF5IiwiQnVmZmVyIiwidG9BcnJheSIsImVsIiwiZXhwb3NlZEhlbHBlcnMiLCJidWlsZCIsInBvcCIsIlVSTFNlYXJjaFBhcmFtcyIsImhlbHBlcnMiLCJpc05vZGUiLCJkZXByZWNhdGVkV2FybmluZ3MiLCJ2ZXJzaW9uIiwiZm9ybWF0TWVzc2FnZSIsIm9wdCIsImRlc2MiLCJvcHRzIiwiRVJSX0RFUFJFQ0FURUQiLCJjb25zb2xlIiwid2FybiIsInNjaGVtYSIsImFsbG93VW5rbm93biIsIkVSUl9CQURfT1BUSU9OX1ZBTFVFIiwiRVJSX0JBRF9PUFRJT04iLCJwcm9kdWN0IiwiV29ya2VyR2xvYmFsU2NvcGUiLCJpbXBvcnRTY3JpcHRzIiwiaXNCcm93c2VyIiwiZ2V0UHJvdG90eXBlT2YiLCJraW5kT2YiLCJjYWNoZSIsImtpbmRPZlRlc3QiLCJ0eXBlT2ZUZXN0IiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJpc0Jvb2xlYW4iLCJwaXBlIiwicGF0dGVybiIsImwiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiX2tleSIsIl9nbG9iYWwiLCJnbG9iYWxUaGlzIiwiZ2xvYmFsIiwiaXNDb250ZXh0RGVmaW5lZCIsImFzc2lnblZhbHVlIiwidGFyZ2V0S2V5Iiwic3RyaXBCT00iLCJjaGFyQ29kZUF0Iiwic3VwZXJDb25zdHJ1Y3RvciIsInByb3BzIiwic291cmNlT2JqIiwiZGVzdE9iaiIsInByb3BGaWx0ZXIiLCJtZXJnZWQiLCJzZWFyY2hTdHJpbmciLCJwb3NpdGlvbiIsImxhc3RJbmRleCIsIlR5cGVkQXJyYXkiLCJVaW50OEFycmF5IiwiZ2VuZXJhdG9yIiwibmV4dCIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtIiwicDEiLCJwMiIsImhhc093blByb3BlcnR5IiwicmVkdWNlRGVzY3JpcHRvcnMiLCJyZWR1Y2VyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsInJlZHVjZWREZXNjcmlwdG9ycyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJhcnJheU9yU3RyaW5nIiwiZGVsaW1pdGVyIiwiZGVmaW5lIiwibm9vcCIsInRvRmluaXRlTnVtYmVyIiwiZGVmYXVsdFZhbHVlIiwidmlzaXQiLCJyZWR1Y2VkVmFsdWUiLCJsYXVnaGluZyIsImxhdWdoSW1nIiwic3JjIiwiam9rZUJ0biJdLCJzb3VyY2VSb290IjoiIn0=