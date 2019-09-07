import $ from "jquery";
import { SimpleFace } from "./faces/simpleFace";
import { faceConfig } from "./faces/config";
import { DEFAULT_PROPERTIES } from "./defaultProperties";

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
        if(!this._displayConstantTime) {
            this._displayTime = new Date();
        }
        const { hour, minute, second } = this._getTimeHrMmSs(this._displayTime);
        this._simpleFace.hourHand.position = hour;
        this._simpleFace.minuteHand.position = minute;
        this._simpleFace.secondHand.position = second;
    }

    _initClockStructure() {
        this._clockContainerEle = this._getClockContainerEle();
        this._clockCanvasEle = this._getCanvas(this._canvasWidth, this._canvasHeight);
        this._clockCanvas = this._clockCanvasEle[0];
        $(this._rootElement).append(this._clockContainerEle).append(this._clockCanvasEle);
    }

    _initClockUi() {
        let ctx = this._clockCanvas.getContext('2d');
        ctx.resetTransform();
        ctx.clearRect(0, 0, this._canvasWidth, this._canvasHeight);
        ctx.translate(this._canvasWidth/2, this._canvasHeight/2); 
        this._simpleFace = new SimpleFace(ctx, 0, 0, this._clockRadius, this._currentFaceConfig);
    }

    _initTimer() {
        if(!this._displayConstantTime) {
            if(this.intervalId) {
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

    _resetCanvasDimensionsSafe({ width, height }) {
        if(!width && !height) {
            return;
        }
        if(width == this._canvasWidth && height == this._canvasHeight) {
            return;
        }
        let ctx = this._clockCanvas.getContext('2d');
        ctx.canvas.width = width;
        ctx.canvas.height = height;
    }

    _getCanvas(canvasWidth, canvasHeight) {
        return $(`<canvas width="${canvasWidth}" height="${canvasHeight}"></canvas>`);
    }

    _getClockContainerEle() {
        return $('<div class="jq-clock"></div>');
    }

    _getTimeHrMmSs(date) {
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        hour = hour%12;
        hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
        minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
        second = (second*Math.PI/30);
        return { hour, minute, second };
    }
}