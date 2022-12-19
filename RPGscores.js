//takes an input of 'good soldier numbers' and 'bad soldiers numbers' and returns which army wins the battle

function goodVsEvil(good, evil) {
  let goodscores = [1, 2, 3, 3, 4, 10];
  let evilscores = [1, 2, 2, 2, 3, 5, 10];
  let goodcount = good.split(" ").map((x) => {
    return parseInt(x);
  });
  let evilcount = evil.split(" ").map((x) => {
    return parseInt(x);
  });

  //score and count both lists of the same length
  function calcScore(score, count) {
    let totalscore = 0;
    for (i = 0; i < score.length; i++) {
      totalscore += score[i] * count[i];
    }
    return totalscore;
  }

  let goodworth = calcScore(goodscores, goodcount);
  let evilworth = calcScore(evilscores, evilcount);

  if (goodworth > evilworth) return "Battle Result: Good triumphs over Evil";
  if (goodworth < evilworth)
    return "Battle Result: Evil eradicates all trace of Good";
  if (goodworth === evilworth) return "Battle Result: No victor on this battle field";
}
