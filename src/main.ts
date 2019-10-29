import Turtle from "./utils/Turtle";
import LexicalAnalyzer from "./Analyzer/LexicalAnalyzer";
import Interpreter from "./Interpreter";
import VirtualMachine from "./VirtualMachine";
import Compiler from "./Compiler";
import { parse } from "./SyntacticalTree/parser";
import { INSTRUCTION_JUMP } from "./utils/constants";
import program from "./Program";

const inputField: HTMLElement = document.getElementById('inputField');
export const output: HTMLElement = document.getElementById('output');
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
    program.reset();
    main();
};


const main = (): void => {
    analyzer.init();
    vm.init();
    vm.poke(INSTRUCTION_JUMP);
    vm.poke(program.globalvarpos);
    vm.adr = program.globalvarpos;

    let programTree = parse(analyzer);
    programTree.generate(vm);
    console.log(programTree);

    vm.reset();
    vm.run(turtle);


    // Syntax.counter_adr = 0;
    // vm.poke(INSTRUCTION_JUMP);
    // vm.poke(2 + Object.keys(variables).length);
    // Syntax.counter_adr += Object.keys(variables).length;
    //
    // program.generate(vm);
    // vm.run(turtle);
    //
    // printLn(program.translate());
    // print('a');
    // printLn(evaluate(analyzer));
    // console.log(vm.mem)
    // output.innerHTML = '' + evaluate(analyzer);
};

main();
