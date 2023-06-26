//returns the number of deaf rats moving away from P 'the Pied Piper'
function countDeafRats(townSquare) {
    let PCoords = [0,0]
    let ratArrows = []
    sortSquare = (square) => {
            square.forEach((line,i)=>{
                //if townSquare is array of strings
                typeof(line) === "string" ? 
                    line.split('').forEach((symb,j)=>{
                        if(symb === ' ')  null
                        else if (symb === 'P') PCoords = [j,i]
                        else ratArrows.push([j,i,symb])
                    })
                : 
                //if townSquare is array of arrays of chars
                line.forEach((symb,j)=>{
                    if(symb === ' ')  null
                    else if (symb === 'P') PCoords = [j,i]
                    else ratArrows.push([j,i,symb])
                })

        }) 
    }
    sortRats = (rats) =>{
        let deafRatCount = 0
        rats.forEach(arrow=>{
            const arrowsymb = arrow[2]
            if(arrowsymb === '↑' && (arrow[0]!=PCoords[0] || arrow[1]<=PCoords[1])) {console.log(arrowsymb),deafRatCount+=1}
            if(arrowsymb === '↓' && (arrow[0]!=PCoords[0] || arrow[1]>=PCoords[1])) {console.log(arrowsymb),deafRatCount+=1}
            if(arrowsymb === '→' && (arrow[0]>=PCoords[0])) {console.log(arrowsymb),deafRatCount+=1}
            if(arrowsymb === '←' && (arrow[0]<=PCoords[0])) {console.log(arrowsymb),deafRatCount+=1}
            if(arrowsymb === '↗' && (arrow[0]>=PCoords[0] && arrow[1]<PCoords[1])) {console.log(arrowsymb),deafRatCount+=1}
            if(arrowsymb === '↘' && (arrow[0]>=PCoords[0] && arrow[1]>=PCoords[1])) {console.log(arrowsymb),deafRatCount+=1}
            if(arrowsymb === '↙' && (arrow[0]<=PCoords[0] && arrow[1]>=PCoords[1])) {console.log(arrowsymb),deafRatCount+=1}
            if(arrowsymb === '↖' && (arrow[0]<=PCoords[0] && arrow[1]<PCoords[1])) {console.log(arrowsymb),deafRatCount+=1}
            else null
        })
        return deafRatCount
    }
    sortSquare(townSquare)
    return(sortRats(ratArrows))
  }


//test cases

//1. should return: 1
// let townSquare1 = [
//     "↗ P     ",
//     "  ↘    ↖",
//     "  ↑     ",
//     "↗       "
//   ];
// console.log(countDeafRats(townSquare1))

//2. should return: 7
let townSquare2 = [
    "        ↗",
    "P ↓   ↖ ↑",
    "    ←   ↓",
    "  ↖ ↙   ↙",
    "↓ ↓ ↓    "
  ];
console.log(countDeafRats(townSquare2))

//3. should return: 0
// let townSquare3 = [
//     "↘ ↓ ↙",
//     "→ P ←",
//     "↗ ↑ ↖"
//   ];
// console.log(countDeafRats(townSquare3))
