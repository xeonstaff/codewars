//changes a simple string passphrase into a stronger password

function playPass(s, n) {
  let alphashift="abcdefghijklmnopqrstuvwxyz".repeat(10).split('')
  //transform s and reverse the result
  return s.split('').map((char, index) => {
    //replace each letter by one n-shifted in the alphabet
    //uppercase even-position letters, lowercase odd-position letters
    if(char.match(/[a-zA-Z]/)){
      let shiftedletter = alphashift[alphashift.indexOf(char.toLowerCase())+n]
      return index%2==0 ? shiftedletter.toUpperCase() : shiftedletter.toLowerCase()
    }
    //replace each digit by its compliment to 9
    if(char.match(/[0-9]/)){
      return 9-char
    }
    //keep all other characters the same
    return char
  }
  ).reverse().join('')
}
