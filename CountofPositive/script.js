function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];

  let positives = 0;
  let negatives = 0;

  for (let num of input) {
    if (num > 0) positives++;
    else if (num < 0) negatives += num;
  }

  return [positives, negatives];
}

console.log(countPositivesSumNegatives([1, 2, -3, -4, 5]));
