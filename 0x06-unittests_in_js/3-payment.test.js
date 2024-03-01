const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi suite', function() {
  it('spy sendPaymentRequestToApi', function() {
    let spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
    spy.restore();
  });
});
