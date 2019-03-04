export default class Turtle {
    private canvasWidth: number;
    private canvasHeight: number;
    private x: number;
    private y: number;
    private ctx: CanvasRenderingContext2D;
    private angle: number;

    constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.ctx = ctx;

        this.init();
    }

    forward(length: number): void {
        this.x = this.x + Math.sin(Turtle.degreeToRadian(this.angle)) * length;
        this.y = this.y + Math.cos(Turtle.degreeToRadian(this.angle)) * length;

        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();
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

    clear() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ctx.beginPath();
        this.init();
    }

    color(r: number, g: number, b: number) {
        this.ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
        this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    }

    point(r: number) {
        this.ctx.beginPath();
        this.ctx.ellipse(this.x, this.y, r, r, Math.PI / 4, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.moveTo(this.x, this.y)
    }

    private init() {
        this.x = this.canvasWidth / 2;
        this.y = this.canvasHeight / 2;
        this.ctx.moveTo(this.x, this.y);
        this.angle = 180;
    }

    static degreeToRadian(angle: number): number {
        return Math.PI / 180 * angle
    }
}