function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

console.log(greet("Mustafa", "Mustafa")); // "Hello boss"
console.log(greet("Ali", "Veli")); // "Hello guest"
