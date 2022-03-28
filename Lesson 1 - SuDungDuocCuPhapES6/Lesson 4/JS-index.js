class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getIformation() {
    return `name: ${this.name} - age: ${this.age}`;
  }
  setName(name) {
    this.name = name;
  }
  setAge(age) {
    this.age = age;
  }
}

let yourname = new person("Mike", "25");
document.getElementById("before").innerHTML = yourname.getIformation();
yourname.setName("John");
yourname.setAge("20");
document.getElementById("after").innerHTML = yourname.getIformation();
