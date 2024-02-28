const calculateNumber = require('./2-calcul_chai');
const { expect } = require('chai');


describe('caculator', function() {
  //const expect = chai.expect;
  it('calculateNumber', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  })
});
