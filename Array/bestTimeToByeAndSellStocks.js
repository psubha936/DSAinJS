
function calculateProfit(arr) {
  let bestDayToBuy = arr[0];
  let maxProfit = 0;
  let bestDayToSell = arr[0];
  let minimumPriceDay = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let profit = arr[i] - minimumPriceDay;
    if (profit > maxProfit) {
      maxProfit = profit;
      bestDayToBuy = minimumPriceDay;
      bestDayToSell = arr[i];
    }
    if (arr[i] < bestDayToBuy) {
      minimumPriceDay = arr[i];
    }
  }
  if (maxProfit === 0) {
    return { bestDayToBuy: null, bestDayToSell: null, maxProfit }
  }
  return { bestDayToBuy, bestDayToSell, maxProfit }

}

console.log(calculateProfit([5, 3, 7, 1, 4, 1]))