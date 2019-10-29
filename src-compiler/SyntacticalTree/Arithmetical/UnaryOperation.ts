import Syntax from "../Syntax";

export default abstract class UnaryOperation extends Syntax {
    protected e: Syntax;

    constructor(e: Syntax) {
        super();
        this.e = e;
    }
}
