//sums & aggregates book categories to help a bookseller

function stockList(listOfArt, listOfCat) {
  if(listOfArt.length==0 || listOfCat.length==0){
      return ''
  }
  let result = [];

  function stockCount(art, cats) {
    let stockDict = {};
    //make dictionary of category:stockcount pairs
    cats.map((cat)=>{
        stockDict[cat]=0
    })
    //count number of books in each dictionary category
    for (i = 0; i < art.length; i++) {
      let thisCat = art[i].split(" ")[0][0];
      let thisNum = parseInt(art[i].split(" ")[1]);
      if (Object.keys(stockDict).includes(thisCat)) {
        stockDict[thisCat] += thisNum;
      }
    }
    //construct formatted strings for 'result' array
    for (const key in stockDict) {
      if (stockDict.hasOwnProperty(key)) {
        result.push(`(${key} : ${stockDict[key]})`);
      }
    }
  }

  stockCount(listOfArt, listOfCat);
  return result.join(" - ");
}
