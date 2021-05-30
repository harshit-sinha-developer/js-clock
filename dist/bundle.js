(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ClockWidget"] = factory();
	else
		root["ClockWidget"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/defaultProperties.js":
/*!**********************************!*\
  !*** ./src/defaultProperties.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_PROPERTIES": () => (/* binding */ DEFAULT_PROPERTIES)
/* harmony export */ });
var DEFAULT_PROPERTIES = {
  width: 300,
  height: 300,
  fillColor: '#FFFFFF',
  isBorderFilled: true,
  watchFace: 'FACE_1',
  displayTime: new Date(),
  displayConstantTime: false,
  hingeColor: '#333',
  handColor: '#333',
  frameGradientColorList: ['#333', '#FFFFFF', '#333']
};

/***/ }),

/***/ "./src/faces/config.js":
/*!*****************************!*\
  !*** ./src/faces/config.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "faceConfig": () => (/* binding */ faceConfig)
/* harmony export */ });
var faceConfig = {
  "FACE_0": {
    "isBorderFilled": true,
    "frameColor": "#660000",
    "hingeColor": '#333',
    "handColor": "#333"
  },
  "FACE_1": {
    "isFrameGradient": true,
    "frameGradientColorList": ['#333', '#FFFFFF', '#333'],
    "hingeColor": '#333',
    "handColor": "#333"
  },
  "FACE_2": {
    "isFrameGradient": true,
    "frameGradientColorList": ['#660000', '#ff0000', '#ffcccc'],
    "hingeColor": '#660000'
  },
  "FACE_3": {
    "isFrameGradient": true,
    "frameGradientColorList": ['#4d3d00', '#ffcc00', '#ffe680', '#fffae6', '#ffe680', '#ffcc00', '#4d3d00'],
    "hingeColor": '#cca300',
    "numberColors": {
      "1": "#cca300",
      "2": "#cca300",
      "3": "#cca300",
      "4": "#cca300",
      "5": "#cca300",
      "6": "#cca300",
      "7": "#cca300",
      "8": "#cca300",
      "9": "#cca300",
      "10": "#cca300",
      "11": "#cca300",
      "12": "#cca300"
    },
    "fillColor": '#333333',
    "handColor": "#cca300"
  },
  "FACE_4": {
    "isFrameGradient": true,
    "frameGradientColorList": ["#ff0000", "#00ff00", "#0000ff"],
    "hingeColor": "#660000",
    "numberColors": {
      "1": "#0059b3",
      "2": "#00cc7a",
      "3": "#4d94ff",
      "4": "#ff33bb",
      "5": "#ff9933",
      "6": "#2d2d86",
      "7": "#8600b3",
      "8": "#800000",
      "9": "#00e6e6",
      "10": "#ffff00",
      "11": "#0033cc",
      "12": "#ff0000"
    },
    "handColor": "#660000",
    "frameColor": "#660000"
  }
};

/***/ }),

/***/ "./src/faces/simpleFace.js":
/*!*********************************!*\
  !*** ./src/faces/simpleFace.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleFace": () => (/* binding */ SimpleFace)
