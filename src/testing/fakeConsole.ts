import { Console, Task } from '../console';

export class FakeConsole implements Console {
    taskList: Task[] = [];
    currentTaskId: number = 1;
    displayedList: string = '';

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
        const newTask = new Task(
            this.currentTaskId,
            '',
            description
        )
        this.taskList.push(newTask)
        this.currentTaskId++;
    }

    removeTask(id: number) {
        for (let i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].taskId === id) {
                this.taskList.splice(i, 1);
                break;
            }
        }
    }

    checkTask(id: number, todo: boolean) {
        for (let i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].taskId === id) {
                const newStatus = todo ? 'o' : 'x';
                this.taskList[i].status = newStatus;
                break;
            }
        }
    }

    displayTaskList() {
        for(let i = 0; i < this.taskList.length; i++) {
            const { taskId, status, description } = this.taskList[i];
            this.displayedList += `${taskId} [${status}] ${description}\n\n`;
        }
    }
}