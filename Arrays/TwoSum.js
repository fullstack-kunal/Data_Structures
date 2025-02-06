function twoSumProblem(a, t) {
  let n = a.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (a[i] + a[j] == t) {
        return true;
      }
    }
  }

  return false;
}

const arr =[1, -2, 1, 0, 5]
const target = 0;

console.log(twoSumProblem(arr, target))
