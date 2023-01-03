//combine two string according to a special rule...

function workOnStrings(a, b) {
  let a_array = Array.from(a);
  let a_lower = a_array.map((x) => x.toLowerCase());
  let b_array = Array.from(b);
  let b_lower = b_array.map((x) => x.toLowerCase());

  function swapCase(char) {
    let smet = "";
    if (char == char.toUpperCase()) {
      smet = char.toLowerCase();
    }
    if (char == char.toLowerCase()) {
      smet = char.toUpperCase();
    }
    return smet;
  }

  a_array = a_array.map((x) => {
    let b_count = 0;
    if (b_lower.includes(x.toLowerCase())) {
      for (i = 0; i < b_lower.length; i++) {
        if (b_lower[i] == x.toLowerCase()) {
          b_count += 1;
        }
      }
    }
    if (b_count % 2 == 1) {
      return swapCase(x);
    }
    return x;
  });

  b_array = b_array.map((x) => {
    let a_count = 0;
    if (a_lower.includes(x.toLowerCase())) {
      for (i = 0; i < a_lower.length; i++) {
        if (a_lower[i] == x.toLowerCase()) {
          a_count += 1;
        }
      }
    }
    if (a_count % 2 == 1) {
      return swapCase(x);
    }
    return x;
  });

  return a_array.join("") + b_array.join("");
