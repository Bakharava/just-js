const myNumber = 42;

localStorage.removeItem('number')
localStorage.setItem('number', myNumber)
console.log(localStorage.getItem('number'));
localStorage.clear()

const obj = {
  name: 'Ola',
  age: 36
}

localStorage.setItem('person', JSON.stringify(obj))

const raw = localStorage.getItem('person');
const person = JSON.parse(raw)
person.name = 'Olga'

console.log(person)


window.addEventListener('storage', event => {
  console.log(event)
})
