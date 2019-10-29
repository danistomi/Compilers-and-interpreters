import Variable from "./Variable";
import VirtualMachine from "../VirtualMachine";
import { INSTRUCTION_GET, INSTRUCTION_SET } from "../utils/constants";

export default class GlobalVariable extends Variable {
    generate(vm: VirtualMachine): void {
        vm.poke(INSTRUCTION_GET);
        vm.poke(this.pos)
    }

    generate_set(vm: VirtualMachine): void {
        vm.poke(INSTRUCTION_SET);
        vm.poke(this.pos);
    }
}
