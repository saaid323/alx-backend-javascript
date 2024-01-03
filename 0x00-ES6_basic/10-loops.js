export default function appendToEachArrayValue(array, appendString) {
  const i = [];
  for (const idx of array) {
    const word = appendString + idx;
    i.push(word);
  }
  return i;
}
