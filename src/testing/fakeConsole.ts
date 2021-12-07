import { Console } from '../console';

export class FakeConsole implements Console {
    readInput(input: string) {
        const operator = input[0]
        const description = input.slice(2, input.length);
        let index;
        switch(operator) {
            case '+':
                return `adding ${description}`
            case '-':
                index = parseInt(description, 10)
                return `removing task ${index}`
            case 'x':
                index = parseInt(description, 10)
                return `checking task ${index}`
            case 'o':
                index = parseInt(description, 10)
                return `todoing task ${index}`
            case 'q':
                return 'exit';
            default:
                return 'invalid';
        }
    }
}