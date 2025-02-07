function findKthSmallest(arr, k) {
  let removeDup = [...new Set(arr)];

  removeDup.sort((a, b) => a - b);

  return removeDup[k - 1];
}

console.log(findKthSmallest([1, 4, 2, 5, 7, 3, 7, 2, 3, 2], 2));
