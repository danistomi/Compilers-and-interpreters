import TurtleCommand from "./TurtleCommand";
import {INSTRUCTION_FD} from "../utils/constants";
import VirtualMachine from "../VirtualMachine";
import Turtle from "../utils/Turtle";

export default class Fd extends TurtleCommand {
    execute(turtle:Turtle): void {
        turtle.forward(this.param.value);
    }

    generate(vm: VirtualMachine): void {
        vm.poke(INSTRUCTION_FD);
        this.param.generate(vm);
    }

    translate(depth: number): string {
        return `dopredu(${this.param.value});`
    }

    optimized(vm: VirtualMachine): void {
        this.generate(vm);
    }

}