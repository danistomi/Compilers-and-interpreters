/* eslint-disable comma-dangle */
/* eslint-disable no-console */
class Key {
  constructor(key) {
    this.key = key;
    this.pressed = false;
  }

  up() {
    this.pressed = false;
  }

  down() {
    this.pressed = true;
  }

  isPressed() {
    return this.pressed;
  }
}

class Rect {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
  }

  moveDown(dx = 1) {
    this.y += 1 * dx;
  }

  draw() {
    this.ctx.fillRect(this.x - 10, this.y - 10, 20, 20);
  }
}

const keys = {
  s: new Key('s'),
  w: new Key('w'),
  a: new Key('a'),
  d: new Key('d')
};

function handleKeyPress(event) {
  if (keys[event.key]) {
    keys[event.key].down();
  }
}
function handleKeyUp(event) {
  if (keys[event.key]) {
    keys[event.key].up();
  }
}
document.addEventListener('keypress', handleKeyPress);
document.addEventListener('keyup', handleKeyUp);

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const rect = new Rect(context, canvas.width / 2, canvas.height / 2);
function step() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  rect.draw();
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
