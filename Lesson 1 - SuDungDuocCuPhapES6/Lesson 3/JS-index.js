const fruits = [
  {
    name: "Apple",
  },
  {
    name: "Mango",
  },
  {
    name: "Banana",
  },
  {
    name: "Lemon",
  },
];

document.getElementById("before").innerHTML = JSON.stringify(fruits);

const newfruits = fruits.map((item, index) => {
  return { ...item, id: index };
});

document.getElementById("after").innerHTML = JSON.stringify(newfruits);
