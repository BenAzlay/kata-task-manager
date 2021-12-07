import * as readline from 'readline-sync';

export interface Console {
    taskList: string[];
    taskId: number;
    readInput: (input: string) => void;
    addTask: (description: string) => void;
    removeTask: (id: number) => void;
    checkTask: (id: number) => void;
}