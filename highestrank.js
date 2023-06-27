//returns the most-common number in an array of numbers
//and the highest-value most-common number if there's a tie

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

console.log(highestRank([12,10,8,12,7,6,4,10,12,10]))

//testcases
//1 should return 12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))

//2 should return 3
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]))
