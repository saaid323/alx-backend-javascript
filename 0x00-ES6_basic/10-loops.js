export default function appendToEachArrayValue(array, appendString) {
	let i = [];
  for (let idx of array) {
    // let value = array[idx];
    // array[idx] = appendString + value;
	  let word = appendString + idx;
	  i.push(word);
  }

  return i;
}
