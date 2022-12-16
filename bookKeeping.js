//a function for a very particular botched-bookkeeping fix

function balance(book) {
    let regex = /[!@#$,%^&?=*()[\]:;\{\}`"]/g;
    book = book.replace(regex, "");
    let dataArray = book.split("\n");
    if (!dataArray[0]) dataArray.shift();
    let originalBalance = parseFloat(dataArray[0].trim()).toFixed(2);
    let runningTotal = originalBalance;
    let finalArray = [];
    let itemCount = 0;
  
    dataArray.forEach((x) => {
      x = x.trim();
      x = x.split(" ");
      if (x.length > 1) {
        runningTotal = runningTotal - x[2];
        itemCount += 1;
        let y = parseFloat(x[2]).toFixed(2);
        finalArray.push(
          `${x[0]} ${x[1]} ${y} Balance ${runningTotal.toFixed(2)}`
        );
      }
    });
    finalArray.push(
      `Total expense  ${(originalBalance - runningTotal).toFixed(2)}`
    );
    finalArray.push(
      `Average expense  ${((originalBalance - runningTotal) / itemCount).toFixed(
        2
      )}`
    );
    finalArray.unshift(`Original Balance: ${originalBalance}`);
    return finalArray.join("\r\n");
  }
