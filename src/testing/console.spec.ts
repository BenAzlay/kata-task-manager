import test from 'tape';
import { FakeConsole } from './fakeConsole';
import { Task } from '../console';

test("Add 'Learn Python' to task list", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    t.deepEqual(console.taskList[0], new Task(1, '', "Learn Python"))
})

test("Remove task 1 from task list", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    console.readInput('- 1')
    t.deepEqual(console.taskList, []);
})

test("Check task 1 in task list", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    console.readInput('x 1')
    t.deepEqual(console.taskList, [new Task(1, 'x', 'Learn Python')]);
})

test("Todo task 1 in task list", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    console.readInput('o 1')
    t.deepEqual(console.taskList, [new Task(1, 'o', "Learn Python")]);
})

test("Todo THEN check task 1 in task list", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    console.readInput('o 1')
    console.readInput('x 1')
    t.deepEqual(console.taskList, [new Task(1, 'x', 'Learn Python')]);
})

test("Add 2 tasks to task list", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    console.readInput('+ Learn Ruby')
    t.deepEqual(console.taskList, [new Task(1, '', "Learn Python"), new Task(2, '', "Learn Ruby")]);
})

test("Add 2 tasks to task list, remove task 1", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    console.readInput('+ Learn Ruby')
    console.readInput('- 1')
    t.deepEqual(console.taskList, [new Task(2, '', "Learn Ruby")]);
})

test("Add 2 tasks to task list, remove task 1, add 1", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    console.readInput('+ Learn Ruby')
    console.readInput('- 1')
    console.readInput('+ Enjoy')
    t.deepEqual(console.taskList, [new Task(2, '', "Learn Ruby"), new Task(3, '', "Enjoy")]);
})