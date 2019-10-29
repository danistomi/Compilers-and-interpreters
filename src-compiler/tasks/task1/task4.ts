import Turtle from '../../utils/Turtle'

export default class Task4 {
    turtle: Turtle;

    constructor(turtle: Turtle) {
        this.turtle = turtle;
    }

    draw(text: string, angle: number, step: number, change: number) {
        if (step < 1) {
            return;
        }
        for (let i: number = 0; i < text.length; i++) {
            switch (text[i]) {
                case 'l':
                    this.turtle.left(angle);
                    break;
                case 'p':
                    this.turtle.right(angle);
                    break;
                case 'd':
                    this.turtle.forward(step);
                    break;
                case 'z':
                    this.turtle.backward(step);
                    break;
                case '*':
                    this.draw(text, angle, step * change, change);
                    break;
            }
        }
    }
}
