// let
/*
let a = 'Variable a'
let b = 'Variable b'

{
  let a = 'new var A'
  let b ='local b'
  let c ='local c'
  console.log('ScopeA', a)
  console.log('ScopeB', b)
}

console.log('A', a)
console.log('C', c)*/

//const

const PORT = 8080
//PORT = 2000 // this is impossible to change value

const arr = ['Javascript', 'is', 'awesome']
arr.push('language!')
arr[0] = 'JS'

//arr = '' //will be an error

const obj = {}
obj.name = 'Ola'
obj.age = 36

delete obj.age

//obj = '' // will be an error
