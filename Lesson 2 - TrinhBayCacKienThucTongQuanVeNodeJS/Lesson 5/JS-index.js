const obj = {
  name: "Bình Nguyễn",
  hourlyRate: 50000,
  timesheets: [
    {
      date: "1/12/2021",
      hours: 5,
    },
    {
      date: "2/12/2021",
      hours: 8,
    },
    {
      date: "3/12/2021",
      hours: 8,
    },
    {
      date: "4/12/2021",
      hours: 5,
    },
    {
      date: "6/12/2021",
      hours: 8,
    },
    {
      date: "7/12/2021",
      hours: 4,
    },
    {
      date: "8/12/2021",
      hours: 4,
    },
  ],
};
//Tạo 1 mảng rỗng để chứa hour
let arr = [];
for (const timeSheet of obj.timesheets) {
  arr.push(timeSheet.hours);
}
//Tính tổng hour
const totalHours = arr.reduce((total, currentValue) => {
  return total + currentValue;
});
//In ra kết quả
document.write("Lương của nhân viên là " + totalHours * obj.hourlyRate);
