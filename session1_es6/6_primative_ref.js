const foo = {};
const bar = foo;
console.log(foo === bar);



const foo = {};
const bar = {};
console.log(foo === bar);


const arr = [];
const arr2 = arr;
arr.push(1);
console.log(arr2);