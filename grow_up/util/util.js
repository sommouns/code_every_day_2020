var util = require('util');
//util.inherit();
console.log(util.inspect({name:'zfpx'}));
console.log(util.isArray([]));
console.log(util.isRegExp(/\d/));
console.log(util.isDate(new Date()));
console.log(util.isError(new Error));