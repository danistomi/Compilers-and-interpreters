import VirtualMachine from "../../VirtualMachine";
import Turtle from "../../utils/Turtle";
import {INSTRUCTION_FD, INSTRUCTION_LOOP, INSTRUCTION_RT, INSTRUCTION_SET} from "../../utils/constants";

export default (vm: VirtualMachine, turtle: Turtle): void => {

    vm.init();


    vm.mem[0] = INSTRUCTION_SET;
    vm.mem[1] = 99;
    vm.mem[2] = 10;

    vm.mem[3] = INSTRUCTION_RT;
    vm.mem[4] = 90;


    vm.mem[5] = INSTRUCTION_SET;
    vm.mem[6] = 98;
    vm.mem[7] = 4;
    vm.mem[8] = INSTRUCTION_FD;
    vm.mem[9] = 20;
    vm.mem[10] = INSTRUCTION_RT;
    vm.mem[11] = 90;
    vm.mem[12] = INSTRUCTION_LOOP;
    vm.mem[13] = 98;
    vm.mem[14] = 8;

    vm.mem[15] = INSTRUCTION_FD;
    vm.mem[16] = 21;
    vm.mem[17] = INSTRUCTION_LOOP;
    vm.mem[18] = 99;
    vm.mem[19] = 5;

    vm.mem[20] = 0;


    vm.reset();
    setInterval(() => {
        if (!vm.terminated) vm.execute(turtle)
    }, 20)
};