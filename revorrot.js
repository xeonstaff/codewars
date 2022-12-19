//reverses or rotates a string of digits based on whether each chunk (of length sz)
//represents an integer such as the sum of the cubes of its digits is divisible by 2

function revrot(str, sz) {
  //minimum size check
  if (str.length < sz || sz===0) {
    return "";
  }
  //create chunks of size sz from str
  let chunklist = [];
  let sliceloc = 0;
  let iterations = Math.floor(str.length / sz);
  for (i = 0; i < iterations; i++) {
    chunklist.push(str.slice(sliceloc, sliceloc + sz));
    sliceloc += sz;
  }
  //reverse chunk
  function reverse(chunk) {
    return chunk.split("").reverse().join("");
  }
  //rotate chunk
  function rotate(chunk) {
    let rotchunk = chunk.split("").slice(1);
    rotchunk.push(chunk.split("")[0]);
    return rotchunk.join("");
  }
  //categorize & transform chunks
  transchunks = chunklist.map((chunk) => {
    let chunksum = 0;
    chunk.split("").forEach((number) => {
      chunksum += parseInt(number);
    });
    return chunksum % 2 == 0 ? reverse(chunk) : rotate(chunk);
  });
  return transchunks.join('')
}
