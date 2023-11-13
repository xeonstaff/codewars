//given the price of an old car, the price of a new car, saving per month and per-month depreciation
//calculates the number of months you'll need to save to purchase a new car with the trade-in vaule
//note: 'percentLossByMonth' incleases by 0.5% every 2 months

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
  let months = 0;
  let currentSavings = 0;
  let oldCarPrice = startPriceOld;
  let newCarPrice = startPriceNew;

  while ((currentSavings + oldCarPrice) < newCarPrice) {
    currentSavings += savingperMonth;
    oldCarPrice = oldCarPrice * (1 - (percentLossByMonth / 100));
    newCarPrice = newCarPrice * (1 - (percentLossByMonth / 100));

    if (months % 2 === 1) {
      percentLossByMonth += 0.5;
    }
    months++;
  }

  return [months, Math.round(currentSavings + oldCarPrice - newCarPrice)];
}

