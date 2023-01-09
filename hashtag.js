//generates a hashtag from a string sentence

function generateHashtag(str) {
  let hashed= str.trim()
    ? "#" +
        str
          .trim()
          .split(" ")
          .map((word) => {
            return word ? word[0].toUpperCase() + word.slice(1) : "";
          })
          .join("")
    : false;
    return hashed.length <= 140?hashed:false
}
