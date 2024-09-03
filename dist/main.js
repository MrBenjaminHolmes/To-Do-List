/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --darkerBlue: #222831;\r\n  --darkBlue: #31363f;\r\n  --lightBlue: #76abae;\r\n  --LightColour: #eeeeee;\r\n}\r\n\r\n* {\r\n  font-family: \"Josefin Sans\", sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  font-family: \"Arial\", sans-serif;\r\n}\r\n\r\n.heading {\r\n  background-color: var(--darkerBlue);\r\n  display: flex;\r\n  padding: 25px;\r\n}\r\n\r\n.heading > h1 {\r\n  color: var(--LightColour);\r\n  text-align: center;\r\n}\r\n\r\n.sidebar {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr 1fr 12fr;\r\n  background-color: var(--darkBlue);\r\n}\r\n\r\n.mainBoard {\r\n  background-color: var(--LightColour);\r\n}\r\n\r\n.sidebar > * {\r\n  margin-left: 15px;\r\n}\r\n\r\n.projectDiv {\r\n  display: flex;\r\n  transition: all 0.3s ease-in-out;\r\n  width: 95%;\r\n}\r\n\r\n.projectDiv > svg {\r\n  margin-right: 10px;\r\n  scale: 0.8;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.projectDiv > svg:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.high {\r\n  color: #d83a3a;\r\n}\r\n\r\n.medium {\r\n  color: rgb(243, 201, 15);\r\n}\r\n\r\n.low {\r\n  color: rgb(88, 207, 88);\r\n}\r\n\r\n#newProject,\r\n#newTask,\r\n#homeBtn {\r\n  display: flex;\r\n  margin-top: 10px;\r\n  transition: all 0.3s ease-in-out;\r\n  align-items: center;\r\n  height: max-content;\r\n}\r\n\r\n#newProject:hover,\r\n#newTask:hover,\r\n#homeBtn:hover {\r\n  transform: scale(1.03);\r\n}\r\n\r\n.sidebar > div > p {\r\n  color: var(--LightColour);\r\n  font-size: 1vw;\r\n  margin-left: 25px;\r\n}\r\n\r\n#projects {\r\n  margin-top: 10px;\r\n\r\n  color: var(--LightColour);\r\n}\r\n\r\n#projects > h2 {\r\n  margin-bottom: 10px;\r\n}\r\n\r\nsvg {\r\n  width: 2vw;\r\n  height: 2vw;\r\n  fill: #eeeeee;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  background-color: white;\r\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.836);\r\n  padding: 100px;\r\n  border-radius: 10px;\r\n}\r\n\r\nform > input {\r\n  width: 200px;\r\n  transition: transform 0.5s ease-in-out;\r\n  border: none;\r\n  border-bottom: 1px rgb(99, 99, 99) solid;\r\n  height: 30px;\r\n  justify-self: center;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nform > label {\r\n  margin: 10px;\r\n}\r\n\r\nform > button {\r\n  margin: 2px;\r\n}\r\n\r\n.displayed {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1000;\r\n}\r\n\r\n.notdisplayed {\r\n  display: none;\r\n}\r\n\r\n.mainContainer {\r\n  display: grid;\r\n  height: 100%;\r\n  grid-template-columns: 1fr 4fr;\r\n}\r\n\r\n.mainBoard {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--darkBlue);\r\n  color: #eeeeee;\r\n  height: min-content;\r\n  margin: 20px 45px;\r\n  padding: 20px;\r\n  transition: all 0.3s ease-in-out;\r\n  border-radius: 15px;\r\n  position: relative;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.card:hover {\r\n  transform: scale(1.02);\r\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\r\n  background-color: var(--darkerBlue);\r\n}\r\n\r\n.due {\r\n  position: absolute;\r\n  bottom: 10%;\r\n}\r\n\r\n.boardHeading {\r\n  margin: 20px;\r\n  text-align: center;\r\n  text-decoration: underline;\r\n  font-size: 2vw;\r\n}\r\n\r\n.card > button {\r\n  align-self: flex-end;\r\n  border: none;\r\n  background-color: transparent;\r\n  transition: all 0.3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.card > button:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.info > h2 {\r\n  color: #eeeeee;\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.info > p {\r\n  color: #eeeeee;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.project {\r\n  font-size: 1.5vw;\r\n  width: 95%;\r\n  padding: 10px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.projectDiv:hover {\r\n  transform: scale(1.02);\r\n  background-color: #222831;\r\n}\r\n\r\n#newProject {\r\n  height: min-content;\r\n}\r\n\r\n.delete-project {\r\n  border: none;\r\n  background-color: var(--darkBlue);\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Projects.js":
/*!*************************!*\
  !*** ./src/Projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   createProjectForm: () => (/* binding */ createProjectForm)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n\r\nclass Project {\r\n  static projectsList = [];\r\n\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.tasks = [];\r\n    Project.projectsList.push(this);\r\n    (0,___WEBPACK_IMPORTED_MODULE_0__.saveData)();\r\n  }\r\n\r\n  static removeProject(projectToRemove) {\r\n    Project.projectsList = Project.projectsList.filter(\r\n      (project) => project !== projectToRemove\r\n    );\r\n    (0,___WEBPACK_IMPORTED_MODULE_0__.saveData)();\r\n  }\r\n}\r\n\r\nfunction createProjectForm() {\r\n  const formContainer = document.getElementById(\"formContainer\");\r\n  const form = `\r\n  <form method=\"dialog\" id=\"newProject\">\r\n              <h2 class=\"caption\">Enter Project</h2>\r\n              <label for=\"name\"><b>Name</b></label>\r\n              <input type=\"text\" id=\"name\" placeholder=\"Enter Project Name\" name=\"name\" required>\r\n\r\n              <button id=\"submitBtn\" type=\"submit\" class=\"btn submit\"\">Submit</button>\r\n              <button type=\"button\" class=\"btn cancel\"\">Close</button>\r\n          </form>\r\n              `;\r\n\r\n  formContainer.innerHTML = form;\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/Projects.js?");

/***/ }),

