
// Object.prototype.sayHello = function() {
//   console.log('Hello');
// }

// const vika = Object.create(person);
// vika.name = 'Vika';

// const str = new String('I');

function hello() {
  console.log('Hello', this)
}

const person = new Object({
  name: 'Ola',
  age: 25,
  greet: hello,
  sayHelloWindow: hello.bind(window),
  sayHelloWindowThis: hello.bind(this),
  logInfo: function(job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Phone is ${phone}`)
    console.groupEnd()
  }
});

const lena = {
  name: 'Lena',
  age: 24,
}

person.logInfo.bind(lena)('Manager', '+3124587545')

 const fnLenaInfoLog = person.logInfo.bind(lena, 'Manager', '+3124587545');
 fnLenaInfoLog();

person.logInfo.call(lena, 'Manager', '+3124587545')
person.logInfo.apply(lena, ['Manager', '+3124587545'])

const arr = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//   return arr.map(i => i*n)
// }

// Array.prototype.multBy = function (n) {
//   console.log('multBy', this)
//   return this.map(i => i*n);
// }

// console.log('multBy', arr.multBy(2))

//console.log(multBy(arr, 15))

// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n)
//   }
// }

// createCalcFunction(42)();

// const calc = createCalcFunction(42);
// calc()

// function createIncrementor(a) {
//   return function(num) {
//     return a + num
//   }
// }

// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)
// console.log(addOne(10));
// console.log(addOne(41));
// console.log(addTen(10));
// console.log(addTen(22));

// function urlGenerator(domain) {
//   return function(url) {
//     return `https://${url}.${domain}`;
//   }
// }

// const comUrl = urlGenerator('com');
// const ruUrl = urlGenerator('ru')
// console.log(comUrl('google'))
// console.log(ruUrl('yandex'));

// function bindContext(context, fn) {
//   return function (...args) {
//     fn.apply(context, args)
//   }
// }

// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}`)
// }

// bindContext(lena, logPerson)()

// window.setTimeout(function () {
//   console.log('Timeout')
// }, 2000)

 console.log('Request data...');
// setTimeout(() => {
//   console.log("Prepearing data...");

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }

//   setTimeout(() => {
//     console.log('Data recieved', backendData)
//   }, 2000);
// }, 2000);

// const pr = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     console.log("Prepearing data...");

//     const backendData = {
//       server: 'aws',
//       port: 2000,
//       status: 'working'
//     }
//     resolve(backendData)
//   }, 2000);
// })

// pr.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data)
//     }, 1500);
//   });

//   // pr2.then(clientData => {
//   //   console.log('Data recieved', clientData)
//   // })
// })
// .then(clientData => {
//   console.log('Data recieved', clientData)
//   clientData.fromPromise = true;
//   return clientData
// }).then(newData => {
//   console.log('New data', newData)
// })
// .catch(err => {
//   console.error('Error', err)
// })
// .finally(() => {
//   console.log('Finally')
// })

const sleep = (ms) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms);
  })
}

//sleep(2000).then(() => console.log('After 2 seconds'))

Promise.all([sleep(2000), sleep(3000)]).then(() => {
  console.log('All promises')
})

Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log('Race promises')
})

const people = [
  {id: 1, name: 'Ola', job: 'Developer', age: 36, budget: 3000},
  {id: 2, name: 'Vika', job: 'Counter', age: 37, budget: 5000},
  {id: 3, name: 'Vladik', job: 'Student', age: 15, budget: 7000},
  {id: 4, name: 'Vlad', job: 'Backend developer', age: 29, budget: 2000},
];

const amount = people.reduce((total, person)=> {
  return total + person.budget
}, 0)

console.log(amount)
