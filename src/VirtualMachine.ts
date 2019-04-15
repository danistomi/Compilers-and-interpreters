import {
    INSTRUCTION_ADD,
    INSTRUCTION_CALL,
    INSTRUCTION_DIV,
    INSTRUCTION_FD,
    INSTRUCTION_GET,
    INSTRUCTION_GETLOCAL,
    INSTRUCTION_GREATHER,
    INSTRUCTION_JUMP,
    INSTRUCTION_JUMPIFFALSE,
    INSTRUCTION_LESS,
    INSTRUCTION_LOOP,
    INSTRUCTION_LT,
    INSTRUCTION_MINUS,
    INSTRUCTION_MUL,
    INSTRUCTION_PRINT,
    INSTRUCTION_PUSH,
    INSTRUCTION_RETURN,
    INSTRUCTION_RT,
    INSTRUCTION_SET,
    INSTRUCTION_SETLOCAL,
    INSTRUCTION_SUB
} from "./utils/constants";
import Turtle from "./utils/Turtle";
import { printLn } from "./utils/out";

export default class VirtualMachine {
    mem: number[];
    pc: number;
    top: number;
    frame: number;
    terminated: boolean;

    adr: number;

    reset(): void {
        this.pc = 0;
        this.top = this.mem.length;
        this.frame = this.top;
        this.terminated = false;
    }

    init(): void {
        this.mem = new Array(100);
        this.adr = 0;
        this.reset();
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
            case INSTRUCTION_GET:
                this.pc++;
                index = this.mem[this.pc];
                this.pc++;
                this.top--;
                this.mem[this.top] = this.mem[index];
                break;
            case INSTRUCTION_SET:
                this.pc++;
                index = this.mem[this.pc];
                this.pc++;
                this.mem[index] = this.mem[this.top];
                this.top++;
                break;
            case INSTRUCTION_LOOP:
                this.pc++;
                index = this.mem[this.pc];
                this.pc++;
                this.mem[index] = this.mem[index] - 1;
                if (this.mem[index] > 0) this.pc = this.mem[this.pc];
                else this.pc++;
                break;
            case INSTRUCTION_PUSH:
                this.pc++;
                this.top--;
                this.mem[this.top] = this.mem[this.pc];
                this.pc++;
                break;
            case INSTRUCTION_MINUS:
                this.pc++;
                this.mem[this.top] = -this.mem[this.top];
                break;
            case INSTRUCTION_ADD:
                this.doArithmetic('+');
                break;
            case INSTRUCTION_SUB:
                this.doArithmetic('-');
                break;
            case INSTRUCTION_MUL:
                this.doArithmetic('*');
                break;
            case INSTRUCTION_DIV:
                this.doArithmetic('/');
                break;
            case INSTRUCTION_LESS:
                this.doArithmetic('<');
                break;
            case INSTRUCTION_GREATHER:
                this.doArithmetic('>');
                break;
            case INSTRUCTION_PRINT:
                this.pc++;
                printLn(this.mem[this.top]);
                this.top++;
                break;
            case INSTRUCTION_JUMP:
                this.pc = this.mem[this.pc + 1];
                break;
            case INSTRUCTION_JUMPIFFALSE:
                this.pc++;
                if (this.mem[this.top] == 0) {
                    this.pc = this.mem[this.pc];
                } else {
                    this.pc++
                }
                this.top++;
                break;
            case INSTRUCTION_CALL:
                this.pc++;
                this.top--;
                this.mem[this.top] = this.pc + 1;
                this.top--;
                this.mem[this.top] = this.frame;
                this.frame = this.top;
                this.pc = this.mem[this.pc];
                break;
            case INSTRUCTION_RETURN:
                this.pc++;
                this.top = this.frame + 2 + this.mem[this.pc];
                this.pc = this.mem[this.frame + 1];
                this.frame = this.mem[this.frame];
                break;
            case INSTRUCTION_GETLOCAL:
                this.pc++;
                index = this.frame + this.mem[this.pc];
                this.pc++;
                this.top--;
                this.mem[this.top] = this.mem[index];
                break;
            case INSTRUCTION_SETLOCAL:
                this.pc++;
                index = this.frame + this.mem[this.pc];
                this.pc++;
                this.mem[index] = this.mem[this.top];
                this.top++;
                break;
            default:
                this.terminated = true;
        }
    }

    run(turtle: Turtle) {
        console.log(this.mem);
        this.reset();
        while (!this.terminated) {
            this.execute(turtle)
        }
    }

    poke(code: number): void {
        this.mem[this.adr] = code;
        this.adr++;
    }

    private doArithmetic(operand: String) {
        this.pc++;
        console.log(this.mem, this.top - 1);
        let a: number = this.mem[this.top - 1];
        let b: number = this.mem[this.top];
        let res: number;
        switch (operand) {
            case '+':
                res = a + b;
                break;
            case '-':
                res = a - b;
                break;
            case '*':
                res = a * b;
                break;
            case '/':
                res = a / b;
                break;
            case '<':
                console.log(`${a} < ${b}`);
                res = a < b ? 1 : 0;
                break;
            case '>':
                res = a > b ? 1 : 0;
                break;
        }
        this.mem[this.top - 1] = res;
        this.top++;
    }
}
