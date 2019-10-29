import BinaryOperation from "./BinaryOperation";
import Turtle from "../../utils/Turtle";
import VirtualMachine from "../../VirtualMachine";

export default class Pow extends BinaryOperation {
    eval(): number {
        return Math.pow(this.l.eval(), this.r.eval());
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
