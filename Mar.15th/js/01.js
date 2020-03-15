// let a = function foo(num) {
//     foo = num
//     console.log(foo)
// }

// a()

// (function foo(num) {
//     foo = num
//     console.log(foo)
// })(1)


// let a = function foo(num) {
//     foo = num
//     console.log(foo)
// }

// console.log(foo)


let a = function foo(num) {
    a = num
    console.log(a)
}

a(2)