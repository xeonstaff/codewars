//find the largest 5-digit number in a series

function solution(digits){
  let biggestnum=0
  for (i=0; i<digits.length; i++){
    let newnum= digits.slice(i,i+5).toString()
    if (newnum>biggestnum && newnum.length==5){
      biggestnum=newnum
    }
  }
  return parseInt(biggestnum)
}
