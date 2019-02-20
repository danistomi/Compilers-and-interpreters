class Turtle {
    x: number;
    y: number;
    canvas: CanvasRenderingContext2D;
    angle: number;

    constructor(canvas: CanvasRenderingContext2D, x: number, y: number) {
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.angle = 180;

        this.canvas.moveTo(x, y);
    }

    forward(length: number): void {
        this.x = this.x + Math.sin(Turtle.degreeToRadian(this.angle)) * length;
        this.y = this.y + Math.cos(Turtle.degreeToRadian(this.angle)) * length;

        this.canvas.lineTo(this.x, this.y);
        this.canvas.stroke();
    }

    backward(length: number): void {
        this.forward(-length);
    }

    left(angle: number): void {
        this.angle += angle;
    }

    right(angle: number): void {
        this.angle -= angle;
    }

    static degreeToRadian(angle: number): number {
        return Math.PI / 180 * angle
    }
}

export default Turtle;
