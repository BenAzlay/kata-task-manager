import * as readline from 'readline-sync';

export class Task {
    taskId: number = 0;
    status: string = '';
    description: string = '';

    constructor(_taskId: number, _status: string, _description: string) {
        this.taskId = _taskId;
        this.status = _status;
        this.description = _description;
    }
}

export interface Console {
    taskList: Task[];
    currentTaskId: number;
    readInput: (input: string) => void;
    addTask: (description: string) => void;
    removeTask: (id: number) => void;
    checkTask: (id: number, todo: boolean) => void;
}