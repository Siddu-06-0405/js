const path = require('path')

console.log(path.sep)

const filepath = path.join('/js/','NODE-JS/','built-in-modules','os.js')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

//absolut path -- resolve
const absolutepath = path.resolve(__dirname,'os.js')
console.log(absolutepath)