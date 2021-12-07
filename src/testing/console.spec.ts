import test from 'tape';
import { FakeConsole } from './fakeConsole';

test("Add 'Learn Python' to task list", (t) => {
    t.plan(1);
    const console = new FakeConsole()
    console.readInput('+ Learn Python')
    t.equal(console.taskList[0], "1 [] Learn Python");
})