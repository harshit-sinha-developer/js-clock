'use strict';
export class Circle {
  constructor(context, xCenter, yCenter, radius, fillColor = 'white') {
    this._context = context;
    this._xCenter = xCenter;
    this._yCenter = yCenter;
    this._radius = radius;
    this._fillStyle = fillColor;
  }

  set xCenter(xCenter) {
    this._xCenter = xCenter;
    this.render();
  }

  get xCenter() {
    return this._xCenter;
  }

  set yCenter(yCenter) {
    this.yCenter = yCenter;
    this.render();
  }

  get yCenter() {
    return this._yCenter;
  }

  set radius(radius) {
    this._radius = radius;
    this.render();
  }

  get radius() {
    return this._radius;
  }

  render() {
    this._context.beginPath();
    this._context.arc(this.xCenter, this.yCenter, this.radius, 0, 2 * Math.PI);
    this._context.fillStyle = this._fillStyle;
    this._context.fill();
  }
}