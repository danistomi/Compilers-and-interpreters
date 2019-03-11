import {INSTRUCTION_FD, INSTRUCTION_LOOP, INSTRUCTION_LT, INSTRUCTION_RT, INSTRUCTION_SET} from "./utils/constants";
import Turtle from "./utils/Turtle";
import Syntax from "./SyntacticalTree/Syntax";

export default class VirtualMachine {
    mem: number[];
    pc: number;
    terminated: boolean;

    adr: number;

    reset(): void {
        this.pc = 0;
        this.terminated = false;
    }

    init(): void {
        this.mem = new Array(100);
        this.adr = 0;
    }

    execute(turtle: Turtle): void {
        let index: number;
        switch (this.mem[this.pc]) {
            case INSTRUCTION_FD:
                this.pc++;
                turtle.forward(this.mem[this.pc]);
                this.pc++;
                break;
            case INSTRUCTION_LT:
                this.pc++;
                turtle.left(this.mem[this.pc]);
                this.pc++;
                break;
            case INSTRUCTION_RT:
                this.pc++;
                turtle.right(this.mem[this.pc]);
                this.pc++;
                break;
            case INSTRUCTION_SET:
                this.pc++;
                index = this.mem[this.pc];
                this.pc++;
                this.mem[index] = this.mem[this.pc];
                this.pc++;
                break;
            case INSTRUCTION_LOOP:
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

    run(turtle: Turtle) {
        this.reset();
        while (!this.terminated) {
            this.execute(turtle)
        }
    }

    poke(code: number): void {
        this.mem[this.adr] = code;
        this.adr++;
    }
}