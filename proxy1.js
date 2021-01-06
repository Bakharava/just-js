//Obgects
const person1 = {
  name: 'Volha',
  age: 36,
  job: 'Developer'
}

const op = new Proxy(person1, {
  get(target, prop) {
    console.log('target', target)
    console.log('prop', prop)

    if(!(prop in target)) {
      prop.split(_).map(p => target[p]).join(' ')
    }
    return target[prop]
  },

  set(target, prop, value) {
    if(prop in target) {
      target[prop] = value
    } else {
      throw new Error(`No ${prop} in target`)
    }
  },

  has(target, prop) {
    return ['age', 'name', 'job'].includes(prop)
  },

  deleteProperty(target, prop) {
    console.log('Deliting...', prop);
    delete target[prop];
    return true;
  }
});

// Function

const log = text => `Log: ${text}`;

const fp = new Proxy(log, {
  apply(target, thisArg, args) {
    console.log('target...', target)
    console.log('thisArg...', thisArg)
    console.log('args...', args)

    return target.apply(thisArg, args).toUpperCase()
  }
})

//Classes


class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const PersonProxy = new Proxy(Person, {
  construct(target, args) {
    console.log('Construct...')

  //  return new target(...args)

  return new Proxy(new target(...args), {
    get(t, prop) {
      console.log('Getting prop', prop)
      return t[prop]
    }
  })
  }
})

const p = new PersonProxy('Ola', 20)