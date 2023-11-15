//determines if you've won the lottery or not
//if the number of 'mini-wins', determined by a string match of the number
//character code in each array, is greater than or equal to integer 'win'

function bingo(tickets, win){
  let miniwin = 0
  tickets.forEach((ticket)=> {
    if(ticket[0].includes(String.fromCharCode(ticket[1]))){miniwin++}
  })
  return miniwin >= win ? 'Winner!' : 'Loser!'
}

//test cases

//1. should return 'Loser!
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))

//2. should return 'Winner!'
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1))

//3. should return 'Loser!
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3))
