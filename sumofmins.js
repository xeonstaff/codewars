//given a 2D nested array, return the sum of the minimum value of each array

function sumOfMinimums(arr) {
  let totalsum = 0
  arr.map((subarray)=> {
    totalsum+=subarray.sort(function(a,b){return a-b})[0]
  })
  return totalsum
}
