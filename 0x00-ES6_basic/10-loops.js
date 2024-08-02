export default function appendToEachArrayValue(array, appendString) {
  let index = 0;
  for (const item of array) {
    const newArray = array;
    newArray[index] = appendString + item;
    index += 1;
  }

  return array;
}
