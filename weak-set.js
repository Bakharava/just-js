const usersData = [
  {id: 1, name: 'Ola', job: 'Developer', age: 36},
  {id: 2, name: 'Vika', job: 'Counter', age: 37},
  {id: 3, name: 'Vladik', job: 'Student', age: 15},
  {id: 4, name: 'Vlad', job: 'Backend developer', age: 29},
];

const visits = new WeakSet()
visits.add(usersData[0]).add(usersData[1])
usersData.splice(1, 1)
console.log(visits.has(usersData[0]))