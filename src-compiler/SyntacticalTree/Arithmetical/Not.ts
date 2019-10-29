import UnaryOperation from "./UnaryOperation";
import Turtle from "../../utils/Turtle";
import VirtualMachine from "../../VirtualMachine";

export default class Not extends UnaryOperation {
    eval(): number {
        return !(this.e.eval() > 0) ? 1 : 0;
    }

    execute(turtle: Turtle): void {
    }

    generate(vm: VirtualMachine): void {
    }

    optimized(vm: VirtualMachine): void {
    }

    translate(depth: number): string {
        return "";
    }
}
