import BinaryOperation from "../BinaryOperation";
import Turtle from "../../../utils/Turtle";
import VirtualMachine from "../../../VirtualMachine";
import { INSTRUCTION_ADD } from "../../../utils/constants";

export default class Add extends BinaryOperation {
    eval(): number {
        return this.l.eval() + this.r.eval();
    }

    execute(turtle: Turtle): void {
    }

    generate(vm: VirtualMachine): void {
        this.l.generate(vm);
        this.r.generate(vm);
        vm.poke(INSTRUCTION_ADD);
    }

    optimized(vm: VirtualMachine): void {
    }

    translate(depth: number): string {
        return "";
    }

    evaulate(): number {
        return 0;
    }
}
