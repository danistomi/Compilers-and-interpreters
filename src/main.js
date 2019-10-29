/* eslint-disable comma-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */

function drawCircle(ctx, x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const objects = [
  {
    x: 10,
    y: 50,
    vx: 15,
    vy: 0,
    m: 150
  },
  {
    x: 110,
    y: 60,
    vx: 0,
    vy: 0,
    m: 10
  }
];

function draw() {
  objects.forEach((object) => {
    if (object.x > canvas.width || object.x < 0) {
      object.vx *= -1;
    }
    if (object.y > canvas.height || object.y < 0) {
      object.vy *= -1;
    }
    drawCircle(ctx, object.x, object.y, 10);
  });
}

function findCollision(o1, o2) {
  const dx = o2.x - o1.x;
  const dy = o2.y - o1.y;
  const d = Math.sqrt(dx * dx + dy * dy);
  if (d < 20) {
    return { dx, dy, d };
  }
  return null;
}

function solveCollision(o1, o2, info) {
  const nx = info.dx / info.d;
  const ny = info.dy / info.d;
  const s = 20 - info.d;
  o1.x -= (nx * s) / 2;
  o1.y -= (ny * s) / 2;
  o2.x += (nx * s) / 2;
  o2.y += (ny * s) / 2;
  const k = (-2 * ((o2.vx - o1.vx) * nx + (o2.vy - o1.vy) * ny)) / (1 / o1.m + 1 / o2.m);
  o1.vx -= (k * nx) / o1.m;
  o1.vy -= (k * ny) / o1.m;
  o2.vx += (k * nx) / o2.m;
  o2.vy += (k * ny) / o2.m;
  console.log(o1, o2, k);
}

function step() {
  const collisions = [];
  for (let i = 0; i < objects.length; i++) {
    for (let j = 0; j < objects.length; j++) {
      if (i < j) {
        const info = findCollision(objects[i], objects[j]);
        if (info) collisions.push({ o1: objects[i], o2: objects[j], info });
      }
    }
  }

  collisions.forEach((collision) => {
    solveCollision(collision.o1, collision.o2, collision.info);
  });

  objects.forEach((object) => {
    object.x += object.vx;
    object.y += object.vy;
  });

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
