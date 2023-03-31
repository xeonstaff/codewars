//sorts emojis based on their emotional valence

function sortEmotions(arr, order){
  if(!arr.length) return arr
  const emotdict = {
    ':D':1, ':)':2, ':|':3, ':(':4, 'T_T':5 
  }
  const emotdict2 = {
    1:':D', 2:':)', 3:':|', 4:':(', 5:'T_T' 
  }
  let numlist = arr.map((emotion) => emotdict[emotion])
  numlist = order ? numlist.sort() : numlist.sort().reverse()
  return numlist.map(key => emotdict2[key])

}
