// accept an n-D list of fighter names, the starting position [y,x], and moves on a charpad ('up','down','left', and/or 'right). 
// return the character names that the cursos passes over

function streetFighterSelection(fighters, position, moves){
  let fighterlist = []
  let currentlist = position[0]
  let currentpos = position[1]
  const movemap = (direction) => {
    switch(direction){
      case('right'):
        currentpos == (fighters[currentlist].length - 1) ? currentpos = 0 : currentpos+=1
        break
      case('left'):
        currentpos == 0 ? currentpos = fighters[currentlist].length -1 : currentpos-=1
        break
      case('up'):
        currentlist == 0 ? '' : currentlist-=1
        break
      case('down'):
        currentlist == fighters.length - 1 ? '' : currentlist+=1 
        break
    }
  }
  moves.forEach(move => {
    movemap(move)
    fighterlist.push(fighters[currentlist][currentpos])
  })
  return fighterlist
}