/* harmony export */ });
/* harmony import */ var _ui_elements_ring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui-elements/ring */ "./src/ui-elements/ring.js");
/* harmony import */ var _ui_elements_clockHand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui-elements/clockHand */ "./src/ui-elements/clockHand.js");
/* harmony import */ var _ui_elements_circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui-elements/circle */ "./src/ui-elements/circle.js");
/* harmony import */ var _defaultProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../defaultProperties */ "./src/defaultProperties.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities */ "./src/utilities/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var SimpleFace = /*#__PURE__*/function () {
  function SimpleFace(context, xCenter, yCenter, radius, faceConfig) {
    _classCallCheck(this, SimpleFace);

    this._context = context;
    this._xCenter = xCenter;
    this._yCenter = yCenter;
    this._radius = radius;
    this._faceConfig = faceConfig;
    this._isBorderFilled = faceConfig.isBorderFilled || _defaultProperties__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_PROPERTIES.isBorderFilled;
    var handColor = faceConfig.handColor || _defaultProperties__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_PROPERTIES.handColor;
    this._hourHand = new _ui_elements_clockHand__WEBPACK_IMPORTED_MODULE_1__.ClockHand(this._context, 0, radius * 0.5, radius * 0.07, handColor);
    this._minuteHand = new _ui_elements_clockHand__WEBPACK_IMPORTED_MODULE_1__.ClockHand(this._context, 0, radius * 0.8, radius * 0.07, handColor);
    this._secondHand = new _ui_elements_clockHand__WEBPACK_IMPORTED_MODULE_1__.ClockHand(this._context, 0, radius * 0.9, radius * 0.02, handColor);
    var hingeColor = faceConfig.hingeColor || _defaultProperties__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_PROPERTIES.hingeColor;
    this._centerHinge = new _ui_elements_circle__WEBPACK_IMPORTED_MODULE_2__.Circle(this._context, 0, 0, radius * 0.1, hingeColor);
    var fillColor = faceConfig.fillColor || _defaultProperties__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_PROPERTIES.fillColor;
    this._outerCircle = new _ui_elements_circle__WEBPACK_IMPORTED_MODULE_2__.Circle(this._context, 0, 0, radius, fillColor);
  }

  _createClass(SimpleFace, [{
    key: "hourHand",
    get: function get() {
      return this._hourHand;
    }
  }, {
    key: "minuteHand",
    get: function get() {
      return this._minuteHand;
    }
  }, {
    key: "secondHand",
    get: function get() {
      return this._secondHand;
    }
  }, {
    key: "render",
    value: function render() {
      this._outerCircle.render();

      if (this._isBorderFilled && this._faceConfig.isFrameGradient) {
        var colorGradientStopPoints = this._faceConfig.frameGradientColorList || _defaultProperties__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_PROPERTIES.frameGradientColorList;

        var grad = this._context.createRadialGradient(this._xCenter, this._yCenter, this._radius * 0.95, this._xCenter, this._yCenter, this._radius * 1.05);

        for (var i = 0; i < colorGradientStopPoints.length; i++) {
          var ratio = i / (colorGradientStopPoints.length - 1);
          grad.addColorStop(ratio, colorGradientStopPoints[i]);
        }

        this._context.strokeStyle = grad;
        this._context.lineWidth = this._radius * 0.1;

        this._context.stroke();
      } else {
        var color = this._faceConfig.frameColor || _defaultProperties__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_PROPERTIES.hingeColor;
        var ring = new _ui_elements_ring__WEBPACK_IMPORTED_MODULE_0__.Ring(this._context, this._xCenter, this._yCenter, this._radius * 1.05, this._radius * 0.95, this._isBorderFilled, color);
        ring.render();
      }

      this._centerHinge.render();

      this.drawNumbers();
    }
  }, {
    key: "drawNumbers",
    value: function drawNumbers() {
      var ang;
      var num;
      var ctx = this._context;
      ctx.font = this._radius * 0.15 + "px arial";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      var faceConfig = this._faceConfig || {};
      var numberColors = faceConfig.numberColors || {};

      for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -this._radius * 0.85);
        ctx.rotate(-ang);

        if (numberColors[num]) {
          ctx.fillStyle = numberColors[num];
        } else {
          ctx.fillStyle = faceConfig.hingeColor || '#333';
        }

        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, this._radius * 0.85);
        ctx.rotate(-ang);
      }

      ctx.fillStyle = faceConfig.hingeColor || '#333';
    }
  }, {
    key: "setTime",
    value: function setTime(time) {
      this._hourHand.position = _utilities__WEBPACK_IMPORTED_MODULE_4__.ClockUtilties.getHourHandPositionInRadians(time);
      this._minuteHand.position = _utilities__WEBPACK_IMPORTED_MODULE_4__.ClockUtilties.getMinuteHandPositionInRadians(time);
      this._secondHand.position = _utilities__WEBPACK_IMPORTED_MODULE_4__.ClockUtilties.getSecondHandPositionInRadians(time);
    }
  }]);

  return SimpleFace;
}();

/***/ }),

/***/ "./src/ui-elements/circle.js":
/*!***********************************!*\
  !*** ./src/ui-elements/circle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": () => (/* binding */ Circle)
/* harmony export */ });


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Circle = /*#__PURE__*/function () {
  function Circle(context, xCenter, yCenter, radius) {
    var fillColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'white';

    _classCallCheck(this, Circle);

    this._context = context;
    this._xCenter = xCenter;
    this._yCenter = yCenter;
    this._radius = radius;
    this._fillStyle = fillColor;
  }

  _createClass(Circle, [{
    key: "xCenter",
    get: function get() {
      return this._xCenter;
    },
    set: function set(xCenter) {
      this._xCenter = xCenter;
      this.render();
    }
  }, {
    key: "yCenter",
    get: function get() {
      return this._yCenter;
    },
    set: function set(yCenter) {
      this.yCenter = yCenter;
      this.render();
    }
  }, {
    key: "radius",
    get: function get() {
      return this._radius;
    },
    set: function set(radius) {
      this._radius = radius;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this._context.beginPath();

      this._context.arc(this.xCenter, this.yCenter, this.radius, 0, 2 * Math.PI);

      this._context.fillStyle = this._fillStyle;

      this._context.fill();
    }
  }]);

  return Circle;
}();

