const numbers = ["3", "22", "12", "4", "15", "5", "32", "101"];
document.getElementById("before").innerHTML = numbers;
function checkX() {
  const checknumber = numbers.some((x) => {
    return x >= 100;
  });
  if (checknumber == true) {
    document.getElementById("after").innerHTML =
      "Dãy số CÓ chứa số lớn hơn hoặc bằng 100";
  } else {
    document.getElementById("after").innerHTML =
      "Dãy số KHÔNG chứa số lớn hơn hoặc bằng 100";
  }
}
checkX();
