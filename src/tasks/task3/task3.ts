import * as constants from "../../utils/constants";
import Compiler from "../../utils/Compiler";

export default (compiler: Compiler): void => {

    compiler.mem = new Array(100);


    compiler.mem[0] = constants.INSTRUCTION_SET;
    compiler.mem[1] = 99;
    compiler.mem[2] = 10;

    compiler.mem[3] = constants.INSTRUCTION_RT;
    compiler.mem[4] = 90;


    compiler.mem[5] = constants.INSTRUCTION_SET;
    compiler.mem[6] = 98;
    compiler.mem[7] = 4;
    compiler.mem[8] = constants.INSTRUCTION_FD;
    compiler.mem[9] = 20;
    compiler.mem[10] = constants.INSTRUCTION_RT;
    compiler.mem[11] = 90;
    compiler.mem[12] = constants.INSTRUCTION_LOOP;
    compiler.mem[13] = 98;
    compiler.mem[14] = 8;

    compiler.mem[15] = constants.INSTRUCTION_FD;
    compiler.mem[16] = 21;
    compiler.mem[17] = constants.INSTRUCTION_LOOP;
    compiler.mem[18] = 99;
    compiler.mem[19] = 5;

    compiler.mem[20] = 0;


    compiler.reset();
    setInterval(() => {
        if (!compiler.terminated) compiler.execute()
    }, 20)
};