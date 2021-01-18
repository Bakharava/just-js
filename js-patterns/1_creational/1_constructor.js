// es5 syntax
function Server(name, ip) {
  this.name = name
  this.ip = ip
}

Server.prototype.getUrl = function () {
  return `https://${this.ip}:80`
}

const aws = new Server('AWS German', '82.21.21.32')
console.log(aws.getUrl())

//es6 syntax

class MyServer {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }

  getUrl = function () {
    return `https://${this.ip}:80`
  }
}
const aws1 = new MyServer('AWS German', '82.21.21.32')
console.log(aws1.getUrl())