/***/ }),

/***/ "./src/ui-elements/clockHand.js":
/*!**************************************!*\
  !*** ./src/ui-elements/clockHand.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClockHand": () => (/* binding */ ClockHand)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ClockHand = /*#__PURE__*/function () {
  function ClockHand(context, position, length, width, fillColor) {
    _classCallCheck(this, ClockHand);

    this._context = context;
    this._position = position;
    this._length = length;
    this._width = width;
    this._fillColor = fillColor;
  }

  _createClass(ClockHand, [{
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(pos) {
      this._position = pos;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this._context.beginPath();

      this._context.lineWidth = this._width;
      this._context.lineCap = "round";

      this._context.moveTo(0, 0);

      this._context.rotate(this._position);

      this._context.strokeStyle = this._fillColor;

      this._context.lineTo(0, -this._length);

      this._context.stroke();

      this._context.rotate(-this._position);
    }
  }]);

  return ClockHand;
}();

/***/ }),

/***/ "./src/ui-elements/ring.js":
/*!*********************************!*\
  !*** ./src/ui-elements/ring.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ring": () => (/* binding */ Ring)
/* harmony export */ });
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circle */ "./src/ui-elements/circle.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Ring = /*#__PURE__*/function () {
  function Ring(context, xCenter, yCenter, innerRadius, outerRadius, isRingFilled, color) {
    _classCallCheck(this, Ring);

    this._context = context;
    this._xCenter = xCenter;
    this._yCenter = yCenter;
    this._innerRadius = innerRadius;
    this._outerRadius = outerRadius;
    this._isRingFilled = isRingFilled || false;
    this._color = color;
  }

  _createClass(Ring, [{
    key: "render",
    value: function render() {
      if (this._isRingFilled) {
        var avgRadius = (this._innerRadius + this._outerRadius) / 2;
        var width = this._outerRadius - this._innerRadius;

        this._context.beginPath();

        this._context.strokeStyle = this._color;

        this._context.arc(this._xCenter, this._xCenter, avgRadius, 0, 2 * Math.PI);

        this._context.lineWidth = width;

        this._context.stroke();
      } else {
        var innerCircle = new _circle__WEBPACK_IMPORTED_MODULE_0__.Circle(this._context, this._xCenter, this._yCenter, this._innerRadius, this._color);
        var outerCircle = new _circle__WEBPACK_IMPORTED_MODULE_0__.Circle(this._context, this._xCenter, this._yCenter, this._outerRadius, this._color);
        innerCircle.render();
        outerCircle.render();
      }
    }
  }]);

  return Ring;
}();

/***/ }),

/***/ "./src/utilities/clock.js":
/*!********************************!*\
  !*** ./src/utilities/clock.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHourHandPositionInRadians": () => (/* binding */ getHourHandPositionInRadians),
/* harmony export */   "getMinuteHandPositionInRadians": () => (/* binding */ getMinuteHandPositionInRadians),
/* harmony export */   "getSecondHandPositionInRadians": () => (/* binding */ getSecondHandPositionInRadians)
/* harmony export */ });
var getHourHandPositionInRadians = function getHourHandPositionInRadians(time) {
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  return hour % 12 * Math.PI / 6 + minute * Math.PI / (6 * 60) + second * Math.PI / (360 * 60);
};
var getMinuteHandPositionInRadians = function getMinuteHandPositionInRadians(time) {
  var minute = time.getMinutes();
  var second = time.getSeconds();
  return minute * Math.PI / 30 + second * Math.PI / (30 * 60);
};
var getSecondHandPositionInRadians = function getSecondHandPositionInRadians(time) {
  return time.getSeconds() * Math.PI / 30;
};

/***/ }),

