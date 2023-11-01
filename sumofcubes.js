//takes a positive integer n, sums all cubed values from 1 to n, and returns the sum

function sumCubes(n){
   const cubearray = Array.from({length: n}, (_,i)=>i+1)
   let cubesum = 0
   cubearray.forEach(num => cubesum+=num**3)
   return cubesum
}

//test 1 - should return: 1
console.log(sumCubes(1))

//test 2 - should return: 225
console.log(sumCubes(5))

//test 3 - should return: 2025
console.log(sumCubes(9))
