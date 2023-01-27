//finds the highest-scoring word according to the letterts' place in the alphabet

function high(str) {
  // assigns a score to a single word based on its letters
  function scoretheword(word) {
    alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
    let wordscore = Array.from(word).reduce(
      (a, b) => a + alphabet.indexOf(b)+1,
      0
    );
    return wordscore;
  }
  // assigns scores to all words in string, then returns the highest scoring word
  function whatshigh(stringy) {
    wordarray = stringy.split(" ");
    scoresarray = wordarray.map((x) => parseInt(scoretheword(x)));
    highestword = wordarray[scoresarray.indexOf(Math.max(...scoresarray))];
    return highestword;
  }
  return whatshigh(str);
}

