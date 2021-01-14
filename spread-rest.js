//spread
const citiesRussia = ['Moscow', 'Saint-Petersburg', 'Kazan', 'Novosibirsk'];
const citiesEurope = ['Berlin', 'Praha', 'Paris'];

console.log(...citiesRussia);
console.log([...citiesEurope]);

const citiesRussiaWithPopulation = {
  Moscow: 20,
  SaintPetersburg: 8,
  Kazan: 5
}


const citiesEuropeWithPopulation = {
  Berlin: 10,
  Praha: 3,
  Paris: 2
}

console.log({...citiesRussiaWithPopulation});
console.log({...citiesRussiaWithPopulation, citiesEuropeWithPopulation});

const divs = document.querySelectorAll('div'); //we receive nodoe collection
console.log(divs);

const nodes = [...divs];   //convert node collections to array


//rest

function sum(a, b, ...rest) {
  return a + b + rest.reduce((a, i)=> a + i, 0)
}

const numbers = [1, 2, 3, 4, 5];

console.log(sum(...numbers));

//const  a = numbers[0];
const  [a, b, ...others] = numbers // this is destructuring

const person = {
  name: 'Kate',
  city: 'Moscow',
  age: 25,
  country: 'Russia'
}

const {name, age, ...address} = person;

console.log(address);
