const personela = Object.create({
  calculateAge() {
    console.log('Age: ', new Date().getFullYear() - this.birthYear)
  }
}, {
  name: {
    value: 'Ola',
    enumerable: true,
    writable: true,
    configurable: true,
  },
  birthYear: {
    value: 1984,
    enumerable: false,
    configurable: false,
  },
  age: {
    get() {
      return new Date().getFullYear() - this.birthYear;
    },
    set(value) {
      document.body.style.background = 'blue'
      console.log('Set', value)
    }
  }
});

personela.name = 'Olechka';
delete personela.birthYear;

console.log(personela)

for (let key in personela) {
  if(personela.hasOwnProperty(key)) {
    console.log('Key', key, personela[key])
  }
}