//pascalcase-to-snake

function toUnderscore(strng) {
  strng = strng.toString();
  let snake_string = "";
  let capreg = /[A-Z].*?[A-Z]/;
  while (strng.length > 0) {
    let cap = "";
    cap = strng.match(capreg);
    if (cap) {
      let next_part = cap[0].slice(0, cap[0].length - 1);
      snake_string += next_part.toLowerCase() + "_";
      strng = strng.substring(next_part.length);
    } else {
      snake_string += strng.toLowerCase();
      strng = "";
      continue;
    }
  }
  return snake_string;
}
