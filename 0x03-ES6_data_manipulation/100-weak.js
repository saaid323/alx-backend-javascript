const weakMap = new WeakMap();
let total = 0;
function queryAPI(obj) {
  if (weakMap.get(obj) === 0) {
    total += 1;
  } else {
    total += 1;
  }
  if (total === 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(obj, total);
}

export { weakMap, queryAPI };
