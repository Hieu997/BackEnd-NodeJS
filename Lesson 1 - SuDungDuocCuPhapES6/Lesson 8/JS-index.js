const numbers = [13, 122, 12, 4, 17, 3, 44];
const divisibleToTow = numbers.filter((value) => value % 2 == 0);
const result = divisibleToTow.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});
document.write("Tổng các số chia hết cho 2 là " + result);
