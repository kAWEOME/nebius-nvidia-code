import test from 'node:test';
import assert from 'node:assert/strict';
import { total } from '../src/total.mjs';

test('zero quantity produces a zero total', () => {
  assert.equal(total(1000, 0), 0);
});
