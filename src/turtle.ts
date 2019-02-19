class Turtle {
  x: number;
  y: number;
  angle: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.angle = 0;
  }
  log() {
    console.log(`X = ${this.x}, Y = ${this.y}, Angle = ${this.angle}`);
  }
}

export default Turtle;
