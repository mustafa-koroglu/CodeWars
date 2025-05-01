function digPow(n, p) {
  const digits = n.toString().split("").map(Number);

  const total = digits.reduce((sum, digit, index) => {
    return sum + Math.pow(digit, p + index);
  }, 0);

  const k = total / n;
  return Number.isInteger(k) ? k : -1;
}

console.log(digPow(95, 2));
