import VirtualMachine from "../../VirtualMachine";
import Turtle from "../../utils/Turtle";
import {INSTRUCTION_FD, INSTRUCTION_LOOP, INSTRUCTION_RT, INSTRUCTION_SET} from "../../utils/constants";

export default (vm: VirtualMachine, turtle: Turtle): void => {
    turtle.clear();

    vm.init();
    vm.mem[0] = INSTRUCTION_SET;
    vm.mem[1] = 4;
    vm.mem[2] = 100;
    vm.mem[3] = INSTRUCTION_FD;
    vm.mem[4] = 100;
    vm.mem[5] = INSTRUCTION_RT;
    vm.mem[6] = 60;
    vm.mem[7] = INSTRUCTION_LOOP;
    vm.mem[8] = 4;
    vm.mem[9] = 3;
    vm.mem[10] = 0;

    vm.reset();
    while (!vm.terminated) {
        vm.execute(turtle);
    }
};