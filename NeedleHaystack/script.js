function findNeedle(haystack) {
  const index = haystack.indexOf("needle");
  return `found the needle at position ${index}`;
}

console.log(findNeedle(["hay", "junk", "needle", "more junk"]));
