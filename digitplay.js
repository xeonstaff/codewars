//Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k?

function digPow(n, p) {
  let bignum=0;
  let numlist = String(n)
    .split("")
    .map((str) => Number(str));
  for (i = 0; i < numlist.length; i++) {
    bignum += numlist[i] ** (p + i);
  }
  if (bignum % n == 0) {
    return bignum / n;
  } else {
    return -1;
  }
}
