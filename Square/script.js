function isSquare(n) {
  return Number.isInteger(Math.sqrt(n));
}

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
