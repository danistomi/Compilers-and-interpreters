import Syntax from "./Syntax";
import Const from "./Arithmetical/Const";
import VirtualMachine from "../VirtualMachine";
import Turtle from "../utils/Turtle";

export default abstract class TurtleCommand extends Syntax {
    param: Const;

    constructor(param: Const) {
        super();
        this.param = param;
    }

    abstract execute(turtle:Turtle): void

    abstract generate(vm: VirtualMachine): void

    abstract translate(depth: number): string

    abstract optimized(vm: VirtualMachine): void

}
