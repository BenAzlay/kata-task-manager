import * as readline from 'readline-sync';

export interface Console {
    readInput : (input: string) => string;
}