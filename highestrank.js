function highestRank(arr){
    //count the numbers
    let numdict={}
    arr.forEach((num)=>{
        numdict[num] ? numdict[num] += 1 : numdict[num] = 1
    })

    //find highest count value
    let highRank = 0
    Object.values(numdict).forEach((count)=> highRank=highRank<count?count:highRank)
    console.log('hr', highRank)

    //find numbers match that highest-count value
    let highNums = []
    Object.keys(numdict).forEach((num)=> {if(numdict[num]===highRank) highNums.push(parseInt(num))})
    console.log('hn', highNums)

    return Math.max(...highNums)   
}
