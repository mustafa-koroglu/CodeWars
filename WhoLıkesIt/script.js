function likes(names) {
  // Eğer liste boşsa
  if (names.length === 0) {
    return "no one likes this";
  }

  // Eğer 1 kişi varsa
  if (names.length === 1) {
    return `${names[0]} likes this`;
  }

  // Eğer 2 kişi varsa
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }

  // Eğer 3 kişi varsa
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }

  // Eğer 4 veya daha fazla kişi varsa
  if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
