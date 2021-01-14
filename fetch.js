const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  };
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    return  resp.json().then(err => {
      const e = new Error('Somthing wrong')
      e.data = err
      throw e
    })
  })
}

/*sendRequest('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err))*/

const body = {
  name: 'Ola',
  age: 36
}

sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))
