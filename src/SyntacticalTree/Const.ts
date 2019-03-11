import Syntax from "./Syntax";
import VirtualMachine from "../VirtualMachine";
import Turtle from "../utils/Turtle";

export default class Const extends Syntax {
    value: number;

    constructor(value: number) {
        super();
        this.value = value;
    }

    generate(vm: VirtualMachine): void {
        vm.poke(this.value)
    }

    execute(turtle:Turtle): void {
    }

    translate(depth: number): string {
        return `${Syntax.tabs(depth)}${this.value}`;
    }

    optimized(vm: VirtualMachine): void {
        this.generate(vm);
    }

}