const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const assert = require('assert');

describe('sendPaymentRequestToApi suite', function() {
  it('spy sendPaymentRequestToApi', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    assert(spy.calledWith('SUM', 100, 20));
    assert(spy.calledOnce);
    spy.restore();
  })
})
