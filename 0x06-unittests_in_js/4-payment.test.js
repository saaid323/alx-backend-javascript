const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const assert = require('assert');

describe('sendPaymentRequestToApi stub suite', function() {
  it('spy and stub sendPaymentRequestToApi', function() {
    const stub = sinon.stub(Utils, 'calculateNumber');
    const spy = sinon.spy(console, 'log');
    stub.returns(10);
    assert.calledWith(stub('SUM', 100, 20), 10);
    sendPaymentRequestToApi(100, 20);
    assert.strictEqual(spy.calledWith('The total is: 10'));
    stub.restore();
    spy.restore();
  })
})
