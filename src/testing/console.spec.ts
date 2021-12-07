import test from 'tape';
import { FakeConsole } from './fakeConsole';
import { Task } from '../console';

test("Add 'Learn Python' to task list", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    console.displayTaskList()
    t.deepEqual(console.displayedList, "1 [] Learn Python\n\n")
})

test("Remove task 1 from task list", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    console.readInput('- 1')
    console.displayTaskList()

    t.deepEqual(console.displayedList, '');
})

test("Check task 1 in task list", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    console.readInput('x 1')
    console.displayTaskList()

    t.deepEqual(console.displayedList, "1 [x] Learn Python\n\n")
})

test("Todo task 1 in task list", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    console.readInput('o 1')
    console.displayTaskList()

    t.deepEqual(console.displayedList, "1 [o] Learn Python\n\n")
})

test("Todo THEN check task 1 in task list", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    console.readInput('o 1')
    console.readInput('x 1')
    console.displayTaskList()

    t.deepEqual(console.displayedList, "1 [x] Learn Python\n\n")
})

test("Add 2 tasks to task list", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    console.readInput('+ Learn Ruby')
    console.displayTaskList()

    t.deepEqual(console.displayedList, "1 [] Learn Python\n\n2 [] Learn Ruby\n\n")
})

test("Add 2 tasks to task list, remove task 1", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    console.readInput('+ Learn Ruby')
    console.readInput('- 1')
    console.displayTaskList()

    t.deepEqual(console.displayedList, "2 [] Learn Ruby\n\n")
})

test("Add 2 tasks to task list, remove task 1, add 1", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    console.readInput('+ Learn Ruby')
    console.readInput('- 1')
    console.readInput('+ Enjoy')
    console.displayTaskList()

    t.deepEqual(console.displayedList, "2 [] Learn Ruby\n\n3 [] Enjoy\n\n")
})