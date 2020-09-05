export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const arr = [];
  if (start > end) {
    for (let index = start; index > end; index -= 1) {
      arr.push(index);
    }
  }
  if (start < end) {
    for (let index = start; index < end; index += 1) {
      arr.push(index);
    }
  }
  return arr;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let result = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    const element = numbers[index];
    result += element;
  }
  return result;
}
