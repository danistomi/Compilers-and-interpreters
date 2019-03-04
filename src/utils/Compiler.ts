import * as constants from './constants';
import Turtle from "./Turtle";
import LexicalAnalyzer from "./Interpreter/LexicalAnalyzer";
import {INSTRUCTION_FD, INSTRUCTION_LOOP, INSTRUCTION_LT, INSTRUCTION_RT, INSTRUCTION_SET} from "./constants";

export default class Compiler {
    mem: number[];
    pc: number;
    terminated: boolean;

    adr: number;

    turtle: Turtle;
    analyzer: LexicalAnalyzer;

    constructor(analyzer: LexicalAnalyzer, turtle: Turtle) {
        this.turtle = turtle;
        this.analyzer = analyzer;
    }

    reset(): void {
        this.pc = 0;
        this.terminated = false;
    }

    execute(): void {
        let index: number;
        switch (this.mem[this.pc]) {
            case constants.INSTRUCTION_FD:
                this.pc++;
                this.turtle.forward(this.mem[this.pc]);
                this.pc++;
                break;
            case constants.INSTRUCTION_LT:
                this.pc++;
                this.turtle.left(this.mem[this.pc]);
                this.pc++;
                break;
            case constants.INSTRUCTION_RT:
                this.pc++;
                this.turtle.right(this.mem[this.pc]);
                this.pc++;
                break;
            case constants.INSTRUCTION_SET:
                this.pc++;
                index = this.mem[this.pc];
                this.pc++;
                this.mem[index] = this.mem[this.pc];
                this.pc++;
                break;
            case constants.INSTRUCTION_LOOP:
                this.pc++;
                index = this.mem[this.pc];
                this.pc++;
                this.mem[index] = this.mem[index] - 1;
                if (this.mem[index] > 0) this.pc = this.mem[this.pc];
                else this.pc++;
                break;
            default:
                this.terminated = true;

        }
    }

    compile(counter_adr: number): void {
        while (this.analyzer.kind == constants.WORD) {
            if (constants.FORWARD.indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.poke(INSTRUCTION_FD);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
            } else if (constants.LEFT.indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.poke(INSTRUCTION_LT);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
            } else if (constants.RIGHT.indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.poke(INSTRUCTION_RT);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
            } else if (constants.REPEAT.indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.poke(INSTRUCTION_SET);
                this.poke(counter_adr);
                this.poke(parseInt(this.analyzer.token));
                this.analyzer.scan();
                this.analyzer.scan();
                let body_adr = this.adr;
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

    poke(code: number): void {
        this.mem[this.adr] = code;
        this.adr++;
    }
}