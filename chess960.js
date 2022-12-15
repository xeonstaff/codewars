// given a string representation, check if a Fischer random chess board is valid

function isValidChess960(pieces) {
  let isValid = true;
  let piecearray = pieces.split("");
  //bishop check
  if (piecearray.indexOf("B") % 2 === piecearray.lastIndexOf("B") % 2) {
    isValid = false;
  }
  //rook check
  if (
    (piecearray.indexOf("K") < piecearray.indexOf("R") &&
      piecearray.indexOf("K") < piecearray.lastIndexOf("R")) ||
    (piecearray.indexOf("K") > piecearray.indexOf("R") &&
      piecearray.indexOf("K") > piecearray.lastIndexOf("R"))
  ) {
    isValid = false;
  }

  return isValid;
}
