import BinaryOperation from "../BinaryOperation";
import Turtle from "../../../utils/Turtle";
import VirtualMachine from "../../../VirtualMachine";
import { INSTRUCTION_SUB } from "../../../utils/constants";

export default class Sub extends BinaryOperation {
    execute(turtle: Turtle): void {
    }

    generate(vm: VirtualMachine): void {
        this.l.generate(vm);
        this.r.generate(vm);
        vm.poke(INSTRUCTION_SUB);
    }

    optimized(vm: VirtualMachine): void {
    }

    translate(depth: number): string {
        return "";
    }

    eval(): number {
        return this.l.eval() - this.r.eval();
    }
}
