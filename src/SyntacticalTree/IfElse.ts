import Syntax from "./Syntax";
import Turtle from "../utils/Turtle";
import VirtualMachine from "../VirtualMachine";
import { INSTRUCTION_JUMP, INSTRUCTION_JUMPIFFALSE } from "../utils/constants";

export default class IfElse extends Syntax {
    private test: Syntax;
    private bodyTrue: Syntax;
    public bodyFalse: Syntax;

    constructor(test: Syntax, bodyTrue: Syntax, bodyFalse: Syntax) {
        super();
        this.test = test;
        this.bodyTrue = bodyTrue;
        this.bodyFalse = bodyFalse;
    }

    eval(): number {
        return 0;
    }

    execute(turtle: Turtle): void {
    }

    generate(vm: VirtualMachine): void {
        this.test.generate(vm);
        vm.poke(INSTRUCTION_JUMPIFFALSE);
        let jumpFalse_ins = vm.adr;
        vm.adr++;
        this.bodyTrue.generate(vm);
        if (!this.bodyFalse) {
            vm.mem[jumpFalse_ins] = vm.adr;
        } else {
            vm.poke(INSTRUCTION_JUMP);
            let jump_ins = vm.adr;
            vm.adr++;
            vm.mem[jumpFalse_ins] = vm.adr;
            this.bodyFalse.generate(vm);
            vm.mem[jump_ins] = vm.adr
        }
    }

    optimized(vm: VirtualMachine): void {
    }

    translate(depth: number): string {
        return "";
    }
}
