import $ from "jquery";
import { Ring } from "./ui-elements/ring";
import { Circle } from "./ui-elements/circle";
import { SimpleFace } from "./faces/simpleFace";
import { faceConfig } from "./faces/config";
import { ClockHand } from "./ui-elements/clockHand";

const DEFAULT_WIDTH = 100;
const DEFAULT_HEIGHT = 100;
export class ClockApp {
    constructor(rootElement, options) {
        this._rootElement = rootElement;
        this._canvasWidth = options.width || DEFAULT_WIDTH;
        this._canvasHeight = options.height || DEFAULT_HEIGHT;
        this._fillColor = options.color || 'white';
        this._clockRadius = options.radius || Math.min(this._canvasWidth, this._canvasHeight) / 2;
        this._isClockRingFilled = options.isBorderFilled || true;
        this._clockContainerEle = this._getClockContainerEle();
        this._clockCanvasEle = this._getCanvas(this._canvasWidth, this._canvasHeight);
        this._clockCanvas = this._clockCanvasEle[0];
        this._watchFace = options.watchFace || 'FACE_1';
        this._currentFaceConfig = options.faceConfig ? options.faceConfig : faceConfig[this._watchFace] || {};
        this._displayTime = options.displayTime || new Date();
        this._displayConstantTime = options.displayConstantTime || false;
        let ctx = this._clockCanvas.getContext('2d');
        ctx.translate(this._canvasWidth/2, this._canvasHeight/2); 
        this._hourHand = new ClockHand(ctx, 0, this._clockRadius * 0.5, this._clockRadius * 0.07);
        this._minuteHand = new ClockHand(ctx, 0, this._clockRadius * 0.8, this._clockRadius * 0.07);
        this._secondHand = new ClockHand(ctx, 0, this._clockRadius * 0.9, this._clockRadius * 0.02);
        this._outerCircle = new Circle(ctx, 0, 0, this._clockRadius, this._fillColor);
        let hingeColor = this._currentFaceConfig.hingeColor || "#333";
        this._centerHinge = new Circle(ctx, 0, 0, this._clockRadius * 0.1, hingeColor);
        this._simpleFace = new SimpleFace(ctx, 0, 0, this._clockRadius, this._currentFaceConfig);
        
        $(this._rootElement).append(this._clockContainerEle).append(this._clockCanvasEle);
        this.initTimer();
    }

    initTimer() {
        if(!this._displayConstantTime) {
            this.intervalId = setInterval(this.render.bind(this), 1000);
        }
    }

    render() {
        this._outerCircle.render();
        this._simpleFace.apply();
        this._centerHinge.render();
        this.drawNumbers();
        if(!this._displayConstantTime) {
            this._displayTime = new Date();
        }
        this.renderTime(this._displayTime);
    }

    renderTime(time) {
        const { hour, minute, second } = this._getTimeHrMmSs(time);
        this._hourHand.position = hour;
        this._minuteHand.position = minute;
        this._secondHand.position = second;
    }

    drawNumbers() {
        let ang;
        let num;
        let ctx = this._clockCanvas.getContext('2d');
        ctx.font = this._clockRadius * 0.15 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        let faceConfig = this._currentFaceConfig || {};
        let numberColors = faceConfig.numberColors || {};
        for(num = 1; num < 13; num++){
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.translate(0, - this._clockRadius * 0.85);
            ctx.rotate(-ang);
            if(numberColors[num]) {
                ctx.fillStyle = numberColors[num];
            } else {
                ctx.fillStyle = faceConfig.hingeColor || '#333';
            }
            ctx.fillText(num.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, this._clockRadius * 0.85);
            ctx.rotate(-ang);
        }
        ctx.fillStyle = faceConfig.hingeColor || '#333';
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