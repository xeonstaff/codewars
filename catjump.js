// figures out how many jumps a cat needs to get to the top of a cat shelf
// mew

function solution(start, finish) 
{
  let stepcount = finish-start
  let initialcount = Math.floor(stepcount / 3)
  let remaindercount = (stepcount % 3 == 1) ? 1 : (stepcount % 3 == 2) ? 2 : 0
  return initialcount + remaindercount

}

//example case

//should return 2
console.log(solution(1, 5))
