const number = 3;
let isprimeNumber = true;

if (number < 2) {
  isprimeNumber = false;
} else {
  for (let index = 2; index < number - 1; index++) {
    if (number % index === 0) {
      isprimeNumber = false;
      break;
    }
  }
}

if (isprimeNumber == true) {
  document.write(number + " là số nguyên tố");
} else {
  document.write(number + " không phải là số nguyên tố");
}
