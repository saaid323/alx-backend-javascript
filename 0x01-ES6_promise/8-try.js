export default function divideFunction(numerator, denominator) {
  if (denominator > 0) {
    const n = numerator / denominator;
    return n;
  }
  throw new Error('cannot divide by 0');
}
