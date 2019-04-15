import Syntax from "./Syntax";
import VirtualMachine from "../VirtualMachine";
import Turtle from "../utils/Turtle";
import Variable from "./Variable";

export default class Assign extends Syntax {
    private variable: Variable;
    private expression: Syntax;

    constructor(variable: Variable, expression: Syntax) {
        super();
        this.variable = variable;
        this.expression = expression;
    }

    execute(turtle: Turtle): void {
    }

    generate(vm: VirtualMachine): void {
        this.expression.generate(vm);
        this.variable.generate_set(vm);
    }

    optimized(vm: VirtualMachine): void {
    }

    translate(depth: number): string {
        return "";
    }

    eval(): number {
        return this.expression.eval();
    }
}
