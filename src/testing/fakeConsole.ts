import { Console } from '../console';

export class FakeConsole implements Console {
    taskList: string[] = [];
    taskId: number = 1;

    readInput(input: string) {
        const operator = input[0]
        const description = input.slice(2, input.length);
        let index;
        switch(operator) {
            case '+':
                this.addTask(description);
        }
    }

    addTask(description: string) {
        this.taskList.push(`${this.taskId.toString()} [] ${description}`)
    }
}