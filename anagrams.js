function anagrams(word, words) {
  const wordArray = Array.from(word).sort();
  //console.log(wordArray);
  let newArray = [];
  for (i = 0; i < words.length; i++) {
    let thisWordsArray = Array.from(words[i]).sort();
    //console.log(wordArray)
    if (thisWordsArray.join('') == wordArray.join('')) {
      newArray.push(words[i]);
    }
  }
  return newArray;
}
