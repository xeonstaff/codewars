//simple fraction to mixed-number converter
//(one day I'll be able to write beautiful code)

function mixedFraction(s) {
  let first_part = parseInt(s.match(/[0-9]+(?=\/)/));
  let second_part = parseInt(s.match(/(?<=\/-?)[0-9]+/));

  if (second_part == 0) {
    throw "no dividing by 0 please";
  } else if (first_part % second_part == 0) {
    if (first_part / second_part == 0) {
      return "0"
    }
    return negatives((first_part / second_part).toString());
  }

  //this function modified from Stackoverflow user Phrogz
  function reducer(fraction) {
    let numerator = parseInt(fraction.match(/[0-9]+(?=\/)/));
    let denominator = parseInt(fraction.match(/(?<=\/)[0-9]+/));
    var gcd = function gcd(a, b) {
      return b ? gcd(b, a % b) : a;
    };
    gcd = gcd(numerator, denominator);
    return (numerator / gcd + "/" + denominator / gcd).toString();
  }

    //appends a negative if needed
    function negatives(stringy) {
      let negative_count = s.match(/-/g)?s.match(/-/g).length:'';
      if(negative_count==1){
        stringy = "-"+stringy
      }
      return stringy
    }
  
  let integer = Math.floor(first_part / second_part);

  //return fraction only if there's no integer portion
  if (integer === 0) {
    return negatives(reducer((first_part % second_part) + "/" + second_part));
  }

  let mixed_number =
    integer + " " + reducer((first_part % second_part) + "/" + second_part);

  return negatives(mixed_number);
}
