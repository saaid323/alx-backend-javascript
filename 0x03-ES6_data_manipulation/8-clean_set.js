export default function cleanSet(set, startString) {
  const arr = [];
  let text = '';
  if (startString === '' or startString === '') {
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
  }
  return text;
}
