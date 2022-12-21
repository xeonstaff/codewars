//converts a title (Str) to Title Case, given a list of words Arr[Str] to not capitalize

function titleCase(title, minorWords) {
  if (!title) {
    return "";
  }
  let minorArray = []
  if (minorWords){
      minorArray = minorWords.split(" ").map((word) => word.toLowerCase());
  }

  let titleArray = title
    .toLowerCase()
    .split(" ")

  function capitalize(word) {
    let wordArray = word.toLowerCase().split("");
    let capitalWord = wordArray[0].toUpperCase() + wordArray.slice(1).join("");
    return capitalWord;
  }

  let initial = true;

  let titledTitle = titleArray
    .map((word) => {
      if (initial === false && minorArray.includes(word)) {
        return word;
      } else {
        initial = false;
        return capitalize(word);
      }
    })
    .join(" ");

  return titledTitle;
}
