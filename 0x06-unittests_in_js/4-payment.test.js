const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const { assert } = require('chai');

describe('sendPaymentRequestToApi stub suite', function() {
  it('spy and stub sendPaymentRequestToApi', function() {
    const stub = sinon.stub(Utils, 'calculateNumber');
    const spy = sinon.spy(console, 'log');
    stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    assert.strictEqual(stub.calledWith('SUM', 100, 20), true);
    assert.strictEqual(stub.callCount, 1);
    assert.strictEqual(spy.calledWith('The total is: 10'), true);
    assert.strictEqual(spy.callCount, 1);
    stub.restore();
    spy.restore();
  });
});
