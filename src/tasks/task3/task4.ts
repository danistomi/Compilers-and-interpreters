// import * as constants from "../../utils/constants";
// import Compiler from "../../utils/Compiler";
//
// export default (compiler: Compiler): void => {
//
//     compiler.mem = new Array(11);
//     compiler.mem[0] = constants.INSTRUCTION_SET;
//     compiler.mem[1] = 4;
//     compiler.mem[2] = 100;
//     compiler.mem[3] = constants.INSTRUCTION_FD;
//     compiler.mem[4] = 100;
//     compiler.mem[5] = constants.INSTRUCTION_RT;
//     compiler.mem[6] = 60;
//     compiler.mem[7] = constants.INSTRUCTION_LOOP;
//     compiler.mem[8] = 4;
//     compiler.mem[9] = 3;
//     compiler.mem[10] = 0;
//
//     compiler.reset();
//     while (!compiler.terminated) {
//         compiler.execute();
//     }
// };