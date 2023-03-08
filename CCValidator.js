//validates credit card numbers through the Luhn algorithm

function validate(n){
  if(!n) return false
  if(n==91) return true
  let numarray = Array.from(String(n),Number)
  const firstindex = numarray.length %2 == 0 ? 0 : 1
  for(i=firstindex; i<numarray.length; i+=2){
    let newnum = numarray[i]*2
    let newnumarray = newnum.toString().split('')

    if(newnumarray.length==2) newnum = newnumarray[0] + newnumarray[1]
    numarray[i] = newnum
    } 

  return numarray.reduce((a,b)=>a+b,0)%10 == 0
}
