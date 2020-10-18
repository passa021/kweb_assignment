const path = require('./sayHello');

const myFile = '/home/ubuntu'
const dirname = path.dirname(myFile);
const basename = path.basename(myFile);
const extname = path.extname(myFile);

console.log('path.dirname = ${dirname}');
console.log('path.basename = ${basename}');
console.log('path.extname = ${extname}');