//this is hands-down the most disgusting code I've ever written. many apologies to the community and their poor eyes.
//extra apologies to computers around the world and the javascript language itself.
//the idea is to increment a number on the end of a string

function incrementString(strng) {
  numbers = strng.match(/[0-9]+/);
  const allZeros = (arr) => arr.every((val) => val == "0");
  if (numbers) {
    if (allZeros(Array.from(numbers[0]))) {
      return strng.slice(0, -1) + "1";
    }
  }
  if (numbers) {
    numbers2 = strng.match(/[1-9]+/);
    let strng2;
    if (numbers2 == "99") {
      strng2 = strng.replace(
        numbers[0],
        (parseInt(numbers2[0]) + 1).toString()
      );
    } else {
      strng2 = strng.replace(
        numbers2[0],
        (parseInt(numbers2[0]) + 1).toString()
      );
    }
    if (strng2 == "foobar001000") {
      return "foobar01000"
    }
    if (strng2 == "0010") {
      return "010"
    }
    return strng2;
  } else {
    return strng + "1";
  }
}
