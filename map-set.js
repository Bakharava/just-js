const obj = {
  name: 'Ola',
  age: 36,
  job: 'Dev'
}

const entries = [
  ['name', 'Ola'],
  ['age', 36],
  ['job', 'Dev']
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)

//console.log(map.get('job'))

map.set('newField', 47)
.set(obj, 'Value of object')
// map.delete('job')
// map.clear()
// console.log(map.has('job'))

// for (let entry of map.entries()){
//   console.log(entry)
// }

// for (let [key, value] of map.entries()){
//   console.log(key, value)
// }

// for (let val of map.values()){
//   console.log(val)
// }

// for (let key of map.keys()){
//   console.log(key)
// }

// map.forEach((val, key, m) => {
//    console.log(val, key, m)
// })

// ===================
// const arr = [...map] // equals Array.from(map)
// console.log(arr)

// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj)

// =====================

const users = [
  {id: 1, name: 'Ola', job: 'Developer', age: 36},
  {id: 2, name: 'Vika', job: 'Counter', age: 37},
  {id: 3, name: 'Vladik', job: 'Student', age: 15},
  {id: 4, name: 'Vlad', job: 'Backend developer', age: 29},
];

const visits = new Map();

visits
.set(users[0], new Date())
.set(users[1], new Date(new Date().getTime() + 1000 * 60))
.set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
  return visits.get(user)
}

// console.log(lastVisit(users[1]))

// SET

// const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])
// console.log(set)
// console.log(set.has(30))
// console.log(set.size)
// console.log(set.values())
// console.log(set.keys())

// set.add(10).add(30).add(20)
// set.delete(1)
// set.clear()

function uniqValues(arr) {
  return [...new Set(arr)]          // equals return Array.from(new Set(arr))
}

console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 5, 6, 6, 6]))