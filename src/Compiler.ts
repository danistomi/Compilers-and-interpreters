import LexicalAnalyzer from "./Analyzer/LexicalAnalyzer";
import {
    FORWARD,
    INSTRUCTION_FD,
    INSTRUCTION_LOOP,
    INSTRUCTION_LT,
    INSTRUCTION_RT,
    INSTRUCTION_SET,
    LEFT, REPEAT, RIGHT, WORD
} from "./utils/constants";
import VirtualMachine from "./VirtualMachine";

export default class Compiler {
    analyzer: LexicalAnalyzer;
    vm: VirtualMachine;

    constructor(vm: VirtualMachine) {
        this.vm = vm;
    }

    compile(counter_adr: number): void {
        while (this.analyzer.kind == WORD) {
            if (FORWARD.indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.poke(INSTRUCTION_FD);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
            } else if (LEFT.indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.poke(INSTRUCTION_LT);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
            } else if (RIGHT.indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.poke(INSTRUCTION_RT);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
            } else if (REPEAT.indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.poke(INSTRUCTION_SET);
                this.poke(counter_adr);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
                this.analyzer.scan();
                let body_adr = this.vm.adr;
                this.compile(counter_adr - 1);
                this.poke(INSTRUCTION_LOOP);
                this.poke(counter_adr);
                this.poke(body_adr);
                this.analyzer.scan();
            } else {
                break;
            }
        }
    }

    reset() {
        this.vm.reset();
    }

    poke(code: number): void {
        this.vm.mem[this.vm.adr] = code;
        this.vm.adr++;
    }
}