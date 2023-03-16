// return 1 if there's a 3-number run of the same number in num1
// and a 2-number run of th esame number in num2
// otherwise, return 0

function tripledouble(num1, num2) {
  let tripnum = []
  let num1array = num1.toString().split('')
  num1array.map((num, index)=>{
    if(num == num1array[index+1] && num==num1array[index+2]){
      tripnum.push(num)
    }
  })
  console.log(tripnum)
  dubnum = null
  let num2array = num2.toString().split('')
  console.log(num2array)
  if(tripnum){
    num2array.map((num, index)=>{
      if(num == num2array[index+1] && tripnum.includes(num)){
        dubnum = num
      }
    })
  }
  console.log(dubnum)
  return dubnum ? 1:0
}
