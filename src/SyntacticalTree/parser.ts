import Block from "./Block";
import LexicalAnalyzer from "../Analyzer/LexicalAnalyzer";
import {FORWARD, LEFT, REPEAT, RIGHT, WORD} from "../utils/constants";
import Fd from "./Fd";
import Const from "./Const";
import Lt from "./Lt";
import Rt from "./Rt";
import Repeat from "./Repeat";

const parse = (analyzer: LexicalAnalyzer): Block => {
    let result = new Block();
    while (analyzer.kind == WORD) {
        if (FORWARD.includes(analyzer.token)) {
            analyzer.scan();
            result.add(new Fd(new Const(parseInt(analyzer.token))));
            analyzer.scan();
        } else if (LEFT.includes(analyzer.token)) {
            analyzer.scan();
            result.add(new Lt(new Const(parseInt(analyzer.token))));
            analyzer.scan();
        } else if (RIGHT.includes(analyzer.token)) {
            analyzer.scan();
            result.add(new Rt(new Const(parseInt(analyzer.token))));
            analyzer.scan();
        } else if (REPEAT.includes(analyzer.token)) {
            analyzer.scan();
            let n = parseInt(analyzer.token);
            analyzer.scan();
            analyzer.scan();
            result.add(new Repeat(new Const(n), parse(analyzer)));
            analyzer.scan();
        }
    }
    return result;
};

export default parse;
