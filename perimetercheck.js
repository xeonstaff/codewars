//checks the perimiter of all squares in a fibanocchi rectangle

function perimeter(n) {
  //fibonacci generator
  let fiblist;
  n == 0 ? (fiblist = [1]) : (fiblist = [1, 1]);
  for (i = 0; i < n - 1; i++) {
    fiblist.push(fiblist[fiblist.length - 1] + fiblist[fiblist.length - 2]);
  }

  //perimeter calculator
  let perimiter = 0;
  fiblist.map((x) => {
    perimiter += x * 4;
  });
  return perimiter;
}
