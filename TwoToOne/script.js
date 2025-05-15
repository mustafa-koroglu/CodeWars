function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join("");
}

const a = "xyaabbbccccdefww";
const b = "xxxxyyyyabklmopq";

console.log(longest(a, b));
