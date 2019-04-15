import Syntax from "./Syntax";
import Turtle from "../utils/Turtle";
import VirtualMachine from "../VirtualMachine";

export default class Identifier extends Syntax {
    public name: string;

    constructor(name: string) {
        super();
        this.name = name
    }

    eval(): number {
        return 0;
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
