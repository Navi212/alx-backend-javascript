export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let idx of array) {
    let value = "";
    value += idx;
    newArray.push(appendString + value);
  }
  return newArray;
}
 