const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', function() {
  describe('sum', function() {
    it('Both positive numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('Both negative numbers', function() {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5),-5);
    });
    it('Both zero', function() {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
    it('one negative one positive', function() {
      assert.strictEqual(calculateNumber('SUM', -1, 2), 1);
    });
  });
  describe('subtract', function() {
    it('Both positive numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('Both negative numbers', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
    });
    it('Both zero', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
    it('one negative one positive', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1, 2), -3);
    });
  });
  describe('divide', function() {
    it('Both positive numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('one zero one positive', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 4.5), 0);
    });
    it('one zero one negative', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 0, -4.5), -0);
    });
    it('zero division', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
