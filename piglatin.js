//a pig latin encoder

function pigIt(str) {
  x = str.split(" ");
  y = [];
  for (i = 0; i < x.length; i++) {
    if (x[i].match(/^[0-9a-zA-Z]+$/)) {
      z = x[i].split("");
      y.push(z.slice(1).join("") + z[0] + "ay");
    } else {
      y.push(x[i]);
    }
  }

  return y.join(" ");
}
