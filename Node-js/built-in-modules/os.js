const os = require('os')

console.log(os.userInfo())
console.log(os.uptime())

const details = {
    name: os.type(),
    release: os.release(),
    platform: os.platform(),
    arch: os.arch(),
    totamemory: os.totalmem(),
    freememory: os.freemem()
}

console.log(details)