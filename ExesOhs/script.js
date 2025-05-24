function XO(str) {
  str = str.toLowerCase(); // büyük/küçük farkını kaldır

  const xCount = str.split("").filter((c) => c === "x").length;
  const oCount = str.split("").filter((c) => c === "o").length;

  return xCount === oCount;
}

console.log(XO("ooxx")); // true
console.log(XO("xooxx")); // false
console.log(XO("ooxXm")); // true
console.log(XO("zpzpzpp")); // true (hiç x ya da o yoksa da true)
console.log(XO("zzoo")); // false
