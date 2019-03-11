import LexicalAnalyzer from './Analyzer/LexicalAnalyzer'
import Turtle from './utils/Turtle';
import {CLEAR, COLOR, FORWARD, LEFT, NOTHING, NUMBER, POINT, REPEAT, REPEAT_STAR, RIGHT} from "./utils/constants";

export default class Interpreter {
    analyzer: LexicalAnalyzer;
    turtle: Turtle;

    constructor(analyzer: LexicalAnalyzer, turtle: Turtle) {
        this.analyzer = analyzer;
        this.turtle = turtle;
    }

    interpret(): void {
        while (this.analyzer.kind != NOTHING) {
            if (FORWARD.indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.turtle.forward(parseInt(this.analyzer.token));
                this.analyzer.scan();

            } else if (LEFT.indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.turtle.left(parseInt(this.analyzer.token));
                this.analyzer.scan();

            } else if (RIGHT.indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                this.turtle.right(parseInt(this.analyzer.token));
                this.analyzer.scan();

            } else if (REPEAT.indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                let count: number = parseInt(this.analyzer.token);
                this.analyzer.scan();
                let token = this.analyzer.token;
                this.doCycle(token, count);

            } else if (NUMBER == this.analyzer.kind) {
                let count: number = parseInt(this.analyzer.token);
                this.analyzer.scan();
                let method: string = this.analyzer.token;
                this.analyzer.scan();
                if (method == REPEAT_STAR) {
                    let token = this.analyzer.token;
                    this.doCycle(token, count);
                }

            } else if (CLEAR.indexOf(this.analyzer.token) != -1) {
                this.turtle.clear();
                this.analyzer.scan();

            } else if (COLOR.indexOf(this.analyzer.token) != -1) {
                let rgb = [0, 0, 0];
                for (let i = 0; i < 3; i++) {
                    this.analyzer.scan();
                    rgb[i] = parseInt(this.analyzer.token);
                }
                this.turtle.color(rgb[0], rgb[1], rgb[2]);
                this.analyzer.scan();

            } else if (POINT.indexOf(this.analyzer.token) != -1) {
                this.analyzer.scan();
                let r: number = parseInt(this.analyzer.token);
                this.turtle.point(r);
                this.analyzer.scan();
            } else {
                break
            }
        }
    }

    private doCycle(token: string, count: number) {
        if (token == '[') {
            this.analyzer.scan();
            console.log(this.analyzer.token);
            let start = this.analyzer.position;
            while (count > 0) {
                this.analyzer.index = start;
                this.analyzer.next();
                this.analyzer.scan();
                this.interpret();
                count -= 1;
            }
        }
        if (token == ']') {
            this.analyzer.scan();
        }
    }
}