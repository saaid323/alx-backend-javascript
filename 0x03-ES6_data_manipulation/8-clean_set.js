export default function cleanSet(set, startString) {
  const arr = [];
  if (startString === '') return '';
  if (set instanceof Set === true && typeof startString === 'string') {
    for (const i of set) {
      if (typeof i !== 'string') {
        // eslint-disable-next-line no-continue
        continue;
      }
      if (i.startsWith(startString) && typeof i === 'string') {
        arr.push(i.slice(startString.length));
      }
    }
    return arr.join('-');
  }
  return '';
}
