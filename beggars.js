//given an array of Int 'values' (amounts of money)
//and number of Int 'n' (number of beggars)
//returns how much each will take home of they take turns in a queue

function beggars(values, n){
  if(!n)return[]
  let beggarBags = {}
  for(i=1; i<=n; i++){
    beggarBags[i]=0
  }
  let turn = 1
  for(j=0; j<values.length; j++){
    beggarBags[turn]+=values[j]
    turn++
    if(turn>n){turn = 1}
  }
  return Object.values(beggarBags)
}

//test cases

//1. should return [15]
console.log(beggars([1,2,3,4,5],1))

//2. should return [9,6]
console.log(beggars([1,2,3,4,5],2))

//3. should return [5,7,3]
console.log(beggars([1,2,3,4,5],3))
