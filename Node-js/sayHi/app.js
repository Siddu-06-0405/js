//  common js -- every file is module (by default)
//  Modules -- Encapsulated code (only share minimum)

const data = require('./2-globals')
const names = require('./4-names')
const sayHi = require('./5-utils')
require('./3-function')
sayHi('yhwach');
sayHi(names.johan);
sayHi(names.yuiichi);

// console.error(module);
sayHi(data.singlePerson.name)
sayHi(data.items[0])