/***/ "./src/utilities/index.js":
/*!********************************!*\
  !*** ./src/utilities/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClockUtilties": () => (/* reexport module object */ _clock__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock */ "./src/utilities/clock.js");



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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/clockApp.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClockApp": () => (/* binding */ ClockApp)
/* harmony export */ });
/* harmony import */ var _faces_simpleFace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faces/simpleFace */ "./src/faces/simpleFace.js");
/* harmony import */ var _faces_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faces/config */ "./src/faces/config.js");
/* harmony import */ var _defaultProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultProperties */ "./src/defaultProperties.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ "./src/utilities/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ClockApp = /*#__PURE__*/function () {
  function ClockApp(rootElement) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ClockApp);

    this._rootElement = rootElement;

    this._setConfigurations(options);

    this._initClockStructure();

    this._initClockUi();

    this.render();

    this._initTimer();
  }

  _createClass(ClockApp, [{
    key: "configure",
    value: function configure(options) {
      this._resetCanvasDimensionsSafe(options);

      this._setConfigurations(options);

      this._initClockUi();

      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this._simpleFace.render();

      this._renderTime();
    }
  }, {
    key: "_renderTime",
    value: function _renderTime() {
      if (!this._displayConstantTime) {
        this._displayTime = new Date();
      }

      this._simpleFace.setTime(this._displayTime);
    }
  }, {
    key: "_initClockStructure",
    value: function _initClockStructure() {
      var clockContainerElement = this._getClockContainerEle();

      var clockCanvasElement = this._getCanvas(this._canvasWidth, this._canvasHeight);

      this._rootElement.appendChild(clockContainerElement);

      clockContainerElement.appendChild(clockCanvasElement);
    }
  }, {
    key: "_initClockUi",
    value: function _initClockUi() {
      var ctx = this._clockCanvas.getContext('2d');

      ctx.resetTransform();
      ctx.clearRect(0, 0, this._canvasWidth, this._canvasHeight);
      ctx.translate(this._canvasWidth / 2, this._canvasHeight / 2);
      this._simpleFace = new _faces_simpleFace__WEBPACK_IMPORTED_MODULE_0__.SimpleFace(ctx, 0, 0, this._clockRadius, this._currentFaceConfig);
    }
  }, {
    key: "_initTimer",
    value: function _initTimer() {
      if (!this._displayConstantTime) {
        if (this.intervalId) {
          clearInterval(this.intervalId);
        }

        this.intervalId = setInterval(this.render.bind(this), 1000);
      }
    }
  }, {
    key: "_setConfigurations",
    value: function _setConfigurations() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this._canvasWidth = options.width || this._canvasWidth || _defaultProperties__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_PROPERTIES.width;
      this._canvasHeight = options.height || this._canvasHeight || _defaultProperties__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_PROPERTIES.height;
      this._clockRadius = options.radius || this._clockRadius || Math.min(this._canvasWidth, this._canvasHeight) / 2 - 10;
      this._watchFace = options.watchFace || this._watchFace || _defaultProperties__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_PROPERTIES.watchFace;
      this._currentFaceConfig = options.faceConfig || _faces_config__WEBPACK_IMPORTED_MODULE_1__.faceConfig[options.watchFace] || this._currentFaceConfig || _faces_config__WEBPACK_IMPORTED_MODULE_1__.faceConfig[this._watchFace] || {};
      this._displayTime = options.displayTime || this._displayTime || _defaultProperties__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_PROPERTIES.displayTime;
      this._displayConstantTime = options.displayConstantTime || this._displayConstantTime || _defaultProperties__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_PROPERTIES.displayConstantTime;
    }
  }, {
    key: "_resetCanvasDimensionsSafe",
    value: function _resetCanvasDimensionsSafe(_ref) {
      var width = _ref.width,
          height = _ref.height;

      if (!width && !height) {
        return;
      }

      if (width == this._canvasWidth && height == this._canvasHeight) {
        return;
      }

      var ctx = this._clockCanvas.getContext('2d');

      ctx.canvas.width = width;
      ctx.canvas.height = height;
    }
  }, {
    key: "_getCanvas",
    value: function _getCanvas(canvasWidth, canvasHeight) {
      if (this._clockCanvas) {
        return this._clockCanvas;
      }

      this._clockCanvas = document.createElement('canvas');

      this._clockCanvas.setAttribute('width', canvasWidth);

      this._clockCanvas.setAttribute('height', canvasHeight);

      return this._clockCanvas;
    }
  }, {
    key: "_getClockContainerEle",
    value: function _getClockContainerEle() {
      if (this._clockContainerElement) {
        return this._clockContainerElement;
      }

      this._clockContainerElement = document.createElement('div');

      this._clockContainerElement.setAttribute('class', 'jq-clock');

      return this._clockContainerElement;
    }
  }]);

  return ClockApp;
}();
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map