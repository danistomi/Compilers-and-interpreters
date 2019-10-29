import Syntax from "./Syntax";
import Turtle from "../utils/Turtle";
import VirtualMachine from "../VirtualMachine";
import { INSTRUCTION_JUMP, INSTRUCTION_JUMPIFFALSE } from "../utils/constants";

export default class While extends Syntax {
    private test: Syntax;
    private body: Syntax;

    constructor(test: Syntax, body: Syntax) {
        super();
        this.test = test;
        this.body = body;
    }

    eval(): number {
        return 0;
    }

    execute(turtle: Turtle): void {
    }

    generate(vm: VirtualMachine): void {
        let test_adr = vm.adr;
        this.test.generate(vm);
        vm.poke(INSTRUCTION_JUMPIFFALSE);
        let jump_ins = vm.adr;
        vm.adr++;
        this.body.generate(vm);
        vm.poke(INSTRUCTION_JUMP);
        vm.poke(test_adr);
        vm.mem[jump_ins] = vm.adr
    }

    optimized(vm: VirtualMachine): void {
    }

    translate(depth: number): string {
        return "";
    }
}
