const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');

describe('sendPaymentRequestToApi suite', function() {
  it('spy sendPaymentRequestToApi', function() {
    let spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(spy, 'SUM', 100, 20);
    spy.restore();
  });
});
