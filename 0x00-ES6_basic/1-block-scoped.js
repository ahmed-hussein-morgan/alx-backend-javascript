export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      // const task2 = false;
      const task = true;
      task2 = false;
    }
  
    return [task, task2];
  }
  