// a simple parser for 'deadfish'

function parse(data) {
  let commands = ["i", "d", "s", "o"];
  let result = [];
  let number = 0;
  data.split("").map((x) => {
    if (commands.includes(x)) {
      switch (x) {
        case "i":
          number += 1;
          break;
        case "d":
          number -= 1;
          break;
        case "s":
          number *= number;
          break;
        case "o":
          result.push(number);
          break;
      }
    }
  });
  return(result);
}
