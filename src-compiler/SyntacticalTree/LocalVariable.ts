import Variable from "./Variable";
import VirtualMachine from "../VirtualMachine";
import { INSTRUCTION_GETLOCAL, INSTRUCTION_SETLOCAL } from "../utils/constants";

export default class LocalVariable extends Variable {
    generate(vm: VirtualMachine): void {
        vm.poke(INSTRUCTION_GETLOCAL);
        vm.poke(this.pos)
    }

    generate_set(vm: VirtualMachine): void {
        vm.poke(INSTRUCTION_SETLOCAL);
        vm.poke(this.pos)
    }
}
