var o = {p: 42, q: true};
var {p, q, m=1} = o;

console.log(p); // 42
console.log(q); // true
console.log(m)