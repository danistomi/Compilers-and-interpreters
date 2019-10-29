import BinaryOperation from "../BinaryOperation";
import Turtle from "../../../utils/Turtle";
import VirtualMachine from "../../../VirtualMachine";

export default class GreaterOrEq extends BinaryOperation {
    eval(): number {
        return this.l.eval() >= this.r.eval() ? 1 : 0;
    }

    execute(turtle: Turtle): void {
    }

    generate(vm: VirtualMachine): void {
    }

    optimized(vm: VirtualMachine): void {
    }

    translate(depth: number): string {
        return `${this.l.translate(depth)} >= ${this.r.translate(depth)}`;
    }
}
