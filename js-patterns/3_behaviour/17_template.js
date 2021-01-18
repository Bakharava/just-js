class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {

  }

  work() {
    return`${this.name} does ${this.responsibilities()}`
  }
  getPaid() {
    return `${this.name} has salary ${this.salary}`
  }
}

class Dev extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return 'Create program'
  }
}

class QA extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return 'Testing program'
  }
}

const dev = new Dev('Olga', 100000)

console.log(dev.getPaid())
console.log(dev.work())

const tester = new QA('Yulya', 90000)

console.log(tester.getPaid())
console.log(tester.work())

