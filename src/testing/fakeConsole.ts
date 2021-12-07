import { Console } from '../console';

export class FakeConsole implements Console {
    readInput(input: string) {
        const firstChar = input[0]
        return firstChar;
    }
}