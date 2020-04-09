var a = new Array()
console.log(Object.prototype.toString)
debugger

var b = new Object()

debugger
// 所有 typeof 返回值为 "object" 的对象（如数组）都包含一个内部属性 [[Class]]（我们可以把它看作一个内部的分类，而非传统的面向对象意义上的类）。这个属性无法直接访问，一般通过 Object.prototype.toString(..) 来查看。
// es6 之后去读Symbol toStringTag