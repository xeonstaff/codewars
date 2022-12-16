//calculates arithmatic expressions in the formm one(plus(two()))
//I know eval() is the devil but I can't import better node modules here so ¯\_(ツ)_/¯

function check(x) {
  return x && x.length && x.length > 1;
}

function one(x) {
  return check(x) ? Math.floor(eval(`1${x}`)) : 1;
}

function two(x) {
  return check(x) ? Math.floor(eval(`2${x}`)) : 2;
}
function three(x) {
  return check(x) ? Math.floor(eval(`3${x}`)) : 3;
}

function four(x) {
  return check(x) ? Math.floor(eval(`4${x}`)) : 4;
}
function five(x) {
  return check(x) ? Math.floor(eval(`5${x}`)) : 5;
}

function six(x) {
  return check(x) ? Math.floor(eval(`6${x}`)) : 6;
}
function seven(x) {
  return check(x) ? Math.floor(eval(`7${x}`)) : 7;
}

function eight(x) {
  return check(x) ? Math.floor(eval(`8${x}`)) : 8;
}
function nine(x) {
  return check(x) ? Math.floor(eval(`9${x}`)) : 9;
}

function zero(x) {
  return check(x) ? Math.floor(eval(`0${x}`)) : 0;
}

function plus(x) {
  return `+${x}`;
}
function minus(x) {
  return `-${x}`;
}
function times(x) {
  return `*${x}`;
}
function dividedBy(x) {
  return `/${x}`;
}
