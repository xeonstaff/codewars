//creates an X-shape in ascii art

function x(n) {
    let halfplus = (n - 1) / 2;
    let barArray = [`${"□".repeat(halfplus)}■${"□".repeat(halfplus)}`];
    let midtracker = 1;
    let sidetracker = 1
    for (i = 0; i < halfplus; i++) {
      let sidewhitecount = halfplus - sidetracker
      let sidewhites = sidewhitecount > 0 ? "□".repeat(sidewhitecount) : "";
      barArray.push(
        sidewhites + "■" + "□".repeat(midtracker) + "■" + sidewhites
      );
      barArray.unshift(
        sidewhites + "■" + "□".repeat(midtracker) + "■" + sidewhites
      );
      midtracker += 2;
      sidetracker+=1
    }
    return barArray.join("\n")
}
