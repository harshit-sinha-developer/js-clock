import {SimpleFace} from "./faces/simpleFace";
import {faceConfig} from "./faces/config";
import {DEFAULT_PROPERTIES} from "./defaultProperties";
import {ClockUtilties} from './utilities';
export class ClockApp {
  constructor(rootElement, options = {}) {
    this._rootElement = rootElement;
    this._setConfigurations(options);
    this._initClockStructure();
    this._initClockUi();
    this.render();
    this._initTimer();
  }

  configure(options) {
    this._resetCanvasDimensionsSafe(options);
    this._setConfigurations(options);
    this._initClockUi();
    this.render();
  }

  render() {
    this._simpleFace.render();
    this._renderTime();
  }

  _renderTime() {
    if (!this._displayConstantTime) {
      this._displayTime = new Date();
    }
    this._simpleFace.setTime(this._displayTime);
  }

  _initClockStructure() {
    const clockContainerElement = this._getClockContainerEle()
    const clockCanvasElement = this._getCanvas(this._canvasWidth, this._canvasHeight);
    this._rootElement.appendChild(clockContainerElement);
    clockContainerElement.appendChild(clockCanvasElement);
  }

  _initClockUi() {
    let ctx = this._clockCanvas.getContext('2d');
    ctx.resetTransform();
    ctx.clearRect(0, 0, this._canvasWidth, this._canvasHeight);
    ctx.translate(this._canvasWidth / 2, this._canvasHeight / 2);
    this._simpleFace = new SimpleFace(ctx, 0, 0, this._clockRadius, this._currentFaceConfig);
  }

  _initTimer() {
    if (!this._displayConstantTime) {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      this.intervalId = setInterval(this.render.bind(this), 1000);
    }
  }

  _setConfigurations(options = {}) {
    this._canvasWidth = options.width || this._canvasWidth || DEFAULT_PROPERTIES.width;
    this._canvasHeight = options.height || this._canvasHeight || DEFAULT_PROPERTIES.height;
    this._clockRadius = options.radius || this._clockRadius || Math.min(this._canvasWidth, this._canvasHeight) / 2 - 10;
    this._watchFace = options.watchFace || this._watchFace || DEFAULT_PROPERTIES.watchFace;
    this._currentFaceConfig = options.faceConfig || faceConfig[options.watchFace] || this._currentFaceConfig || faceConfig[this._watchFace] || {};
    this._displayTime = options.displayTime || this._displayTime || DEFAULT_PROPERTIES.displayTime;
    this._displayConstantTime = options.displayConstantTime || this._displayConstantTime || DEFAULT_PROPERTIES.displayConstantTime;
  }

  _resetCanvasDimensionsSafe({width, height}) {
    if (!width && !height) {
      return;
    }
    if (width == this._canvasWidth && height == this._canvasHeight) {
      return;
    }
    let ctx = this._clockCanvas.getContext('2d');
    ctx.canvas.width = width;
    ctx.canvas.height = height;
  }

  _getCanvas(canvasWidth, canvasHeight) {
    if (this._clockCanvas) {
      return this._clockCanvas;
    }
    this._clockCanvas = document.createElement('canvas');
    this._clockCanvas.setAttribute('width', canvasWidth);
    this._clockCanvas.setAttribute('height', canvasHeight);
    return this._clockCanvas;
  }

  _getClockContainerEle() {
    if (this._clockContainerElement) {
      return this._clockContainerElement;
    }
    this._clockContainerElement = document.createElement('div');
    this._clockContainerElement.setAttribute('class', 'jq-clock');
    return this._clockContainerElement;
  }
}