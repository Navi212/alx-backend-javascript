export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;

    if (trueOrFalse) {
      // Disable task from being over-written
      const task = true;
      // Disable task2 from being over-written
      const task2 = false;
    }
    return [task, task2];
  }