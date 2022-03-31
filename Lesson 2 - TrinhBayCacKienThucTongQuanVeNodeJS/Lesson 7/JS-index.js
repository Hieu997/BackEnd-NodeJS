const array = [
  {
    name: "Bình 1",
    gender: "male",
    score: 8,
  },
  {
    name: "Bình 2",
    gender: "male",
    score: 10,
  },
  {
    name: "Bình 3",
    gender: "female",
    score: 7,
  },
  {
    name: "Bình 4",
    gender: "female",
    score: 7,
  },
  {
    name: "Bình 5",
    gender: "female",
    score: 10,
  },
  {
    name: "Bình 6",
    gender: "male",
    score: 9,
  },
];

let arrMaleScore = [];
let arrFemaleScore = [];
for (const value of array) {
  if (value.gender === "male") {
    arrMaleScore.push(value.score);
  } else {
    arrFemaleScore.push(value.score);
  }
}
const avarageScore = (arr) => {
  const totalScore = arr.reduce((total, currentValue) => {
    return total + currentValue;
  });
  return totalScore / arr.length;
};

document.write(
  "Điểm trung bình của nam là " + avarageScore(arrMaleScore) + "</br>"
);
document.write("Điểm trung bình của nữ là " + avarageScore(arrFemaleScore));
