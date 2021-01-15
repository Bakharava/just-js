function sayHelloTo(name) {
  const message =`Hello, ${name}`

  return function () {
    console.log(message)  //Hello, Elena
  }
}

const hello0ToElena = sayHelloTo('Elena')

//console.log(hello0ToElena()) //undefined because sayHelloTo do nor have return

//==================

function createFrameworkManager() {
  const fw = ['Vue', 'React']

  return {
    print: function () {
      console.log(fw)
    },
    add: function (frameworks) {
      fw.push(frameworks)
    }
  }
}

const manager = createFrameworkManager()
console.log(manager)
manager.print()
manager.add('Angular')
manager.print()

//setTimeout

const fib = [1, 2, 3, 5, 8, 13]

for (var i = 0; i < fib.length; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(`fib[${j}] = ${fib[j]}`)
    }, 1500)
  })(i)
}

