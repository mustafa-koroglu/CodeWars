"use strict";
const number = Number(prompt("Bir sayı girin:"));
console.log(`Girdiğiniz Sayı: ${number}`);

const digitalRoot = function (n) {
  if (n < 10) {
    return n;
  }

  let sum = 0;
  while (n > 0) {
    sum += n % 10; // Son basamağı toplama ekle
    n = Math.floor(n / 10); // Son basamağı at
  }

  return digitalRoot(sum); // Yeni toplamın dijital kökünü hesaplamak için fonksiyonu tekrar çağır
};

console.log(`Dijital Kök: ${digitalRoot(number)}`);
