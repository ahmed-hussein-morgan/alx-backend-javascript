export default function taskBlock(trueOrFalse) {
    var task = false;
    var task2 = true;
  
    if (trueOrFalse) {
      // const task2 = false;
      const task = true;
      const task2 = false;
    }
  
    return [task, task2];
  }
  