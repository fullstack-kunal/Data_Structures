//approach 1
function reverseArray(a) {
  let left = 0;
  let right = a.length - 1;

  while (left < right) {
    [a[left], a[right]] = [a[right], a[left]];

    left++;
    right--;
  }

  return a;
}

const arr = [1, 3, 4, 5, 7];
console.log(reverseArray(arr));

//approach 2
