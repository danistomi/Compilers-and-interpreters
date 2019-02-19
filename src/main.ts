import stringParser from './tasks/task1/task1';
import Task2 from './tasks/task1/task4';
import Turtle from './utils/turtle/turtle';

const inputField: HTMLElement = document.getElementById('inputField');
const output: HTMLElement = document.getElementById('output');
const canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
const turtle = new Turtle(canvas.getContext("2d"), 200, 200);

// task 1
let input: string = (<HTMLInputElement>inputField).value;
let result = stringParser(input);
output.innerHTML = `súbor obsahuje ${result.words} slov, ${result.spaces} medzier a ${result.otherChars} iné znaky.`;

//task 2, 3, 4
let t2: Task2 = new Task2(turtle);
t2.draw("dl*pp*lz", 45, 100, 0.5);
