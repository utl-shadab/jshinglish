export const oopData = {
  id: "oop",
  title: "Object-oriented JavaScript",
  introduction: {
    en: "Object-oriented programming (OOP) is a programming paradigm based on the concept of 'objects' that contain data and code. In JavaScript, OOP is implemented using prototypes, constructor functions, and, more recently, classes. Understanding OOP concepts helps you create more organized, modular, and maintainable code by grouping related functionality together.",
    hi: "Object-oriented programming (OOP) एक programming paradigm है जो 'objects' के concept पर based है जिनमें data और code होते हैं। JavaScript में, OOP को prototypes, constructor functions, और, हाल ही में, classes का उपयोग करके implement किया जाता है। OOP concepts को समझने से आपको related functionality को एक साथ group करके अधिक organized, modular, और maintainable code create करने में मदद मिलती है।"
  },
  sections: [
    {
      id: "oop-principles",
      title: "Core OOP Principles",
      content: {
        en: "Object-oriented programming is built around four main principles: encapsulation, inheritance, polymorphism, and abstraction. JavaScript supports these principles, though sometimes in ways that differ from traditional class-based languages.",
        hi: "Object-oriented programming चार main principles के इर्द-गिर्द built है: encapsulation, inheritance, polymorphism, और abstraction। JavaScript इन principles को support करता है, हालांकि कभी-कभी traditional class-based languages से अलग तरीकों से।"
      },
      subsections: [
        {
          id: "encapsulation",
          title: "Encapsulation",
          content: {
            en: "Encapsulation is the bundling of data and methods that operate on that data within a single unit (an object). It also restricts direct access to some of the object's components, which is a way of preventing accidental modification of data.",
            hi: "Encapsulation data और methods का bundling है जो उस data पर एक single unit (एक object) के भीतर operate करते हैं। यह object के कुछ components तक direct access को भी restrict करता है, जो data के accidental modification को prevent करने का एक तरीका है।"
          },
          codeExample: {
            code: `// Encapsulation using a constructor function
function BankAccount(initialBalance) {
  // Private variable (through closure)
  let balance = initialBalance;
  
  // Public methods to access private data
  this.getBalance = function() {
    return balance;
  };
  
  this.deposit = function(amount) {
    if (amount > 0) {
      balance += amount;
      return true;
    }
    return false;
  };
  
  this.withdraw = function(amount) {
    if (amount > 0 && amount <= balance) {
      balance -= amount;
      return true;
    }
    return false;
  };
}

// Usage
const account = new BankAccount(1000);
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); // 1500
account.withdraw(200);
console.log(account.getBalance()); // 1300

// Direct access to balance is not possible
console.log(account.balance); // undefined`,
            editable: true
          }
        },
        {
          id: "inheritance",
          title: "Inheritance",
          content: {
            en: "Inheritance allows objects to inherit properties and methods from parent objects, enabling code reuse and establishing a hierarchy between objects.",
            hi: "Inheritance objects को parent objects से properties और methods को inherit करने की अनुमति देता है, जिससे code reuse enable होता है और objects के बीच एक hierarchy establish होती है।"
          },
          codeExample: {
            code: `// Inheritance using ES6 classes
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  getInfo() {
    return \`\${this.year} \${this.make} \${this.model}\`;
  }
  
  startEngine() {
    return "Engine started";
  }
}

// Car class inherits from Vehicle
class Car extends Vehicle {
  constructor(make, model, year, doors) {
    // Call parent constructor
    super(make, model, year);
    this.doors = doors;
  }
  
  // Override parent method
  getInfo() {
    return \`\${super.getInfo()}, \${this.doors} doors\`;
  }
  
  // Add new method
  honk() {
    return "Beep!";
  }
}

// Usage
const myCar = new Car("Toyota", "Corolla", 2022, 4);
console.log(myCar.getInfo());   // "2022 Toyota Corolla, 4 doors"
console.log(myCar.startEngine()); // "Engine started" (inherited)
console.log(myCar.honk());       // "Beep!" (own method)`,
            editable: true
          }
        },
        {
          id: "polymorphism",
          title: "Polymorphism",
          content: {
            en: "Polymorphism allows objects of different types to be treated as objects of a common type. In JavaScript, this is often achieved through method overriding, where a child class provides a specific implementation of a method that is already defined in its parent class.",
            hi: "Polymorphism different types के objects को एक common type के objects के रूप में treat करने की अनुमति देता है। JavaScript में, यह अक्सर method overriding के माध्यम से achieve किया जाता है, जहां एक child class एक method की specific implementation provide करता है जो पहले से ही इसके parent class में defined है।"
          },
          codeExample: {
            code: `// Polymorphism example
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Shape is an abstract class and cannot be instantiated directly");
    }
  }
  
  calculateArea() {
    // This is an abstract method meant to be overridden
    throw new Error("Method 'calculateArea()' must be implemented");
  }
  
  getDescription() {
    return "This is a shape with area: " + this.calculateArea();
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  
  calculateArea() {
    return this.width * this.height;
  }
}

// Using polymorphism
function printArea(shape) {
  if (shape instanceof Shape) {
    console.log(shape.getDescription());
  } else {
    console.log("Not a valid shape");
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

printArea(circle);     // "This is a shape with area: 78.53981633974483"
printArea(rectangle);  // "This is a shape with area: 24"`,
            editable: true
          }
        },
        {
          id: "abstraction",
          title: "Abstraction",
          content: {
            en: "Abstraction means hiding complex implementation details and showing only the necessary features of an object. It helps reduce complexity and allows you to focus on what an object does rather than how it does it.",
            hi: "Abstraction का मतलब है complex implementation details को hide करना और object के केवल necessary features को show करना। यह complexity को reduce करने में help करता है और आपको इस बात पर focus करने की अनुमति देता है कि एक object क्या करता है, न कि यह कैसे करता है।"
          },
          codeExample: {
            code: `// Abstraction example
class Database {
  constructor(connectionString) {
    this.connectionString = connectionString;
  }
  
  // Abstract away the complexity of connecting to a database
  connect() {
    // Complex implementation hidden from the user
    console.log(\`Connecting to database with \${this.connectionString}...\`);
    // ...lots of complex connection logic...
    console.log("Connected successfully");
  }
  
  // Simple interface for common database operations
  query(sql) {
    // Hide the complexity of query execution
    console.log(\`Executing query: \${sql}\`);
    // ...complex query execution logic...
    return ["result1", "result2"];
  }
  
  close() {
    console.log("Closing database connection");
    // ...complex cleanup logic...
  }
}

// Usage - users don't need to know the implementation details
const db = new Database("mysql://localhost:3306/mydb");
db.connect();
const results = db.query("SELECT * FROM users");
console.log(results);
db.close();`,
            editable: true
          }
        }
      ]
    },
    {
      id: "es6-classes",
      title: "ES6 Classes",
      content: {
        en: "ES6 introduced class syntax to JavaScript, providing a more familiar way to create objects and implement inheritance for developers coming from class-based languages. Under the hood, JavaScript classes still use prototypes, but they offer a cleaner, more intuitive syntax.",
        hi: "ES6 ने JavaScript में class syntax introduce किया, class-based languages से आने वाले developers के लिए objects create करने और inheritance implement करने का एक अधिक familiar तरीका provide करता है। Under the hood, JavaScript classes अभी भी prototypes का उपयोग करते हैं, लेकिन वे एक cleaner, अधिक intuitive syntax offer करते हैं।"
      },
      codeExample: {
        code: `// Basic class structure
class Person {
  // Constructor method
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Instance methods
  greet() {
    return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
  }
  
  // Static method (called on the class, not instances)
  static createAnonymous() {
    return new Person("Anonymous", 0);
  }
  
  // Getters and setters
  get description() {
    return \`\${this.name}, \${this.age}\`;
  }
  
  set description(value) {
    [this.name, this.age] = value.split(", ");
    this.age = Number(this.age);
  }
}

// Create instances
const john = new Person("John", 30);
console.log(john.greet()); // "Hello, my name is John and I am 30 years old."

// Using getter
console.log(john.description); // "John, 30"

// Using setter
john.description = "Jane, 25";
console.log(john.name); // "Jane"
console.log(john.age);  // 25

// Using static method
const anonymous = Person.createAnonymous();
console.log(anonymous.greet()); // "Hello, my name is Anonymous and I am 0 years old."`,
        editable: true
      },
      interactiveExample: {
        code: `// Class inheritance example
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return \`\${this.name} makes a noise.\`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent constructor
    this.breed = breed;
  }
  
  speak() {
    return \`\${this.name} barks! Woof woof!\`;
  }
  
  fetch() {
    return \`\${this.name} fetches the ball.\`;
  }
}

const genericAnimal = new Animal("Some Animal");
const dog = new Dog("Rex", "German Shepherd");

console.log(genericAnimal.speak());
console.log(dog.speak());
console.log(dog.fetch());
console.log(\`Dog breed: \${dog.breed}\`);`,
        output: `Some Animal makes a noise.
Rex barks! Woof woof!
Rex fetches the ball.
Dog breed: German Shepherd`,
        explanation: {
          en: "This example demonstrates class inheritance in JavaScript. The Dog class extends the Animal class, inheriting its properties and methods. It overrides the speak() method to provide dog-specific behavior, and adds a new fetch() method. The super() call in the Dog constructor is necessary to properly initialize the properties from the parent class.",
          hi: "यह example JavaScript में class inheritance को demonstrate करता है। Dog class, Animal class को extend करती है, उसकी properties और methods को inherit करती है। यह speak() method को override करती है dog-specific behavior provide करने के लिए, और एक नया fetch() method add करती है। Dog constructor में super() call parent class से properties को सही ढंग से initialize करने के लिए necessary है।"
        }
      }
    },
    {
      id: "private-fields",
      title: "Private Fields and Methods",
      content: {
        en: "JavaScript classes now support private fields and methods (a newer feature), allowing proper encapsulation within classes. Private members are marked with a # prefix and cannot be accessed outside the class definition.",
        hi: "JavaScript classes अब private fields और methods को support करते हैं (एक newer feature), classes के भीतर proper encapsulation की अनुमति देते हैं। Private members को # prefix के साथ mark किया जाता है और class definition के बाहर access नहीं किया जा सकता है।"
      },
      codeExample: {
        code: `// Class with private fields and methods
class Counter {
  // Private field
  #count = 0;
  
  // Private method
  #validateIncrement(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error('Increment value must be a positive number');
    }
    return true;
  }
  
  // Public methods
  increment(value = 1) {
    if (this.#validateIncrement(value)) {
      this.#count += value;
      return this.#count;
    }
  }
  
  getCount() {
    return this.#count;
  }
}

const counter = new Counter();
console.log(counter.getCount()); // 0
counter.increment();
console.log(counter.getCount()); // 1
counter.increment(5);
console.log(counter.getCount()); // 6

// These would throw errors if uncommented:
// console.log(counter.#count); // SyntaxError
// counter.#validateIncrement(3); // SyntaxError`,
        editable: true
      }
    },
    {
      id: "composition",
      title: "Composition vs. Inheritance",
      content: {
        en: "While inheritance is powerful, it's not always the best solution for organizing code. Composition (building complex objects by combining simpler ones) is often a more flexible approach. In JavaScript, you can leverage both techniques depending on your needs.",
        hi: "हालांकि inheritance powerful है, यह हमेशा code को organize करने के लिए best solution नहीं होता है। Composition (simpler ones को combine करके complex objects को build करना) अक्सर एक अधिक flexible approach होता है। JavaScript में, आप अपनी needs के आधार पर दोनों techniques का leverage कर सकते हैं।"
      },
      codeExample: {
        code: `// Inheritance example
class Vehicle {
  constructor(speed) {
    this.speed = speed;
  }
  
  move() {
    console.log(\`Moving at \${this.speed} mph\`);
  }
}

class Car extends Vehicle {
  constructor(speed) {
    super(speed);
  }
  
  honk() {
    console.log("Beep!");
  }
}

// Composition example
class Engine {
  start() {
    console.log("Engine started");
  }
  
  stop() {
    console.log("Engine stopped");
  }
}

class Radio {
  tuneToStation(station) {
    console.log(\`Tuned to station \${station}\`);
  }
}

class ComposedCar {
  constructor(speed) {
    this.speed = speed;
    this.engine = new Engine();
    this.radio = new Radio();
  }
  
  start() {
    this.engine.start();
  }
  
  tuneRadio(station) {
    this.radio.tuneToStation(station);
  }
  
  move() {
    console.log(\`Moving at \${this.speed} mph\`);
  }
}

// Usage
const inheritedCar = new Car(60);
inheritedCar.move(); // "Moving at 60 mph"
inheritedCar.honk(); // "Beep!"

const composedCar = new ComposedCar(70);
composedCar.start(); // "Engine started"
composedCar.tuneRadio(98.5); // "Tuned to station 98.5"
composedCar.move(); // "Moving at 70 mph"`,
        editable: true
      }
    }
  ],
  exercise: {
    title: "Exercise: Create a Library Management System",
    description: {
      en: "Design a simplified library management system using object-oriented programming concepts. Create classes for Book, Library, and LibraryMember with appropriate properties and methods to add books to the library, allow members to borrow and return books, and track the status of books.",
      hi: "Object-oriented programming concepts का उपयोग करके एक simplified library management system design करें। Book, Library, और LibraryMember के लिए classes create करें appropriate properties और methods के साथ library में books add करने, members को books borrow और return करने की अनुमति देने, और books के status को track करने के लिए।"
    },
    starterCode: `// Complete the Book, Library, and LibraryMember classes
// Book, Library, और LibraryMember classes को complete करें

class Book {
  // Create a Book class with properties for title, author, and ISBN
  // Add a property to track if the book is available or borrowed
  // Add getter/setter methods as needed
  
  // Book class create करें title, author, और ISBN के लिए properties के साथ
  // Track करने के लिए एक property add करें कि book available है या borrowed
  // Getter/setter methods add करें as needed
  
  constructor(title, author, isbn) {
    // Your code here
    // आपका code यहां
  }
}

class Library {
  // Create a Library class that stores a collection of books
  // Add methods to add books, find books by title or ISBN
  // Add methods to check out (borrow) and return books
  
  // Library class create करें जो books का collection store करता है
  // Books add करने, title या ISBN द्वारा books find करने के लिए methods add करें
  // Books check out (borrow) और return करने के लिए methods add करें
  
  constructor(name) {
    // Your code here
    // आपका code यहां
  }
  
  addBook(book) {
    // Your code here
    // आपका code यहां
  }
  
  findBookByTitle(title) {
    // Your code here
    // आपका code यहां
  }
  
  checkoutBook(isbn, member) {
    // Your code here
    // आपका code यहां
  }
  
  returnBook(isbn) {
    // Your code here
    // आपका code यहां
  }
}

class LibraryMember {
  // Create a LibraryMember class with properties for name, ID, and borrowed books
  // Add methods to borrow and return books
  
  // LibraryMember class create करें name, ID, और borrowed books के लिए properties के साथ
  // Books borrow और return करने के लिए methods add करें
  
  constructor(name, id) {
    // Your code here
    // आपका code यहां
  }
  
  borrowBook(book) {
    // Your code here
    // आपका code यहां
  }
  
  returnBook(book) {
    // Your code here
    // आपका code यहां
  }
}

// Test case
const library = new Library("Central Library");

// Add books to the library
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084");
library.addBook(book1);
library.addBook(book2);

// Create a library member
const member = new LibraryMember("John Doe", "M001");

// Borrow a book
console.log(library.checkoutBook("9780743273565", member)); // Should indicate success
console.log(book1.isAvailable); // Should be false
console.log(member.borrowedBooks.length); // Should be 1

// Return a book
console.log(library.returnBook("9780743273565")); // Should indicate success
console.log(book1.isAvailable); // Should be true
console.log(member.borrowedBooks.length); // Should be 0`,
    expectedOutput: `Book checked out successfully
false
1
Book returned successfully
true
0`,
    hint: {
      en: "For the Book class, include an isAvailable property that's initially true. In the Library class, store books in an array and use methods like find() to search for books. In checkoutBook(), verify the book exists and is available before allowing checkout. In the LibraryMember class, keep an array of borrowed books and update it when borrowing or returning books.",
      hi: "Book class के लिए, एक isAvailable property include करें जो initially true है। Library class में, books को एक array में store करें और books की खोज के लिए find() जैसे methods का उपयोग करें। checkoutBook() में, checkout की अनुमति देने से पहले verify करें कि book exist करती है और available है। LibraryMember class में, borrowed books का एक array रखें और जब books borrow या return करते हैं तो इसे update करें।"
    }
  },
  summary: {
    en: "In this section, we explored object-oriented programming in JavaScript. We covered the four core principles of OOP: encapsulation (bundling data with methods that operate on that data), inheritance (allowing objects to inherit from parent objects), polymorphism (treating objects of different types in a similar way), and abstraction (hiding complexity while exposing necessary functionality). We also examined ES6 classes, which provide a cleaner syntax for object creation and inheritance. We learned about private fields and methods for better encapsulation, and discussed composition as an alternative to inheritance. Understanding these OOP concepts helps you design more modular, maintainable, and scalable JavaScript applications.",
    hi: {
      text: "इस section में, हमने JavaScript में object-oriented programming का exploration किया।",
      points: [
        "हमने OOP के चार core principles को cover किया: encapsulation (data को उन methods के साथ bundle करना जो उस data पर operate करते हैं), inheritance (objects को parent objects से inherit करने की अनुमति देना), polymorphism (different types के objects को similar way में treat करना), और abstraction (complexity को hide करते हुए necessary functionality को expose करना)",
        "हमने ES6 classes को भी examine किया, जो object creation और inheritance के लिए एक cleaner syntax provide करते हैं",
        "हमने better encapsulation के लिए private fields और methods के बारे में सीखा",
        "हमने inheritance के एक alternative के रूप में composition पर discussion किया",
        "इन OOP concepts को समझने से आपको अधिक modular, maintainable, और scalable JavaScript applications design करने में मदद मिलती है"
      ]
    }
  },
  prevTopic: {
    id: "prototypes",
    title: "Object Prototypes"
  },
  nextTopic: {
    id: "async",
    title: "Asynchronous JavaScript"
  }
};
