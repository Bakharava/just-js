let obj = {name: 'weakmap'}
// const arr = [obj]
// obj = null
// console.log(arr[0])

const map = new WeakMap([  // get set delete has
  [obj, 'obj data']
])

obj = null
console.log(map)

const cache = new WeakMap()

function cacheUser(user) {
  if(!cache.has(user)) {
    cache.set(user, Date.now())
  }

  return cache.get(user)
}

let lena = {name: 'Lena'}
let ola = {name: 'ola'}
cacheUser(lena)
cacheUser(ola)

lena = null
console.log(cache.has(lena))
console.log(cache.has(ola))

