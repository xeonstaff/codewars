//sums a sequence from 'begin' to 'end'
//taking steps size 'step'

const sequenceSum = (begin, end, step) => {
  if(begin>end){
    return 0
  }
  if(begin == end){
    return begin
  }
  let seqArray = []
  for(i=begin;i<=end;i+=step){
    seqArray.push(i)
  }
  return seqArray.reduce((x,y) => x+y)
};
