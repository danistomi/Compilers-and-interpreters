const otherCharString: string = ',?';

export default function stringParser(input: string): { words: number, spaces: number, otherChars: number } {
    let words: number = 0;
    let spaces: number = 0;
    let otherChars: number = 0;

    let wordCount: number = 0;
    for (let i: number = 0; i < input.length; i++) {
        if (input[i] === ' ') {
            if (wordCount !== 0) {
                words++;
                wordCount = 0
            }
            spaces++;
            continue
        }
        if (otherCharString.indexOf(input[i]) !== -1) {
            if (wordCount !== 0) {
                words++;
                wordCount = 0
            }
            otherChars++;
            continue
        }

        wordCount++;
    }

    return {
        words,
        spaces,
        otherChars
    }
}
