//validates credit card numbers through the Luhn algorithm

function validate(n){
  let numarray = Array.from(String(n),Number).reverse()
  for(i=1; i<numarray.length; i+=2){
    let newnum = numarray[i]*2
    let newnumarray = newnum.toString().split('')
    console.log(newnumarray)

    //summing any 2-digit numbers
    if(newnumarray.length==2) newnum = parseInt(newnumarray[0]) + parseInt(newnumarray[1])
    numarray[i] = newnum
    } 
  
  return numarray.reduce((a,b)=>parseInt(a)+parseInt(b),0)%10 == 0
}
