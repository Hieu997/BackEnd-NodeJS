const checkLicensePlateInHanoi = (licensePlate) => {
  const array = ["29", "30", "31", "32", "33", "40"];
  for (const value of array) {
    //sử dụng startWith để kiểm tra 1 giá trị đầu vào
    if (licensePlate.startsWith(value)) {
      return true;
    }
  }
  return false;
};

const listLicensePlates = [
  "29P1-124123",
  "30L9-63510",
  "59H1-123456",
  "40P1-212132",
];
let listLicensePlateInHanois = [];
for (const value of listLicensePlates) {
  if (checkLicensePlateInHanoi(value)) {
    listLicensePlateInHanois.push(value);
  }
}
document.write("Biển số xe thuộc Hà Nội: " + listLicensePlateInHanois);
