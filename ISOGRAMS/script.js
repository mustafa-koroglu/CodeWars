"use strict";

// isIsogram fonksiyonu, bir kelimenin isogram olup olmadığını kontrol eder
function isIsogram(str) {
  // Harflerin büyük/küçük harf duyarlılığını ortadan kaldırmak için tüm harfleri küçük harfe çeviriyoruz
  str = str.toLowerCase();

  // Boş bir nesne (set) oluşturuyoruz, böylece her harfi bir kez depolayabiliriz
  let charSet = new Set();

  // Girilen kelimenin her harfi için döngü başlatıyoruz
  for (let char of str) {
    // Eğer harf daha önce set içinde varsa, tekrar eden bir harf vardır, isogram değildir
    if (charSet.has(char)) {
      return false;
    }

    // Harfi sete ekliyoruz
    charSet.add(char);
  }

  // Döngü bittiyse, tekrar eden harf yoktur, kelime bir isogramdır
  return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
