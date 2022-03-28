const student = [
  {
    name: "Nguyen Van A",
    sex: "female",
  },
  {
    name: "Nguyen Van B",
    sex: "female",
  },
  {
    name: "Nguyen Van C",
    sex: "male",
  },
];
document.getElementById("before").innerHTML = JSON.stringify(student);
function checkX() {
  const checkSex = student.every((element, index) => {
    return element.sex == "female";
  });
  console.log(checkSex);
  if (checkSex == true) {
    document.getElementById("after").innerHTML = "Lớp toàn bạn nữ";
  } else {
    document.getElementById("after").innerHTML =
      "Lớp có nam và nữ hoặc toàn nam";
  }
}
checkX();
