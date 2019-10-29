import UnaryOperation from "./UnaryOperation";
import Turtle from "../../utils/Turtle";
import VirtualMachine from "../../VirtualMachine";
import { INSTRUCTION_MINUS } from "../../utils/constants";

export default class Minus extends UnaryOperation {
    execute(turtle: Turtle): void {

    }

    generate(vm: VirtualMachine): void {
        this.e.generate(vm);
        vm.poke(INSTRUCTION_MINUS);
    }

    optimized(vm: VirtualMachine): void {
    }

    translate(depth: number): string {
        return "";
    }

    eval(): number {
        return -this.e.eval();
    }
}
