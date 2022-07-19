// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
const sayHi = require('./05-units')
const data = require('./06-alternative-export-method')

console.log(data);

sayHi(names.peter)

require('./07-call-function-like-constuct')