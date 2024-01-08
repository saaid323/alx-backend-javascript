export default function cleanSet(set, startString) {
  const arr = [];
  if (startString === '') {
    return '';
  }
  if (set instanceof Set && typeof (startString) === 'string') {
    for (const i of set) {
      if (i.startsWith(startString)) {
        arr.push(i.slice(startString.length));
      }
    }
    return arr.join('-');
  }
  return '';
}
