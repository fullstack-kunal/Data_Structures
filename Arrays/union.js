function union(a, b) {
  const merged = [...new Set(a), ...new Set(b)];

  return [...new Set(merged)];
}

let a = [1, 2, 3, 2, 1];
let b = [3, 2, 2, 3, 3, 2];

console.log(union(a, b));
