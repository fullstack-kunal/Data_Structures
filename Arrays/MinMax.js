function findMax(arr) {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }

  return { max, min };
}

const arr = [1, 2, 3, 4, 5, 6, 7, 1, 3];

console.log(findMax(arr));
