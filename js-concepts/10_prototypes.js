//__proto__
//Object.getPrototypeOf()

/*function Cat(name, color) {
  this.name = name
  this.color = color
}

Cat.prototype.voice = function () {
  console.log(`Cat ${this.name} says meow`)
}

const cat = new Cat('Kitty', 'brown')
cat.voice()
console.log(Cat.prototype)
console.log(cat)
console.log(cat.__proto__ === Cat.prototype)
console.log(cat.constructor)*/

//=============

function Person() {}
Person.prototype.legs = 2
Person.prototype.skin = 'white'

const person = new Person()

person.name = 'Volha'

console.log('skin' in person)
console.log(person.legs)
console.log(person.name)

console.log(person.hasOwnProperty('name'))
console.log(person.hasOwnProperty('skin'))

//============= Object.create()
let proto = {year: 2019}

const myYear = Object.create(proto)

proto.year = 2020
proto = {year: 3030}

console.log(myYear.year)
console.log(myYear.hasOwnProperty('year'))
console.log(myYear.__proto__ === proto)
