import TurtleCommand from "./TurtleCommand";
import {INSTRUCTION_RT} from "../utils/constants";
import VirtualMachine from "../VirtualMachine";
import Turtle from "../utils/Turtle";

export default class Rt extends TurtleCommand {
    execute(turtle:Turtle): void {
        turtle.right(this.param.value);
    }

    generate(vm: VirtualMachine): void {
        vm.poke(INSTRUCTION_RT);
        this.param.generate(vm);
    }

    translate(depth: number): string {
        return `doprava(${this.param.value});`
    }

    optimized(vm: VirtualMachine): void {
        this.generate(vm);
    }

}