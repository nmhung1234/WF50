hello();

function hello() {
    console.log('hello');
}

// hello2();

// const hello2 = function () {
//     console.log('hello');
// }

const helloArr = () => {
    console.log('hello');
}

helloArr();

document.querySelector('#myBtn').addEventListener('click', function () {
    console.log(this);
});

document.querySelector('#myBtn').addEventListener('click', () => {
    console.log(this);
})


const sum = (a,b) => a + b;