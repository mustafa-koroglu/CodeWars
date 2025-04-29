let str = "Mustafa";
function maskify(str) {
  if (str.length <= 4) return str;
  const lastFour = str.slice(-4);
  const masked = "#".repeat(str.length - 4);
  return masked + lastFour;
}
console.log(maskify(str));
