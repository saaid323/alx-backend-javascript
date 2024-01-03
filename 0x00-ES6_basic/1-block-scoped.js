export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
  if (trueOrFalse) {
    /* eslint-disable no-unused-vars */
    const task = false;
    const task2 = true;
  }

  return [task, task2];
}
