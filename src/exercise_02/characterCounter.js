export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  let number = 0;
  if (string === undefined || string === '' || string === null) {
    number = 0;
  } else if (prediction === undefined) {
    number = string.length;
  } else {
    let temp = 0;
    for (let index = 0; index < string.length; index += 1) {
      const element = string[index];
      if (prediction(element)) {
        temp += 1;
      }
    }
    number = temp;
  }
  return number;
}
