//returns the names associated with 'hacked' scores that display a different grade than they used to

function findHack(arr) {
    const hackedarr = []
    const scoredict = {
        "A": 30,
        "B": 20,
        "C": 10,
        "D": 5
    }
    arr.map((score)=>{
        if (score[1] > 200) {hackedarr.push(score[0])}
        else{
        let totalpoints = score[2].reduce((a,b) => scoredict[b]?a+scoredict[b]:a+0, 0)
        const scoreboost = score[2].length >= 5 && score[2].filter(letter => letter === 'A' || letter === 'B').length === score[2].length;
        totalpoints = scoreboost ? totalpoints + 20 : totalpoints
        if (score[1] != totalpoints) hackedarr.push(score[0]) 
        }
    })
    return hackedarr
  }
