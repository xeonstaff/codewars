// reverses byte-sized data input as array of numbers

function dataReverse(data) {
  let newarray = []
  while(data.length!=0){
    newarray.push(data.splice(0,8))
  }
  return( newarray.reverse().flat())

}
