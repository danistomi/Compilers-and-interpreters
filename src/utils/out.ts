import { output } from '../main'

export const print = (msg: any): void => {
    output.innerHTML = `${output.innerHTML}${msg}`;
};

export const printLn = (msg: any): void => {
    print(`${msg}<br>`)
};
