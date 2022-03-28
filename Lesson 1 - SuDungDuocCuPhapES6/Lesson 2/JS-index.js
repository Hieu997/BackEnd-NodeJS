const numbers = ["3", "22", "12", "4", "15", "5", "32"];
document.getElementById("numbers").innerHTML = numbers;
document.getElementById("eventNumbers").innerHTML = numbers.filter(
  (evn) => evn % 2 == 0
);
document.getElementById("oddNumbers").innerHTML = numbers.filter(
  (odd) => odd % 2 !== 0
);
