import Compiler from "../../Compiler";
import Turtle from "../../utils/Turtle";

export default (compiler: Compiler, turtle: Turtle): void => {
    compiler.analyzer.index = 0;
    compiler.analyzer.next();
    compiler.analyzer.scan();
    compiler.vm.init();
    compiler.compile(99);

    compiler.reset();
    compiler.vm.run(turtle);

}