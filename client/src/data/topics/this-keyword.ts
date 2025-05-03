export const thisKeywordData = {
  id: "this-keyword",
  title: "The 'this' Keyword",
  introduction: {
    en: "The 'this' keyword in JavaScript refers to the object that is currently executing the function. Unlike other programming languages, 'this' behaves differently in JavaScript based on how a function is called, not where it's defined. Understanding 'this' is essential for writing object-oriented code and handling event callbacks.",
    hi: "JavaScript mein 'this' keyword us object ko refer karta hai jo currently function ko execute kar raha hai. Doosri programming languages ke ulat, JavaScript mein 'this' ka behavior is baat par depend karta hai ki function kaise call kiya gaya hai, na ki kahan define kiya gaya hai. Object-oriented code likhne aur event callbacks handle karne ke liye 'this' ko samajhna essential hai."
  },
  sections: [
    {
      id: "this-basics",
      title: "Basics of 'this'",
      content: {
        en: "The value of 'this' depends on how a function is called. In JavaScript, 'this' is not bound to a function when the function is defined; instead, its value is determined when the function is invoked. There are several ways to call a function, each resulting in a different value for 'this'.",
        hi: "Function kaise call kiya gaya hai, us par 'this' ka value depend karta hai. JavaScript mein, function define hone ke samay 'this' function se bound nahi hota; instead, iska value tab determine hota hai jab function invoke kiya jata hai. Function call karne ke kai tarike hain, jisme se har ek 'this' ke liye alag value deta hai."
      },
      codeExample: {
        code: `// Global context
console.log(this); // In a browser, refers to the window object
                   // In Node.js, refers to the global object

// Function context (regular function)
function showThis() {
  console.log(this); // Also window/global in non-strict mode
}
showThis();

// Strict mode
function strictFunction() {
  'use strict';
  console.log(this); // undefined in strict mode
}
strictFunction();

// Object method
const user = {
  name: 'John',
  greet: function() {
    console.log(this); // Refers to user object
    console.log(\`Hello, \${this.name}!\`);
  }
};
user.greet(); // Hello, John!

// Function inside a method
const user2 = {
  name: 'Alice',
  greet: function() {
    function innerFunction() {
      console.log(this); // Window/global, not user2!
      console.log(\`Inner function: \${this.name}\`); // Undefined or error
    }
    innerFunction();
  }
};
user2.greet();

// Arrow function inside a method (inherits 'this')
const user3 = {
  name: 'Bob',
  greet: function() {
    const innerArrow = () => {
      console.log(this); // Still refers to user3
      console.log(\`Arrow function: \${this.name}\`);
    };
    innerArrow();
  }
};
user3.greet(); // Arrow function: Bob`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's explore how 'this' changes depending on the call context
const person = {
  name: "John",
  
  regularMethod: function() {
    console.log("Regular method 'this':", this);
    console.log("Name via regular method:", this.name);
  },
  
  arrowMethod: () => {
    console.log("Arrow method 'this':", this);
    console.log("Name via arrow method:", this?.name);
  },
  
  nestedFunctions: function() {
    console.log("Outer function 'this':", this);
    
    // Regular nested function
    function innerRegular() {
      console.log("Inner regular function 'this':", this);
      console.log("Can access name?", this?.name || "No");
    }
    
    // Arrow nested function
    const innerArrow = () => {
      console.log("Inner arrow function 'this':", this);
      console.log("Can access name?", this.name || "No");
    };
    
    console.log("\\nCalling inner regular function:");
    innerRegular();
    
    console.log("\\nCalling inner arrow function:");
    innerArrow();
  }
};

console.log("1. Calling as an object method:");
person.regularMethod();

console.log("\\n2. Calling as an arrow method:");
person.arrowMethod();

console.log("\\n3. Nested functions:");
person.nestedFunctions();

console.log("\\n4. Method assigned to a variable:");
const standalone = person.regularMethod;
standalone();`,
        output: `1. Calling as an object method:
Regular method 'this': {name: 'John', regularMethod: ƒ, arrowMethod: ƒ, nestedFunctions: ƒ}
Name via regular method: John

2. Calling as an arrow method:
Arrow method 'this': Window {window: Window, self: Window, document: document, name: '', location: Location, …}
Name via arrow method: undefined

3. Nested functions:
Outer function 'this': {name: 'John', regularMethod: ƒ, arrowMethod: ƒ, nestedFunctions: ƒ}

Calling inner regular function:
Inner regular function 'this': Window {window: Window, self: Window, document: document, name: '', location: Location, …}
Can access name? No

Calling inner arrow function:
Inner arrow function 'this': {name: 'John', regularMethod: ƒ, arrowMethod: ƒ, nestedFunctions: ƒ}
Can access name? John

4. Method assigned to a variable:
Regular method 'this': Window {window: Window, self: Window, document: document, name: '', location: Location, …}
Name via regular method: undefined`,
        explanation: {
          en: "This example demonstrates the different behaviors of 'this' in various contexts. In a regular method, 'this' refers to the object the method belongs to. In an arrow function, 'this' is inherited from the surrounding lexical context (often the global object). When a regular function is nested inside a method, its 'this' refers to the global object (or undefined in strict mode), losing the object context. Arrow functions, however, capture the 'this' value from their surrounding context. When a method is assigned to a variable and called, it loses its object context, and 'this' refers to the global object.",
          hi: "Yeh example various contexts mein 'this' ke different behaviors ko demonstrate karta hai. Ek regular method mein, 'this' us object ko refer karta hai jisse method belong karta hai. Ek arrow function mein, 'this' surrounding lexical context se inherit kiya jata hai (aksar global object). Jab ek regular function method ke andar nested hota hai, to iska 'this' global object ko refer karta hai (ya strict mode mein undefined), object context kho deta hai. Halaanki, arrow functions apne surrounding context se 'this' value capture karte hain. Jab ek method ek variable ko assign kiya jata hai aur call kiya jata hai, to yeh apna object context kho deta hai, aur 'this' global object ko refer karta hai."
        }
      }
    },
    {
      id: "call-apply-bind",
      title: "Explicitly Setting 'this': call(), apply(), and bind()",
      content: {
        en: "JavaScript provides methods to explicitly control the value of 'this' in function calls. The call(), apply(), and bind() methods allow us to specify what 'this' should refer to, regardless of how the function is called. These methods are essential for function borrowing and creating reusable utilities.",
        hi: "JavaScript explicitly 'this' ke value ko function calls mein control karne ke liye methods provide karta hai. call(), apply(), aur bind() methods humein specify karne ki anumati dete hain ki 'this' kise refer karna chahiye, chahe function kaise bhi call kiya gaya ho. Ye methods function borrowing aur reusable utilities banane ke liye essential hain."
      },
      codeExample: {
        code: `// call(): Calls a function with a specified 'this' and individual arguments
function greet(greeting, punctuation) {
  console.log(\`\${greeting}, \${this.name}\${punctuation}\`);
}

const person1 = { name: 'John' };
const person2 = { name: 'Alice' };

// Using call to set 'this' explicitly
greet.call(person1, 'Hello', '!'); // Hello, John!
greet.call(person2, 'Hi', '...'); // Hi, Alice...

// apply(): Similar to call(), but takes arguments as an array
const args = ['Hey', '?'];
greet.apply(person1, args); // Hey, John?

// Function borrowing: Using methods from other objects
const calculator = {
  num: 0,
  increment() {
    this.num += 1;
    return this.num;
  }
};

const counter = {
  num: 100
};

// Borrowing increment method
console.log(calculator.increment.call(counter)); // 101
console.log(counter.num); // 101

// bind(): Creates a new function with 'this' permanently bound
const greetJohn = greet.bind(person1);
greetJohn('Welcome', '!'); // Welcome, John!

// Partial application: Preset some arguments
const sayHelloToJohn = greet.bind(person1, 'Hello');
sayHelloToJohn('!!!'); // Hello, John!!!

// bind() can't be overridden, even with call or apply
const boundGreet = greet.bind(person1);
boundGreet.call(person2, 'Attempt', '?'); // Attempt, John? (not Alice)`,
        editable: true
      }
    },
    {
      id: "this-in-events",
      title: "'this' in Event Handlers",
      content: {
        en: "When used in event handlers, 'this' typically refers to the element that triggered the event. However, this behavior can change depending on how the event handler is attached and defined. Understanding 'this' in event contexts is crucial for DOM manipulation.",
        hi: "Event handlers mein use kiya gaya 'this' typically us element ko refer karta hai jisne event trigger kiya. Halaanki, yeh behavior change ho sakta hai depending on how event handler attach aur define kiya gaya hai. Event contexts mein 'this' ko samajhna DOM manipulation ke liye crucial hai."
      },
      codeExample: {
        code: `// In a browser environment:

// HTML: <button id="btn">Click me</button>

// Standard DOM event handler (this = the element)
document.getElementById('btn').addEventListener('click', function() {
  console.log(this); // The button element
  this.style.backgroundColor = 'red';
});

// Arrow function as event handler (this ≠ the element)
document.getElementById('btn').addEventListener('click', () => {
  console.log(this); // Window object, not the button
  // this.style.backgroundColor = 'blue'; // Error, this.style is undefined
});

// Using with event delegation
document.querySelector('ul').addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    console.log(this);  // The UL element (where listener is attached)
    console.log(event.target); // The actual LI element clicked
    
    // Use event.target to refer to the clicked element
    event.target.style.color = 'green';
    
    // Use this to refer to the element with the listener
    this.style.border = '1px solid black';
  }
});

// Binding a specific 'this' value
const user = { name: 'John' };
document.getElementById('btn').addEventListener('click', function() {
  console.log(this.name); // John (because we bound 'this' to user)
}.bind(user));

// Using class methods as event handlers (common in React-like code)
class App {
  constructor() {
    this.counter = 0;
    this.button = document.getElementById('btn');
    
    // Wrong way - 'this' will not refer to the App instance
    // this.button.addEventListener('click', this.increment);
    
    // Correct way 1 - Bind the method
    this.button.addEventListener('click', this.increment.bind(this));
    
    // Correct way 2 - Use an arrow function
    this.button.addEventListener('click', () => {
      this.increment();
    });
  }
  
  increment() {
    this.counter++;
    console.log(this.counter);
  }
}

const app = new App();`,
        editable: true
      }
    },
    {
      id: "this-in-classes",
      title: "'this' in Classes and Constructor Functions",
      content: {
        en: "In constructor functions and ES6 classes, 'this' refers to the newly created instance. Class methods need special attention to ensure 'this' maintains its reference to the class instance, especially when methods are used as callbacks.",
        hi: "Constructor functions aur ES6 classes mein, 'this' newly created instance ko refer karta hai. Class methods ko special attention ki zaroorat hoti hai yeh ensure karne ke liye ki 'this' class instance ka reference maintain kare, especially jab methods callbacks ke roop mein use kiye jate hain."
      },
      codeExample: {
        code: `// Constructor function
function Person(name) {
  this.name = name;
  
  // Method defined in the constructor
  this.greet = function() {
    console.log(\`Hello, I'm \${this.name}\`);
  };
}

const john = new Person('John');
john.greet(); // Hello, I'm John

// ES6 Class
class User {
  constructor(name) {
    this.name = name;
  }
  
  // Method defined on the prototype
  greet() {
    console.log(\`Hello, I'm \${this.name}\`);
  }
  
  // The problem with using methods as callbacks
  startGreetingDelayed() {
    // 'this' is lost when greet is used as a callback
    setTimeout(this.greet, 1000); // Error or "Hello, I'm undefined"
  }
  
  // Solution 1: Using bind
  startGreetingDelayedWithBind() {
    setTimeout(this.greet.bind(this), 1000); // Works correctly
  }
  
  // Solution 2: Using arrow function
  startGreetingDelayedWithArrow() {
    setTimeout(() => {
      this.greet();
    }, 1000); // Works correctly
  }
  
  // Class fields with arrow functions (modern JS)
  greetArrow = () => {
    console.log(\`Arrow method: Hello, I'm \${this.name}\`);
  };
  
  startGreetingWithArrowMethod() {
    // This works because arrow functions don't have their own 'this'
    setTimeout(this.greetArrow, 1000);
  }
}

const alice = new User('Alice');
alice.greet(); // Hello, I'm Alice

// When passed as callbacks, regular methods lose 'this'
const greetFunction = alice.greet;
// greetFunction(); // Error or "Hello, I'm undefined"

// But arrow function methods keep 'this'
const arrowGreetFunction = alice.greetArrow;
arrowGreetFunction(); // Arrow method: Hello, I'm Alice

// Inheritance and super
class Admin extends User {
  constructor(name, role) {
    super(name); // Calls the parent constructor with 'this'
    this.role = role;
  }
  
  greet() {
    super.greet(); // Calls the parent method with the current 'this'
    console.log(\`I am an \${this.role}\`);
  }
}

const admin = new Admin('Bob', 'administrator');
admin.greet(); 
// Hello, I'm Bob
// I am an administrator`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's explore how 'this' works in classes with methods as callbacks
class Counter {
  constructor(startValue = 0) {
    this.count = startValue;
    this.history = [];
    
    // Demo of different methods to preserve 'this'
    this.buttonClicks = {
      regular: 0,
      bound: 0,
      arrow: 0
    };
  }
  
  // Regular method (loses 'this' when used as callback)
  increment() {
    this.count++;
    this.history.push(this.count);
    console.log(\`Regular method: \${this.count}\`);
    return this.count;
  }
  
  // Method bound in constructor
  decrement = function() {
    this.count--;
    this.history.push(this.count);
    console.log(\`Bound method: \${this.count}\`);
    return this.count;
  }.bind(this);
  
  // Arrow function method (preserves 'this')
  reset = () => {
    this.count = 0;
    this.history.push(this.count);
    console.log(\`Arrow method: \${this.count}\`);
    return this.count;
  };
  
  // Method to simulate button clicks with different method types
  simulateButtonClicks() {
    console.log("Simulating methods used as event handlers:");
    
    // 1. Regular method as callback (loses 'this')
    console.log("1. Regular method as callback:");
    try {
      const regularCallback = this.increment;
      regularCallback(); // Will fail or use wrong 'this'
    } catch (e) {
      console.log("  Error:", e.message);
    }
    
    // 2. Bound method as callback (preserves 'this')
    console.log("\\n2. Bound method as callback:");
    const boundCallback = this.decrement;
    boundCallback(); // Works correctly
    
    // 3. Arrow function as callback (preserves 'this')
    console.log("\\n3. Arrow function as callback:");
    const arrowCallback = this.reset;
    arrowCallback(); // Works correctly
    
    console.log("\\nFinal counter state:", this.count);
    console.log("Action history:", this.history);
    
    // 4. Using a regular method with .bind() for a specific call
    console.log("\\n4. Regular method with explicit .bind():");
    const tempCallback = this.increment.bind(this);
    tempCallback(); // Works with explicit binding
  }
}

// Create and test the counter
const counter = new Counter(5);
counter.simulateButtonClicks();`,
        output: `Simulating methods used as event handlers:
1. Regular method as callback:
  Error: Cannot read properties of undefined (reading 'count')

2. Bound method as callback:
Bound method: 4

3. Arrow function as callback:
Arrow method: 0

Final counter state: 0
Action history: [4, 0]

4. Regular method with explicit .bind():
Regular method: 1`,
        explanation: {
          en: "This example demonstrates how 'this' behaves in class methods when they're used as callbacks. Regular methods lose their 'this' binding when passed around as callbacks, leading to errors. There are three main solutions: 1) Binding the method in the constructor with .bind(this), 2) Using arrow functions for class methods, which inherit 'this' from the surrounding context, or 3) Using .bind() explicitly when passing the method as a callback. All three approaches ensure that methods retain access to the class instance even when used as callbacks.",
          hi: "Yeh example demonstrate karta hai ki jab class methods callbacks ke roop mein use kiye jate hain to 'this' kaise behave karta hai. Regular methods apna 'this' binding kho dete hain jab callbacks ke roop mein pass kiye jate hain, jisse errors hote hain. Teen main solutions hain: 1) Constructor mein .bind(this) ke saath method ko binding karna, 2) Class methods ke liye arrow functions ka upyog karna, jo surrounding context se 'this' inherit karte hain, ya 3) Method ko callback ke roop mein pass karte samay explicitly .bind() ka upyog karna. Teeno approaches ensure karte hain ki methods class instance tak access retain karen even when used as callbacks."
        }
      }
    }
  ],
  exercise: {
    title: "'this' Binding Challenge",
    description: {
      en: "Create a simple counter object with increment, decrement, and reset methods. Then, write a function that accepts any of these methods as a callback and executes it after a delay. Ensure that the 'this' binding is maintained correctly so that the counter works as expected.",
      hi: "Increment, decrement, aur reset methods ke saath ek simple counter object create karein. Phir, ek function likhein jo in methods mein se kisi ko bhi callback ke roop mein accept karta hai aur use delay ke baad execute karta hai. Ensure karein ki 'this' binding correctly maintain ki gayi hai taki counter expected tarike se kaam kare."
    },
    starterCode: `// Create a counter object with methods
const counter = {
  count: 0,
  
  // Add methods: increment, decrement, reset
  // ...
  
};

// Create a function that executes a method after a delay
// The challenge is to maintain the correct 'this' binding
function executeAfterDelay(callback, delay) {
  // Your code here
}

// Test your solution
console.log("Initial count:", counter.count);
executeAfterDelay(counter.increment, 1000);
// After 1 second, should log the incremented count

// Bonus challenge: Make a version that accepts additional arguments
// function executeAfterDelayWithArgs(callback, delay, ...args) {
//   // Your code here
// }`,
    expectedOutput: `Initial count: 0
Count incremented to: 1`,
    hint: {
      en: "Remember that when a method is passed as a callback, it loses its 'this' binding. You'll need to use bind(), call()/apply(), or an arrow function to maintain the correct context. For the bonus challenge, consider how bind() can be used for partial application of arguments.",
      hi: "Yaad rakhein ki jab koi method callback ke roop mein pass kiya jata hai, to woh apna 'this' binding kho deta hai. Aapko correct context ko maintain karne ke liye bind(), call()/apply(), ya arrow function ka upyog karna hoga. Bonus challenge ke liye, sochein ki arguments ke partial application ke liye bind() ka kaise upyog kiya ja sakta hai."
    }
  },
  summary: {
    en: "The 'this' keyword in JavaScript refers to the object executing the current function. Its value is not determined by where the function is defined, but by how it's called. Global functions have 'this' set to the global object (or undefined in strict mode). Method calls have 'this' set to the object owning the method. Constructor calls have 'this' set to the newly created instance. Functions can explicitly set 'this' using call(), apply(), or bind(). Arrow functions inherit 'this' from their lexical scope. Understanding these rules is essential for writing effective JavaScript, especially when dealing with callbacks, event handlers, and object-oriented programming.",
    hi: {
      text: "JavaScript mein 'this' keyword current function ko execute karne wale object ko refer karta hai.",
      points: [
        "Iska value function kahan define kiya gaya hai us par nahi, balki woh kaise call kiya gaya hai us par determine hota hai",
        "Global functions mein 'this' global object ko set kiya jata hai (ya strict mode mein undefined)",
        "Method calls mein 'this' method ke malik object ko set kiya jata hai",
        "Constructor calls mein 'this' newly created instance ko set kiya jata hai",
        "Functions explicitly call(), apply(), ya bind() ka upyog karke 'this' set kar sakte hain",
        "Arrow functions apne lexical scope se 'this' inherit karte hain",
        "In rules ko samajhna effective JavaScript likhne ke liye essential hai, especially jab callbacks, event handlers, aur object-oriented programming ke saath deal kiya ja raha ho"
      ]
    }
  },
  prevTopic: {
    id: "objects",
    title: "Objects"
  },
  nextTopic: {
    id: "prototypes",
    title: "Prototypes and Inheritance"
  }
};