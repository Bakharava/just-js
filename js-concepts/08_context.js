const person = {
  surname: 'Stark',

  knows: function (what, name) {
    console.log(`You know ${what}, ${name} ${this.surname} `)
  }
}

const jhon = {
  surname: 'Snow'
}

person.knows('all', 'Tony')

person.knows.call(jhon, 'nothing', 'Jhon')
person.knows.apply(jhon, ['nothing', 'Jhon'])
person.knows.call(jhon, ...['nothing', 'Jhon'])
person.knows.bind(jhon, 'nothing', 'Jhon')()

//======================

/*function Person(name, age) {
  this.name = name
  this.age = age
  console.log(this)
}

const elena = new Person('Elena', 20)*/

//=====

function logThis() {
  console.log(this)
}

const obj = {num:42}

logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()

//============ implicit

const animal = {
  legs: 4,
  logThis: function () {
    console.log(this)
  }
}

animal.logThis()

//=============

function Cat(color) {
  this.color = color

  ;(() => console.log('Arrow this', this))()
}
 new Cat('red')
