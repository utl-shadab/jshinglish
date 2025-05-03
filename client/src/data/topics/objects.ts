export const objectsData = {
  id: "objects",
  title: "Objects in JavaScript",
  introduction: {
    en: "Objects are one of the most important data types in JavaScript. They allow you to store collections of data as key-value pairs. Unlike arrays, which use numeric indices, objects use keys (or properties) to access values, making them ideal for representing entities with named properties.",
    hi: "Objects JavaScript mein most important data types mein se ek hai. Ye aapko data ke collections ko key-value pairs ke roop mein store karne ki anumati dete hain. Arrays jo numeric indices ka upyog karte hain, ke ulat, objects keys (ya properties) ka upyog values access karne ke liye karte hain, jinhe named properties ke saath entities ko represent karne ke liye adarsh banate hain."
  },
  sections: [
    {
      id: "object-basics",
      title: "Object Basics",
      content: {
        en: "Objects can be created using object literals (curly braces), the Object constructor, or by using constructor functions/classes. Properties can be accessed using dot notation or bracket notation.",
        hi: "Objects ko object literals (curly braces), Object constructor, ya constructor functions/classes ka upyog karke create kiya ja sakta hai. Properties ko dot notation ya bracket notation ka upyog karke access kiya ja sakta hai."
      },
      codeExample: {
        code: `// Creating objects
// 1. Using object literals (most common method)
const person = {
  name: "John",
  age: 30,
  isEmployed: true,
  hobbies: ["reading", "music", "hiking"],
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001"
  }
};

// 2. Using the Object constructor
const car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2020;

// 3. Using Object.create()
const animal = Object.create(null); // Creates an object with no prototype
animal.type = "Dog";
animal.name = "Rex";

// Accessing object properties
// 1. Dot notation
console.log(person.name); // John
console.log(person.address.city); // New York

// 2. Bracket notation
console.log(person["age"]); // 30
console.log(person["address"]["street"]); // 123 Main St

// Bracket notation is useful when property names are dynamic or have special characters
const propertyName = "isEmployed";
console.log(person[propertyName]); // true

// Adding new properties
person.email = "john@example.com";
person["phone"] = "555-1234";

// Modifying properties
person.age = 31;

// Deleting properties
delete person.hobbies;

console.log(person); // Object without hobbies property`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's explore object basics
const user = {
  id: 101,
  username: "techguru",
  email: "guru@techworld.com",
  isActive: true,
  joinDate: new Date(2021, 0, 15), // January 15, 2021
  posts: [
    { id: 1, title: "Hello World" },
    { id: 2, title: "JavaScript Tips" }
  ]
};

// Accessing properties with different notations
console.log("User details:");
console.log("- Username (dot notation):", user.username);
console.log("- Email (bracket notation):", user["email"]);

// Using variables as property names
const field = "isActive";
console.log(\`- \${field}:\`, user[field]);

// Nested properties
console.log("- First post title:", user.posts[0].title);

// Adding new properties
user.lastLogin = new Date();
console.log("- Last login:", user.lastLogin);

// Modifying properties
user.posts.push({ id: 3, title: "Object Fundamentals" });
console.log("- Number of posts:", user.posts.length);

// Checking if a property exists
console.log("\\nProperty checks:");
console.log("- Has 'username' property?", "username" in user);
console.log("- Has 'password' property?", "password" in user);
console.log("- Has 'toString' property?", "toString" in user); // Inherited from Object.prototype

// Object.keys() - get all enumerable property names
console.log("\\nAll property names:", Object.keys(user));

// Object.values() - get all values
console.log("\\nProperty values:", Object.values(user).map(
  v => typeof v === 'object' ? '[Object]' : v
));`,
        output: `User details:
- Username (dot notation): techguru
- Email (bracket notation): guru@techworld.com
- isActive: true
- First post title: Hello World
- Last login: 2023-05-03T18:23:45.678Z
- Number of posts: 3

Property checks:
- Has 'username' property? true
- Has 'password' property? false
- Has 'toString' property? true

All property names: ['id', 'username', 'email', 'isActive', 'joinDate', 'posts', 'lastLogin']

Property values: [101, 'techguru', 'guru@techworld.com', true, '[Object]', '[Object]', '[Object]']`,
        explanation: {
          en: "This example demonstrates how to create, access, and modify object properties. We use both dot notation and bracket notation to access properties, including dynamic property access using variables. We also see how to add new properties, modify existing ones, and check for property existence. Object.keys() and Object.values() are useful methods for working with all properties of an object.",
          hi: "Yeh example dikhata hai ki object properties ko kaise create, access, aur modify kiya jata hai. Hum properties ko access karne ke liye dot notation aur bracket notation dono ka upyog karte hain, jisme variables ka upyog karke dynamic property access bhi shamil hai. Hum new properties add karna, existing ones ko modify karna, aur property existence check karna bhi dekhte hain. Object.keys() aur Object.values() ek object ke sabhi properties ke saath kaam karne ke liye useful methods hain."
        }
      }
    },
    {
      id: "methods-and-this",
      title: "Methods and 'this' Keyword",
      content: {
        en: "Object properties can also be functions, which are called methods. When a method is invoked, the 'this' keyword refers to the object the method belongs to, allowing you to access other properties of the same object.",
        hi: "Object properties functions bhi ho sakti hain, jinhe methods kaha jata hai. Jab ek method invoke kiya jata hai, 'this' keyword us object ko refer karta hai jisse method belong karta hai, jisse aap same object ke other properties ko access kar sakte hain."
      },
      codeExample: {
        code: `// Object with methods
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  
  // Method using function declaration
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  },
  
  // Method using shorthand syntax (ES6)
  greet() {
    return "Hello, my name is " + this.getFullName() + " and I am " + this.age + " years old.";
  },
  
  // Method using arrow function - CAUTION: 'this' behaves differently
  // Arrow functions do not have their own 'this' context
  getAgeInMonths: () => {
    // 'this' does not refer to person here!
    // It refers to the outer scope (often window or undefined)
    // return this.age * 12; // This will not work as expected
    
    // Would need to use person.age instead
    return person.age * 12;
  }
};

console.log(person.getFullName()); // "John Doe"
console.log(person.greet()); // "Hello, my name is John Doe and I am 30 years old."
console.log(person.getAgeInMonths()); // 360

// The value of 'this' depends on how the function is called
const fullName = person.getFullName;
// When called without context, 'this' becomes undefined (in strict mode) or window (in non-strict mode)
// console.log(fullName()); // TypeError: Cannot read property 'firstName' of undefined

// Ways to control 'this'
// 1. Using bind
const boundFullName = person.getFullName.bind(person);
console.log(boundFullName()); // "John Doe"

// 2. Using call
function introduce(greeting) {
  return greeting + ", I'm " + this.firstName;
}
console.log(introduce.call(person, "Hi")); // "Hi, I'm John"

// 3. Using apply
console.log(introduce.apply(person, ["Hello"])); // "Hello, I'm John"`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's explore 'this' in different contexts
// 1. Object method context
const calculator = {
  value: 0,
  
  add(x) {
    this.value += x;
    return this;
  },
  
  subtract(x) {
    this.value -= x;
    return this;
  },
  
  multiply(x) {
    this.value *= x;
    return this;
  },
  
  getValue() {
    return this.value;
  }
};

// Method chaining works because each method returns 'this'
console.log("Calculator result:", 
  calculator.add(5).multiply(2).subtract(3).getValue()
);

// 2. 'this' in event handlers
const button = {
  text: "Click me",
  
  // Regular function preserves 'this'
  handleClick: function() {
    console.log("Button clicked:", this.text);
  },
  
  // Arrow function captures outer 'this'
  handleArrowClick: () => {
    // 'this' is not button, it's the outer scope
    console.log("Arrow function this.text:", this.text);
  },
  
  // Simulating click events
  simulateClick() {
    console.log("\\nSimulating clicks:");
    
    // Direct call - 'this' is button
    this.handleClick();
    
    // Arrow function - 'this' is not button
    this.handleArrowClick();
    
    // Function called without context
    const clickHandler = this.handleClick;
    try {
      clickHandler(); // 'this' is undefined in strict mode
    } catch (e) {
      console.log("Error when calling without context:", e.message);
    }
    
    // Using bind to fix 'this'
    const boundHandler = this.handleClick.bind(this);
    boundHandler(); // 'this' is correctly bound to button
  }
};

button.simulateClick();`,
        output: `Calculator result: 7

Simulating clicks:
Button clicked: Click me
Arrow function this.text: undefined
Error when calling without context: Cannot read properties of undefined (reading 'text')
Button clicked: Click me`,
        explanation: {
          en: "This example demonstrates how 'this' works in JavaScript objects. The calculator example shows method chaining, where each method returns 'this' (the object itself) allowing multiple methods to be called in sequence. The button example illustrates how 'this' can change depending on how a function is called. Regular functions have their own 'this' binding that depends on the call context, while arrow functions inherit 'this' from their containing scope. The example also shows how to use bind() to ensure 'this' refers to the correct object.",
          hi: "Yeh example demonstrate karta hai ki JavaScript objects mein 'this' kaise kaam karta hai. Calculator example method chaining dikhata hai, jahan har method 'this' (object khud) return karta hai jisse multiple methods ko sequence mein call kiya ja sake. Button example illustrate karta hai ki 'this' kaise change ho sakta hai depending on how a function is called. Regular functions ka apna 'this' binding hota hai jo call context par depend karta hai, jabki arrow functions 'this' ko apne containing scope se inherit karte hain. Example yeh bhi dikhata hai ki bind() ka upyog kaise kiya jaye yeh ensure karne ke liye ki 'this' correct object ko refer kare."
        }
      }
    },
    {
      id: "object-destructuring",
      title: "Object Destructuring",
      content: {
        en: "Object destructuring is a JavaScript syntax that allows you to extract properties from objects and bind them to variables. It provides a more concise way to access multiple properties from an object.",
        hi: "Object destructuring ek JavaScript syntax hai jo aapko objects se properties extract karne aur unhe variables se bind karne ki anumati deta hai. Yeh ek object se multiple properties access karne ka ek more concise way provide karta hai."
      },
      codeExample: {
        code: `// Basic object destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  }
};

// Old way to assign variables from an object
const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;

// Using destructuring
const { firstName: fName, lastName: lName, age: personAge } = person;
console.log(fName, lName, personAge); // "John" "Doe" 30

// Using original property names as variable names
const { firstName, lastName, age } = person;
console.log(firstName, lastName, age); // "John" "Doe" 30

// Nested destructuring
const { address: { city, country } } = person;
console.log(city, country); // "New York" "USA"

// Default values for missing properties
const { zip = "10001" } = person.address;
console.log(zip); // "10001" (not in object, so default is used)

// Rest operator to collect remaining properties
const { firstName, age, ...rest } = person;
console.log(rest); // { lastName: "Doe", address: { street, city, country } }

// Destructuring in function parameters
function printPersonInfo({ firstName, lastName, age = 'unknown' }) {
  console.log(\`Name: \${firstName} \${lastName}, Age: \${age}\`);
}

printPersonInfo(person); // "Name: John Doe, Age: 30"
printPersonInfo({ firstName: "Jane", lastName: "Smith" }); // "Name: Jane Smith, Age: unknown"

// Destructuring with computed property names
const key = "age";
const { [key]: userAge } = person;
console.log(userAge); // 30`,
        editable: true
      }
    },
    {
      id: "object-manipulation",
      title: "Object Manipulation and Iteration",
      content: {
        en: "JavaScript provides several ways to manipulate and iterate over objects. Object methods like Object.keys(), Object.values(), and Object.entries() make it easy to work with an object's properties and values.",
        hi: "JavaScript objects ko manipulate aur iterate karne ke liye kai tarike provide karta hai. Object.keys(), Object.values(), aur Object.entries() jaise Object methods ek object ke properties aur values ke saath kaam karna aasan banate hain."
      },
      codeExample: {
        code: `const person = {
  name: "John",
  age: 30,
  job: "Developer",
  city: "New York"
};

// 1. Object.keys(): Get an array of property names
const keys = Object.keys(person);
console.log("Property names:", keys); // ["name", "age", "job", "city"]

// 2. Object.values(): Get an array of property values
const values = Object.values(person);
console.log("Property values:", values); // ["John", 30, "Developer", "New York"]

// 3. Object.entries(): Get an array of [key, value] pairs
const entries = Object.entries(person);
console.log("Entries:", entries);
// [["name", "John"], ["age", 30], ["job", "Developer"], ["city", "New York"]]

// 4. Iterating with for...in loop
console.log("\\nIterating with for...in:");
for (const key in person) {
  console.log(key + ": " + person[key]);
}

// 5. Using Object.entries() with forEach
console.log("\\nIterating with Object.entries():");
Object.entries(person).forEach(([key, value]) => {
  console.log(key + ": " + value);
});

// 6. Creating a new object with Object.fromEntries()
const personArray = [
  ["name", "Jane"],
  ["age", 25],
  ["job", "Designer"]
];
const newPerson = Object.fromEntries(personArray);
console.log("\\nNew object from entries:", newPerson);

// 7. Merging objects with Object.assign()
const personalInfo = { name: "John", age: 30 };
const jobInfo = { job: "Developer", company: "Tech Inc." };
const contactInfo = { email: "john@example.com", phone: "555-1234" };

// Merge multiple objects
const completeProfile = Object.assign({}, personalInfo, jobInfo, contactInfo);
console.log("\\nMerged object:", completeProfile);

// 8. Merging objects with spread operator (ES6)
const completeProfile2 = { ...personalInfo, ...jobInfo, ...contactInfo };
console.log("Merged with spread operator:", completeProfile2);

// 9. Copying an object
const personCopy = { ...person };
console.log("\\nCopied object:", personCopy);

// Note: This is a shallow copy - nested objects are referenced, not copied
const nestedObj = {
  name: "John",
  details: { age: 30, job: "Developer" }
};
const nestedCopy = { ...nestedObj };
nestedCopy.details.age = 31; // This changes both objects
console.log("Original after changing copy:", nestedObj.details.age); // 31`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's transform and filter an object collection
const products = [
  { id: 1, name: "Laptop", price: 999.99, inStock: true, category: "Electronics" },
  { id: 2, name: "Headphones", price: 99.99, inStock: true, category: "Electronics" },
  { id: 3, name: "Coffee Mug", price: 12.99, inStock: false, category: "Kitchen" },
  { id: 4, name: "Book", price: 24.99, inStock: true, category: "Books" },
  { id: 5, name: "Phone Case", price: 19.99, inStock: true, category: "Accessories" }
];

// 1. Convert array to object using id as keys
const productsMap = products.reduce((acc, product) => {
  acc[product.id] = product;
  return acc;
}, {});

console.log("Products map:", productsMap);

// 2. Find available products by category
const productsByCategory = products.reduce((acc, product) => {
  if (product.inStock) {
    // If category doesn't exist in our accumulator, create it
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    // Add product to its category array
    acc[product.category].push(product.name);
  }
  return acc;
}, {});

console.log("\\nAvailable products by category:", productsByCategory);

// 3. Summarize inventory
const inventorySummary = {
  totalProducts: products.length,
  availableProducts: products.filter(p => p.inStock).length,
  categories: [...new Set(products.map(p => p.category))],
  priceRange: {
    min: Math.min(...products.map(p => p.price)),
    max: Math.max(...products.map(p => p.price)),
    average: products.reduce((sum, p) => sum + p.price, 0) / products.length
  }
};

console.log("\\nInventory summary:", inventorySummary);

// 4. Apply a discount to all products
function applyDiscount(products, discountPercent) {
  // Use map to create a new array with discounted prices
  return products.map(product => {
    // Create a new object with all existing properties, but update the price
    return {
      ...product,
      originalPrice: product.price,
      price: product.price * (1 - discountPercent / 100)
    };
  });
}

const discountedProducts = applyDiscount(products, 10); // 10% off
console.log("\\nDiscounted products (first one):", discountedProducts[0]);`,
        output: `Products map: {
  '1': { id: 1, name: 'Laptop', price: 999.99, inStock: true, category: 'Electronics' },
  '2': { id: 2, name: 'Headphones', price: 99.99, inStock: true, category: 'Electronics' },
  '3': { id: 3, name: 'Coffee Mug', price: 12.99, inStock: false, category: 'Kitchen' },
  '4': { id: 4, name: 'Book', price: 24.99, inStock: true, category: 'Books' },
  '5': { id: 5, name: 'Phone Case', price: 19.99, inStock: true, category: 'Accessories' }
}

Available products by category: {
  Electronics: [ 'Laptop', 'Headphones' ],
  Books: [ 'Book' ],
  Accessories: [ 'Phone Case' ]
}

Inventory summary: {
  totalProducts: 5,
  availableProducts: 4,
  categories: [ 'Electronics', 'Kitchen', 'Books', 'Accessories' ],
  priceRange: { min: 12.99, max: 999.99, average: 231.79 }
}

Discounted products (first one): {
  id: 1,
  name: 'Laptop',
  price: 899.991,
  inStock: true,
  category: 'Electronics',
  originalPrice: 999.99
}`,
        explanation: {
          en: "This example demonstrates practical ways to transform and manipulate objects and arrays of objects. We convert an array to an object map for easier lookups by ID, group products by category, create a summary object with calculated properties, and apply a transformation to create new objects with modified values. These are common patterns in JavaScript applications, especially when working with data from APIs or databases.",
          hi: "Yeh example objects aur objects ke arrays ko transform aur manipulate karne ke practical ways demonstrate karta hai. Hum ID by easier lookups ke liye ek array ko ek object map mein convert karte hain, products ko category by group karte hain, calculated properties ke saath ek summary object create karte hain, aur modified values ke saath new objects create karne ke liye ek transformation apply karte hain. Ye JavaScript applications mein common patterns hain, especially jab APIs ya databases se data ke saath kaam kiya jata hai."
        }
      }
    },
    {
      id: "advanced-object-concepts",
      title: "Advanced Object Concepts",
      content: {
        en: "JavaScript objects have advanced features like property descriptors, getters, setters, and prototypes that enable more fine-grained control over object behavior and inheritance.",
        hi: "JavaScript objects mein advanced features jaise property descriptors, getters, setters, aur prototypes hote hain jo object behavior aur inheritance par more fine-grained control enable karte hain."
      },
      codeExample: {
        code: `// 1. Property descriptors
const person = { name: "John" };

// Define a property with more control
Object.defineProperty(person, 'age', {
  value: 30,
  writable: true,      // Can be changed
  enumerable: true,    // Shows up in for...in and Object.keys()
  configurable: true   // Can be deleted and modified
});

// Define a read-only property
Object.defineProperty(person, 'id', {
  value: 12345,
  writable: false,     // Cannot be changed
  enumerable: true,
  configurable: false  // Cannot be deleted or modified
});

// Try to change read-only property
person.id = 54321;     // Silently fails (or throws error in strict mode)
console.log(person.id); // Still 12345

// 2. Getters and setters
const product = {
  _price: 0,  // Convention to indicate private variable
  
  // Getter
  get price() {
    return '$' + this._price.toFixed(2);
  },
  
  // Setter
  set price(value) {
    if (value < 0) {
      throw new Error("Price cannot be negative");
    }
    this._price = value;
  },
  
  // Getter with calculation
  get discountedPrice() {
    return '$' + (this._price * 0.9).toFixed(2);
  }
};

product.price = 19.99;
console.log(product.price);         // "$19.99"
console.log(product.discountedPrice); // "$17.99"

// 3. Prototypes and inheritance
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the prototype
Person.prototype.greet = function() {
  return \`Hello, my name is \${this.name}\`;
};

// Create an instance
const john = new Person("John", 30);
console.log(john.greet()); // "Hello, my name is John"

// Inheritance using prototypes
function Employee(name, age, jobTitle) {
  // Call parent constructor
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Set up prototype chain
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add a method to Employee.prototype
Employee.prototype.getDetails = function() {
  return \`\${this.name}, \${this.jobTitle}, \${this.age} years old\`;
};

// Create an Employee instance
const jane = new Employee("Jane", 28, "Developer");
console.log(jane.greet());       // Inherited: "Hello, my name is Jane"
console.log(jane.getDetails());  // "Jane, Developer, 28 years old"`,
        editable: true
      }
    }
  ],
  exercise: {
    title: "Object Manipulation Challenge",
    description: {
      en: "Create a function that takes an array of objects representing students and their scores, and returns a new array of objects with each student's average score and grade calculated.",
      hi: "Ek function banayein jo students aur unke scores ko represent karne wale objects ke array ko input lete hai aur objects ke ek new array return karta hai jisme har student ka average score aur grade calculate kiya gaya hai."
    },
    starterCode: `// The input will be an array of student objects, each with a name and scores array
// Example: [{ name: "Alice", scores: [90, 85, 92] }, { name: "Bob", scores: [75, 80, 70] }]
// Calculate the average score for each student and assign a grade based on:
// 90-100: A, 80-89: B, 70-79: C, 60-69: D, Below 60: F
// Return a new array of objects with name, average, and grade properties

function calculateGrades(students) {
  // Your code here
}

// Test with this data
const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 70] },
  { name: "Charlie", scores: [95, 90, 88] },
  { name: "Diana", scores: [60, 55, 65] }
];

console.log(calculateGrades(students));`,
    expectedOutput: `[
  { name: 'Alice', average: 89, grade: 'B' },
  { name: 'Bob', average: 75, grade: 'C' },
  { name: 'Charlie', average: 91, grade: 'A' },
  { name: 'Diana', average: 60, grade: 'D' }
]`,
    hint: {
      en: "Use the map() method to transform each student object. Inside the callback function, calculate the average using reduce() divided by the array length. Then determine the grade using if/else or a switch statement. Create and return a new object with the required properties.",
      hi: "Har student object ko transform karne ke liye map() method ka upyog karein. Callback function ke andar, array length se divide reduce() ka upyog karke average calculate karein. Phir if/else ya switch statement ka upyog karke grade determine karein. Required properties ke saath ek new object create karein aur return karein."
    }
  },
  summary: {
    en: "Objects in JavaScript are a fundamental data structure that allow you to store and organize data using key-value pairs. They provide a powerful and flexible way to represent entities with named properties. JavaScript objects support methods, which are functions that can operate on the object's data. The 'this' keyword in methods refers to the object itself. Advanced object features include property descriptors, getters and setters, destructuring, and various ways to manipulate and iterate over object properties. Understanding objects deeply is essential for effective JavaScript programming.",
    hi: {
      text: "Objects JavaScript mein ek fundamental data structure hai jo aapko key-value pairs ka upyog karke data store aur organize karne ki anumati deta hai.",
      points: [
        "Ye named properties ke saath entities ko represent karne ka ek powerful aur flexible tarika provide karte hain",
        "JavaScript objects methods ko support karte hain, jo functions hain jo object ke data par operate kar sakte hain",
        "Methods mein 'this' keyword object khud ko refer karta hai",
        "Advanced object features mein property descriptors, getters aur setters, destructuring, aur object properties ko manipulate aur iterate karne ke various ways shamil hain",
        "Objects ko deeply samajhna effective JavaScript programming ke liye essential hai"
      ]
    }
  },
  prevTopic: {
    id: "arrays",
    title: "Arrays"
  },
  nextTopic: {
    id: "this-keyword",
    title: "The 'this' Keyword"
  }
};