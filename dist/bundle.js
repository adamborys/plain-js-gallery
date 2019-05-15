/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar Http = new XMLHttpRequest();\nvar url = 'http://www.splashbase.co/api/v1/images/search?query=tree';\nvar gallery;\nvar loadMoreBtn;\nvar btnPanel;\nvar loader;\nvar counter;\nvar loadedImgCount;\nvar imgDataArr;\nvar chosenImgDataArr;\nvar sitesArr = [];\n\nfunction incrementLoaderCounter() {\n  counter += 1;\n\n  if (counter === loadedImgCount) {\n    loader.style.display = 'none';\n  }\n}\n\nfunction loadMore() {\n  loader.style.display = 'inline-block';\n  counter = 0;\n  var nextArr = chosenImgDataArr.splice(0, 10);\n  loadedImgCount = nextArr.length;\n\n  if (loadedImgCount > 0) {\n    var imageList = document.createElement('UL');\n    imageList.className = 'gallery__images';\n\n    for (var i = 0; i < loadedImgCount; i += 1) {\n      var listItem = document.createElement('LI');\n      var newFigure = document.createElement('FIGURE');\n      var newImage = new Image();\n      newImage.addEventListener('load', incrementLoaderCounter, false);\n      newImage.src = nextArr[i].url;\n      newFigure.appendChild(newImage);\n      listItem.appendChild(newFigure);\n      imageList.appendChild(listItem);\n    }\n\n    gallery.appendChild(imageList);\n  }\n}\n\nfunction chooseSite() {\n  var _this = this;\n\n  this.className = 'checked-btn';\n\n  for (var i = 0, len = btnPanel.children.length; i < len; i += 1) {\n    if (btnPanel.children[i].id !== this.id) btnPanel.children[i].className = 'unchecked-btn';\n  }\n\n  if (this.id > 0) {\n    chosenImgDataArr = imgDataArr.filter(function (imageData) {\n      return imageData.site === sitesArr[_this.id - 1];\n    });\n  } else chosenImgDataArr = _toConsumableArray(imgDataArr);\n\n  while (gallery.children[2]) {\n    gallery.removeChild(gallery.children[2]);\n  }\n\n  loadMore();\n}\n\nwindow.onload = function () {\n  gallery = document.getElementById('gallery');\n  loadMoreBtn = document.getElementById('more-btn');\n  btnPanel = document.getElementById('btn-panel');\n  loader = document.getElementById('loader');\n  Http.send();\n};\n\nHttp.open('GET', url);\n\nHttp.onerror = function (e) {\n  alert(\"Request error: \".concat(e.target.status));\n};\n\nHttp.onreadystatechange = function loadImages() {\n  if (this.readyState === 4 && this.status === 200) {\n    imgDataArr = JSON.parse(this.responseText).images;\n    imgDataArr.forEach(function (imageData) {\n      if (sitesArr.indexOf(imageData.site) === -1) sitesArr.push(imageData.site);\n    });\n    chosenImgDataArr = _toConsumableArray(imgDataArr);\n    var showAllBtn = document.createElement('BUTTON');\n    showAllBtn.textContent = 'show all';\n    showAllBtn.className = 'checked-btn';\n    showAllBtn.id = '0';\n    showAllBtn.onclick = chooseSite;\n    btnPanel.appendChild(showAllBtn);\n\n    for (var i = 1, len = sitesArr.length; i <= len; i += 1) {\n      var siteBtn = document.createElement('BUTTON');\n      siteBtn.textContent = sitesArr[i - 1];\n      siteBtn.className = 'unchecked-btn';\n      siteBtn.id = i.toString();\n      siteBtn.onclick = chooseSite;\n      btnPanel.appendChild(siteBtn);\n    }\n\n    loadMoreBtn.onclick = loadMore;\n    loadMore();\n  }\n};\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/index.scss */\"./src/scss/index.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/scss/index.scss?");

/***/ })

/******/ });