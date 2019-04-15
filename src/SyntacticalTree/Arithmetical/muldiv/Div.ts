import BinaryOperation from "../BinaryOperation";
import Turtle from "../../../utils/Turtle";
import VirtualMachine from "../../../VirtualMachine";
import { INSTRUCTION_DIV } from "../../../utils/constants";

export default class Div extends BinaryOperation {
    execute(turtle: Turtle): void {

    }

    generate(vm: VirtualMachine): void {
        this.l.generate(vm);
        this.r.generate(vm);
        vm.poke(INSTRUCTION_DIV);
    }

    optimized(vm: VirtualMachine): void {
    }

    translate(depth: number): string {
        return "";
    }

    eval(): number {
        return this.l.eval() / this.r.eval();
    }
}
