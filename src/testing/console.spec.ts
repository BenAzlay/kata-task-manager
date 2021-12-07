import test from 'tape';
import { FakeConsole } from './fakeConsole';

test("Get operator validity for +", (t) => {
    t.plan(1);
    t.equal(new FakeConsole().readInput('+ Learn Python'), 'valid');
})

test("Get operator validity for r", (t) => {
    t.plan(1);
    t.equal(new FakeConsole().readInput('r Learn Python'), 'invalid');
})