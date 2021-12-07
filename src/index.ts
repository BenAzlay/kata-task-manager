import * as readline from 'readline-sync';

import { Console, Task } from './console';

export class ConsoleImpl implements Console {
    taskList: Task[] = [];
    currentTaskId: number = 1;

    readInput() {
        const input = readline.question();
        const operator = input[0]
        if (operator === 'q') return false;
        const description = input.slice(2, input.length);
        let index;
        switch(operator) {
            case '+':
                this.addTask(description);
                this.displayTaskList()
                break;
            case '-':
                index = parseInt(description, 10)
                this.removeTask(index)
                this.displayTaskList()
                break;

            case 'x':
                index = parseInt(description, 10)
                this.checkTask(index, false)
                this.displayTaskList()
                break;

            case 'o':
                index = parseInt(description, 10)
                this.checkTask(index, true)
                this.displayTaskList()
                break;

        }
        return true;
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
            console.log(`${taskId} [${status}] ${description}\n\n`);
        }
    }
}

const runImpl = () => {
    const consoleImpl = new ConsoleImpl();
    var continueInput = true;
    while(continueInput) {
        continueInput = consoleImpl.readInput();
    }
}

runImpl();
