// Wrapper

const withDefaultValue = (target, defaultValue = 0) => {
  return new Proxy(target, {
    get:(obj, prop) => (prop in obj) ? obj[prop] : defaultValue
  }) 
}

const position = withDefaultValue({
  x: 20,
  y: 42
},
0
)

console.log(position)

//Hidden properties

const withHiddenProps = (target, prefix ="_") => {
  return new Proxy(target, {
    has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
    ownKeys: obj => Reflect.ownKeys(obj)
    .filter(p => !p.startsWith(orefix)),
    get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0
  })
};

const data = withHiddenProps({
  name: 'Ola',
  age: 36,
  _uid: '15254638'
});


//Optimization

const userData = [
  {id: 1, name: 'Ola', job: 'Developer', age: 36},
  {id: 2, name: 'Vika', job: 'Counter', age: 37},
  {id: 3, name: 'Vladik', job: 'Student', age: 15},
  {id: 4, name: 'Vlad', job: 'Backend developer', age: 29},
];

const IndexArray = new Proxy(Array, {
  construct(target, [args]){
    const index = {}
    args.forEach(item => (index[item.id] = item));
    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          case 'push': return item => {
            index[item.id] = id
            arr[prop].call(arr, item)
          }
            
            break;
          case 'finfById':
           return id => index[id]
        
          default: 
          return arr[prop]
            break;
        }
      }
    })
  }
})

const users = new IndexArray(userData)