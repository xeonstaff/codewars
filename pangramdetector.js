//detects a pangram!

function isPangram(string) {
  let alphaarray = Array.from("abcdefghijklmnopqrstuvwxyz");
  let testarray = Array.from(string);
  for (i = 0; i < testarray.length; i++) {
    let thischar = testarray[i].toLowerCase();
    if (alphaarray.includes(thischar, 0)) {
      alphaarray.splice(alphaarray.indexOf(thischar), 1);
    }
  }
  return alphaarray.length == 0;
}
