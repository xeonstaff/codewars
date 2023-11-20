//translate a string to NATO / Pilot's Alphabet

const NATO = {
  'A': 'Alpha',
  'B': 'Bravo',
  'C': 'Charlie',
  'D': 'Delta',
  'E': 'Echo',
  'F': 'Foxtrot',
  'G': 'Golf',
  'H': 'Hotel',
  'I': 'India',
  'J': 'Juliet',
  'K': 'Kilo',
  'L': 'Lima',
  'M': 'Mike',
  'N': 'November',
  'O': 'Oscar',
  'P': 'Papa',
  'Q': 'Quebec',
  'R': 'Romeo',
  'S': 'Sierra',
  'T': 'Tango',
  'U': 'Uniform',
  'V': 'Victor',
  'W': 'Whiskey',
  'X': 'X-ray',
  'Y': 'Yankee',
  'Z': 'Zulu'
};

function to_nato(words) {
  const isAlpha = (character) => /^[a-zA-Z]$/.test(character);
	return words.replace(/\s/g, "").split('').map(char => isAlpha(char) ? NATO[char.toUpperCase()] : char).join(' ')
}

//test cases

//1. should return "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"
console.log(to_nato('If you can read'));

//2. should return "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf"
console.log(to_nato('Did not see that coming'));

//3. should return "Golf Oscar Foxtrot Oscar Romeo India Tango !"
console.log(to_nato('go for it!'))
