/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */

function drawCircle(ctx, x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

function drawLine(ctx, x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.lineWidth = 1;
}

function drawX(ctx, x, y) {
  ctx.beginPath();
  ctx.lineWidth = 5;
  const size = 18;
  ctx.moveTo(x - size, y - size);
  ctx.lineTo(x + size, y + size);
  ctx.moveTo(x + size, y - size);
  ctx.lineTo(x - size, y + size);
  ctx.stroke();
  ctx.lineWidth = 1;
}

let tilt = 50;
let strength = 50;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const tiltSlider = document.getElementById('tilt-slider');
const strengthSlider = document.getElementById('strength-slider');
const fireSubmit = document.getElementById('submit-fire');

tiltSlider.oninput = function() {
  tilt = this.value;
};

strengthSlider.oninput = function(e) {
  strength = this.value;
};

fireSubmit.onclick = (e) => {
  console.log(e);
};

function draw() {
  ctx.fillStyle = '#0F0';
  ctx.fillRect(0, 590, 800, 600);
  ctx.fillStyle = '#000';
  const x = 30;
  const y = 580;
  drawCircle(ctx, x, y, 10);
  const x2 = x + Math.cos((Math.PI / 2 / 100) * tilt) * strength;
  const y2 = y - Math.sin((Math.PI / 2 / 100) * tilt) * strength;
  drawLine(ctx, x, y, x2, y2);
  drawX(ctx, 770, 570);
}

function step() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
