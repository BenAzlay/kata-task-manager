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
                break;
            case '-':
                index = parseInt(description, 10)
                this.removeTask(index)
                break;
            case 'x':
                index = parseInt(description, 10)
                this.checkTask(index, false)
                break;
            case 'o':
                index = parseInt(description, 10)
                this.checkTask(index, true)
                break;
        }
    }

    addTask(description: string) {
        this.taskList.push(`${this.taskId.toString()} [] ${description}`)
    }

    removeTask(id: number) {
        for (let i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i][0] === id.toString()) {
                this.taskList.splice(i, 1);
            }
        }
    }

    checkTask(id: number, todo: boolean) {
        for (let i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i][0] === id.toString()) {
                let task = this.taskList[i];
                const charToAdd = todo ? 'o' : 'x';
                if (!todo && task[3] === 'o' || todo && task[3] === 'x') {
                    this.taskList[i] = task.substring(0, 3) + charToAdd + task.substring(4, task.length);
                    break;
                }

                this.taskList[i] = task.substring(0, 3) + charToAdd + task.substring(3, task.length);
                break;
            }
        }
    }
}