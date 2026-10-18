import test from 'node:test';
import assert from 'node:assert/strict';
import { total } from '../src/total.mjs';
import { shipping } from '../src/shipping.mjs';
import { discount } from '../src/discount.mjs';
test('ordinary quantity', () => assert.equal(total(1000, 2), 2000));
test('shipping below and above threshold', () => {
  assert.equal(shipping(9999), 500);
  assert.equal(shipping(10001), 0);
});
test('half price', () => assert.equal(discount(1000, 50), 500));
