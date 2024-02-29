const sinon = require('sinon');
const { assert } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    if (!spy) {
      spy = sinon.spy(console, 'log');
    }
  });

  afterEach(() => {
    spy.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20)', () => {
    sendPaymentRequestToApi(100, 20);
    assert(spy.calledWith('The total is: 120'));
    assert(spy.calledOnce);
  });

  it('sendPaymentRequestToApi(10, 10)', () => {
    sendPaymentRequestToApi(10, 10);
    assert(spy.calledWith('The total is: 20'));
    assert(spy.calledOnce);
  });
});
