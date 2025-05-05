function sumPositive(arr) {
  return arr
    .filter((num) => num > 0) // sadece pozitifleri al
    .reduce((sum, num) => sum + num, 0); // topla
}

console.log(sumPositive([1, -4, 7, 12])); // 20
console.log(sumPositive([-1, -2, -3])); // 0
console.log(sumPositive([])); // 0
