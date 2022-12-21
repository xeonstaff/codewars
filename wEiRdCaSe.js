//converts a string to a given "weird" case

function toWeirdCase(string) {
  function weirdify(word) {
    wordArray = word.split("");
    let index = 0;
    let x = wordArray.map((char) => {
      if (index % 2 == 0) {
        index += 1;
        return char.toUpperCase();
      } else {
        index += 1;
        return char.toLowerCase();
      }
    });
    return x.join("");
  }
  return string
    .split(" ")
    .map((word) => {
      return weirdify(word);
    })
    .join(" ");
}
