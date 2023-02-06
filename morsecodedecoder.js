//assumes access to a function morseCode -- extant in sandbox

decodeMorse = function (morseCode) {
  let finalArray = [];
  let morseArray = morseCode.trim().split("   ");
  let charArray = [];
  for (i = 0; i < morseArray.length; i++) {
    charArray.push(morseArray[i].split(" "));
  }
  for (i = 0; i < charArray.length; i++) {
    let currentword = "";
    for (j = 0; j < charArray[i].length; j++) {
        currentword += MORSE_CODE[charArray[i][j]];
    }
    finalArray.push(currentword);
  }
  return finalArray.join(" ");
};
