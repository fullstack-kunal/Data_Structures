function moveNegatives(a) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (a[i] < 0) {
      if (i != j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      j++;
    }
  }

  return temp;
}

const arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
console.log(moveNegatives(arr));
