// puts dashes before and after each odd number in an integer

function dashatize(num) {
  if(!Number.isInteger(num)) {return "NaN"}
  let dashetizedNum = ''
  num.toString().split('').forEach(number=>{
    number % 2 == 0 ? 
      dashetizedNum += number:
      dashetizedNum += `-${number}-`
  })
  //replaces i. leading and trailing dashes with empty chars and ii. double-dashes with single dashes
  return dashetizedNum.replace(/^-+|\-+$/g, '').replace(/--/g, '-')
}

// Test 1 -- should return '1-2-3-4-5-6
console.log(dashatize(123456))
// Test 2 -- should return '68-1-5'
console.log(dashatize(6815))
// Test 3 -- should return '9-7-4-3-02'
console.log(dashatize(974302))
