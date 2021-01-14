function calcValues(a, b) {
  return [
    a+b,
    a-b,
    a*b,
    a/b
  ]
}

//const res = calcValues(42, 10);
/*const sum = res[0];
const sub = res[1];*/

//const [sum, sub] = res;

//or

//const [sum, sub]= calcValues(42, 10);
/*const [sum, ,mult, other]= calcValues(42, 10);

console.log(sum, mult, other)*/

const [sum, sub = 55, mult, other]= calcValues(42, 10);

console.log(sum, sub, mult, other)

const person = {
  name: 'Kate',
  age: 25,
  address: {
    city: 'Moscow',
    country: 'Russia'
  }
}

const {
  name: firstName = 'default name',
  age,
  car = 'No car',
  address: {city: homeTown, country}
} = person;
console.log(firstName, age, car, homeTown, country)

function logPerson ({name, age}) {
  console.log(name + ' ' + age)
}
 logPerson(person)
