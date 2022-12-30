//calculates the maximum number of levels of
//a beer pyramid you can make given your bonus (int)
//and the price per can of beer (int)

var beeramid = function (bonus, price) {
  let beercans = Math.floor(bonus / price);
  let levels = 1;
  while (beercans >= levels * levels) {
    beercans -= levels * levels;
    levels += 1;
  }
  return bonus && bonus >= price ? levels-1 : 0;
};
