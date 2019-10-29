import Block from "./Block";
import LexicalAnalyzer from "../Analyzer/LexicalAnalyzer";
import { DEF, FOR, FORWARD, IF, LEFT, PRINT, REPEAT, RIGHT, WORD } from "../utils/constants";
import Fd from "./Fd";
import Const from "./Arithmetical/Const";
import Lt from "./Lt";
import Rt from "./Rt";
import Repeat from "./Repeat";
import Minus from "./Arithmetical/Minus";
import Syntax from "./Syntax";
import Mul from "./Arithmetical/muldiv/Mul";
import Div from "./Arithmetical/muldiv/Div";
import Add from "./Arithmetical/addsub/Add";
import Sub from "./Arithmetical/addsub/Sub";
import Print from "./Print";
import Variable from "./Variable";
import Pow from "./Arithmetical/Pow";
import Less from "./Arithmetical/compare/Less";
import LessOrEq from "./Arithmetical/compare/LessOrEq";
import GreaterOrEq from "./Arithmetical/compare/GreaterOrEq";
import Greater from "./Arithmetical/compare/Greater";
import Eq from "./Arithmetical/compare/Eq";
import Not from "./Arithmetical/Not";
import While from "./While";
import IfElse from "./IfElse";
import LocalVariable from "./LocalVariable";
import Subroutine from "./Subroutine";
import program from "../Program";
import Assign from "./Assign";
import GlobalVariable from "./GlobalVariable";
import Call from "./Call";

export const parse = (analyzer: LexicalAnalyzer): Block => {
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
        } else if (PRINT.includes(analyzer.token)) {
            analyzer.scan();
            result.add(new Print(addsub(analyzer)))
        } else if (FOR.includes(analyzer.token)) {
            analyzer.scan();
            let test = expr(analyzer);
            analyzer.scan();
            result.add(new While(test, parse(analyzer)));
            analyzer.scan();
        } else if (IF.includes(analyzer.token)) {
            analyzer.scan();
            let test = expr(analyzer);
            analyzer.scan();
            let ifElse = new IfElse(test, parse(analyzer), null);
            analyzer.scan();
            if (analyzer.token == '[') {
                analyzer.scan();
                ifElse.bodyFalse = parse(analyzer);
                analyzer.scan();
            }
            result.add(ifElse)
        } else if (DEF.includes(analyzer.token)) {
            result.add(parseDefinition(analyzer))
        } else {
            let name = analyzer.token;
            analyzer.scan();
            if (analyzer.token == '=') result.add(parseAssign(name, analyzer));
            else result.add(parseCall(name, analyzer));
        }
    }
    return result;
};

const params = (analyzer: LexicalAnalyzer): { [key: string]: Variable } => {
    let result: { [key: string]: Variable } = {};
    let n: number = 0;
    if (analyzer.token == '(') {
        analyzer.scan();
        if (analyzer.kind == WORD) {
            result[analyzer.token] = new LocalVariable(analyzer.token, 0);
            analyzer.scan();
            // @ts-ignore
            while (analyzer.token === ',') {
                analyzer.scan();
                if (result.hasOwnProperty(analyzer.token)) throw new Error('Duplicated parameter name');
                result[analyzer.token] = new LocalVariable(analyzer.token, Object.keys(result).length);
                n++;
                analyzer.scan();
            }
        }
        analyzer.scan();
        n = 1 + Object.keys(result).length;
        Object.keys(result).map(key => result[key].pos = n - result[key].pos)
    }
    return result;
};

const parseDefinition = (analyzer: LexicalAnalyzer): Subroutine => {
    analyzer.scan();
    let name = analyzer.token;
    if (program.globals.hasOwnProperty(name)) throw new Error(`${analyzer.token} is in use`);
    analyzer.scan();
    let result = new Subroutine(name, params(analyzer), null);
    program.globals[name] = result;
    analyzer.scan();
    program.locals = result.vars;
    program.localvarpos = -1;
    result.body = parse(analyzer);
    program.locals = null;
    analyzer.scan();
    return result
};

