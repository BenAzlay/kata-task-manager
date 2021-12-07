import test from 'tape';
import { FakeConsole } from './fakeConsole';

test("Get first char in input", (t) => {
    t.plan(1);
    t.equal(new FakeConsole().readInput('+ Learn Python'), '+');
})
