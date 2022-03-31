const weekday = [
  "Chủ nhật",
  "Thứ hai",
  "Thứ ba",
  "Thứ tư",
  "Thứ năm",
  "thứ sáu",
  "Thứ bảy",
];
const day = new Date();
const printDay = day.getDay();
document.write("Hôm nay là " + weekday[printDay]);
