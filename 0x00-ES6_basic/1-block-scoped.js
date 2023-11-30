export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint-disable-over-writting
    const task = true;
    // eslint-disable-over-writting
    const task2 = false;
  }

  return [task, task2];
}
