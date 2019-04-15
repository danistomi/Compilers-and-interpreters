import BinaryOperation from "../BinaryOperation";
import Turtle from "../../../utils/Turtle";
import VirtualMachine from "../../../VirtualMachine";
import { INSTRUCTION_LESS } from "../../../utils/constants";

export default class Less extends BinaryOperation {
    eval(): number {
        return this.l.eval() < this.r.eval() ? 1 : 0;
    }

    execute(turtle: Turtle): void {
    }

    generate(vm: VirtualMachine): void {
        this.l.generate(vm);
        this.r.generate(vm);
        vm.poke(INSTRUCTION_LESS)
    }

    optimized(vm: VirtualMachine): void {
    }

    translate(depth: number): string {
        return `${this.l.translate(depth)} < ${this.r.translate(depth)}`;
    }
}
