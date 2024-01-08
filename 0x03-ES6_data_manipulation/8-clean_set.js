export default function cleanSet(set, startString) {
  const arr = [];
  let text = '';
  if (set.size === 0) {
    return '';
  }
  if (startString.length === 0) {
    return '';
  }
  if (set instanceof Set && typeof (startString) === 'string') {
    for (const i of set) {
      if (i.startsWith(startString)) {
        arr.push(i.slice(startString.length));
      }
    }
    for (const i in arr) {
      if (i < arr.length - 1) {
        text += `${arr[i]}-`;
      } else {
        text += arr[i];
      }
    }
  } else {
    return '';
  }
  return text;
}
