import { Ring } from "../ui-elements/ring";
import { ClockHand } from "../ui-elements/clockHand";
import { Circle } from "../ui-elements/circle";
import { DEFAULT_PROPERTIES } from "../defaultProperties";
export class SimpleFace {
    constructor(context, xCenter, yCenter, radius, faceConfig) {
        this._context = context;
        this._xCenter = xCenter;
        this._yCenter = yCenter;
        this._radius = radius;
        this._faceConfig = faceConfig;
        this._isBorderFilled = faceConfig.isBorderFilled || DEFAULT_PROPERTIES.isBorderFilled;

        let handColor = faceConfig.handColor || DEFAULT_PROPERTIES.handColor;
        this._hourHand = new ClockHand(this._context, 0, radius * 0.5, radius * 0.07, handColor);
        this._minuteHand = new ClockHand(this._context, 0, radius * 0.8, radius * 0.07, handColor);
        this._secondHand = new ClockHand(this._context, 0, radius * 0.9, radius * 0.02, handColor);
        let hingeColor = faceConfig.hingeColor || DEFAULT_PROPERTIES.hingeColor;
        this._centerHinge = new Circle(this._context, 0, 0, radius * 0.1, hingeColor);
        let fillColor = faceConfig.fillColor || DEFAULT_PROPERTIES.fillColor;
        this._outerCircle = new Circle(this._context, 0, 0, radius, fillColor);
    }

    get hourHand() {
        return this._hourHand;
    }

    get minuteHand() {
        return this._minuteHand;
    }

    get secondHand() {
        return this._secondHand;
    }

    render() {
        this._outerCircle.render();
        if(this._isBorderFilled && this._faceConfig.isFrameGradient) {
            let colorGradientStopPoints = this._faceConfig.frameGradientColorList || DEFAULT_PROPERTIES.frameGradientColorList;
            const grad = this._context.createRadialGradient(this._xCenter, this._yCenter ,this._radius * 0.95, this._xCenter, this._yCenter, this._radius * 1.05);
            for(let i = 0; i < colorGradientStopPoints.length; i++) {
                let ratio = i / (colorGradientStopPoints.length - 1);
                grad.addColorStop(ratio, colorGradientStopPoints[i]);
            }
            this._context.strokeStyle = grad;
            this._context.lineWidth = this._radius * 0.1;
            this._context.stroke();
        } else {
            let color = this._faceConfig.frameColor || DEFAULT_PROPERTIES.hingeColor;
            const ring = new Ring(this._context, this._xCenter, this._yCenter, this._radius * 1.05, this._radius * 0.95, this._isBorderFilled, color);
            ring.render();
        }
        this._centerHinge.render();
        this.drawNumbers();
    }

    drawNumbers() {
        let ang;
        let num;
        let ctx = this._context;
        ctx.font = this._radius * 0.15 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        let faceConfig = this._faceConfig || {};
        let numberColors = faceConfig.numberColors || {};
        for(num = 1; num < 13; num++){
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.translate(0, - this._radius * 0.85);
            ctx.rotate(-ang);
            if(numberColors[num]) {
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
}