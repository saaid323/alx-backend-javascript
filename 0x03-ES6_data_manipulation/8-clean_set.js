export default function cleanSet(set, startString) {
  const arr = [];
  if (startString === '') return '';
  if (set instanceof Set === true && typeof startString === 'string') {
    for (const i of set) {
      if (typeof i !== 'string') {
        continue;
      }
      if (i.startsWith(startString) && startString.length > 0) {
        arr.push(i.slice(startString.length));
      }
    }
    return arr.join('-');
  }
  return '';
}
