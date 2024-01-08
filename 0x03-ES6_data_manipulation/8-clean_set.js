export default function cleanSet(set, startString) {
  const arr = [];
  if (!startString || !set) {
    return '';
  }
  if (set instanceof Set !== true || typeof startString !== 'string') {
    return '';
  }
  if (set instanceof Set === true && typeof startString === 'string') {
    for (const i of set) {
      if (i.startsWith(startString) && startString.length > 0) {
        arr.push(i.slice(startString.length));
      }
    }
    return arr.join('-');
  }
  return '';
}
