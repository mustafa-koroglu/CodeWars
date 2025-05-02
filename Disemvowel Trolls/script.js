"use strict";

function disemvowel(str) {
  return str.replace(/[aeiouy]/gi, "");
}

console.log(disemvowel("Gaziantep"));
