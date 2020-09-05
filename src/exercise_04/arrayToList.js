export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined || array === null) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }
  let node;
  const head = { value: array[0], next: null };
  let preNode = head;
  for (let index = 1; index < array.length; index += 1) {
    node = { value: array[index], next: null };
    preNode.next = node;
    preNode = node;
  }
  return head;
}
