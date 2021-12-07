import test from 'tape';
import { FakeConsole } from './fakeConsole';

test("Add 'Learn Python' to task list", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    t.equal(console.taskList[0], "1 [] Learn Python");
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
    t.deepEqual(console.taskList, ['1 [x] Learn Python']);
})