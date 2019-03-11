import VirtualMachine from "../VirtualMachine";
import Turtle from "../utils/Turtle";

export default abstract class Syntax {
    static counter_adr: number;

    abstract execute(turtle:Turtle): void

    abstract generate(vm: VirtualMachine): void

    abstract optimized(vm: VirtualMachine): void

    abstract translate(depth: number): string

    protected static tabs(depth: number): string {
        let res = '';
        for (let i = 0; i < depth; i++) {
            res += '&emsp;';
        }
        return res;
    }
}