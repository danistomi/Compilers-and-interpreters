import Turtle from "./utils/Turtle";
import LexicalAnalyzer from "./Analyzer/LexicalAnalyzer";
import Interpreter from "./Interpreter";
import VirtualMachine from "./VirtualMachine";
import parse from "./SyntacticalTree/parser";
import Compiler from "./Compiler";
import Syntax from "./SyntacticalTree/Syntax";

const inputField: HTMLElement = document.getElementById('inputField');
const output: HTMLElement = document.getElementById('output');
const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
const turtle = new Turtle(canvas.getContext("2d"), canvas.width, canvas.height);

let input: string = (<HTMLInputElement>inputField).value;

const vm = new VirtualMachine();
const analyzer: LexicalAnalyzer = new LexicalAnalyzer(input);
const interpreter = new Interpreter(analyzer, turtle);
const compiler = new Compiler(vm);

(<HTMLInputElement>inputField).onchange = function () {
    input = (<HTMLInputElement>inputField).value;
    analyzer.setInput(input);
    turtle.clear();
    main();
};


const main = (): void => {
    analyzer.init();
    vm.init();
    let program = parse(analyzer);
    Syntax.counter_adr = 99;

    program.optimized(vm);
    program.execute(turtle);
    vm.run(turtle);

    output.innerHTML = program.translate(0);
};

main();