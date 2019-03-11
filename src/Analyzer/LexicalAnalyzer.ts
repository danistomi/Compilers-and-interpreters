import * as constants from '../utils/constants'

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
            this.kind = constants.NUMBER;
        } else if (this.lookIsCharacter()) {
            do {
                this.token += this.look;
                this.next();
            } while ((this.lookIsCharacter()));
            this.kind = constants.WORD;
        } else if (this.look != '\0') {
            this.token = this.look;
            this.next();
            this.kind = constants.SYMBOL;
        } else {
            this.kind = constants.NOTHING;
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
}