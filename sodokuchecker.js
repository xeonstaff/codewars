//checks a sodouku puzzle for completeness

function doneOrNot(board) {
  done = true;
  //checking rows
  board.map((x) => {
    if (x.length != new Set(x).size) {
      done = false;
    }
  });
  //checking columns
  for (i = 0; i < board.length; i++) {
    let columnlist = [];
    for (j = 0; j < board[i].length; j++) {
      columnlist.push(board[j][i]);
    }
    if (columnlist.length != new Set(columnlist).size) {
      done = false;
    }
  }

  //checking region A
  let a = 0;
  let b = 3;
  for (i = 0; i < 3; i++) {
    regionlist = [];
    for (j = 0; j < 3; j++) {
      regionlist.push(...board[j].slice(a, b));
    }
    if (regionlist.length != new Set(regionlist).size) {
      done = false;
    }
    a += 3;
    b += 3;
  }

  //checking region B
  let c = 0;
  let d = 3;
  for (i = 0; i < 3; i++) {
    regionlist = [];
    for (j = 3; j < 6; j++) {
      regionlist.push(...board[j].slice(c, d));
    }
    if (regionlist.length != new Set(regionlist).size) {
      done = false;
    }
    c += 3;
    d += 3;
  }

  //checking region C
  let e = 0;
  let f = 3;
  for (i = 0; i < 3; i++) {
    regionlist = [];
    for (j = 6; j < 9; j++) {
      regionlist.push(board[j].slice(e, f));
    }
    if (regionlist.length != new Set(regionlist).size) {
      done = false;
    }
    e += 3;
    f += 3;
  }

  return done ? "Finished!" : "Try again!";
}
