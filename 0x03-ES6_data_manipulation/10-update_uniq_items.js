export default function updateUniqueItems(map) {
  for (const [key, value] of map.entries()) {
    // eslint-disable-next-line no-unsafe-negation
    if (!value instanceof Map) {
      return 'Cannot process';
    }
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map;
}
