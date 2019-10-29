import Syntax from "./Syntax";
import Turtle from "../utils/Turtle";
import VirtualMachine from "../VirtualMachine";
import { INSTRUCTION_JUMP, INSTRUCTION_PUSH, INSTRUCTION_RETURN } from "../utils/constants";
import Variable from "./Variable";
import Identifier from "./Identifier";

export default class Subroutine extends Identifier {
    public vars: { [key: string]: Variable };
    public paramCount: number;
    public body: Syntax;
    public bodyAdr: number;

    constructor(name: string, vars: { [key: string]: Variable }, body: Syntax) {
        super(name);
        this.vars = vars;
        this.paramCount = Object.keys(vars).length;
        this.body = body;
    }

    eval(): number {
        return 0;
    }

    execute(turtle: Turtle): void {
    }

    generate(vm: VirtualMachine): void {
        vm.poke(INSTRUCTION_JUMP);
        vm.adr++;
        this.bodyAdr = vm.adr;
        let n = Object.keys(this.vars).length - this.paramCount;
        for (let i = 0; i < n; i++) {
            vm.poke(INSTRUCTION_PUSH);
            vm.poke(0);
        }
        this.body.generate(vm);
        vm.poke(INSTRUCTION_RETURN);
        vm.poke(this.paramCount);
        vm.mem[this.bodyAdr - 1] = vm.adr
    }

    optimized(vm: VirtualMachine): void {
    }

    translate(depth: number): string {
        return "";
    }
}
