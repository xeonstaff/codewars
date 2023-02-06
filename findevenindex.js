//find the index of an array such that the right and left sides
//when split at index n are equal -- else, return -1

function findEvenIndex(arr) {
  let right_side = arr.reduce((a, b) => a + b, 0);
  let left_side = 0;
  for (i = 0; i < arr.length; i++) {
    left_side += arr[i];
    if (right_side == left_side) {
      return i;
    }
    right_side -= arr[i];
  }
  return -1;
}
