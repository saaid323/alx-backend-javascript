const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', function() {
  it('calculator', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', -1.4, -4.5),-5);
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 0, 4.5), 0);
    assert.strictEqual(calculateNumber('DIVIDE', 0, -4.5), -0);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), NaN);
  });
});
