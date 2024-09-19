// Defining a class
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

// Creating an instance of the class
const dog = new Animal("Dog", "Woof");
dog.makeSound(); // Outputs: Dog says Woof

// Inheritance
class Dog extends Animal {
    constructor(name, sound, breed) {
        super(name, sound);
        this.breed = breed;
    }

    getBreed() {
        console.log(`Breed: ${this.breed}`);
    }
}

const myDog = new Dog("Dog", "Woof", "Labrador");
myDog.makeSound(); // Outputs: Dog says Woof
myDog.getBreed(); // Outputs: Breed: Labrador
