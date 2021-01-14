// Dependency inversion principle

class Fetch {
  request(url) {
   // return fetch(url).then(res => res.json())
    return Promise.resolve('data from fetch')
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = 'data from local storage'
   // return localStorage.getItem('key')
    return dataFromLocalStorage
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }

  clientGet() {
    return this.fetch.request('vk.com')
  }
}

class LocalStorageClient {
  constructor() {
    this.localStrage = new LocalStorage()
  }

  clientGet() {
    return this.localStrage.get()
  }
}

class Database {
  constructor(client) {
    this.client = client
  }
  getData(key) {
    return this.client.clientGet(key)
  }
}

const db = new Database(new LocalStorageClient())

console.log(db.getData('rand'))
