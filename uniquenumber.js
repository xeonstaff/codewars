//finds a unique number in an array of numbers

function findUniq(arr) {
  let number_1 = {
    number: arr[0],
    count: 1,
  };
  let number_2 = {
    number: null,
    count: 0,
  };
  for (i = 1; i < arr.length; i++) {
    if (arr[i] == number_1.number) {
      number_1.count += 1;
    } else {
      number_2.number = arr[i];
      number_2.count += 1;
    }
  }
  return number_1.count > number_2.count ? number_2.number : number_1.number;
}
