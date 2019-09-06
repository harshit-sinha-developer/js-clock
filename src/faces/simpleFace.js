export class SimpleFace {
    constructor(context, xCenter, yCenter, radius, faceConfig) {
        this._context = context;
        this._xCenter = xCenter;
        this._yCenter = yCenter;
        this._radius = radius;
        this._colorGradientStopPoints = faceConfig.colorList;
    }

    apply() {
        const grad = this._context.createRadialGradient(this._xCenter, this._yCenter ,this._radius * 0.95, this._xCenter, this._yCenter, this._radius * 1.05);

        for(let i = 0; i < this._colorGradientStopPoints.length; i++) {
            let ratio = i / (this._colorGradientStopPoints.length - 1);
            grad.addColorStop(ratio, this._colorGradientStopPoints[i]);
        }
        this._context.strokeStyle = grad;
        this._context.lineWidth = this._radius * 0.1;
        this._context.stroke();
    }
}