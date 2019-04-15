import Const from "./Arithmetical/Const";
import Block from "./Block";
import Syntax from "./Syntax";
import VirtualMachine from "../VirtualMachine";
import { INSTRUCTION_LOOP, INSTRUCTION_SET, REPEAT_ABC } from "../utils/constants";
import Turtle from "../utils/Turtle";

export default class Repeat extends Syntax {
    count: Const;
    body: Block;

    constructor(count: Const, body: Block) {
        super();
        this.count = count;
        this.body = body;
    }

    execute(turtle: Turtle): void {
        for (let i = 0; i < this.count.value; i++) {
            this.body.execute(turtle);
        }
    }

    generate(vm: VirtualMachine): void {
        vm.poke(INSTRUCTION_SET);
        vm.poke(Syntax.counter_adr);
        this.count.generate(vm);
        Syntax.counter_adr--;
        let loop_body = vm.adr;
        this.body.generate(vm);
        Syntax.counter_adr++;
        vm.poke(INSTRUCTION_LOOP);
        vm.poke(Syntax.counter_adr);
        vm.poke(loop_body);
    }

    optimized(vm: VirtualMachine): void {
        if (this.count.value == 0 || this.body.items.length == 0) return;
        if (this.count.value == 1 || this.body.items.length == 1) {
            this.body.optimized(vm);
            return
        }

        vm.poke(INSTRUCTION_SET);
        vm.poke(Syntax.counter_adr);
        this.count.optimized(vm);
        Syntax.counter_adr--;
        let loop_body = vm.adr;
        this.body.optimized(vm);
        Syntax.counter_adr++;
        vm.poke(INSTRUCTION_LOOP);
        vm.poke(Syntax.counter_adr);
        vm.poke(loop_body);
    }

    translate(depth: number): string {
        let tabs = Syntax.tabs(depth);
        let iter = REPEAT_ABC[depth];
        return `for (int ${iter} = 0; ${iter} < ${this.count.value}; ${iter}++) {<br>
        ${this.body.translate(depth + 1)}${tabs}}`
    }

    eval(): number {
        return 0;
    }
}
