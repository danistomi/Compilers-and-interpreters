import Syntax from "../Syntax";

export default abstract class BinaryOperation extends Syntax {
    protected l: Syntax;
    protected r: Syntax;

    constructor(l: Syntax, r: Syntax) {
        super();
        this.l = l;
        this.r = r;
    }
}
