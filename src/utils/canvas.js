export class ShapeUtils {
    static drawCircle(context, x_center, y_center, radius) {
        context.beginPath();
        context.arc(x_center, y_center, radius, 0, 2 * Math.PI);
        context.stroke();
    }

    static plotPoint(context, x, y) {
        context.fillRect(x, y, 1, 1);
    }

    static drawRing(context, x_center, y_center, innerRadius, outerRadius, fillRing) {
        if (fillRing) {
            let avgRadius = (innerRadius + outerRadius) / 2;
            let width = outerRadius - innerRadius;
            context.beginPath();
            context.arc(x_center, y_center, avgRadius, 0, 2 * Math.PI);
            context.lineWidth = width;
            context.stroke();
        } else {
            ShapeUtils.drawCircle(context, x_center, y_center, innerRadius);
            ShapeUtils.drawCircle(context, x_center, y_center, outerRadius);
        }
    }
}