/***/ "./src/Tasks.js":
/*!**********************!*\
  !*** ./src/Tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   createForm: () => (/* binding */ createForm)\n/* harmony export */ });\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ \"./src/Projects.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n\r\nclass Task {\r\n  static tasks = [];\r\n\r\n  constructor(name, note, importance, date, project) {\r\n    this.name = name;\r\n    this.note = note;\r\n    this.importance = importance;\r\n    this.dueDate = date;\r\n    this.project = project;\r\n\r\n    const selectedProject = _Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectsList.find(\r\n      (proj) => proj.name === this.project\r\n    );\r\n    if (selectedProject) {\r\n      selectedProject.tasks.push(this);\r\n    }\r\n    Task.tasks.push(this);\r\n  }\r\n  static removeTask(taskToRemove) {\r\n    _Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectsList.forEach((project) => {\r\n      const index = project.tasks.indexOf(taskToRemove);\r\n      if (index > -1) {\r\n        project.tasks.splice(index, 1);\r\n      }\r\n    });\r\n\r\n    Task.tasks = Task.tasks.filter((task) => task !== taskToRemove);\r\n    (0,___WEBPACK_IMPORTED_MODULE_1__.saveData)();\r\n  }\r\n}\r\nfunction createForm() {\r\n  const formContainer = document.getElementById(\"formContainer\");\r\n  const form = `\r\n    <form method=\"dialog\" id=\"newTask\">\r\n                <h2 class=\"caption\">Enter Task</h2>\r\n                <label for=\"name\"><b>Name</b></label>\r\n                <input type=\"text\" id=\"name\" placeholder=\"Enter Task Name\" name=\"name\" required>\r\n                \r\n                <label for=\"importance\"><b>Importance</b></label>\r\n                <select id=\"importance\" name=\"importance\">\r\n                    <option value=\"High\">High</option>\r\n                    <option value=\"Medium\">Medium</option>\r\n                    <option value=\"Low\">Low</option>\r\n                  </select>\r\n\r\n                <label for=\"project\"><b>Project</b></label>\r\n                <select id=\"project\" name=\"project\">\r\n                  </select>\r\n                \r\n                <label for=\"notes\"><b>Notes</b></label>\r\n                <textarea id=\"notes\" name=\"notes\" rows=\"4\" cols=\"50\"> </textarea>\r\n                \r\n                <label for=\"date\"><b>Due Date</b></label>\r\n                <input type=\"date\" id=\"date\" placeholder=\"Enter Due Date\" name=\"date\" required>  \r\n\r\n                <button id=\"submitBtn\" type=\"submit\" class=\"btn submit\"\">Submit</button>\r\n                <button type=\"button\" class=\"btn cancel\"\">Close</button>\r\n            </form>\r\n                `;\r\n  formContainer.innerHTML = form;\r\n  _Projects__WEBPACK_IMPORTED_MODULE_0__.Project.projectsList.forEach((element) => {\r\n    const optionElement = document.createElement(\"option\");\r\n    const selectBox = document.querySelector(\"#project\");\r\n    selectBox.appendChild(optionElement);\r\n    optionElement.value = `${element.name}`;\r\n    optionElement.innerHTML = `${element.name}`;\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/Tasks.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAllTasks: () => (/* binding */ addAllTasks),\n/* harmony export */   addTasks: () => (/* binding */ addTasks),\n/* harmony export */   updateUI: () => (/* binding */ updateUI)\n/* harmony export */ });\n/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks */ \"./src/Tasks.js\");\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects */ \"./src/Projects.js\");\n\r\n\r\n\r\nconst mainContainer = document.getElementById(\"mainBoard\");\r\nconst projectsContainer = document.getElementById(\"list\");\r\n\r\nfunction updateUI() {\r\n  projectsContainer.innerHTML = \"\";\r\n  _Projects__WEBPACK_IMPORTED_MODULE_1__.Project.projectsList.forEach((element, index) => {\r\n    const projectCard = `\r\n      <div class=\"projectDiv\">\r\n        <p class=\"project\">${element.name}</p>\r\n        <button class=\"delete-project\" data-index=\"${index}\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#5f6368\">\r\n            <path d=\"M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z\"/>\r\n          </svg>\r\n        </button>\r\n      </div>`;\r\n    projectsContainer.innerHTML += projectCard;\r\n  });\r\n\r\n  const projectListBtn = document.querySelectorAll(\"p.project\");\r\n  projectListBtn.forEach((element) => {\r\n    element.addEventListener(\"click\", () => {\r\n      addTasks(element.textContent);\r\n    });\r\n  });\r\n\r\n  const deleteButtons = document.querySelectorAll(\".delete-project\");\r\n  deleteButtons.forEach((button) => {\r\n    button.addEventListener(\"click\", (e) => {\r\n      const index = parseInt(\r\n        e.target.closest(\"button\").getAttribute(\"data-index\"),\r\n        10\r\n      );\r\n      const projectToRemove = _Projects__WEBPACK_IMPORTED_MODULE_1__.Project.projectsList[index];\r\n      if (projectToRemove) {\r\n        _Projects__WEBPACK_IMPORTED_MODULE_1__.Project.removeProject(projectToRemove);\r\n        updateUI();\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\nfunction addTasks(projectName) {\r\n  const project = _Projects__WEBPACK_IMPORTED_MODULE_1__.Project.projectsList.find(\r\n    (element) => element.name === projectName\r\n  );\r\n  if (project) {\r\n    mainContainer.innerHTML = `<h2 class=\"boardHeading\">${project.name}</h2>`;\r\n    mainContainer.addEventListener(\"click\", (e) => {\r\n      if (e.target.matches(\".remove\") || e.target.closest(\".remove\")) {\r\n        const btn = e.target.matches(\".remove\")\r\n          ? e.target\r\n          : e.target.closest(\".remove\");\r\n        const index = parseInt(btn.getAttribute(\"data-index\"), 10);\r\n        if (!isNaN(index)) {\r\n          const taskToRemove = project.tasks[index];\r\n          _Tasks__WEBPACK_IMPORTED_MODULE_0__.Task.removeTask(taskToRemove);\r\n          addTasks(projectName);\r\n          updateUI();\r\n        }\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\nfunction addAllTasks() {\r\n  mainContainer.innerHTML = `<h2 class=\"boardHeading\">All Tasks</h2>`;\r\n\r\n  _Tasks__WEBPACK_IMPORTED_MODULE_0__.Task.tasks.forEach((task, index) => {\r\n    const importanceClass = task.importance.toLowerCase();\r\n    const card = `\r\n      <div class=\"card\">\r\n        <div class=\"info\">\r\n          <h2>${task.name}</h2>\r\n          <h3 class=\"${importanceClass}\">${task.importance}</h3>\r\n          <p>Note: ${task.note}</p>\r\n          <p class=\"due\">Due: ${task.dueDate}</p>\r\n        </div>\r\n        <button class=\"remove\" data-index=\"${index}\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#5f6368\">\r\n            <path d=\"M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z\"/>\r\n          </svg>\r\n        </button>\r\n      </div>`;\r\n    mainContainer.innerHTML += card;\r\n  });\r\n\r\n  mainContainer.addEventListener(\"click\", (e) => {\r\n    if (e.target.matches(\".remove\") || e.target.closest(\".remove\")) {\r\n      const btn = e.target.matches(\".remove\")\r\n        ? e.target\r\n        : e.target.closest(\".remove\");\r\n      const index = parseInt(btn.getAttribute(\"data-index\"), 10);\r\n      if (!isNaN(index)) {\r\n        const taskToRemove = _Tasks__WEBPACK_IMPORTED_MODULE_0__.Task.tasks[index];\r\n        _Tasks__WEBPACK_IMPORTED_MODULE_0__.Task.removeTask(taskToRemove);\r\n        addAllTasks();\r\n        updateUI();\r\n      }\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   saveData: () => (/* binding */ saveData)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks */ \"./src/Tasks.js\");\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects */ \"./src/Projects.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst newTaskBtn = document.querySelector(\"#newTask\");\r\nconst newProjectBtn = document.querySelector(\"#newProject\");\r\nconst formContainer = document.getElementById(\"formContainer\");\r\nconst homeBtn = document.getElementById(\"homeBtn\");\r\n\r\nfunction loadData() {\r\n  _Tasks__WEBPACK_IMPORTED_MODULE_1__.Task.tasks = JSON.parse(localStorage.getItem(\"Tasks\"));\r\n  _Projects__WEBPACK_IMPORTED_MODULE_2__.Project.projectsList = JSON.parse(localStorage.getItem(\"Projects\"));\r\n  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.updateUI)();\r\n}\r\n\r\nfunction saveData() {\r\n  localStorage.setItem(\"Tasks\", JSON.stringify(_Tasks__WEBPACK_IMPORTED_MODULE_1__.Task.tasks));\r\n  localStorage.setItem(\"Projects\", JSON.stringify(_Projects__WEBPACK_IMPORTED_MODULE_2__.Project.projectsList));\r\n}\r\n\r\nloadData();\r\n(0,_UI__WEBPACK_IMPORTED_MODULE_3__.addAllTasks)();\r\n(0,_UI__WEBPACK_IMPORTED_MODULE_3__.updateUI)();\r\n\r\nfunction openForm(form, createFormFn) {\r\n  form.classList.remove(\"notdisplayed\");\r\n  form.classList.add(\"displayed\");\r\n  createFormFn();\r\n  attachFormListeners(form);\r\n}\r\n\r\nfunction closeForm(form) {\r\n  form.classList.add(\"notdisplayed\");\r\n  form.classList.remove(\"displayed\");\r\n}\r\n\r\nfunction attachFormListeners(formContainer) {\r\n  const form = formContainer.querySelector(\"form\");\r\n  const taskformCancel = form.querySelector(\".cancel\");\r\n\r\n  taskformCancel.addEventListener(\"click\", () => {\r\n    closeForm(formContainer);\r\n  });\r\n\r\n  form.addEventListener(\"submit\", function (e) {\r\n    e.preventDefault();\r\n    const data = new FormData(form);\r\n    if (form.id === \"newTask\") {\r\n      const taskName = data.get(\"name\");\r\n      const taskNote = data.get(\"notes\");\r\n      const taskImportance = data.get(\"importance\");\r\n      const taskDate = data.get(\"date\");\r\n      const taskProject = data.get(\"project\");\r\n      new _Tasks__WEBPACK_IMPORTED_MODULE_1__.Task(taskName, taskNote, taskImportance, taskDate, taskProject);\r\n      (0,_UI__WEBPACK_IMPORTED_MODULE_3__.addAllTasks)();\r\n    } else if (form.id === \"newProject\") {\r\n      const projectName = data.get(\"name\");\r\n      new _Projects__WEBPACK_IMPORTED_MODULE_2__.Project(projectName);\r\n    }\r\n\r\n    form.reset();\r\n    closeForm(formContainer);\r\n    (0,_UI__WEBPACK_IMPORTED_MODULE_3__.updateUI)();\r\n\r\n    saveData();\r\n  });\r\n}\r\n\r\nnewTaskBtn.addEventListener(\"click\", () => {\r\n  openForm(formContainer, _Tasks__WEBPACK_IMPORTED_MODULE_1__.createForm);\r\n});\r\n\r\nnewProjectBtn.addEventListener(\"click\", () => {\r\n  openForm(formContainer, _Projects__WEBPACK_IMPORTED_MODULE_2__.createProjectForm);\r\n});\r\n\r\nhomeBtn.addEventListener(\"click\", () => {\r\n  (0,_UI__WEBPACK_IMPORTED_MODULE_3__.addAllTasks)();\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;