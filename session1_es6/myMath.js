const sum = (a, b) => { return a + b };
const sub = (a, b) => { return a - b };
const divine = (a, b) => { return a * b };
const multi = (a, b) => { return a / b };


export { sum, sub, divine, multi };

const myMath = {
    sum: sum,
    sub: sub,
    divine: divine,
    multi: multi,
};

export default myMath;