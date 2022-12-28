//turns a string into a 'wave', where a capital letter represents
//a person standing up

function wave(str){
  let wavearray = []
  var letters = /[A-Za-z]/;
  for(i=0;i<str.length;i++){
    let thisString = str.split('')
    if(str[i].match(letters)){
      thisString.splice(i,1,thisString[i].toUpperCase())
      wavearray.push(thisString.join(''))
      }
  }
  return wavearray
}
