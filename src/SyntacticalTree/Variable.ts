import Turtle from "../utils/Turtle";
import VirtualMachine from "../VirtualMachine";
import Identifier from "./Identifier";

export default class Variable extends Identifier {
    pos: number;

    constructor(name: string, pos: number) {
        super(name);
        this.pos = pos;
    }

    execute(turtle: Turtle): void {
    }

    generate(vm: VirtualMachine): void {
        // vm.poke(INSTRUCTION_GET);
        // vm.poke(variables[name])
    }

    generate_set(vm: VirtualMachine): void {
        // vm.poke(INSTRUCTION_SET);
        // vm.poke(variables[name]);
    }

    optimized(vm: VirtualMachine): void {
    }

    translate(depth: number): string {
        return "";
    }

    eval(): number {
        return 0;
    }
}
