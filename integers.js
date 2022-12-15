//returns the first pair of two primes spaced with a gap of g between the limits m and n

function gap(g, m, n) {
  //I did not invent the Eratsothenes prime filter
  //I am not a Greek mathemetician, dead these 1800 years,
  //resurrected by the Ancient Gods to fulfill my mission
  //of achieving a 1kyu ranking of fake internet points on Codewars
  //thanks to SO user Alexander for JS implimentation
  var eratosthenes = function (n) {
    var array = [],
      upperLimit = Math.sqrt(n),
      output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
      array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
      if (array[i]) {
        for (var j = i * i; j < n; j += i) {
          array[j] = false;
        }
      }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
      if (array[i]) {
        output.push(i);
      }
    }
    //sorry this part is gross idk how to change the function
    return output.filter((x) => {
      return x > m;
    });
  };

  primelist = eratosthenes(n);

  //sequentially compares all prime gaps against g
  for (k = 0; k <= primelist.length - 1; k++) {
    if (primelist[k + 1] - primelist[k] === g) {
      return [primelist[k], primelist[k + 1]];
    }
  }
  return null;
}
