//rot13 encoder -- a childs cipher

function rot13(message) {
  alpharraysmall = "abcdefghijklmnopqrstuvwxyz".split("");
  alpharraybig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const shift = (a) => {
    if(a.match(/^[a-zA-Z]+$/)){
        issmall = alpharraysmall.includes(a);
        thearray = issmall ? alpharraysmall : alpharraybig;
        theindex = thearray.indexOf(a) + 13;
        return theindex >= 26 ? thearray[theindex - 26] : thearray[theindex];
    } else{
        return a
    }
  };
  return message
    .split("")
    .map((x) => {
      return x.replace(x, shift(x));
    })
    .join("");
}
