import Turtle from './turtle';

let turtle: Turtle = new Turtle(12, 13);
turtle.log();

let tmp = document.getElementById('output');
tmp.innerHTML += `print\n`;
