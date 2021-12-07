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
                continue
            }
        }
    }

    checkTask(id: number, todo: boolean) {
        for (let i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i][0] === id.toString()) {
                let task = this.taskList[i];
                if (task[i][3] === 'o' || task[i][3] === 'x') {
                    task[i].slice(3, 1);
                }
                const charToAdd = todo ? 'o' : 'x';

                console.log(charToAdd)
                this.taskList[i] = task.substring(0, 3) + charToAdd + task.substring(3, task.length);
                continue
            }
        }
    }
}