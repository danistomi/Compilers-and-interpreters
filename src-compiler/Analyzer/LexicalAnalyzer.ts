import { NOTHING, NUMBER, SYMBOL, WORD } from "../utils/constants";

export default class LexicalAnalyzer {
    input: string;

    index: number;
    look: string;

    token: string;
    kind: number;
    position: number;

    constructor(input: string) {
        this.setInput(input);
    }

    setInput(input: string) {
        this.input = input;
    }

    init() {
        this.index = 0;
        this.next();
        this.scan();
    }

    next(): void {
        if (this.index >= this.input.length) {
            this.look = '\0'
        } else {
            this.look = this.input[this.index];
            this.index++;
        }
    }

    scan(): void {
        while (this.look == ' ' || this.look == '\n') {
            this.next()
        }

        this.token = '';
        this.position = this.index - 1;

        if (this.lookIsNumber()) {
            do {
                this.token += this.look;
                this.next();
            } while (this.lookIsNumber());
            if (this.look == '.') {
                do {
                    this.token += this.look;
                    this.next();
                } while (this.lookIsNumber())
            }
            this.kind = NUMBER;
        } else if (this.lookIsCharacter()) {
            do {
                this.token += this.look;
                this.next();
            } while ((this.lookIsCharacter()));
            this.kind = WORD;
        } else if (this.lookIsLessOrGraterChar()) {
            this.token = this.look;
            this.next();
            if (this.look == '=') {
                this.token += '=';
                this.next()
            }
            this.kind = SYMBOL;
        } else if (this.look != '\0') {
            this.token = this.look;
            this.next();
            this.kind = SYMBOL;
        } else {
            this.kind = NOTHING;
        }
    }

    private lookIsNumber() {
        let ascii = this.look.charCodeAt(0);
        return ascii > 47 && ascii < 58;
    }

    private lookIsCharacter() {
        let ascii = this.look.charCodeAt(0);
        return (ascii > 64 && ascii < 91) || (ascii > 96 && ascii < 123);
    }

    private lookIsLessOrGraterChar() {
        return this.look == '<' || this.look == '>';
    }
}
