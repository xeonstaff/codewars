//capitalize every other letter of a string in 2 ways: starting from index 0, and from index 1

function capitalize(s){
  function cap(string, startingindex){
    for(i=startingindex; i<string.length; i+=2){
      string = string.split('')
      string[i] = string[i].toUpperCase()
      string = string.join('')
    }
    return string
  }
  return [cap(s,0),cap(s,1)];
};
