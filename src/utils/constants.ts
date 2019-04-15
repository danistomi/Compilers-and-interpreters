export const NOTHING: number = 0;
export const NUMBER: number = 1;
export const WORD: number = 2;
export const SYMBOL: number = 3;

export const FORWARD: string[] = ['dopredu', 'dp'];
export const LEFT: string[] = ['vlavo', 'vl'];
export const RIGHT: string[] = ['vpravo', 'vp'];
export const REPEAT: string[] = ['opakuj'];
export const CLEAR: string[] = ['zmaz'];
export const COLOR: string[] = ['farba'];
export const POINT: string[] = ['bod'];
export const PRINT: string[] = ['vypis'];
export const IF: string[] = ['ak'];
export const FOR: string[] = ['kym'];
export const DEF: string[] = ['definuj'];

export const REPEAT_STAR: string = '*';
export const REPEAT_ABC: string = 'ijklmnopqrstv';

export const INSTRUCTION_FD: number = 4;
export const INSTRUCTION_LT: number = 5;
export const INSTRUCTION_RT: number = 6;
export const INSTRUCTION_SET: number = 7;
export const INSTRUCTION_LOOP: number = 8;
export const INSTRUCTION_PUSH: number = 9;
export const INSTRUCTION_MINUS: number = 10;
export const INSTRUCTION_ADD: number = 11;
export const INSTRUCTION_SUB: number = 12;
export const INSTRUCTION_MUL: number = 13;
export const INSTRUCTION_DIV: number = 14;
export const INSTRUCTION_GET: number = 15;
export const INSTRUCTION_POW: number = 16;
export const INSTRUCTION_EQ: number = 17;
export const INSTRUCTION_GREATHER: number = 18;
export const INSTRUCTION_LESS: number = 19;
export const INSTRUCTION_GREATHEROREQ: number = 20;
export const INSTRUCTION_LESOREQ: number = 21;
export const INSTRUCTION_PRINT: number = 22;
export const INSTRUCTION_JUMP: number = 23;
export const INSTRUCTION_JUMPIFFALSE: number = 24;
export const INSTRUCTION_CALL: number = 25;
export const INSTRUCTION_RETURN = 26;

export const INSTRUCTION_GETLOCAL = 27;
export const INSTRUCTION_SETLOCAL = 28;
