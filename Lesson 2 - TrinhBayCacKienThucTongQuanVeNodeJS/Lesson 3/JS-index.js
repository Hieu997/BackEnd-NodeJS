const array = [2, 5, 6, 456, 2, 76, 1000, 123, 888];
let max = array[0];
for (let i = 0; i <= array.length; i++) {
  if (max < array[i]) {
    max = array[i];
  }
}
document.write("Mảng giá trị là " + array + "</br>");
document.write("Giá trị lớn nhất trong mảng là " + max);
