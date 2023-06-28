class Person {
  constructor(name) {
    this.name = name;
  }
  sayMyName() {
    return `My name is a ${this.name}!`;
  }
}

module.exports = {
  Person,
};
