export default function cleanSet(set, str) {
  const arr = [];
  let text = '';
  if (str === '') {
    return '';
  }
  for (const i of set) {
    if (i.startsWith(str)) {
      arr.push(i.slice(str.length));
    }
  }
  for (const i in arr) {
    if (i < arr.length - 1) {
      text += arr[i] + '-';
    } else {
      text += arr[i];
    }
  }
  return text;
}
