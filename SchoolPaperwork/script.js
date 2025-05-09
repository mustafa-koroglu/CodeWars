function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

console.log(paperwork(5, 5)); // 25
console.log(paperwork(-5, 5)); // 0
console.log(paperwork(5, -5)); // 0
console.log(paperwork(0, 0)); // 0
