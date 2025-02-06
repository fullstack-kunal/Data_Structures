


function StockBuySell(arr) {

  let res = 0
  for (let i = 0; i < arr.length; i++) {
    for(let j=i+1;j<arr.length;j++) {
        res = Math.max(res, arr[j] - arr[i])
    }
  }

  return res;
}

let prices = [7, 6, 4, 3, 1];

console.log(StockBuySell(prices));
