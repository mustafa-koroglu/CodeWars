function uniqueInOrder(iterable) {
  const result = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      result.push(iterable[i]);
    }
  }

  return result;
}
console.log(uniqueInOrder("AAAABBBCCDAABBB"));

console.log(uniqueInOrder("ABBCcAD"));

console.log(uniqueInOrder([1, 2, 2, 3, 3]));
