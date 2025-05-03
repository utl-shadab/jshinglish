export const functionsData = {
  id: "functions",
  title: "Functions in JavaScript",
  introduction: {
    en: "Functions are one of the fundamental building blocks in JavaScript. A function is a reusable block of code designed to perform a particular task. Functions allow you to define a block of code, give it a name, and then execute it whenever needed by calling that name.",
    hi: "Functions JavaScript mein fundamental building blocks mein se ek hai. Function code ka ek reusable block hai jo ek particular task perform karne ke liye design kiya gaya hai. Functions aapko code ka ek block define karne, ise ek naam dene, aur phir jab bhi zaroorat ho us naam ko call karke use execute karne ki capability dete hain."
  },
  sections: [
    {
      id: "function-declaration",
      title: "Function Declaration",
      content: {
        en: "There are several ways to define functions in JavaScript. The most common is the function declaration, which starts with the 'function' keyword followed by a name, a list of parameters in parentheses, and the function body enclosed in curly braces.",
        hi: "JavaScript mein functions define karne ke kai tarike hain. Sabse common hai function declaration, jo 'function' keyword se shuru hota hai, uske baad ek naam, parentheses mein parameters ki list, aur curly braces mein enclosed function body hoti hai."
      },
      codeExample: {
        code: `// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Calling the function
console.log(greet("John")); // Outputs: Hello, John!

// Function with multiple parameters
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // Outputs: 8`,
        editable: true
      }
    },
    {
      id: "function-expressions",
      title: "Function Expressions",
      content: {
        en: "Another way to define a function is using a function expression. In this case, the function is assigned to a variable. The function can be named or anonymous (without a name).",
        hi: "Function define karne ka ek aur tarika hai function expression ka use karna. Is case mein, function ko ek variable ko assign kiya jata hai. Function named ya anonymous (bina naam ke) ho sakta hai."
      },
      codeExample: {
        code: `// Anonymous function expression
const greet = function(name) {
  return "Hello, " + name + "!";
};

console.log(greet("Jane")); // Outputs: Hello, Jane!

// Named function expression
const add = function sum(a, b) {
  return a + b;
};

console.log(add(10, 5)); // Outputs: 15
// console.log(sum(10, 5)); // Error: sum is not defined (only available inside the function)`,
        editable: true
      },
      interactiveExample: {
        code: `// Compare function declaration and function expression
// Function Declaration
function multiply(a, b) {
  return a * b;
}

// Function Expression
const divide = function(a, b) {
  return a / b;
};

// They can be used in the same way
console.log("5 × 3 =", multiply(5, 3));
console.log("15 ÷ 3 =", divide(15, 3));

// But there's a key difference in how they're hoisted
console.log("Can we call subtract before declaration?", typeof subtract === "function");
function subtract(a, b) {
  return a - b;
}

console.log("Can we call add before expression?", typeof addition === "function");
const addition = function(a, b) {
  return a + b;
};`,
        output: `5 × 3 = 15
15 ÷ 3 = 5
Can we call subtract before declaration? true
Can we call add before expression? false`,
        explanation: {
          en: "This example shows the difference between function declarations and function expressions. Function declarations are hoisted entirely and can be called before they appear in the code. Function expressions are not hoisted in the same way; the variable is hoisted but not the function assignment, so you can't call them before the expression appears in the code.",
          hi: "Is example mein function declarations aur function expressions ke beech ka difference dikhaya gaya hai. Function declarations poori tarah se hoist kiye jaate hain aur unhe code mein appear hone se pehle call kiya ja sakta hai. Function expressions same way mein hoist nahi kiye jaate; variable hoist kiya jata hai lekin function assignment nahi, isliye aap unhe expression ke code mein appear hone se pehle call nahi kar sakte."
        }
      }
    },
    {
      id: "arrow-functions",
      title: "Arrow Functions",
      content: {
        en: "Arrow functions, introduced in ES6 (ECMAScript 2015), provide a more concise syntax for writing function expressions. They are especially useful for short, simple functions and do not have their own 'this' binding.",
        hi: "Arrow functions, jo ES6 (ECMAScript 2015) mein introduce kiye gaye the, function expressions likhne ke liye ek more concise syntax provide karte hain. Ye especially short, simple functions ke liye useful hain aur inke paas apna khud ka 'this' binding nahi hota."
      },
      codeExample: {
        code: `// Arrow function with parameters
const greet = (name) => {
  return "Hello, " + name + "!";
};

console.log(greet("Alice")); // Outputs: Hello, Alice!

// Arrow function with a single parameter (parentheses can be omitted)
const square = x => {
  return x * x;
};

console.log(square(4)); // Outputs: 16

// Arrow function with implicit return (curly braces and return can be omitted)
const cube = x => x * x * x;

console.log(cube(3)); // Outputs: 27

// Arrow function with no parameters
const sayHello = () => "Hello, World!";

console.log(sayHello()); // Outputs: Hello, World!

// Multiline arrow function
const sum = (a, b) => {
  const result = a + b;
  return result;
};

console.log(sum(10, 5)); // Outputs: 15`,
        editable: true
      }
    },
    {
      id: "parameters-arguments",
      title: "Parameters and Arguments",
      content: {
        en: "Functions can take parameters, which are variables that act as placeholders for the values that are to be input to a function when it is called. The actual values that are input (or passed) into a function when it is called are known as arguments.",
        hi: "Functions parameters le sakte hain, jo aise variables hain jo placeholder ke roop mein kaam karte hain un values ke liye jinhe function call hone par input kiya jana hai. Actual values jinhe function call hone par input (ya pass) kiya jata hai, unhe arguments kaha jata hai."
      },
      codeExample: {
        code: `// Function with parameters
function greet(name, greeting = "Hello") {
  return greeting + ", " + name + "!";
}

// Calling the function with arguments
console.log(greet("John")); // Outputs: Hello, John!
console.log(greet("Jane", "Hi")); // Outputs: Hi, Jane!

// Default parameters (ES6 feature)
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // Outputs: 5 (b defaults to 1)
console.log(multiply(5, 3)); // Outputs: 15

// Rest parameters (ES6 feature)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Outputs: 15`,
        editable: true
      }
    },
    {
      id: "scope-closure",
      title: "Scope and Closures",
      content: {
        en: "A function's scope is the region of your code where the function is accessible. Variables defined inside a function are not accessible from outside the function. A closure is a function that has access to variables from its outer (enclosing) function's scope, even after the outer function has returned.",
        hi: "Function ka scope aapke code ka woh region hai jahan function accessible hai. Function ke andar define kiye gaye variables function ke bahar se accessible nahi hote. Closure ek aisa function hai jise apne outer (enclosing) function ke scope se variables tak access hota hai, even after the outer function has returned."
      },
      codeExample: {
        code: `// Function scope
function outer() {
  const outerVar = "I am from outer function";
  
  function inner() {
    const innerVar = "I am from inner function";
    console.log(outerVar); // Can access outer function's variables
    console.log(innerVar);
  }
  
  inner();
  // console.log(innerVar); // Error: innerVar is not defined
}

outer();

// Closures
function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
console.log(counter()); // Outputs: 3`,
        editable: true
      },
      interactiveExample: {
        code: `// Practical closure example: creating a counter
function createCounter(startFrom = 0) {
  let count = startFrom;
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getValue: function() {
      return count;
    },
    reset: function() {
      count = startFrom;
      return count;
    }
  };
}

// Create a counter starting from 10
const myCounter = createCounter(10);

console.log("Initial value:", myCounter.getValue());
console.log("After increment:", myCounter.increment());
console.log("After increment again:", myCounter.increment());
console.log("After decrement:", myCounter.decrement());
console.log("After reset:", myCounter.reset());

// Create another counter (completely independent)
const anotherCounter = createCounter(100);
console.log("Second counter value:", anotherCounter.getValue());`,
        output: `Initial value: 10
After increment: 11
After increment again: 12
After decrement: 11
After reset: 10
Second counter value: 100`,
        explanation: {
          en: "This example demonstrates closures in action. The createCounter function returns an object with methods that all have access to the same count variable, which persists even after the createCounter function has returned. Each call to createCounter creates a new, independent scope with its own count variable. This is why the two counter instances are completely independent of each other.",
          hi: "Yeh example closures ko action mein demonstrate karta hai. createCounter function ek object return karta hai jisme methods hain jo sabhi same count variable tak access rakhte hain, jo persist karta hai even after the createCounter function has returned. createCounter ko har call ek naya, independent scope create karta hai jiska apna count variable hota hai. Yahi wajah hai ki do counter instances ek dusre se completely independent hain."
        }
      }
    },
    {
      id: "higher-order-functions",
      title: "Higher-Order Functions",
      content: {
        en: "Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them. They allow for more abstract, flexible, and modular code.",
        hi: "Higher-order functions aise functions hain jo doosre functions par operate karte hain, ya to unhe arguments ke roop mein lekar ya unhe return karke. Ye more abstract, flexible, aur modular code ke liye allow karte hain."
      },
      codeExample: {
        code: `// Function that takes another function as an argument
function applyOperation(a, b, operation) {
  return operation(a, b);
}

// Functions to pass as arguments
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(applyOperation(5, 3, add)); // Outputs: 8
console.log(applyOperation(5, 3, multiply)); // Outputs: 15

// Function that returns another function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Outputs: 10
console.log(triple(5)); // Outputs: 15

// Array methods that take functions
const numbers = [1, 2, 3, 4, 5];

// map: applies a function to each element and returns a new array
const squared = numbers.map(x => x * x);
console.log(squared); // Outputs: [1, 4, 9, 16, 25]

// filter: creates a new array with elements that pass the test
const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers); // Outputs: [2, 4]

// reduce: reduces the array to a single value
const sum = numbers.reduce((total, x) => total + x, 0);
console.log(sum); // Outputs: 15`,
        editable: true
      }
    }
  ],
  exercise: {
    title: "Function Exercise: Create a Calculator",
    description: {
      en: "Create a calculator function that can perform basic arithmetic operations (add, subtract, multiply, divide) based on the operation specified.",
      hi: "Ek calculator function banayein jo basic arithmetic operations (add, subtract, multiply, divide) perform kar sake specified operation ke basis par."
    },
    starterCode: `// Create a calculator function that takes two numbers and an operation
// Operation can be: 'add', 'subtract', 'multiply', or 'divide'
// Return the result of the operation

function calculator(num1, num2, operation) {
  // Your code here
}

// Test your function
console.log(calculator(10, 5, 'add')); // Should output: 15
console.log(calculator(10, 5, 'subtract')); // Should output: 5
console.log(calculator(10, 5, 'multiply')); // Should output: 50
console.log(calculator(10, 5, 'divide')); // Should output: 2
console.log(calculator(10, 0, 'divide')); // Should handle division by zero`,
    expectedOutput: `15
5
50
2
Error: Division by zero is not allowed`,
    hint: {
      en: "Use if/else or switch statements to check which operation was requested. For each operation, perform the appropriate calculation. Don't forget to handle edge cases like division by zero.",
      hi: "Check karne ke liye ki konsa operation request kiya gaya tha if/else ya switch statements ka use karein. Har operation ke liye, appropriate calculation perform karein. Division by zero jaise edge cases ko handle karna na bhoolein."
    }
  },
  summary: {
    en: "Functions are essential building blocks in JavaScript that allow you to write reusable, modular code. They can be declared in several ways, including function declarations, function expressions, and arrow functions. Functions can take parameters, create closures to maintain state, and can be passed around as values (higher-order functions). Understanding functions deeply is crucial for writing effective JavaScript code.",
    hi: {
      text: "Functions JavaScript mein essential building blocks hain jo aapko reusable, modular code likhne ki capability dete hain.",
      points: [
        "Functions kai tarike se declare kiye ja sakte hain, including function declarations, function expressions, aur arrow functions",
        "Functions parameters le sakte hain, state maintain karne ke liye closures create kar sakte hain, aur values ke roop mein pass kiye ja sakte hain (higher-order functions)",
        "Functions ka deep understanding effective JavaScript code likhne ke liye bahut important hai",
        "Functions ke through code organization aur reusability improve hoti hai"
      ]
    }
  },
  prevTopic: {
    id: "control-flow",
    title: "Control Flow"
  },
  nextTopic: {
    id: "arrays",
    title: "Arrays"
  }
};