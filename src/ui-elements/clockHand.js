export class ClockHand {
    constructor(context, position, length, width) {
        this._context = context;
        this._position = position;
        this._length = length;
        this._width = width;
    }

    get position() {
        return this._position;
    }

    set position(pos) {
        this._position = pos;
        this.render();
    }
    
    render() {
        this._context.beginPath();
        this._context.lineWidth = this._width;
        this._context.lineCap = "round";
        this._context.moveTo(0,0);
        this._context.rotate(this._position);
        this._context.lineTo(0, -this._length);
        this._context.stroke();
        this._context.rotate(-this._position);
    }
}