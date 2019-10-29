import TurtleCommand from "./TurtleCommand";
import { INSTRUCTION_LT } from "../utils/constants";
import VirtualMachine from "../VirtualMachine";
import Turtle from "../utils/Turtle";

export default class Lt extends TurtleCommand {
    execute(turtle: Turtle): void {
        turtle.left(this.param.value);
    }

    generate(vm: VirtualMachine): void {
        vm.poke(INSTRUCTION_LT);
        this.param.generate(vm);
    }

    translate(depth: number): string {
        return `dolava(${this.param.value});`
    }

    optimized(vm: VirtualMachine): void {
        this.generate(vm);
    }

    eval(): number {
        return 0;
    }

}
