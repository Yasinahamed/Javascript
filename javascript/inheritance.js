// Base class
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log(`${this.make} ${this.model} is starting.`);
    }
}

// Derived class
class Car extends Vehicle {
    constructor(make, model, doors) {
        super(make, model);
        this.doors = doors;
    }

    openDoors() {
        console.log(`Opening ${this.doors} doors.`);
    }
}

const myCar = new Car("Toyota", "Corolla", 4);
myCar.start(); // Outputs: Toyota Corolla is starting.
myCar.openDoors(); // Outputs: Opening 4 doors.
