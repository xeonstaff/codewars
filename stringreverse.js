//reverse a string while removing all non-alpha characters

function reverseLetter(str) {
  let newstring=''
  
  for (i=0;i<str.length;i++){
    str[i].match(/[a-z]/i) ? newstring=newstring+str[i]:newstring=newstring
  }
  
  return newstring.split('').reverse().join('')
  
  
}
