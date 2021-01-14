const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
  return new Promise((resolve , reject) => {


  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.responseType = 'json';
  xhr.setRequestHeader('Content-Type', 'application/json')

  xhr.onload = () => {
    /*console.log(JSON.parse(xhr.response));*/
    if (xhr.status >= 400) {
      console.error(xhr.response)
    }
    resolve(xhr.response);
  }

  xhr.onerror = () => {
   reject(xhr.response);
  };

  xhr.send(JSON.stringify(body));
  })
};

/*sendRequest('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err))*/

sendRequest('POST', requestURL, {
  name: 'Ola',
  age: 36
})
  .then(data => console.log(data))
  .catch(err => console.log(err))
