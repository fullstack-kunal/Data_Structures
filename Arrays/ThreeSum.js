function ThreeSum(arr) {

    let n = arr.length
  let res = [];
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] == 0) {
          res.push([i, j, k]);
        }
      }
    }
  }

  return res;
}

const arr = [0, -1, 2, -3, 1];
console.log(ThreeSum(arr));
