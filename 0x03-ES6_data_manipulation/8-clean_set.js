export default function cleanSet(set, startString) {
  const arr = [];
  if (!startString || !set) {
    return '';
  }
  if (set instanceof Set === true && typeof startString === 'string') {
    for (const i of set) {
      if (i === undefined) {
        return '';
      }
      if (i.startsWith(startString)) {
        arr.push(i.slice(startString.length));
      }
    }
    return arr.join('-');
  }
  return '';
}
