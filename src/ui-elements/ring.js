import { Circle } from "./circle";

export class Ring {
    constructor(context, xCenter, yCenter, innerRadius, outerRadius, isRingFilled, color) {
        this._context = context;
        this._xCenter = xCenter;
        this._yCenter = yCenter;
        this._innerRadius = innerRadius;
        this._outerRadius = outerRadius;
        this._isRingFilled = isRingFilled || false;
        this._color = color;
    }

    render() {
        if (this._isRingFilled) {
            let avgRadius = (this._innerRadius + this._outerRadius) / 2;
            let width = this._outerRadius - this._innerRadius;
            this._context.beginPath();
            this._context.fillStyle = this._color;
            this._context.arc(this._xCenter, this._xCenter, avgRadius, 0, 2 * Math.PI);
            this._context.lineWidth = width;
            this._context.stroke();
        } else {
            const innerCircle = new Circle(this._context, this._xCenter, this._yCenter, this._innerRadius, this._color);
            const outerCircle = new Circle(this._context, this._xCenter, this._yCenter, this._outerRadius, this._color);
            innerCircle.render();
            outerCircle.render();
        }
    }
}