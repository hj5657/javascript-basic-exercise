export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === null || array === undefined) {
    throw new Error('Flatten undefined or null array');
  }
  const result = [];
  let cnt = 0;
  function flatten(arr) {
    for (let index = 0; index < arr.length; index += 1) {
      if (cnt < 2 && Array.isArray(arr[index])) {
        cnt += 1;
        flatten(arr[index]);
      } else {
        result.push(arr[index]);
      }
    }
  }
  flatten(array);
  return result;
}
