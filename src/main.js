import $ from "jquery";
import { ShapeUtils } from "./utils/canvas.js";

export class ClockApp {
    constructor(rootElement, options) {
        this.clockCanvas = null;
        this.options = options;
        this.initClock(rootElement);
        this.draw();
    }

    initClock(rootElement) {
        let $clockContainer = $('<div class="jq-clock"></div>');
        let $clockCanvas = $(`<canvas width="${this.options.width}" height="${this.options.height}"></canvas>`);
        $(rootElement).append($clockContainer).append($clockCanvas);
        this.clockCanvas = $clockCanvas[0];
    }

    draw() {
        let canvasHeight = this.options.height;
        let canvasWidth = this.options.width;
        let ctx = this.clockCanvas.getContext('2d');
        ShapeUtils.drawRing(ctx, canvasWidth/2, canvasHeight/2, 80, 100, false);
    }
}