// given an array of numbers
// returns pairs of numbers whose difference is two

const {assert} = require("chai");

function twosDifference(input){
  let difArray = []
  input = input.sort()
  for(i=0;i<input.length;i++){
    if(input.includes(input[i]+2)){
      difArray.push([input[i],input[i]+2])
    }
  }
  return difArray
 }

 assert.deepEqual(twosDifference([1,2,3,4]),[[1,3],[2,4]]);
 assert.deepEqual(twosDifference([1,3,4,6]),[[1,3],[4,6]]);
