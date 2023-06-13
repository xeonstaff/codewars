// decomposes a number into its smallest-base factors (ie exponents of 2, then 3, then 4, etc.)

function decompose(num) {
  let runningnum = num
  let numject = {}

  function counter(number, factor){
    let count = 2
    while(number >= factor**count){
      count++
    }
    return count - 1
  }

  let i = 2
  while(runningnum >= i**2){
    let count = counter(runningnum, i)
    numject[i] = count
    runningnum -= i**count
    i++
  }

  return([Object.values(numject),runningnum])
}

// testcases

// 1. should return [ [], 0 ]
// console.log(decompose(0))

// 2. should return [ [ 4, 2 ], 1 ]
// console.log(decompose(26))

// 3. should return [ [22, 13, 10, 8, 7, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2], 0 ]
// console.log(decompose(8330475))

// 4. should return [ [ 22, 13, 10, 8, 7, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2 ], 199 ]
// console.log(decompose(8331299))

