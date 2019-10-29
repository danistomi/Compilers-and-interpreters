import Syntax from "./Syntax";
import Turtle from "../utils/Turtle";
import VirtualMachine from "../VirtualMachine";
import { INSTRUCTION_CALL } from "../utils/constants";
import Subroutine from "./Subroutine";
import Block from "./Block";

export default class Call extends Syntax {
    private subr: Subroutine;
    private args: Block;

    constructor(subr: Subroutine, args: Block) {
        super();
        this.subr = subr;
        this.args = args;
    }

    eval(): number {
        return 0;
    }

    execute(turtle: Turtle): void {
    }

    generate(vm: VirtualMachine): void {
        this.args.generate(vm);
        vm.poke(INSTRUCTION_CALL);
        vm.poke(this.subr.bodyAdr)
    }

    optimized(vm: VirtualMachine): void {
    }

    translate(depth: number): string {
        return "";
    }
}
