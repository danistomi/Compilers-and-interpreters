import LexicalAnalyzer from "./LexicalAnalyzer";

export default class SyntacticalAnalyzer {
    lexicalAnalyzer: LexicalAnalyzer;

    constructor(lexicalAnalyzer: LexicalAnalyzer) {
        this.lexicalAnalyzer = lexicalAnalyzer;
    }

}