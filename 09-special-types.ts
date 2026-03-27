// Special Type - null
let a: null;

a = null
// a = "Hi"

let b: null | string

b = null
b = "Hi"
// b = 10

// Special Type - undefined
let c: undefined;

c = undefined
// c = null
// c = "Hi"

let d: undefined | string

d = undefined
d = "world, hello!"
// d = null
// d = 10

console.log(a)
console.log(b)
console.log(c)
console.log(d)