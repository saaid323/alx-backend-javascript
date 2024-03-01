const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const total = Math.round(totalAmount) + Math.round(totalShipping);
  console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
