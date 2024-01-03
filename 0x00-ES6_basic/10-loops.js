export default function appendToEachArrayValue(array, appendString) {
  const i = [];
  for (const idx of array) {
    // let value = array[idx];
    // array[idx] = appendString + value;
	  const word = appendString + idx;
	  i.push(word);
  }

  return i;
}
