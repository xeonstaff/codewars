//calculates how many times a mother at height 'window'
//will see a ball dropped from height 'h' given a ball that
//bounces to proportion 'bounce' of original height

function bouncingBall(h,  bounce,  window) {
  // conditions check
  if(h<=0 || 0 >= bounce || 1 <= bounce || window >= h){
    return -1
  }
  //calculation
  let windowBounces = 1
  let nextheight = h * bounce
  while(nextheight > window){
    windowBounces +=2
    nextheight = nextheight * bounce
  }
  return windowBounces
}
