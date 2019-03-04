import Turtle from './utils/Turtle';
import LexicalAnalyzer from './utils/Interpreter/LexicalAnalyzer';
import Interpreter from './utils/Interpreter/Interpreter';
import Compiler from './utils/Compiler';

const inputField: HTMLElement = document.getElementById('inputField');
const output: HTMLElement = document.getElementById('output');
const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
const turtle: Turtle = new Turtle(canvas.getContext("2d"), canvas.width, canvas.height);

let input: string = (<HTMLInputElement>inputField).value;

const analyzer: LexicalAnalyzer = new LexicalAnalyzer(input);
const interpreter = new Interpreter(analyzer, turtle);
const compiler = new Compiler(analyzer, turtle);

(<HTMLInputElement>inputField).onchange = function () {
    input = (<HTMLInputElement>inputField).value;
    analyzer.setInput(input);
    turtle.clear();
    interpret();
};


const interpret = (): void => {
    analyzer.index = 0;
    analyzer.next();
    analyzer.scan();

    interpreter.interpret();
};

interpret();