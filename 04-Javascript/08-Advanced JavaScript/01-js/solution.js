// Object constructor for Person
function Person(name, age) {
    // Initialize properties
    this.name = name;
    this.age = age;
}

// Method to greet the person
Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Create an instance of Person
let person1 = new Person("Tweety", 30);
let person2 = new Person("Teddy", 25);

// Call the sayHello method to greet the person
person1.sayHello(); // Output: Hello, my name is Tweety and I am 30 years old.
person2.sayHello(); // Output: Hello, my name is Teddy and I am 25 years old.