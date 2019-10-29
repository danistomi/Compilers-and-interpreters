import Syntax from "./Syntax";
import Turtle from "../utils/Turtle";
import VirtualMachine from "../VirtualMachine";
import { INSTRUCTION_PRINT } from "../utils/constants";
import { printLn } from "../utils/out";

export default class Print extends Syntax {
    private readonly expression: Syntax;

    constructor(expression: Syntax) {
        super();
        this.expression = expression;
    }

    execute(turtle: Turtle): void {
        printLn(this.translate());
    }

    generate(vm: VirtualMachine): void {
        this.expression.generate(vm);
        vm.poke(INSTRUCTION_PRINT);
    }

    optimized(vm: VirtualMachine): void {
        this.expression.optimized(vm);
        vm.poke(INSTRUCTION_PRINT);
    }

    translate(depth: number = 0): string {
        return `print(${this.expression});`
    }

    eval(): number {
        return this.expression.eval();
    }
}
