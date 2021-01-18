class User {
  constructor(name) {
    this.name = name
    this.room = null
  }

  send(message, to) {
    this.room.send(message, this, to)
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`)
  }
}

class ChatRoom {
  constructor() {
    this.users = {}
  }

  register(user) {
    this.users[user.name] = user
    user.room = this
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from)
    } else {
      Object.keys(this.users).forEach(key => {
        if(this.users[key] !== from) {
          this.users[key].receive(message, from)
        }
      })
    }
  }
}

const ola = new User('Olga')
const vika = new User('Vika')
const vlad = new User('Vlad')


const room = new ChatRoom()

room.register(ola)
room.register(vika)
room.register(vlad)

vlad.send('Hello!', ola)
ola.send('Hello! Hello', vlad)
vika.send('Hello everyone')
