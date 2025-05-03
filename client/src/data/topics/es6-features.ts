export const es6FeaturesData = {
  id: "es6-features",
  title: "ES6+ Features",
  introduction: {
    en: "ECMAScript 2015 (ES6) introduced many features that transformed JavaScript development. Subsequent versions (ES2016+) have continued to add valuable enhancements. These modern features provide more elegant and powerful ways to write JavaScript code, improving both developer experience and application performance.",
    hi: "ECMAScript 2015 (ES6) ne kai features introduce kiye jinhone JavaScript development ko transform kar diya. Subsequent versions (ES2016+) valuable enhancements add karte rahe hain. Ye modern features JavaScript code likhne ke liye more elegant aur powerful tarike provide karte hain, jo developer experience aur application performance dono ko improve karte hain."
  },
  sections: [
    {
      id: "let-const",
      title: "let and const Declarations",
      content: {
        en: "The `let` and `const` declarations introduced block scoping to JavaScript, providing a more predictable alternative to `var`. While `let` allows reassignment, `const` creates read-only references (though object and array contents can still be modified).",
        hi: "`let` aur `const` declarations ne JavaScript mein block scoping introduce ki, jo `var` ke liye ek more predictable alternative provide karte hain. Jabki `let` reassignment ki anumati deta hai, `const` read-only references create karta hai (halaanki object aur array contents abhi bhi modify kiye ja sakte hain)."
      },
      codeExample: {
        code: `// var vs let
function varExample() {
  var x = 1;
  if (true) {
    var x = 2;  // Same variable, reassigned
    console.log(x);  // 2
  }
  console.log(x);  // 2 - value changed
}
varExample();

function letExample() {
  let x = 1;
  if (true) {
    let x = 2;  // Different variable, block-scoped
    console.log(x);  // 2
  }
  console.log(x);  // 1 - value unchanged
}
letExample();

// const: for constant references
const PI = 3.14159;
// PI = 3.14;  // Error: Assignment to constant variable

// const with objects and arrays
const person = { name: "John" };
person.name = "Jane";  // OK - object contents can be modified
console.log(person);   // { name: "Jane" }

// person = { name: "Bob" };  // Error: Assignment to constant variable

const numbers = [1, 2, 3];
numbers.push(4);       // OK - array contents can be modified
console.log(numbers);  // [1, 2, 3, 4]

// numbers = [5, 6, 7];  // Error: Assignment to constant variable

// Temporal Dead Zone (TDZ)
// console.log(tdz);  // ReferenceError
let tdz = "Accessed after declaration";
console.log(tdz);  // "Accessed after declaration"`,
        editable: true
      }
    },
    {
      id: "arrow-functions",
      title: "Arrow Functions",
      content: {
        en: "Arrow functions provide a more concise syntax for writing functions and do not bind their own `this` value. They're especially useful for short callbacks and in situations where preserving the lexical `this` context is important.",
        hi: "Arrow functions functions likhne ke liye ek more concise syntax provide karte hain aur apne khud ka `this` value bind nahi karte. Ve especially short callbacks aur un situations mein useful hain jahan lexical `this` context ko preserve karna important hai."
      },
      codeExample: {
        code: `// Traditional function expression
const traditionalFunc = function(a, b) {
  return a + b;
};

// Arrow function
const arrowFunc = (a, b) => a + b;

console.log(traditionalFunc(5, 3));  // 8
console.log(arrowFunc(5, 3));        // 8

// Arrow functions with a single parameter can omit parentheses
const square = x => x * x;
console.log(square(4));  // 16

// Empty parameter list requires parentheses
const getRandomNumber = () => Math.random();
console.log(getRandomNumber());  // Random number between 0 and 1

// Multiline arrow functions require curly braces and return statement
const sum = (a, b) => {
  const result = a + b;
  return result;
};

// 'this' in arrow functions vs regular functions
function ThisExample() {
  this.value = 42;
  
  // Regular function - 'this' is determined by how the function is called
  this.regularMethod = function() {
    console.log(this.value);  // value depends on how it's called
  };
  
  // Arrow function - 'this' is captured from surrounding context
  this.arrowMethod = () => {
    console.log(this.value);  // always 42 in this example
  };
  
  // Demo with setTimeout
  this.regularTimeout = function() {
    setTimeout(function() {
      console.log("Regular function in setTimeout:", this.value);  // undefined
    }, 100);
  };
  
  this.arrowTimeout = function() {
    setTimeout(() => {
      console.log("Arrow function in setTimeout:", this.value);    // 42
    }, 100);
  };
}

const example = new ThisExample();
example.regularMethod();  // 42
example.arrowMethod();    // 42

// When methods are detached from their objects, 'this' behaves differently
const detachedRegular = example.regularMethod;
// detachedRegular();  // TypeError: Cannot read property 'value' of undefined

const detachedArrow = example.arrowMethod;
detachedArrow();  // 42 - 'this' is still ThisExample instance

// example.regularTimeout();  // Regular function in setTimeout: undefined
// example.arrowTimeout();    // Arrow function in setTimeout: 42`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's see how arrow functions help with common JavaScript patterns

// Example 1: Array transformations with map/filter/reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using traditional functions
const doubledTraditional = numbers.map(function(n) { return n * 2; });
const evenTraditional = numbers.filter(function(n) { return n % 2 === 0; });
const sumTraditional = numbers.reduce(function(acc, n) { return acc + n; }, 0);

// Using arrow functions - much more concise
const doubledArrow = numbers.map(n => n * 2);
const evenArrow = numbers.filter(n => n % 2 === 0);
const sumArrow = numbers.reduce((acc, n) => acc + n, 0);

console.log("Doubled (traditional):", doubledTraditional);
console.log("Doubled (arrow):", doubledArrow);
console.log("Even numbers (traditional):", evenTraditional);
console.log("Even numbers (arrow):", evenArrow);
console.log("Sum (traditional):", sumTraditional);
console.log("Sum (arrow):", sumArrow);

// Example 2: Managing 'this' in callbacks
// Create button and handler object
const handler = {
  elements: ["Button 1", "Button 2", "Button 3"],
  
  // Method to process clicks
  processClick: function(element) {
    console.log(\`Processing click on \${element}...\`);
  },
  
  // Traditional approach with issues
  setupTraditional: function() {
    console.log("\\nTraditional setup with 'this' problem:");
    const self = this; // Store 'this' in a variable to use in callback
    
    this.elements.forEach(function(element) {
      // Inside this callback, 'this' would normally refer to global object
      // Using 'self' instead to access the handler methods
      console.log(\`Setting up \${element}\`);
      self.processClick(element);
    });
  },
  
  // Arrow function approach
  setupArrow: function() {
    console.log("\\nArrow function setup (no 'this' problem):");
    
    this.elements.forEach(element => {
      // 'this' refers to the handler object in arrow functions
      console.log(\`Setting up \${element}\`);
      this.processClick(element);
    });
  }
};

// Run both setups
handler.setupTraditional();
handler.setupArrow();

// Example 3: Using arrow functions for method chaining
console.log("\\nMethod chaining with arrow functions:");
const result = numbers
  .filter(n => n > 5)       // Keep numbers > 5
  .map(n => n * n)          // Square each number
  .reduce((sum, n) => sum + n, 0); // Sum them

console.log(\`Processing results: \${result}\`);`,
        output: `Doubled (traditional): [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
Doubled (arrow): [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
Even numbers (traditional): [2, 4, 6, 8, 10]
Even numbers (arrow): [2, 4, 6, 8, 10]
Sum (traditional): 55
Sum (arrow): 55

Traditional setup with 'this' problem:
Setting up Button 1
Processing click on Button 1...
Setting up Button 2
Processing click on Button 2...
Setting up Button 3
Processing click on Button 3...

Arrow function setup (no 'this' problem):
Setting up Button 1
Processing click on Button 1...
Setting up Button 2
Processing click on Button 2...
Setting up Button 3
Processing click on Button 3...

Method chaining with arrow functions:
Processing results: 330`,
        explanation: {
          en: "This example demonstrates how arrow functions make JavaScript more concise and solve common problems. In array operations like map, filter, and reduce, arrow functions reduce the syntax noise, making the code cleaner and easier to read. The second example shows how arrow functions solve the classic 'this' problem in callbacks. With traditional functions, 'this' is determined by how the function is called, which can lead to unexpected values inside callbacks. Developers often had to create workarounds like storing 'this' in a variable (like 'self' or 'that'). Arrow functions automatically capture the surrounding 'this' value, eliminating this common issue. Finally, the third example demonstrates how arrow functions make method chaining more elegant and readable.",
          hi: "Yeh example demonstrate karta hai ki arrow functions JavaScript ko kaise more concise banate hain aur common problems ko solve karte hain. Map, filter, aur reduce jaise array operations mein, arrow functions syntax noise ko reduce karte hain, jisse code cleaner aur easier to read ho jata hai. Doosra example dikhata hai ki arrow functions callbacks mein classic 'this' problem ko kaise solve karte hain. Traditional functions ke saath, 'this' is baat se determine hota hai ki function kaise call kiya gaya hai, jo callbacks ke andar unexpected values ka karan ban sakta hai. Developers aksar workarounds create karte the jaise 'this' ko ek variable mein store karna (jaise 'self' ya 'that'). Arrow functions automatically surrounding 'this' value ko capture karte hain, jisse yeh common issue eliminate ho jata hai. Finally, teesra example demonstrate karta hai ki arrow functions method chaining ko kaise more elegant aur readable banate hain."
        }
      }
    },
    {
      id: "template-literals",
      title: "Template Literals",
      content: {
        en: "Template literals provide an elegant way to create strings with embedded expressions. They support multi-line strings without special escape characters and string interpolation with ${expression} syntax.",
        hi: "Template literals embedded expressions ke saath strings create karne ka ek elegant way provide karte hain. Ve special escape characters ke bina multi-line strings aur ${expression} syntax ke saath string interpolation ko support karte hain."
      },
      codeExample: {
        code: `// Traditional string concatenation
const name = "John";
const age = 30;
const traditionalGreeting = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(traditionalGreeting);

// Template literals with string interpolation
const templateGreeting = \`Hello, my name is \${name} and I am \${age} years old.\`;
console.log(templateGreeting);

// Multi-line strings (traditional way with newline characters)
const traditionalMultiline = "This is line 1.\\n" +
                          "This is line 2.\\n" +
                          "This is line 3.";
console.log(traditionalMultiline);

// Multi-line template literals
const templateMultiline = \`This is line 1.
This is line 2.
This is line 3.\`;
console.log(templateMultiline);

// Expressions in template literals
const a = 5;
const b = 10;
console.log(\`Sum: \${a + b}\`);  // Sum: 15
console.log(\`Product: \${a * b}\`);  // Product: 50
console.log(\`Is a > b? \${a > b ? 'Yes' : 'No'}\`);  // Is a > b? No

// Nesting template literals
const nested = \`The value of a + b is \${a + b \${a > b ? ', which is less than' : ', which is greater than'} \${Math.abs(a - b)}\`);

// Template literals for HTML templates
const user = { name: "Jane", email: "jane@example.com", role: "Admin" };
const htmlTemplate = \`
  <div class="user-card">
    <h2>\${user.name}</h2>
    <p>Email: \${user.email}</p>
    <p>Role: \${user.role}</p>
    \${user.role === "Admin" ? 
      \`<button class="admin-button">Admin Settings</button>\` : 
      \`<button class="user-button">User Settings</button>\`
    }
  </div>
\`;
console.log(htmlTemplate);

// Tagged template literals
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? \`<strong>\${values[i]}</strong>\` : '');
  }, '');
}

const language = "JavaScript";
const highlighted = highlight\`I love \${language} because it's awesome!\`;
console.log(highlighted);  // "I love <strong>JavaScript</strong> because it's awesome!"`,
        editable: true
      }
    },
    {
      id: "destructuring",
      title: "Destructuring Assignment",
      content: {
        en: "Destructuring allows you to extract values from arrays or properties from objects into distinct variables using a concise syntax. It provides a more elegant way to work with arrays, objects, function parameters, and more.",
        hi: "Destructuring aapko concise syntax ka upyog karke arrays se values ya objects se properties ko distinct variables mein extract karne ki anumati deta hai. Yeh arrays, objects, function parameters, aur adhik ke saath kaam karne ka ek more elegant way provide karta hai."
      },
      codeExample: {
        code: `// Array Destructuring
const numbers = [1, 2, 3, 4, 5];

// Old way
const first = numbers[0];
const second = numbers[1];
console.log(first, second);  // 1 2

// With destructuring
const [a, b, ...rest] = numbers;
console.log(a, b, rest);  // 1 2 [3, 4, 5]

// Skipping elements
const [x, , z] = numbers;
console.log(x, z);  // 1 3

// Default values
const [p = 10, q = 20, ...others] = [1];
console.log(p, q, others);  // 1 20 []

// Swapping variables without a temporary variable
let m = 1;
let n = 2;
[m, n] = [n, m];
console.log(m, n);  // 2 1

// Object Destructuring
const person = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
  socials: {
    twitter: "@john",
    facebook: "john.doe"
  }
};

// Old way
const personName = person.name;
const personAge = person.age;
console.log(personName, personAge);  // John 30

// With destructuring
const { name, age, gender = "Unknown" } = person;
console.log(name, age, gender);  // John 30 Unknown

// Assigning to different variable names
const { name: fullName, age: years } = person;
console.log(fullName, years);  // John 30

// Nested destructuring
const { socials: { twitter, facebook } } = person;
console.log(twitter, facebook);  // @john john.doe

// Rest operator with objects
const { name: userName, ...userDetails } = person;
console.log(userName, userDetails);  // John { age: 30, city: "New York", country: "USA", socials: {...} }

// Destructuring in function parameters
function printPersonInfo({ name, age, city = "Unknown City" }) {
  console.log(\`\${name} is \${age} years old and lives in \${city}\`);
}
printPersonInfo(person);  // John is 30 years old and lives in New York

// Combining array and object destructuring
const [{ name: firstUser }, { name: secondUser }] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
console.log(firstUser, secondUser);  // Alice Bob

// Destructuring returned arrays
function getCoordinates() {
  return [10, 20];
}
const [x, y] = getCoordinates();
console.log(x, y);  // 10 20

// Destructuring returned objects
function getUserInfo() {
  return {
    id: 1,
    username: "john_doe",
    email: "john@example.com"
  };
}
const { id, username, email } = getUserInfo();
console.log(id, username, email);  // 1 john_doe john@example.com`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's see destructuring in action with practical examples

// Example 1: Working with API responses
console.log("Example 1: API Response Handling");
// Simulate fetching user data from an API
function fetchUserData() {
  return {
    status: "success",
    code: 200,
    data: {
      user: {
        id: 123,
        name: "Alice Johnson",
        email: "alice@example.com",
        preferences: {
          theme: "dark",
          notifications: true
        },
        posts: [
          { id: 1, title: "Hello World" },
          { id: 2, title: "JavaScript Tips" }
        ]
      }
    }
  };
}

// Without destructuring - verbose and repetitive
function processUserDataOld() {
  const response = fetchUserData();
  
  const status = response.status;
  const user = response.data.user;
  const username = user.name;
  const userEmail = user.email;
  const theme = user.preferences.theme;
  const firstPost = user.posts[0];
  
  console.log(\`Status: \${status}\`);
  console.log(\`User: \${username} (\${userEmail})\`);
  console.log(\`Theme: \${theme}\`);
  console.log(\`First post: \${firstPost.title}\`);
}

// With destructuring - cleaner and more concise
function processUserData() {
  const { 
    status, 
    data: { 
      user: { 
        name, 
        email, 
        preferences: { theme },
        posts: [firstPost, ...otherPosts]  
      } 
    } 
  } = fetchUserData();
  
  console.log(\`Status: \${status}\`);
  console.log(\`User: \${name} (\${email})\`);
  console.log(\`Theme: \${theme}\`);
  console.log(\`First post: \${firstPost.title}\`);
  console.log(\`Number of other posts: \${otherPosts.length}\`);
}

// Run both approaches
console.log("\\nWithout destructuring:");
processUserDataOld();

console.log("\\nWith destructuring:");
processUserData();

// Example 2: Function parameter defaults with destructuring
console.log("\\nExample 2: Configuration Objects");

// A function that accepts configuration options
function setupWidget({ 
  size = 'medium', 
  theme = 'light', 
  enableAnimations = true,
  position = { x: 0, y: 0 } 
} = {}) {
  return \`Widget configured with: size=\${size}, theme=\${theme}, \
animations=\${enableAnimations}, position=(\${position.x},\${position.y})\`;
}

// Call with different configurations
console.log(setupWidget({ size: 'large', position: { x: 100, y: 200 } }));
console.log(setupWidget({ theme: 'dark' }));
console.log(setupWidget()); // All defaults
console.log(setupWidget({ enableAnimations: false }));

// Example 3: Destructuring for function returns
console.log("\\nExample 3: Multiple Return Values");

// Function that computes multiple values
function calculateStats(numbers) {
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  const average = sum / numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  
  return { sum, average, min, max };
}

const testData = [5, 10, 15, 20, 25];

// Using destructuring with the returned object
const { sum, average, min, max } = calculateStats(testData);

console.log(\`Data: \${testData}\`);
console.log(\`Sum: \${sum}\`);
console.log(\`Average: \${average}\`);
console.log(\`Range: \${min} to \${max}\`);`,
        output: `Example 1: API Response Handling

Without destructuring:
Status: success
User: Alice Johnson (alice@example.com)
Theme: dark
First post: Hello World

With destructuring:
Status: success
User: Alice Johnson (alice@example.com)
Theme: dark
First post: Hello World
Number of other posts: 1

Example 2: Configuration Objects
Widget configured with: size=large, theme=light, animations=true, position=(100,200)
Widget configured with: size=medium, theme=dark, animations=true, position=(0,0)
Widget configured with: size=medium, theme=light, animations=true, position=(0,0)
Widget configured with: size=medium, theme=light, animations=false, position=(0,0)

Example 3: Multiple Return Values
Data: 5,10,15,20,25
Sum: 75
Average: 15
Range: 5 to 25`,
        explanation: {
          en: "This example demonstrates how destructuring simplifies working with complex data structures. In the first example, we extract nested values from an API response with a single destructuring statement, making the code more readable and concise. The second example shows how destructuring in function parameters makes handling configuration objects more elegant. It allows for default values and even nested defaults. The third example demonstrates returning and consuming multiple values from a function. Instead of returning an array and accessing values by index, or manually extracting properties from a returned object, destructuring provides a clean syntax for working with multiple return values.",
          hi: "Yeh example demonstrate karta hai ki destructuring complex data structures ke saath kaam ko kaise simplify karta hai. Pehle example mein, hum ek single destructuring statement ke saath API response se nested values extract karte hain, jisse code more readable aur concise ho jata hai. Doosra example dikhata hai ki function parameters mein destructuring configuration objects ko handle karna kaise more elegant banata hai. Yeh default values aur even nested defaults ki anumati deta hai. Teesra example ek function se multiple values return karna aur consume karna demonstrate karta hai. Array return karke aur index by values access karne, ya manually returned object se properties extract karne ke bajay, destructuring multiple return values ke saath kaam karne ke liye ek clean syntax provide karta hai."
        }
      }
    },
    {
      id: "spread-rest",
      title: "Spread and Rest Operators",
      content: {
        en: "The spread operator (...) expands an iterable into individual elements, while the rest operator collects multiple elements into a single array. These operators provide elegant solutions for working with arrays, objects, and function arguments.",
        hi: "Spread operator (...) ek iterable ko individual elements mein expand karta hai, jabki rest operator multiple elements ko ek single array mein collect karta hai. Ye operators arrays, objects, aur function arguments ke saath kaam karne ke liye elegant solutions provide karte hain."
      },
      codeExample: {
        code: `// Spread operator with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Old way to combine arrays
const combinedOld = arr1.concat(arr2);
console.log(combinedOld);  // [1, 2, 3, 4, 5, 6]

// With spread operator
const combined = [...arr1, ...arr2];
console.log(combined);  // [1, 2, 3, 4, 5, 6]

// Inserting elements
const inserted = [0, ...arr1, 3.5, ...arr2, 7];
console.log(inserted);  // [0, 1, 2, 3, 3.5, 4, 5, 6, 7]

// Copying arrays
const original = [1, 2, 3, { value: 4 }];
const shallowCopy = [...original];
console.log(shallowCopy);  // [1, 2, 3, { value: 4 }]

// Note: spread creates a shallow copy
original[3].value = 5;
console.log(shallowCopy[3].value);  // 5 (object reference is copied)

// Spread with strings
const chars = [..."Hello"];
console.log(chars);  // ["H", "e", "l", "l", "o"]

// Spread with objects (ES2018+)
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Old way to combine objects
const combinedObjectOld = Object.assign({}, obj1, obj2);
console.log(combinedObjectOld);  // { a: 1, b: 2, c: 3, d: 4 }

// With spread operator
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject);  // { a: 1, b: 2, c: 3, d: 4 }

// Override properties
const overridden = { ...obj1, b: 3 };
console.log(overridden);  // { a: 1, b: 3 }

// Later properties override earlier ones
const merged = { ...obj1, ...obj2, c: 5 };
console.log(merged);  // { a: 1, b: 2, c: 5, d: 4 }

// Rest operator with arrays
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log(first, second, remaining);  // 1 2 [3, 4, 5]

// Rest operator with objects
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(a, rest);  // 1 { b: 2, c: 3 }

// Rest parameters in functions
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));  // 15

// Combining rest and spread
function multiply(multiplier, ...numbers) {
  return numbers.map(num => num * multiplier);
}
const numbers = [2, 3, 4, 5];
console.log(multiply(10, ...numbers));  // [20, 30, 40, 50]

// Spread with function calls
function add(a, b, c) {
  return a + b + c;
}
const args = [1, 2, 3];
console.log(add(...args));  // 6 (equivalent to add(1, 2, 3))

// Using spread to convert NodeList to Array
// const divs = document.querySelectorAll('div');
// const divArray = [...divs];  // Now we can use array methods like map, filter, etc.`,
        editable: true
      }
    },
    {
      id: "default-parameters",
      title: "Default Parameters",
      content: {
        en: "Default parameters allow function parameters to have predetermined values if no value or undefined is passed. This feature eliminates the need for manual parameter checking and assignment within function bodies.",
        hi: "Default parameters function parameters ko predetermined values rakhne ki anumati dete hain agar koi value ya undefined pass nahi kiya jata hai. Yeh feature function bodies ke andar manual parameter checking aur assignment ki zaroorat ko eliminate karta hai."
      },
      codeExample: {
        code: `// Old way of setting default values
function greetOld(name, greeting) {
  // Check if greeting is undefined, null, or empty string
  greeting = greeting || "Hello";  // Note: this replaces all falsy values
  return \`\${greeting}, \${name}!\`;
}

console.log(greetOld("John"));  // "Hello, John!"
console.log(greetOld("John", "Hi"));  // "Hi, John!"
console.log(greetOld("John", ""));  // "Hello, John!" - Empty string is falsy

// With default parameters
function greet(name, greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

console.log(greet("John"));  // "Hello, John!"
console.log(greet("John", "Hi"));  // "Hi, John!"
console.log(greet("John", ""));  // ", John!" - Empty string is used as-is

// Default parameters with expressions
function getTime(timeZone = getDefaultTimeZone()) {
  return new Date().toLocaleString("en-US", { timeZone });
}

function getDefaultTimeZone() {
  return "UTC";
}

// Parameters can reference previous parameters
function createUser(name, role = "User", permissions = getPermissions(role)) {
  return { name, role, permissions };
}

function getPermissions(role) {
  const permissionMap = {
    Admin: ["read", "write", "delete"],
    Editor: ["read", "write"],
    User: ["read"]
  };
  return permissionMap[role] || [];
}

console.log(createUser("John"));  // { name: "John", role: "User", permissions: ["read"] }
console.log(createUser("Jane", "Editor"));  // { name: "Jane", role: "Editor", permissions: ["read", "write"] }

// Using destructuring with default parameters
function configureApp({ port = 3000, env = "development", debug = false } = {}) {
  return \`App running on port \${port} in \${env} mode, debug: \${debug}\`;
}

console.log(configureApp());  // "App running on port 3000 in development mode, debug: false"
console.log(configureApp({ port: 8080 }));  // "App running on port 8080 in development mode, debug: false"
console.log(configureApp({ env: "production", debug: true }));  // "App running on port 3000 in production mode, debug: true"

// Using destructuring and default values together
function processValues({ a = 1, b = 2 } = {}, multiplier = 1) {
  return (a + b) * multiplier;
}

console.log(processValues());  // 3 (using all defaults)
console.log(processValues({ a: 5 }));  // 7 (a=5, b=2)
console.log(processValues({ a: 5, b: 5 }, 2));  // 20 (a=5, b=5, multiplier=2)

// Default parameters with null and undefined
function display(value = "Default") {
  return \`Display: \${value}\`;
}

console.log(display());  // "Display: Default" (value is undefined)
console.log(display(undefined));  // "Display: Default" (value is explicitly undefined)
console.log(display(null));  // "Display: null" (null is a valid value)
console.log(display(""));  // "Display: " (empty string is a valid value)`,
        editable: true
      }
    },
    {
      id: "classes",
      title: "Classes",
      content: {
        en: "ES6 introduced a class syntax that provides a more familiar way to create objects and deal with inheritance. Under the hood, JavaScript classes are still based on prototypes, but they offer cleaner syntax and additional features like constructors, static methods, and getter/setter methods.",
        hi: "ES6 ne ek class syntax introduce kiya jo objects create karne aur inheritance se deal karne ka ek more familiar way provide karta hai. Under the hood, JavaScript classes abhi bhi prototypes par based hain, lekin ve cleaner syntax aur constructors, static methods, aur getter/setter methods jaise additional features offer karte hain."
      },
      codeExample: {
        code: `// Pre-ES6 way: Constructor functions and prototypes
function PersonOld(name, age) {
  this.name = name;
  this.age = age;
}

PersonOld.prototype.greet = function() {
  return \`Hi, I'm \${this.name}\`;
};

// Static method on constructor function
PersonOld.create = function(name, age) {
  return new PersonOld(name, age);
};

const john = new PersonOld("John", 30);
console.log(john.greet());  // "Hi, I'm John"
const jane = PersonOld.create("Jane", 25);
console.log(jane.greet());  // "Hi, I'm Jane"

// ES6 Classes
class Person {
  // Constructor method
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._privateField = 42;  // Convention for "private" fields
  }

  // Instance method
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }

  // Static method (called on the class, not instances)
  static create(name, age) {
    return new Person(name, age);
  }

  // Getter
  get birthYear() {
    return new Date().getFullYear() - this.age;
  }

  // Setter
  set birthYear(year) {
    this.age = new Date().getFullYear() - year;
  }
}

const alice = new Person("Alice", 30);
console.log(alice.greet());  // "Hi, I'm Alice"

const bob = Person.create("Bob", 40);
console.log(bob.greet());  // "Hi, I'm Bob"

console.log(alice.birthYear);  // Current year - 30
alice.birthYear = 1980;
console.log(alice.age);  // Current year - 1980

// Inheritance with classes
class Employee extends Person {
  constructor(name, age, jobTitle) {
    // Call parent constructor
    super(name, age);
    this.jobTitle = jobTitle;
  }

  // Override parent method
  greet() {
    return \`\${super.greet()} and I'm a \${this.jobTitle}\`;
  }

  // Additional method
  work() {
    return \`\${this.name} is working\`;
  }
}

const emily = new Employee("Emily", 35, "Developer");
console.log(emily.greet());  // "Hi, I'm Emily and I'm a Developer"
console.log(emily.work());  // "Emily is working"
console.log(emily.birthYear);  // Can still access parent getter

// Class field declarations (newer feature, widely supported)
class Counter {
  // Public field
  count = 0;
  
  // "Private" field (actual privacy with # is part of newer specs)
  #privateValue = 42;

  // Static field
  static instances = 0;

  constructor() {
    Counter.instances++;
  }

  increment() {
    this.count++;
    return this.count;
  }
  
  getPrivateValue() {
    return this.#privateValue;
  }

  // Static method using static field
  static getInstanceCount() {
    return Counter.instances;
  }
}

const counter1 = new Counter();
console.log(counter1.increment());  // 1
// console.log(counter1.#privateValue);  // Error: private field
console.log(counter1.getPrivateValue());  // 42
const counter2 = new Counter();
console.log(Counter.getInstanceCount());  // 2

// Using the class as an expression
const Shape = class {
  constructor(name) {
    this.name = name;
  }
  
  describe() {
    return \`Shape: \${this.name}\`;
  }
};

const circle = new Shape("circle");
console.log(circle.describe());  // "Shape: circle"`,
        editable: true
      }
    },
    {
      id: "modules",
      title: "Modules (import/export)",
      content: {
        en: "ES6 modules provide a standardized way to organize and share code between JavaScript files. The import and export statements allow you to create modular, maintainable code by explicitly declaring dependencies and exposing only what's necessary.",
        hi: "ES6 modules JavaScript files ke beech code ko organize aur share karne ka ek standardized way provide karte hain. Import aur export statements aapko explicitly dependencies declare karke aur sirf jo necessary hai use expose karke modular, maintainable code create karne ki anumati dete hain."
      },
      codeExample: {
        code: `// === math.js ===
// Named exports
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Non-exported function (private to this module)
function square(x) {
  return x * x;
}

// Another way to export multiple items
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;

export { subtract, divide };

// Default export (only one per module)
export default function calculateCircumference(radius) {
  return 2 * PI * radius;
}

// === user.js ===
// Named exports
export class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  greet() {
    return \`Hello, \${this.name}!\`;
  }
}

// Default export as a class
export default class Admin extends User {
  constructor(name, email) {
    super(name, email);
    this.role = "admin";
  }
  
  hasAccess() {
    return true;
  }
}

// === main.js ===
// Import default export (can use any name)
import calculateCircumference from './math.js';

// Import named exports (must use same names)
import { PI, add, multiply } from './math.js';

// Import with alias
import { subtract as sub, divide as div } from './math.js';

// Import all exports as a namespace object
import * as mathUtils from './math.js';

// Import default and named exports together
import Admin, { User } from './user.js';

// Using imported values and functions
console.log(PI);  // 3.14159
console.log(add(5, 3));  // 8
console.log(sub(10, 4));  // 6
console.log(calculateCircumference(5));  // 31.4159

// Using namespace imports
console.log(mathUtils.E);  // 2.71828
console.log(mathUtils.multiply(3, 4));  // 12

// Using imported classes
const user = new User("John", "john@example.com");
console.log(user.greet());  // "Hello, John!"

const admin = new Admin("Jane", "jane@example.com");
console.log(admin.hasAccess());  // true

// === Advanced Module Features ===

// Dynamic imports (using promises)
async function loadMathModule() {
  const math = await import('./math.js');
  return math.add(5, 10);
}

// Re-exporting (in a helper.js file)
// export { User } from './user.js';
// export { add, multiply } from './math.js';

// Module aggregation (combining multiple modules)
// export * from './math.js';
// export * from './user.js';`,
        editable: true
      }
    },
    {
      id: "promises",
      title: "Promises",
      content: {
        en: "Promises provide a cleaner way to handle asynchronous operations, replacing the callback pattern. A Promise represents a value that might not be available yet but will be resolved at some point in the future. They help avoid callback hell and make error handling more straightforward.",
        hi: "Promises asynchronous operations ko handle karne ka ek cleaner way provide karte hain, callback pattern ko replace karte hue. Ek Promise ek aise value ko represent karta hai jo abhi available nahi ho sakti hai lekin future mein kisi point par resolve ho jayegi. Ve callback hell se bachne mein help karte hain aur error handling ko more straightforward banate hain."
      },
      codeExample: {
        code: `// Callback-based asynchronous code (old style)
function fetchDataWithCallback(callback) {
  setTimeout(() => {
    try {
      const data = { name: "John", age: 30 };
      callback(null, data);
    } catch (error) {
      callback(error, null);
    }
  }, 1000);
}

// Using the callback-based function
fetchDataWithCallback((error, data) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log("Data:", data);
});

// Promise-based code (ES6)
function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const data = { name: "Jane", age: 25 };
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}

// Using the Promise-based function
fetchDataWithPromise()
  .then(data => {
    console.log("Promise data:", data);
    return data.name;
  })
  .then(name => {
    console.log("Name:", name);
  })
  .catch(error => {
    console.error("Promise error:", error);
  })
  .finally(() => {
    console.log("Promise operation completed");
  });

// Converting callbacks to Promises
function readFileAsync(filename) {
  return new Promise((resolve, reject) => {
    // Simulating Node.js fs.readFile
    setTimeout(() => {
      if (filename === "config.json") {
        resolve('{"port": 3000, "mode": "development"}');
      } else {
        reject(new Error(\`File not found: \${filename}\`));
      }
    }, 1000);
  });
}

// Promise composition (chaining)
readFileAsync("config.json")
  .then(content => {
    const config = JSON.parse(content);
    return config.port;
  })
  .then(port => {
    console.log(\`Server will run on port \${port}\`);
  })
  .catch(error => {
    console.error("Error reading config:", error);
  });

// Promise.all - wait for multiple promises to complete
const promise1 = Promise.resolve("First");
const promise2 = new Promise(resolve => setTimeout(() => resolve("Second"), 500));
const promise3 = readFileAsync("config.json").then(content => JSON.parse(content));

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log("All promises resolved:", results);
  })
  .catch(error => {
    console.error("At least one promise rejected:", error);
  });

// Promise.race - resolves/rejects when the first promise resolves/rejects
Promise.race([
  new Promise(resolve => setTimeout(() => resolve("Fast operation"), 500)),
  new Promise(resolve => setTimeout(() => resolve("Slow operation"), 1000))
])
  .then(result => {
    console.log("Fastest result:", result); // "Fast operation"
  });

// Promise.allSettled (ES2020) - waits for all promises to settle
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failure"),
  Promise.resolve("Another success")
])
  .then(results => {
    console.log("All settled results:", results);
    // Results array contains objects with status ("fulfilled" or "rejected") and value or reason
  });

// Promise.any (ES2021) - resolves when any promise fulfills
Promise.any([
  new Promise((_, reject) => setTimeout(() => reject(new Error("Rejected")), 1000)),
  new Promise(resolve => setTimeout(() => resolve("Success"), 2000)),
  new Promise(resolve => setTimeout(() => resolve("Fast success"), 500))
])
  .then(result => {
    console.log("First fulfilled promise:", result); // "Fast success"
  })
  .catch(error => {
    console.error("All promises rejected:", error);
  });`,
        editable: true
      }
    },
    {
      id: "async-await",
      title: "Async/Await",
      content: {
        en: "Async/await is syntactic sugar built on top of Promises, introduced in ES2017 (ES8). It allows asynchronous code to be written in a more synchronous style, making it more readable and easier to reason about. The 'async' keyword defines a function that returns a Promise, while 'await' pauses execution until a Promise resolves.",
        hi: "Async/await Promises ke upar build kiya gaya syntactic sugar hai, jo ES2017 (ES8) mein introduce kiya gaya tha. Yeh asynchronous code ko more synchronous style mein likhne ki anumati deta hai, jisse yeh more readable aur reason about karna easier ho jata hai. 'async' keyword ek function define karta hai jo ek Promise return karta hai, jabki 'await' execution ko tab tak pause karta hai jab tak ek Promise resolve nahi ho jata."
      },
      codeExample: {
        code: `// Traditional Promise-based code
function fetchUser() {
  return fetch('https://api.example.com/users/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
}

function fetchUserPosts(userId) {
  return fetch(\`https://api.example.com/users/\${userId}/posts\`)
    .then(response => response.json());
}

// Using Promises with .then()
function getUserAndPosts() {
  let userData;
  return fetchUser()
    .then(user => {
      userData = user;
      return fetchUserPosts(user.id);
    })
    .then(posts => {
      return {
        user: userData,
        posts: posts
      };
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
}

// Using async/await
async function getUserAndPostsAsync() {
  try {
    const user = await fetchUser();
    const posts = await fetchUserPosts(user.id);
    return {
      user,
      posts
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Executing an async function
getUserAndPostsAsync()
  .then(result => console.log(result))
  .catch(error => console.error('Error:', error));

// Async arrow functions
const getUserData = async (id) => {
  const response = await fetch(\`https://api.example.com/users/\${id}\`);
  return response.json();
};

// Using async with array methods
async function processUsers(userIds) {
  // Sequential execution (one after another)
  const users = [];
  for (const id of userIds) {
    const user = await getUserData(id);
    users.push(user);
  }
  
  // Parallel execution (all at once)
  const usersParallel = await Promise.all(
    userIds.map(id => getUserData(id))
  );
  
  return { sequential: users, parallel: usersParallel };
}

// Async IIFE (Immediately Invoked Function Expression)
(async () => {
  try {
    const data = await getUserAndPostsAsync();
    console.log('Data from IIFE:', data);
  } catch (error) {
    console.error('IIFE error:', error);
  }
})();

// Error handling with async/await
async function fetchWithErrorHandling() {
  try {
    const response = await fetch('https://api.example.com/nonexistent');
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetching error:', error);
    return { error: true, message: error.message };
  } finally {
    console.log('Fetch operation completed');
  }
}

// Using async in class methods
class DataService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  
  async getUser(id) {
    const response = await fetch(\`\${this.baseUrl}/users/\${id}\`);
    return response.json();
  }
  
  async updateUser(id, data) {
    const response = await fetch(\`\${this.baseUrl}/users/\${id}\`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
}`,
        editable: true
      }
    },
    {
      id: "other-features",
      title: "Other ES6+ Features",
      content: {
        en: "Beyond the major features, ES6 and later versions introduced many other improvements to JavaScript, such as Map and Set collections, Symbol type, Array and Object methods, optional chaining (?.), and more.",
        hi: "Major features ke alava, ES6 aur later versions ne JavaScript mein kai other improvements introduce kiye, jaise Map aur Set collections, Symbol type, Array aur Object methods, optional chaining (?.), aur adhik."
      },
      codeExample: {
        code: `// Map (key-value pairs, any type of key, maintains insertion order)
const userMap = new Map();
userMap.set('id', 1);
userMap.set(42, 'answer');
userMap.set({}, 'object key');

console.log(userMap.get('id'));  // 1
console.log(userMap.has(42));    // true
console.log(userMap.size);       // 3

// Iterating over a Map
for (const [key, value] of userMap) {
  console.log(key, value);
}

// Set (collection of unique values, removes duplicates)
const uniqueNumbers = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log(uniqueNumbers.size);  // 5 (duplicates removed)

uniqueNumbers.add(6);
uniqueNumbers.delete(1);
console.log(uniqueNumbers.has(1));  // false

// Iterating over a Set
for (const num of uniqueNumbers) {
  console.log(num);
}

// Symbol (unique and immutable primitive value)
const uniqueKey = Symbol('description');
const obj = {
  [uniqueKey]: 'This property is accessed with the Symbol',
  regularKey: 'This is a regular property'
};

console.log(obj[uniqueKey]);  // "This property is accessed with the Symbol"
console.log(Object.keys(obj)); // ["regularKey"] (Symbols are not enumerable)

// Well-known symbols
const iterable = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        if (i < 3) {
          return { value: i++, done: false };
        }
        return { done: true };
      }
    };
  }
};

for (const val of iterable) {
  console.log(val);  // 0, 1, 2
}

// Array methods
const numbers = [1, 2, 3, 4, 5];

// find and findIndex
const found = numbers.find(num => num > 3);
console.log(found);  // 4

const foundIndex = numbers.findIndex(num => num > 3);
console.log(foundIndex);  // 3

// includes
console.log(numbers.includes(3));  // true
console.log(numbers.includes(6));  // false

// Array.from - create arrays from array-like objects
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const newArray = Array.from(arrayLike);
console.log(newArray);  // ["a", "b", "c"]

// Array.of - create arrays from arguments
const array = Array.of(1, 2, 3);
console.log(array);  // [1, 2, 3]

// Object methods
const person = { name: 'John', age: 30 };

// Object.entries
for (const [key, value] of Object.entries(person)) {
  console.log(\`\${key}: \${value}\`);
}

// Object.values
console.log(Object.values(person));  // ["John", 30]

// Object.assign
const merged = Object.assign({}, person, { city: 'New York' });
console.log(merged);  // { name: "John", age: 30, city: "New York" }

// Optional chaining (?.) (ES2020)
const user = {
  profile: {
    name: 'Alice'
  }
};

// Without optional chaining
const street = user.address && user.address.street;

// With optional chaining
const street2 = user.address?.street; // undefined (no error)
const name = user.profile?.name; // "Alice"

// Nullish coalescing operator (??) (ES2020)
const count = 0;
const defaultCount = count || 10; // 10 (0 is falsy)
const nullishCount = count ?? 10; // 0 (only null/undefined trigger the default)

// Logical assignment operators (ES2021)
let x = 0;
// x ||= 5; // x = 5 (x is falsy)
// x &&= 5; // x = 0 (x is falsy, so no assignment)
// x ??= 5; // x = 0 (x is not null/undefined)

let y = null;
// y ||= 5; // y = 5
// y ??= 5; // y = 5

// BigInt (ES2020)
const bigNumber = 1234567890123456789012345678901234567890n;
const result = bigNumber + 1n;

// String methods
const str = "Hello, world!";
console.log(str.startsWith("Hello"));  // true
console.log(str.endsWith("!"));       // true
console.log(str.includes("world"));   // true
console.log(str.repeat(2));           // "Hello, world!Hello, world!"
console.log(str.padStart(20, '-'));   // "-------Hello, world!"`,
        editable: true
      }
    }
  ],
  exercise: {
    title: "Modern JavaScript Refactoring",
    description: {
      en: "Refactor the following code to use modern ES6+ features. Identify opportunities to use arrow functions, destructuring, template literals, let/const, default parameters, and other ES6+ features to make the code more concise and readable.",
      hi: "Modern ES6+ features ka upyog karne ke liye niche diye gaye code ko refactor karein. Arrow functions, destructuring, template literals, let/const, default parameters, aur doosre ES6+ features ka upyog karne ke opportunities identify karein jisse code more concise aur readable ho jaye."
    },
    starterCode: `// Legacy JavaScript code to refactor
function fetchUserData(userId, callback) {
  var url = 'https://api.example.com/users/' + userId;
  var params = { method: 'GET' };
  
  fetch(url, params)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var user = {
        id: data.id,
        name: data.name,
        email: data.email
      };
      
      callback(null, user);
    })
    .catch(function(error) {
      callback(error, null);
    });
}

function displayUserInfo(userData) {
  var nameDisplay = document.getElementById('name');
  var emailDisplay = document.getElementById('email');
  
  if (nameDisplay) {
    nameDisplay.textContent = userData.name || 'Unknown';
  }
  
  if (emailDisplay) {
    emailDisplay.textContent = userData.email || 'No email';
  }
}

function createUserSummary(user, includeEmail) {
  includeEmail = includeEmail !== undefined ? includeEmail : true;
  
  var summary = 'User: ' + user.name;
  if (includeEmail && user.email) {
    summary += ' (' + user.email + ')';
  }
  
  return summary;
}

var userIds = ['123', '456', '789'];
var users = [];

// Process array of users
function processUsers() {
  for (var i = 0; i < userIds.length; i++) {
    fetchUserData(userIds[i], function(error, user) {
      if (error) {
        console.error('Error fetching user ' + userIds[i] + ':', error);
        return;
      }
      
      users.push(user);
      
      var summary = createUserSummary(user);
      console.log(summary);
      
      // Do something with the last user when all are processed
      if (users.length === userIds.length) {
        var lastUser = users[users.length - 1];
        displayUserInfo(lastUser);
      }
    });
  }
}

// Call the function
processUsers();`,
    expectedOutput: `// Modern JavaScript with ES6+ features`,
    hint: {
      en: "Look for opportunities to use: const/let instead of var, arrow functions for callbacks, async/await instead of Promise chains, destructuring to extract properties, template literals for string concatenation, default parameters for function arguments, Array methods like map instead of for loops, and the optional chaining/nullish coalescing operators for safer property access.",
      hi: "Inn cheezon ka upyog karne ke opportunities dhoondhein: var ke bajay const/let, callbacks ke liye arrow functions, Promise chains ke bajay async/await, properties extract karne ke liye destructuring, string concatenation ke liye template literals, function arguments ke liye default parameters, for loops ke bajay Array methods jaise map, aur safer property access ke liye optional chaining/nullish coalescing operators."
    }
  },
  summary: {
    en: "ES6 (ECMAScript 2015) and subsequent ECMAScript versions brought a wealth of powerful features to JavaScript, modernizing the language and enabling more concise, readable, and maintainable code. Essential features include let/const declarations, arrow functions, template literals, destructuring, spread/rest operators, default parameters, classes, modules, Promises, and async/await. These features have transformed how developers write JavaScript, moving from verbose callback-based code to more expressive and structured approaches that better handle asynchronous operations and complex data structures. As browsers and Node.js environments continue to improve their support for these features, modern JavaScript development has become more productive and enjoyable.",
    hi: {
      text: "ES6 (ECMAScript 2015) aur subsequent ECMAScript versions ne JavaScript mein powerful features ka dher laya, language ko modernize karke aur more concise, readable, aur maintainable code ko enable kiya.",
      points: [
        "Essential features mein let/const declarations, arrow functions, template literals, destructuring, spread/rest operators, default parameters, classes, modules, Promises, aur async/await shamil hain",
        "Inn features ne developers ke JavaScript likhne ke tarike ko transform kar diya hai, verbose callback-based code se lekar more expressive aur structured approaches tak jo asynchronous operations aur complex data structures ko better handle karte hain",
        "Jaise-jaise browsers aur Node.js environments inn features ke liye apne support ko improve karte rahte hain, modern JavaScript development more productive aur enjoyable ho gaya hai",
        "Arrow functions ne this binding aur concise syntax se related common problems ko solve kiya hai",
        "Destructuring, spread operators, aur template literals ne data access aur string manipulation ko significantly simplify kiya hai",
        "Promises aur async/await ne asynchronous programming ko transform kar diya hai, complex operations ke saath deal karna much easier bana diya hai"
      ]
    }
  },
  prevTopic: {
    id: "async-js",
    title: "Asynchronous JavaScript"
  },
  nextTopic: {
    id: "error-handling",
    title: "Error Handling"
  }
};