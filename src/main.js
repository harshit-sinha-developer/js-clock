import $ from "jquery";

export class ClockApp {
    initClock(rootElement, options) {
        let $clockContainer = $('<div class="jq-clock"></div>');
        let $clockCanvas = $(`<canvas width="${options.width}" height="${options.height}"><canvas>`);
        $(rootElement).append($clockContainer).append($clockCanvas);
    }
}