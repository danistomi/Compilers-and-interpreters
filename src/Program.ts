import Identifier from "./SyntacticalTree/Identifier";
import Variable from "./SyntacticalTree/Variable";

class Program {
    public globals: { [key: string]: Identifier };
    public locals: { [key: string]: Variable };
    public globalvarpos: number;
    public localvarpos: number;

    constructor() {
        this.reset()
    }

    reset() {
        this.globals = {};
        this.locals = undefined;
        this.globalvarpos = 2;
    }
}

const program = new Program();
export default program;
