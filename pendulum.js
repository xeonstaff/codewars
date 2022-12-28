//given an array of integers 'values', 
//arrange them to correspond the back-and-forth
//motion of a pendulum 

function pendulum(values) {
  sortedValues = values.sort(function(a, b) {
  return a - b;
});
  let pendyArray=[sortedValues[0]]
  for(i=1;i<sortedValues.length;i++){
    if(i%2==1){
      pendyArray.push(sortedValues[i])
    }
    if(i%2==0){
      pendyArray.unshift(sortedValues[i])
    }
  }
  return pendyArray
}
