import Syntax from "./Syntax";
import VirtualMachine from "../VirtualMachine";
import Turtle from "../utils/Turtle";

export default class Block extends Syntax {
    items: Syntax[];

    constructor(...items: Syntax[]) {
        super();
        this.items = items;
    }

    add(item: Syntax) {
        this.items.push(item);
    }

    execute(turtle: Turtle): void {
        this.items.forEach(item => item.execute(turtle));
    }

    generate(vm: VirtualMachine): void {
        this.items.forEach(item => item.generate(vm));
    }

    optimized(vm: VirtualMachine): void {
        this.items.forEach(item => item.optimized(vm));
    }

    translate(depth: number = 0): string {
        let tabs = Syntax.tabs(depth);
        let res = '';
        this.items.forEach(item => res += `${tabs}${item.translate(depth)}<br>`);
        return res;
    }

    eval(): number {
        return 0;
    }
}
