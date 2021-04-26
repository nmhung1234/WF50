const arr = [1, 2, 3, 4, 5, 6];

arr.push(9)

const arr2 = [...arr, 10]

console.log(arr);
console.log(arr2);

const obj = {
    name: 'Hùng',
    age: 20,
    learn: {
        aw: 'wwww'
    }
}

const obj1 = {
    name: 'Hùng',
    age: 20,

}
const obj2 = {
    gender: 'male',
    age: 30,
}

let obj3 = {
    ...obj1,
    ...obj2
}

console.log(obj3);

const { name, age, learn: { aw } } = obj;
console.log(name, age, aw);

//Destructuring
const coordinates = [0,1];

const [x,y] = coordinates;
console.log(x,y);

