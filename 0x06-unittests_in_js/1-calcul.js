function calculateNumber (type, a, b) {
    let result;
    a = Math.round(a);
    b = Math.round(b);
    if (type === 'SUM') {
      result = a + b;
    } else if (type === 'SUBTRACT') {
      result = a - b;
    } else if (type === 'DIVIDE') {
      if (b === 0) return 'Zero';
      result = a / b;
    }
    return result;
}

module.exports = calculateNumber;