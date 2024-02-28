const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', function() {
  it('calculator', function() {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), NaN);
  });
});
