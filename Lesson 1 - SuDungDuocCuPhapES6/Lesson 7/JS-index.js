const student = [
  {
    name: "A",
    score: 8,
  },
  {
    name: "B",
    score: 3,
  },
  {
    name: "C",
    score: 9,
  },
  {
    name: "D",
    score: 10,
  },
];
student.sort((a, b) => b.score - a.score); //sắp xếp thứ tự số điểm giảm dần
const places = student.findIndex((value) => value.name === "A") + 1;
document.write("Thứ hạng của A là " + places);
