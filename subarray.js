//maath stuff...'maximum subarray sum'

var maxSequence = function (arr) {
  //checks edge cases-- empty array, all positives and all negatives
  if (!arr) {
    return 0;
  }
  let allpos = arr.filter((x) => {
    x > 0;
  });
  if ((allpos.length = 0)) {
    return sum(arr);
  }
  let allneg = arr.filter((x) => {
    x < 0;
  });
  if ((allneg.length = 0)) {
    return 0;
  }

  //finds maximum contiguous subequence sub; not exactly optimal but
  let maxsum = 0;
  for (i = 0; i <= arr.length; i++) {
    for (j = 1; j <= arr.length; j++) {
        let newsum= arr.slice(i, j).reduce((a,b)=>a+b,0)
      if(newsum > maxsum){
        maxsum = newsum
      };
    }
  }

  return maxsum;
};
