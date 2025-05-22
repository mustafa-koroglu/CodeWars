function moveZeros(arr) {
  const nonZeros = arr.filter((x) => !(typeof x === "number" && x === 0));
  const zeros = arr.filter((x) => typeof x === "number" && x === 0);
  return [...nonZeros, ...zeros];
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
