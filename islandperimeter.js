const {assert} = require("chai");

function landPerimeter(arr) {
  let initialperimiter = arr.reduce((a,b)=>a+b, '').match(/X/g).length * 4
  let sharededges = 0
  numberofneighbors = (coord) => {
    let neighborcount= 0
    if(coord.x+1<arr.length){
      if(arr[coord.x+1][coord.y] === 'X') neighborcount +=1
    }
    if(coord.y<arr[0].length){
      if(arr[coord.x][coord.y+1] === 'X') neighborcount +=1
    }
    return neighborcount
  }
  for(i=0; i<arr.length; i++){
    for(j=0; j<arr[0].length; j++){
      let pointcoord = {x:i,y:j}
      if(arr[i][j]==='X'){
        sharededges += numberofneighbors(pointcoord)
      }
    }
  }
  return `Total land perimeter: ${initialperimiter - (sharededges*2)}`
}

assert.deepEqual(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]), "Total land perimeter: 60");
assert.deepEqual(landPerimeter(["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"]), "Total land perimeter: 52");
assert.deepEqual(landPerimeter(["OOOOXO", "XOXOOX", "XXOXOX", "XOXOOO", "OOOOOO", "OOOXOO", "OOXXOO"]), "Total land perimeter: 40");
