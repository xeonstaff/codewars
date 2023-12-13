const {assert} = require("chai");

// formats a number of words (namely, nouns) into a single formatted string

function formatWords(words){
 let finalstring = ""

 if(!words) return finalstring

 let realwords = words.filter(Boolean)
 let wordcount = realwords.length;

 if(wordcount === 1) return realwords[0];
 if(wordcount === 2) return `${realwords[0]} and ${realwords[1]}`

  realwords.map((word, i)=>{
    if(i === 0) finalstring += `${word}`
    else if(i === wordcount-1) finalstring += ` and ${word}`
    else finalstring+=`, ${word}`
  })

  return finalstring
}

assert.deepEqual(formatWords(['one', 'two', 'three', 'four']), 'one, two, three and four');
assert.deepEqual(formatWords(['one', '', 'three']), 'one and three') 
