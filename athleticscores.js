//takes in a string of athletic times and returns the Range, Average and Median

function stat(strg) {
  if (!strg) return ""
  //pass in String time in form HH|MM|SS, returns seconds
  function getSeconds(time){
    let chunks = time.split("|")
    return parseInt(chunks[0]*3600) + parseInt(chunks[1]*60) + parseInt(chunks[2].replace(/,/g))
  }
  //pass in Float/Int seconds, returns String time in form HH|MM|SS 
  function parseSeconds(seconds){
    let hours = Math.floor(seconds/3600)
    let minutes = Math.floor((seconds-hours*3600)/60)
    let secs = Math.floor(seconds-(hours*3600)-(minutes*60))
    function addAZero(num){
      return num.toString().length == 1 ? `0${num}`: num
    }
    return `${addAZero(hours)}|${addAZero(minutes)}|${addAZero(secs)}`
  }
  let secondValues = strg.split(',').map((value)=> getSeconds(value)).sort((a,b) => a-b)
  let aaRange = Math.max(...secondValues) - Math.min(...secondValues)
  let aaAverage = secondValues.reduce((sum,num)=> sum+num,0) / secondValues.length
  let aaMedian = secondValues.length % 2 == 0 ? 
    (secondValues[secondValues.length/2]+secondValues[(secondValues.length/2)-1])/2 :
    +secondValues[Math.floor(secondValues.length/2)]
  return `Range: ${parseSeconds(aaRange)} Average: ${parseSeconds(aaAverage)} Median: ${parseSeconds(aaMedian)}`
}

//test cases

//1. should return "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34"
console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"))

//2. should return "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00"
console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"))

//3. should return "Range: 00|31|17 Average: 02|27|10 Median: 02|24|57"
console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17"))
