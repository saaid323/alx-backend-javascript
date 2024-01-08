export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    return 'Cannot process';
  }
  for (const [key, value] of map) {
    if (value === 1) {
      console.log(value);
      map.set(key, 100);
    }
  }
  return map;
}
