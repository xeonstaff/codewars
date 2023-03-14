//a simple (and very non-secure) encryption system
//takes in a string -- coverts first character to ASCII code
//then, swaps the 2nd and last letters

var encryptThis = function(text) {
  return text.split(' ').map(x=>x.length != 1 ? x.length==2 ? x[0].charCodeAt(0) + x.slice(-1):x[0].charCodeAt(0)+x.slice(-1)+x.slice(2,x.length-1)+x.slice(1,2):x.charCodeAt(0)).join(' ')
}
