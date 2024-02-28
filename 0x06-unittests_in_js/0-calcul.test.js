const calculateNumber = require('./0-calcul')
const assert = require('assert');

describe('calculateNumber', function() {
  it('Test calculateNumber function', function() {
    assert.equal(calculateNumber(1, 2), 3);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber('hello', 2), NaN);
    assert.strictEqual(calculateNumber('hello', 'world'), NaN);
    assert.strictEqual(calculateNumber(), NaN);
    assert.strictEqual(calculateNumber(1), NaN);
  });
})
