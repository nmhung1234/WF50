class Car {
    name;
    speed;
    seats;
    brand;

    constructor(name, speed, seats, brand) {
        this.name = name;
        this.speed = speed;
        this.seats = seats;
        this.brand = brand;
    }
    honk() {
        console.log(this.brand + " sound");
    };
    start() { };
    stop() { };
}

class SuperCar extends Car {
    topSpeed;

    static getLimtedSpeed() {
        return 300
    }

    constructor(name, speed, seats, brand, topSpeed) {
        super(name, speed, seats, brand);
        this.topSpeed = topSpeed;
    }

    turborBoot() {
        console.log(this.name + "iss booting to" + this.topSpeed);
    }
    honk() {
        super.honk()
        console.log(this.brand + " awww");
    }
}


const myCar = new Car('Fadil', 100, 4, "VinFast");
const myCar2 = new Car('Vios', 200, 2, "Toyota");
// const mySuperCar = new SuperCar('Spider', 150, 2, "Ferrari", 300);


console.log(myCar);
console.log(myCar2);
// console.log(mySuperCar);

console.log(SuperCar.getLimtedSpeed());

myCar.honk();
myCar2.honk();
// mySuperCar.honk();