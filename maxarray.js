//deletes extra occurances of any number in array arr that occurs
//more than n times

function deleteNth(arr, n) {
  //makes an object of lists--for each number in array,
  // [0] the count of occurances and
  // [1] current count when iterating through the object
  numdict = {};
  function makeDict(anarray) {
    anarray.map((x) => {
      if (Object.keys(numdict).includes(x.toString())) {
        numdict[x][0] += 1;
      } else {
        numdict[x] = [1, 0];
      }
    });
  }

  //creates a copy of the array
  let arraycopy = arr.map((x) => x);

  //removes elements over 'n' occurances
  function removeNs() {
    for (i = 0; i < arraycopy.length; i++) {
      if (numdict[arraycopy[i].toString()][0] > n) {
        if (numdict[arraycopy[i].toString()][1] >= n) {
          numdict[arraycopy[i].toString()][1] += 1;
          arraycopy.splice(i, 1);
          i--
        } else {
          numdict[arraycopy[i].toString()][1] += 1;
        }
      }
    }
  }
  makeDict(arr);
  removeNs(arraycopy);
  return arraycopy;
}
