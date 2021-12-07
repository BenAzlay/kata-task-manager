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
            case '-':
                index = parseInt(description, 10)
                this.removeTask(index)
            case 'x':
                index = parseInt(description, 10)
                this.checkTask(index)
        }
    }

    addTask(description: string) {
        this.taskList.push(`${this.taskId.toString()} [] ${description}`)
    }

    removeTask(id: number) {
        for (let i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i][0] === id.toString()) {
                this.taskList.splice(i, 1);
                continue
            }
        }
    }

    checkTask(id: number) {
        for (let i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i][0] === id.toString()) {
                const task = this.taskList[i]
                this.taskList[i] = task.substring(0, 3) + 'x' + task.substring(3, task.length);
                continue
            }
        }
    }
}