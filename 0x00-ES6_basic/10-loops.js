export default function appendToEachArrayValue(array, appendString) {
  const newArray = array;
  let index = 0;
  for (const item of newArray) {
    newArray[index] = appendString + item;
    index += 1;
  }

  return newArray;
}
