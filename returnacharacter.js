//returns the first non-repeating character in a string

function firstNonRepeatingLetter(s) {
  let letterdict = {};
  let ourbelovedletter = ''
  //creates dictionary from the string
  Array.from(s).map((x) => {
    let y = x.toLowerCase();
    if (letterdict[y]) {
      letterdict[y] += 1;
    } else {
      letterdict[y] = 1;
    }
  });
  //case: all repeating letters
  if (
    Object.keys(letterdict).length <= 1 && Object.values(letterdict)[0] > 1
  ) {
    return "";
  }

  //checks for first letter with no sibling
  for (i = 0; i < Array.from(s).length; i++) {
    if (letterdict[s[i].toLowerCase()] == 1) {
      ourbelovedletter = s[i];
      break;
    }
  }

  return ourbelovedletter;
}
