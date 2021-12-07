import test from 'tape';
import { FakeConsole } from './fakeConsole';

test("Get action description for '+ Learn Python'", (t) => {
    t.plan(1);
    t.equal(new FakeConsole().readInput('+ Learn Python'), "adding Learn Python");
})

test("Get action description for '- 1'", (t) => {
    t.plan(1);
    t.equal(new FakeConsole().readInput('- 1'), "removing task 1");
})

test("Get action description for 'x 1'", (t) => {
    t.plan(1);
    t.equal(new FakeConsole().readInput('x 1'), "checking task 1");
})

test("Get action description for 'o 1'", (t) => {
    t.plan(1);
    t.equal(new FakeConsole().readInput('o 1'), "todoing task 1");
})

test("Get action description for 'q'", (t) => {
    t.plan(1);
    t.equal(new FakeConsole().readInput('q'), "exit");
})