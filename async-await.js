const delay = ms => {
  return new Promise(r => setTimeout(() => {
    r()
  }, ms))
}

delay(2000).then(() => console.log('2 sec'));

const url ='https://jsonplaceholder.typicode.com/todos';

function fetchTodos() {
  console.log('Fetch todo started...')
  return  delay(2000)
  .then(() => fetch(url))
  .then((response) => {
    return response.json()
  })
}

fetchTodos()
.then(data => console.log('Data', data))
.catch(err => console.error('Error', err))

async function fetchAsyncTodos() {
  console.log('1', 'Fetch todo started...')
  try {
     await delay(2000)
  console.log('2')
  const response = await fetch(url)
  console.log('3')
  const data = await response.json()
  console.log('4', data)
  } catch (e){
   console.error(e)
  } finally {
    console.log('Finally')
  }
 
}

fetchAsyncTodos();
