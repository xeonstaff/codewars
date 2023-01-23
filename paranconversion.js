//converts characters in word to parathesis ')' & '(' based
//on if they occur once or more than once in the word

function duplicateEncode(word) {
  //creates an object of occurances of characters word
  wordobject = {};
  function countChars(wordtocount) {
    Array.from(wordtocount)
      .map((x)=>x.toLowerCase())
      .map((x) => {
        if (Object.keys(wordobject).includes(x)) {
          wordobject[x] += 1;
        } else {
          wordobject[x] = 1;
        }
    });
  }
  countChars(word);

  //creates a new string based on occurances of chars in word
  let finalstring = "";
  function parenString(wordtoparen) {
    Array.from(wordtoparen).map((x) => {
      if ((wordobject[x.toLowerCase()] == 1)) {
        finalstring += "(";
      } else {
        finalstring += ")";
      }
    });
  }
  parenString(word);
  return finalstring;
}
