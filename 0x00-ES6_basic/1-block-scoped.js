export default function taskBlock(trueOrFalse) {
    let task = false;
    let task2 = true;
  
    if (trueOrFalse) {
      let task2 = false;
      let task = true;
      // task2 = false;
    }
  
    return [task, task2];
  }
  