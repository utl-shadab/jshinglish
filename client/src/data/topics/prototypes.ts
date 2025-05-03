export const prototypesData = {
  id: "prototypes",
  title: "Prototypes and Inheritance",
  introduction: {
    en: "JavaScript is a prototype-based language, which means objects can inherit properties and methods from other objects through prototypal inheritance. Understanding the prototype chain is essential for leveraging JavaScript's object-oriented capabilities and for writing efficient, reusable code.",
    hi: "JavaScript ek prototype-based language hai, jiska matlab hai ki objects prototypal inheritance ke through doosre objects se properties aur methods inherit kar sakte hain. JavaScript ki object-oriented capabilities ko leverage karne aur efficient, reusable code likhne ke liye prototype chain ko samajhna essential hai."
  },
  sections: [
    {
      id: "prototype-basics",
      title: "Prototype Basics",
      content: {
        en: "Every JavaScript object has a hidden link to another object called its prototype. When you try to access a property that doesn't exist in an object, JavaScript automatically looks for it in the object's prototype, and if not found, in the prototype's prototype, and so on, forming what's known as the prototype chain.",
        hi: "Har JavaScript object ka doosre object se ek hidden link hota hai jise uska prototype kaha jata hai. Jab aap kisi object mein ek aisi property access karne ki koshish karte hain jo exist nahi karti, to JavaScript automatically use object ke prototype mein dhoondta hai, aur agar wahan nahi milti, to prototype ke prototype mein, aur isi tarah aage, jo prototype chain ke naam se jana jata hai."
      },
      codeExample: {
        code: `// Accessing an object's prototype
const person = { name: 'John' };
console.log(Object.getPrototypeOf(person)); // Object.prototype

// All objects inherit from Object.prototype by default
console.log(person.__proto__ === Object.prototype); // true

// Object.prototype's prototype is null (end of chain)
console.log(Object.getPrototypeOf(Object.prototype)); // null

// Arrays inherit from Array.prototype, which inherits from Object.prototype
const arr = [1, 2, 3];
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); // true

// Functions inherit from Function.prototype
function foo() {}
console.log(Object.getPrototypeOf(foo) === Function.prototype); // true
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype); // true

// Built-in methods come from prototypes
console.log(arr.toString()); // "1,2,3" - method from Array.prototype
console.log(arr.hasOwnProperty('length')); // true - method from Object.prototype

// The 'constructor' property points back to the function that created the object
console.log(arr.constructor === Array); // true
console.log(person.constructor === Object); // true`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's explore how the prototype chain works
const grandfather = {
  surname: 'Smith',
  introduceFamily: function() {
    return \`Family name: \${this.surname}\`;
  }
};

const father = Object.create(grandfather); // Sets grandfather as father's prototype
father.name = 'John';
father.introduceSelf = function() {
  return \`I am \${this.name} \${this.surname}\`;
};

const son = Object.create(father); // Sets father as son's prototype
son.name = 'David';

// Now let's inspect the prototype chain
console.log("Son's name:", son.name); // Direct property
console.log("Son's surname:", son.surname); // Inherited from grandfather
console.log("Son introduces himself:", son.introduceSelf()); // Method from father, but 'this' refers to son
console.log("Son introduces family:", son.introduceFamily()); // Method from grandfather, but 'this' refers to son

// Modifying the prototype affects all objects in the chain
grandfather.language = 'English';
console.log("After adding property to grandfather, son's language:", son.language);

// Shadowing a property (son has its own surname now)
son.surname = 'Smith-Jones';
console.log("After adding surname to son, son's full name:", son.name, son.surname);
console.log("Father's surname is still:", father.surname);

// Checking property ownership
console.log("\\nProperty ownership checks:");
console.log("son.hasOwnProperty('name'):", son.hasOwnProperty('name'));  // true
console.log("son.hasOwnProperty('surname'):", son.hasOwnProperty('surname')); // true
console.log("son.hasOwnProperty('language'):", son.hasOwnProperty('language')); // false

// Walking up the prototype chain
let currentProto = Object.getPrototypeOf(son);
console.log("\\nExploring the prototype chain:");
console.log("son's prototype is father:", currentProto === father); // true

currentProto = Object.getPrototypeOf(currentProto);
console.log("father's prototype is grandfather:", currentProto === grandfather); // true

currentProto = Object.getPrototypeOf(currentProto);
console.log("grandfather's prototype is Object.prototype:", currentProto === Object.prototype); // true

currentProto = Object.getPrototypeOf(currentProto);
console.log("Object.prototype's prototype is null:", currentProto === null); // true`,
        output: `Son's name: David
Son's surname: Smith
Son introduces himself: I am David Smith
Son introduces family: Family name: Smith
After adding property to grandfather, son's language: English
After adding surname to son, son's full name: David Smith-Jones
Father's surname is still: Smith

Property ownership checks:
son.hasOwnProperty('name'): true
son.hasOwnProperty('surname'): true
son.hasOwnProperty('language'): false

Exploring the prototype chain:
son's prototype is father: true
father's prototype is grandfather: true
grandfather's prototype is Object.prototype: true
Object.prototype's prototype is null: true`,
        explanation: {
          en: "This example demonstrates the prototype chain in action. We create a chain of objects where 'son' inherits from 'father', which inherits from 'grandfather'. When we access properties or methods on 'son' that don't exist directly on it, JavaScript looks up the prototype chain until it finds them or reaches the end (null). Methods like 'introduceSelf' and 'introduceFamily' maintain the correct 'this' reference to the original object that called them, regardless of where in the prototype chain the method is defined. This example also shows property shadowing (when an object has its own property with the same name as one in its prototype chain) and how to check if a property is directly owned by an object using hasOwnProperty().",
          hi: "Yeh example prototype chain ko action mein demonstrate karta hai. Hum objects ka ek chain create karte hain jahan 'son' 'father' se inherit karta hai, jo 'grandfather' se inherit karta hai. Jab hum 'son' par aise properties ya methods access karte hain jo directly us par exist nahi karte, to JavaScript prototype chain mein upar tak dhoondta hai jab tak woh unhe find nahi kar leta ya end (null) tak nahi pahunch jata. 'introduceSelf' aur 'introduceFamily' jaise methods original object ke liye correct 'this' reference maintain karte hain jisne unhe call kiya tha, chahe method prototype chain mein kahin bhi define kiya gaya ho. Yeh example property shadowing (jab ek object ke paas apni aisi property ho jiska naam uske prototype chain mein bhi ho) aur hasOwnProperty() ka upyog karke check karna ki koi property directly object ke swamitva mein hai ya nahi, bhi dikhata hai."
        }
      }
    },
    {
      id: "constructor-functions",
      title: "Constructor Functions and Prototypes",
      content: {
        en: "Constructor functions are a traditional way to create objects with a shared prototype in JavaScript. When a function is invoked with the 'new' keyword, a new object is created with its prototype linked to the function's prototype property.",
        hi: "Constructor functions JavaScript mein shared prototype ke saath objects create karne ka ek traditional tarika hain. Jab ek function 'new' keyword ke saath invoke kiya jata hai, to ek naya object create hota hai jiska prototype function ke prototype property se linked hota hai."
      },
      codeExample: {
        code: `// Constructor function
function Person(name, age) {
  // 'this' refers to the new object being created
  this.name = name;
  this.age = age;
  
  // Adding a method directly to the instance (not efficient)
  this.greet = function() {
    return \`Hello, I'm \${this.name} and I'm \${this.age} years old.\`;
  };
}

// Adding a method to the prototype (more efficient)
Person.prototype.introduce = function() {
  return \`My name is \${this.name}.\`;
};

// Creating instances
const john = new Person('John', 30);
const alice = new Person('Alice', 25);

console.log(john.greet()); // Hello, I'm John and I'm 30 years old.
console.log(alice.introduce()); // My name is Alice.

// Methods added to the prototype are shared
console.log(john.introduce === alice.introduce); // true - same method, more efficient
console.log(john.greet === alice.greet); // false - each instance has its own copy

// We can add methods to the prototype even after creating instances
Person.prototype.sayAge = function() {
  return \`I am \${this.age} years old.\`;
};

console.log(john.sayAge()); // I am 30 years old.

// Checking the prototype
console.log(Object.getPrototypeOf(john) === Person.prototype); // true
console.log(john instanceof Person); // true
console.log(john.constructor === Person); // true

// What happens without 'new'?
const badPerson = Person('Bad', 0); // No 'new', 'this' is global or undefined in strict
console.log(badPerson); // undefined, function didn't return anything
// In non-strict mode, it would modify the global object!
// console.log(window.name); // 'Bad' (in browser, not in strict mode)`,
        editable: true
      }
    },
    {
      id: "prototype-inheritance",
      title: "Prototype Inheritance",
      content: {
        en: "Prototype inheritance allows objects to inherit properties and methods from other objects. It's the foundation of JavaScript's object-oriented programming model and enables code reuse, making your applications more efficient and easier to maintain.",
        hi: "Prototype inheritance objects ko doosre objects se properties aur methods inherit karne ki anumati deta hai. Yeh JavaScript ke object-oriented programming model ki foundation hai aur code reuse ko enable karta hai, jisse aapke applications more efficient aur maintain karne mein asaan ho jate hain."
      },
      codeExample: {
        code: `// Creating a hierarchy using constructor functions

// Parent constructor
function Animal(name) {
  this.name = name;
}

// Method on Animal's prototype
Animal.prototype.eat = function(food) {
  return \`\${this.name} is eating \${food}\`;
};

// Child constructor
function Dog(name, breed) {
  // Call parent constructor
  Animal.call(this, name);
  this.breed = breed;
}

// Set up inheritance
// 1. Create a new object with Animal.prototype as its prototype
Dog.prototype = Object.create(Animal.prototype);
// 2. Reset the constructor property
Dog.prototype.constructor = Dog;

// Add a method to Dog's prototype
Dog.prototype.bark = function() {
  return \`\${this.name} says woof! I'm a \${this.breed}.\`;
};

// Create instances
const generic = new Animal('Generic Animal');
const max = new Dog('Max', 'Labrador');

console.log(generic.eat('food')); // Generic Animal is eating food
console.log(max.eat('kibble')); // Max is eating kibble
console.log(max.bark()); // Max says woof! I'm a Labrador.

// Inheritance checks
console.log(max instanceof Dog); // true
console.log(max instanceof Animal); // true
console.log(max instanceof Object); // true

// Another child constructor
function Cat(name, color) {
  Animal.call(this, name);
  this.color = color;
}

// Set up inheritance
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

// Add a method to Cat's prototype
Cat.prototype.meow = function() {
  return \`\${this.name} says meow! I have \${this.color} fur.\`;
};

// Override parent method
Cat.prototype.eat = function(food) {
  return \`\${this.name} is eating \${food} delicately.\`;
};

const whiskers = new Cat('Whiskers', 'white');
console.log(whiskers.eat('tuna')); // Whiskers is eating tuna delicately.
console.log(whiskers.meow()); // Whiskers says meow! I have white fur.

// You can't call dog methods on a cat
// console.log(whiskers.bark()); // Error: whiskers.bark is not a function

// Multiple inheritance is not directly supported
// Instead, you can use composition or mixins`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's create a more complex inheritance hierarchy
// Base constructor
function Vehicle(name, speed) {
  this.name = name;
  this.speed = speed;
}

Vehicle.prototype.move = function() {
  return \`\${this.name} is moving at \${this.speed} mph\`;
};

Vehicle.prototype.stop = function() {
  return \`\${this.name} has stopped\`;
};

// Car constructor
function Car(name, speed, brand) {
  Vehicle.call(this, name, speed);
  this.brand = brand;
  this.wheels = 4;
}

// Inherit from Vehicle
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Add/override methods
Car.prototype.honk = function() {
  return \`\${this.name} says: Beep beep!\`;
};

Car.prototype.move = function() {
  return \`\${Vehicle.prototype.move.call(this)} on \${this.wheels} wheels\`;
};

// Motorcycle constructor
function Motorcycle(name, speed, brand) {
  Vehicle.call(this, name, speed);
  this.brand = brand;
  this.wheels = 2;
}

// Inherit from Vehicle
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

// Add methods
Motorcycle.prototype.wheelie = function() {
  return \`\${this.name} is doing a wheelie! Cool!\`;
};

// ElectricCar constructor (inherits from Car)
function ElectricCar(name, speed, brand, batteryLife) {
  Car.call(this, name, speed, brand);
  this.batteryLife = batteryLife;
  this.fuelType = 'electricity';
}

// Inherit from Car
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

// Add methods
ElectricCar.prototype.charge = function() {
  return \`\${this.name} is charging. Current battery life: \${this.batteryLife}%\`;
};

// Create instances
const generic = new Vehicle("Generic Vehicle", 50);
const sedan = new Car("Family Sedan", 75, "Toyota");
const harley = new Motorcycle("Cruiser", 90, "Harley-Davidson");
const tesla = new ElectricCar("Model 3", 120, "Tesla", 80);

// Test methods and inheritance
console.log("Basic Vehicle:", generic.move());
console.log("Car:", sedan.move());
console.log("Car honking:", sedan.honk());
console.log("Motorcycle:", harley.move());
console.log("Motorcycle special ability:", harley.wheelie());
console.log("Electric Car:", tesla.move());
console.log("Electric Car honking:", tesla.honk());
console.log("Electric Car charging:", tesla.charge());

// Test inheritance relationships
console.log("\\nInheritance checks:");
console.log("tesla instanceof ElectricCar:", tesla instanceof ElectricCar);
console.log("tesla instanceof Car:", tesla instanceof Car);
console.log("tesla instanceof Vehicle:", tesla instanceof Vehicle);
console.log("sedan instanceof ElectricCar:", sedan instanceof ElectricCar);
console.log("harley instanceof Car:", harley instanceof Car);

// Properties inherited from which prototype?
console.log("\\nSource of 'move' method on tesla:");
console.log("tesla.hasOwnProperty('move'):", tesla.hasOwnProperty('move'));
console.log("ElectricCar.prototype.hasOwnProperty('move'):", 
           ElectricCar.prototype.hasOwnProperty('move'));
console.log("Object.getPrototypeOf(tesla).hasOwnProperty('move'):", 
           Object.getPrototypeOf(tesla).hasOwnProperty('move'));
console.log("Object.getPrototypeOf(Object.getPrototypeOf(tesla)).hasOwnProperty('move'):", 
           Object.getPrototypeOf(Object.getPrototypeOf(tesla)).hasOwnProperty('move'));`,
        output: `Basic Vehicle: Generic Vehicle is moving at 50 mph
Car: Family Sedan is moving at 75 mph on 4 wheels
Car honking: Family Sedan says: Beep beep!
Motorcycle: Cruiser is moving at 90 mph
Motorcycle special ability: Cruiser is doing a wheelie! Cool!
Electric Car: Model 3 is moving at 120 mph on 4 wheels
Electric Car honking: Model 3 says: Beep beep!
Electric Car charging: Model 3 is charging. Current battery life: 80%

Inheritance checks:
tesla instanceof ElectricCar: true
tesla instanceof Car: true
tesla instanceof Vehicle: true
sedan instanceof ElectricCar: false
harley instanceof Car: false

Source of 'move' method on tesla:
tesla.hasOwnProperty('move'): false
ElectricCar.prototype.hasOwnProperty('move'): false
Object.getPrototypeOf(tesla).hasOwnProperty('move'): false
Object.getPrototypeOf(Object.getPrototypeOf(tesla)).hasOwnProperty('move'): true`,
        explanation: {
          en: "This example demonstrates complex prototype inheritance with multiple levels. We create a hierarchy: Vehicle → Car → ElectricCar, and Vehicle → Motorcycle. Each constructor adds its own properties and methods, and sometimes overrides methods from the parent. When we call a method like move() on a subclass instance, JavaScript first looks for it on the instance itself, then in its direct prototype, and keeps moving up the chain until it finds it. We use method overriding to customize behavior while still being able to call the parent method with Vehicle.prototype.move.call(this). The instanceof operator confirms the inheritance relationships, and our final check shows how methods are resolved through the prototype chain.",
          hi: "Yeh example multiple levels ke saath complex prototype inheritance ko demonstrate karta hai. Hum ek hierarchy create karte hain: Vehicle → Car → ElectricCar, aur Vehicle → Motorcycle. Har constructor apne khud ke properties aur methods add karta hai, aur kabhi-kabhi parent ke methods ko override karta hai. Jab hum kisi subclass instance par move() jaise method ko call karte hain, to JavaScript pehle use instance khud par dhoondta hai, phir uske direct prototype mein, aur chain mein upar tak jaata rehta hai jab tak use mil nahi jata. Hum method overriding ka upyog behavior ko customize karne ke liye karte hain jabki parent method ko Vehicle.prototype.move.call(this) ke saath call kar pate hain. instanceof operator inheritance relationships ki pushti karta hai, aur hamara final check dikhata hai ki methods prototype chain ke through kaise resolve kiye jate hain."
        }
      }
    },
    {
      id: "es6-classes",
      title: "ES6 Classes and Inheritance",
      content: {
        en: "ES6 introduced the class syntax, providing a more familiar way to define constructor functions and prototype-based inheritance. Under the hood, JavaScript classes still use prototypes, but they offer a cleaner, more intuitive syntax for creating objects and inheritance hierarchies.",
        hi: "ES6 ne class syntax introduce kiya, jo constructor functions aur prototype-based inheritance define karne ka ek more familiar way provide karta hai. Under the hood, JavaScript classes abhi bhi prototypes ka upyog karte hain, lekin ve objects aur inheritance hierarchies banane ke liye ek cleaner, more intuitive syntax offer karte hain."
      },
      codeExample: {
        code: `// ES6 Class syntax
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  // Method added to Animal.prototype
  eat(food) {
    return \`\${this.name} is eating \${food}\`;
  }
  
  // Static method (on the constructor, not instances)
  static isAnimal(obj) {
    return obj instanceof Animal;
  }
}

// Creating instances
const cat = new Animal('Whiskers');
console.log(cat.eat('fish')); // Whiskers is eating fish
console.log(Animal.isAnimal(cat)); // true

// Inheritance using extends
class Dog extends Animal {
  constructor(name, breed) {
    // Call parent constructor
    super(name);
    this.breed = breed;
  }
  
  // Adding a new method
  bark() {
    return \`\${this.name} says woof! I'm a \${this.breed}.\`;
  }
  
  // Overriding a parent method
  eat(food) {
    return \`\${this.name} devours \${food} enthusiastically!\`;
  }
  
  // Using the parent method
  eatPolitely(food) {
    return super.eat(food);
  }
}

const max = new Dog('Max', 'Labrador');
console.log(max.bark()); // Max says woof! I'm a Labrador.
console.log(max.eat('kibble')); // Max devours kibble enthusiastically!
console.log(max.eatPolitely('gourmet food')); // Max is eating gourmet food

// Inheritance checks
console.log(max instanceof Dog); // true
console.log(max instanceof Animal); // true

// Class fields (newer JavaScript feature)
class Person {
  // Public class field
  species = 'human';
  
  // Private class field (prefixed with #)
  #age;
  
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }
  
  // Getter
  get age() {
    return this.#age;
  }
  
  // Setter
  set age(value) {
    if (value < 0) {
      throw new Error('Age cannot be negative');
    }
    this.#age = value;
  }
  
  // Public method
  introduce() {
    return \`Hi, I'm \${this.name}, \${this.#age} years old.\`;
  }
  
  // Private method (prefixed with #)
  #calculateBirthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.#age;
  }
  
  // Public method that uses private method
  getBirthYear() {
    return this.#calculateBirthYear();
  }
}

const john = new Person('John', 30);
console.log(john.introduce()); // Hi, I'm John, 30 years old.
console.log(john.species); // human
console.log(john.age); // 30 (accessed via getter)
john.age = 31; // Uses setter
console.log(john.introduce()); // Hi, I'm John, 31 years old.
console.log(john.getBirthYear()); // Current year - 31

// Can't access private members directly
// console.log(john.#age); // SyntaxError
// john.#calculateBirthYear(); // SyntaxError`,
        editable: true
      }
    }
  ],
  exercise: {
    title: "Prototype and Inheritance Exercise",
    description: {
      en: "Create a hierarchy of shapes using both constructor functions with prototypes and ES6 classes. Implement a base Shape class/constructor with methods for calculating area and perimeter, then extend it to create specific shapes like Circle, Rectangle, and Triangle.",
      hi: "Prototypes ke saath constructor functions aur ES6 classes dono ka upyog karke shapes ka hierarchy create karein. Area aur perimeter calculate karne ke methods ke saath ek base Shape class/constructor implement karein, phir use extend karke Circle, Rectangle, aur Triangle jaise specific shapes create karein."
    },
    starterCode: `// Part 1: Using constructor functions and prototypes
function Shape() {
  // Base shape constructor
}

// TODO: Add methods to Shape.prototype for area() and perimeter()

function Circle(radius) {
  // TODO: Implement Circle constructor and inheritance
}

function Rectangle(width, height) {
  // TODO: Implement Rectangle constructor and inheritance
}

// Part 2: Using ES6 Classes
class ShapeClass {
  // TODO: Implement base Shape class with area() and perimeter() methods
}

// TODO: Implement Circle, Rectangle classes that extend ShapeClass

// Test your implementation
// Create instances of both versions and call their methods
// Compare the results to make sure both implementations work the same way`,
    expectedOutput: `Circle area: 78.54
Rectangle area: 20
ES6 Circle area: 78.54
ES6 Rectangle area: 20`,
    hint: {
      en: "For prototype inheritance, remember to use Object.create() to set up the prototype chain, and fix the constructor property. For ES6 classes, use the 'extends' keyword and 'super()' in the constructor. In both cases, implement the area and perimeter calculations appropriately for each shape (for circles, remember that area = πr² and perimeter = 2πr).",
      hi: "Prototype inheritance ke liye, prototype chain set up karne ke liye Object.create() ka upyog karna yaad rakhein, aur constructor property ko fix karein. ES6 classes ke liye, 'extends' keyword aur constructor mein 'super()' ka upyog karein. Dono cases mein, har shape ke liye area aur perimeter calculations ko appropriately implement karein (circles ke liye, yaad rakhein ki area = πr² aur perimeter = 2πr)."
    }
  },
  summary: {
    en: "JavaScript's prototype-based inheritance system allows objects to inherit properties and methods from other objects, forming a prototype chain. Constructor functions create objects with a shared prototype, enabling efficient code reuse. ES6 classes provide a cleaner syntax for working with prototypes but still use the same prototype-based inheritance under the hood. Understanding prototypes is essential for mastering JavaScript's object-oriented capabilities, creating efficient inheritance hierarchies, and fully utilizing JavaScript's built-in objects and methods.",
    hi: {
      text: "JavaScript ka prototype-based inheritance system objects ko doosre objects se properties aur methods inherit karne ki anumati deta hai, jisse ek prototype chain banta hai.",
      points: [
        "Constructor functions shared prototype ke saath objects create karte hain, jo efficient code reuse ko enable karta hai",
        "ES6 classes prototypes ke saath kaam karne ke liye ek cleaner syntax provide karte hain lekin abhi bhi under the hood wohi prototype-based inheritance ka upyog karte hain",
        "JavaScript ki object-oriented capabilities ko master karne, efficient inheritance hierarchies create karne, aur JavaScript ke built-in objects aur methods ka poori tarah se upyog karne ke liye prototypes ko samajhna essential hai",
        "Prototype chain me properties aur methods ko dhoondne ki process performance par asar daal sakti hai, isliye deep hierarchies se bachna chahiye",
        "Modern JavaScript development mein, ES6 classes ka upyog kaafi common hai, lekin prototype behavior ko samajhna debugging aur advanced patterns ke liye important rehta hai"
      ]
    }
  },
  prevTopic: {
    id: "this-keyword",
    title: "The 'this' Keyword"
  },
  nextTopic: {
    id: "async-js",
    title: "Asynchronous JavaScript"
  }
};