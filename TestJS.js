// Attributes: name, age, DNI, sex (M for male, F for female), weight and height.
class Person {
  #name;
  #age;
  #DNI;
  #sex;
  #weight;
  #height;

  constructor(name, age, sex, weight, height) {
    this.#name = name;
    this.#age = age;
    this.#DNI = this.createDNI();
    this.#sex = this.checkSex(sex);
    this.#weight = weight;
    this.#height = height;
  }

  static nameAgeSexInstance(name, age, sex) {
    return new Person(name, age, sex, 0, 0);
  }

  static noDataInstance() {
    return new Person("", 0, "M", 0, 0);
  }

  calculateIMC = () => {
    const imc = this.#weight / this.#height ** 2;

    if (imc < 20) {
      return -1;
    } else if (imc <= 25) {
      return 0;
    } else {
      return 1;
    }
  };

  isAdult = () => {
    return this.#age > 18 ? 1 : 0;
  };

  checkSex = (sex) => {
    if (!["M", "F"].includes(sex)) {
      return "M";
    } else return sex;
  };

  toString = () => {
    return `
    Name: ${this.#name}
    Age: ${this.#age}
    DNI: ${this.#DNI}
    Sex: ${this.#sex}
    Weight: ${this.#weight} kg
    Height: ${this.#height} m
    `;
  };

  createDNI = () => {
    return Math.random().toString().slice(2, 10);
  };

  getName = () => {
    return this.#name;
  };

  setName = (name) => {
    this.#name = name;
  };

  getAge = () => {
    return this.#age;
  };

  setAge = (age) => {
    this.#age = age;
  };

  getSex = () => {
    return this.#sex;
  };

  setSex = (sex) => {
    this.#sex = sex;
  };

  getDNI = () => {
    return this.#DNI;
  };

  getWeight = () => {
    return this.#weight;
  };

  setWeight = (weight) => {
    this.#weight = weight;
  };

  getHeight = () => {
    return this.#height;
  };

  setHeight = (height) => {
    this.#height = height;
  };
}





test = () => {

const values = {
  name: "Gabriel Maceira",
  age: 36,
  sex: "M",
  weight: 90,
  height: 1.72,
};

const person1 = new Person(
  values.name,
  values.age,
  values.sex,
  values.weight,
  values.height
);

const person2 = Person.nameAgeSexInstance(values.name, values.age, values.sex);

const person3 = Person.noDataInstance();

console.log("PERSON 1 IMC:", person1.calculateIMC());
console.log("PERSON 2 IMC:", person2.calculateIMC());
console.log("PERSON 3 IMC:", person3.calculateIMC());

console.log("PERSON 1 is adult?:", person1.isAdult());
console.log("PERSON 2 is adult?:", person2.isAdult());
console.log("PERSON 3 is adult?:", person3.isAdult());

console.log(person1.toString());
console.log(person2.toString());
console.log(person3.toString());
}

test()