const parseAssign = (name: string, analyzer: LexicalAnalyzer): Assign => {
    let result: Assign;
    analyzer.scan();
    if (program.locals != undefined) {
        if (program.locals.hasOwnProperty(name)) {
            result = new Assign(program.locals[name], expr(analyzer));
        } else {
            let variable = new LocalVariable(name, program.localvarpos);
            result = new Assign(variable, expr(analyzer));
            program.locals[name] = variable;
            program.localvarpos--;
        }
    } else {
        if (program.globals.hasOwnProperty(name)) {
            if (!(program.globals[name] instanceof Variable)) throw new Error(`${name} is not variable`);
            result = new Assign(<Variable>program.globals[name], expr(analyzer));
        } else {
            let variable = new GlobalVariable(name, program.globalvarpos);
            result = new Assign(variable, expr(analyzer));
            program.globals[name] = variable;
            program.globalvarpos++;
        }
    }
    return result;
};

const parseCall = (name: string, analyzer: LexicalAnalyzer): Call => {
    if (!program.globals.hasOwnProperty(name)) throw new Error(`Unknown command ${name}`);
    if (!(program.globals[name] instanceof Subroutine)) throw new Error(`${name} is not subprogram`);
    let subroutine = <Subroutine>program.globals[name];
    let args = new Block();
    if (analyzer.token == '(') {
        analyzer.scan();
        // @ts-ignore
        if (analyzer.token != ')') {
            args.add(expr(analyzer));
            // @ts-ignore
            while (analyzer.token == ',') {
                analyzer.scan();
                args.add(expr(analyzer));
            }
            analyzer.scan();
        }
    }
    if (args.items.length != subroutine.paramCount) throw new Error(`Incorrect number of parameters`);
    return new Call(subroutine, args)
};

export const expr = (analyzer: LexicalAnalyzer): Syntax => {
    return compare(analyzer);
};

const operand = (analyzer: LexicalAnalyzer): Syntax => {
    let result: Syntax;
    if (analyzer.kind == WORD) {
        if (program.locals && program.locals.hasOwnProperty(analyzer.token)) {
            result = program.locals[analyzer.token];
        } else if (program.globals.hasOwnProperty(analyzer.token)) {
            result = program.globals[analyzer.token];
            if (!(result instanceof Variable)) throw new Error("Not variable")
        } else throw new Error("Undefined variable")
    } else {
        //TODO check NUMBER
        result = new Const(parseFloat(analyzer.token))
    }
    analyzer.scan();
    return result
};


const braces = (analyzer: LexicalAnalyzer): Syntax => {
    if (analyzer.token != '(') {
        return operand(analyzer)
    }
    analyzer.scan();
    let result: Syntax = addsub(analyzer);
    analyzer.scan();
    return result;
};

const minus = (analyzer: LexicalAnalyzer): Syntax => {
    if (analyzer.token != '-') {
        return braces(analyzer)
    }
    analyzer.scan();
    return new Minus(braces(analyzer));
};

const pow = (analyzer: LexicalAnalyzer): Syntax => {
    let result = minus(analyzer);
    if (analyzer.token == '^') {
        analyzer.scan();
        result = new Pow(result, minus(analyzer))
    }
    return result
};

const muldiv = (analyzer: LexicalAnalyzer): Syntax => {
    let result: Syntax = pow(analyzer);
    while (true) {
        if (analyzer.token == '*') {
            analyzer.scan();
            result = new Mul(result, pow(analyzer));
        } else if (analyzer.token == '/') {
            analyzer.scan();
            result = new Div(result, pow(analyzer));
        } else {
            return result
        }
    }
};

const addsub = (analyzer: LexicalAnalyzer): Syntax => {
    let result = muldiv(analyzer);
    while (true) {
        if (analyzer.token == '+') {
            analyzer.scan();
            result = new Add(result, muldiv(analyzer));
        } else if (analyzer.token == '-') {
            analyzer.scan();
            result = new Sub(result, muldiv(analyzer));
        } else {
            return result;
        }
    }
};

const compare = (analyzer: LexicalAnalyzer): Syntax => {
    let result = addsub(analyzer);
    if (analyzer.token == '<') {
        analyzer.scan();
        result = new Less(result, addsub(analyzer))
    } else if (analyzer.token == '<=') {
        analyzer.scan();
        result = new LessOrEq(result, addsub(analyzer))
    } else if (analyzer.token == '>') {
        analyzer.scan();
        result = new Greater(result, addsub(analyzer))
    } else if (analyzer.token == '>=') {
        analyzer.scan();
        result = new GreaterOrEq(result, addsub(analyzer))
    } else if (analyzer.token == '==') {
        analyzer.scan();
        result = new Eq(result, addsub(analyzer))
    } else if (analyzer.token == '!=') {
        analyzer.scan();
        result = new Not(new Eq(result, addsub(analyzer)));
    }
    return result
};
