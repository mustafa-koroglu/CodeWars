function createPhoneNumber(numbers) {
  const format = "(xxx) xxx-xxxx";
  let i = 0;

  return format.replace(/x/g, () => numbers[i++]);
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
