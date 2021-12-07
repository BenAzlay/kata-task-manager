import { Console } from '../console';

export class FakeConsole implements Console {
    readInput(input: string) {
        const operator = input[0]
        switch(operator) {
            case '+':
            case '-':
            case 'x':
            case 'o':
            case 'q':
                return 'valid';
            default:
                return 'invalid';
        }
    }
}