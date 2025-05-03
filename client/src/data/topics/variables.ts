export const variablesData = {
  id: "variables",
  title: "Variables and Data Types",
  introduction: {
    en: "Variables are containers for storing data values. In JavaScript, variables can be declared using var, let, or const keywords. Data types define the kind of values that can be stored and manipulated within a program.",
    hi: "Variables data values store karne ke containers hain. JavaScript mein, variables var, let, ya const keywords ka upyog karke declare kiye ja sakte hain. Data types define karte hain ki program ke andar kis type ke values store aur manipulate kiye ja sakte hain."
  },
  sections: [
    {
      id: "variable-declaration",
      title: "Variable Declaration",
      content: {
        en: "JavaScript provides three ways to declare variables: var, let, and const. Each has different scoping and reassignment rules that affect how they behave in your code.",
        hi: "JavaScript variables declare karne ke teen tarike provide karta hai: var, let, aur const. Har ek ke alag-alag scoping aur reassignment rules hain jo determine karte hain ki ve aapke code mein kaise behave karenge."
      },
      codeExample: {
        code: `// Using var (function scoped, can be redeclared and reassigned)
var name = "John";
var age = 30;
var isStudent = true;

// Using let (block scoped, can be reassigned but not redeclared in same scope)
let city = "New York";
city = "San Francisco"; // This is allowed
// let city = "Chicago"; // This would cause an error

// Using const (block scoped, cannot be reassigned or redeclared)
const PI = 3.14159;
const daysInWeek = 7;
// PI = 3.14; // This would cause an error

// Variable declarations without assignment
var country; // Value is undefined
let population; // Value is undefined
// const area; // Error: const declarations must be initialized`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's explore scope differences between var, let, and const
function scopeExample() {
  // Function scope
  var functionScoped = "I am function scoped";
  let blockScoped = "I am block scoped";
  const alsoBlockScoped = "I am also block scoped";
  
  console.log("Within function:");
  console.log(functionScoped);
  console.log(blockScoped);
  console.log(alsoBlockScoped);
  
  if (true) {
    // Block scope
    var anotherFunctionScoped = "I am also function scoped";
    let anotherBlockScoped = "I am block scoped inside if";
    const yetAnotherBlockScoped = "I am also block scoped inside if";
    
    console.log("\\nWithin if block:");
    console.log(anotherFunctionScoped);
    console.log(anotherBlockScoped);
    console.log(yetAnotherBlockScoped);
  }
  
  console.log("\\nAfter if block:");
  console.log(anotherFunctionScoped); // Still accessible (function scoped)
  // console.log(anotherBlockScoped); // This would cause a ReferenceError
  // console.log(yetAnotherBlockScoped); // This would cause a ReferenceError
}

scopeExample();`,
        output: `Within function:
I am function scoped
I am block scoped
I am also block scoped

Within if block:
I am also function scoped
I am block scoped inside if
I am also block scoped inside if

After if block:
I am also function scoped`,
        explanation: {
          en: "This example demonstrates how the different variable declarations behave in terms of scope. Variables declared with 'var' are function-scoped, which means they are accessible throughout the entire function, regardless of block boundaries. Variables declared with 'let' and 'const' are block-scoped, which means they are only accessible within the block they are defined in (such as an if statement).",
          hi: "Yeh example demonstrate karta hai ki different variable declarations scope ke terms mein kaise behave karte hain. 'var' ke saath declare kiye gaye variables function-scoped hote hain, jiska matlab hai ki ve block boundaries ke bawajood poore function mein accessible hote hain. 'let' aur 'const' ke saath declare kiye gaye variables block-scoped hote hain, jiska matlab hai ki ve sirf us block ke andar accessible hote hain jisme ve define kiye gaye hain (jaise ki if statement)."
        }
      }
    },
    {
      id: "data-types",
      title: "Data Types",
      content: {
        en: "JavaScript has eight basic data types: String, Number, BigInt, Boolean, Undefined, Null, Symbol, and Object. The first seven types are primitives, while Object is a reference type. Understanding these data types is essential for effective JavaScript programming.",
        hi: "JavaScript mein aath basic data types hain: String, Number, BigInt, Boolean, Undefined, Null, Symbol, aur Object. Pehle saat types primitives hain, jabki Object ek reference type hai. In data types ko samajhna effective JavaScript programming ke liye essential hai."
      },
      codeExample: {
        code: `// Primitive Data Types
// String - text data enclosed in quotes
const name = "John";
const message = 'Hello, World!';
const template = \`Name: \${name}\`; // Template literals with backticks

// Number - integers and floating point numbers
const age = 30;
const price = 19.99;
const negative = -42;
const million = 1e6; // 1000000
const fraction = 0.1 + 0.2; // Note: gives 0.30000000000000004 due to binary floating-point

// BigInt - for integers of arbitrary length
const bigNumber = 9007199254740991n; // Add 'n' at the end for BigInt
const anotherBigNumber = BigInt("9007199254740991");

// Boolean - true or false
const isLoggedIn = true;
const hasPermission = false;

// Undefined - a variable declared but not assigned a value
let userEmail;
console.log(userEmail); // undefined

// Null - explicitly assigned "no value"
const userAddress = null;

// Symbol - unique and immutable primitive value
const uniqueId = Symbol("id");
const anotherUniqueId = Symbol("id"); // different from above, though description is same
console.log(uniqueId === anotherUniqueId); // false

// Non-Primitive Data Type
// Object - collection of properties
const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA"
  }
};

// Arrays are a special type of Object
const fruits = ["apple", "banana", "orange"];

// Functions are also a special type of Object
function greet(name) {
  return \`Hello, \${name}!\`;
}`,
        editable: true
      }
    },
    {
      id: "type-conversion",
      title: "Type Conversion and Coercion",
      content: {
        en: "Type conversion is when we explicitly convert a value from one data type to another. Type coercion is when JavaScript automatically converts types behind the scenes. Understanding how JavaScript handles these conversions is important to avoid unexpected results.",
        hi: "Type conversion tab hota hai jab hum explicitly ek value ko ek data type se dusre mein convert karte hain. Type coercion tab hota hai jab JavaScript automatically behind the scenes types ko convert karta hai. JavaScript in conversions ko kaise handle karta hai, yeh samajhna unexpected results se bachne ke liye important hai."
      },
      codeExample: {
        code: `// Explicit Type Conversion (Type Casting)

// String conversion
let value = 42;
let str1 = String(value); // "42"
let str2 = value.toString(); // "42"
let str3 = value + ""; // "42" (implicit conversion)

// Number conversion
let strNumber = "42";
let num1 = Number(strNumber); // 42
let num2 = parseInt(strNumber); // 42
let num3 = +strNumber; // 42 (using unary + operator)

// Converting string to float
let strFloat = "42.5";
let float1 = Number(strFloat); // 42.5
let float2 = parseFloat(strFloat); // 42.5

// Boolean conversion
let truthy = Boolean(42); // true
let falsy = Boolean(0); // false
let strTruthy = Boolean("hello"); // true
let strFalsy = Boolean(""); // false

// Implicit Type Coercion

// String coercion with +
let result1 = "3" + 4; // "34" (number is converted to string)
let result2 = 3 + "4"; // "34"

// Numeric coercion with mathematical operators
let result3 = "3" - 2; // 1 (string is converted to number)
let result4 = "3" * "2"; // 6
let result5 = "10" / 2; // 5

// Boolean coercion in logical context
let value1 = 42;
if (value1) {
  // value1 is coerced to boolean (true)
  console.log("value is truthy");
}

// Falsy values in JavaScript:
// false, 0, "", null, undefined, NaN
let zero = 0;
if (!zero) {
  // zero is coerced to boolean (false)
  console.log("zero is falsy");
}`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's explore some tricky type coercions
console.log("Equality comparisons:");
console.log("'123' == 123:", '123' == 123);  // true (types are coerced)
console.log("'123' === 123:", '123' === 123); // false (strict equality, no coercion)

console.log("\\nBoolean coercions:");
console.log("Boolean(''):", Boolean(''));     // false
console.log("Boolean('0'):", Boolean('0'));   // true (non-empty string)
console.log("Boolean(0):", Boolean(0));       // false
console.log("Boolean('false'):", Boolean('false')); // true (non-empty string)

console.log("\\nNumber coercions:");
console.log("Number('123'):", Number('123'));     // 123
console.log("Number('123.45'):", Number('123.45')); // 123.45
console.log("Number('123px'):", Number('123px'));   // NaN
console.log("parseInt('123px'):", parseInt('123px')); // 123 (stops at non-numeric)

console.log("\\nMathematical operations with different types:");
console.log("'5' + 2:", '5' + 2);     // '52' (string concatenation)
console.log("'5' - 2:", '5' - 2);     // 3 (numeric subtraction)
console.log("'5' * '2':", '5' * '2'); // 10 (numeric multiplication)
console.log("'5' / 2:", '5' / 2);     // 2.5 (numeric division)

console.log("\\nLogical operators with non-boolean values:");
// Logical operators don't always return boolean
console.log("'hello' && 'world':", 'hello' && 'world'); // 'world' (last truthy value)
console.log("'' || 'default':", '' || 'default');       // 'default' (first truthy value)
console.log("null ?? 'fallback':", null ?? 'fallback'); // 'fallback' (nullish coalescing)`,
        output: `Equality comparisons:
'123' == 123: true
'123' === 123: false

Boolean coercions:
Boolean(''): false
Boolean('0'): true
Boolean(0): false
Boolean('false'): true

Number coercions:
Number('123'): 123
Number('123.45'): 123.45
Number('123px'): NaN
parseInt('123px'): 123

Mathematical operations with different types:
'5' + 2: 52
'5' - 2: 3
'5' * '2': 10
'5' / 2: 2.5

Logical operators with non-boolean values:
'hello' && 'world': world
'' || 'default': default
null ?? 'fallback': fallback`,
        explanation: {
          en: "This example demonstrates various type coercions in JavaScript. The == operator performs type coercion while === does not. Different operators behave differently: + prefers string concatenation when one operand is a string, while -, *, and / convert their operands to numbers. Logical operators like && and || don't return boolean values; instead, they return the last evaluated operand, which can be of any type.",
          hi: "Yeh example JavaScript mein various type coercions ko demonstrate karta hai. == operator type coercion perform karta hai jabki === nahi karta. Different operators differently behave karte hain: + string concatenation ko prefer karta hai jab ek operand string hota hai, jabki -, *, aur / apne operands ko numbers mein convert karte hain. && aur || jaise logical operators boolean values return nahi karte; instead, ve last evaluated operand return karte hain, jo kisi bhi type ka ho sakta hai."
        }
      }
    },
    {
      id: "variable-scope",
      title: "Variable Scope and Hoisting",
      content: {
        en: "Scope determines the accessibility of variables. JavaScript has function scope (var) and block scope (let, const). Hoisting is JavaScript's behavior of moving declarations to the top of the current scope before code execution.",
        hi: "Scope variables ki accessibility determine karta hai. JavaScript mein function scope (var) aur block scope (let, const) hota hai. Hoisting JavaScript ka behavior hai jisme declarations ko code execution se pehle current scope ke top par move kiya jata hai."
      },
      codeExample: {
        code: `// Global Scope
var globalVar = "I am global";
let globalLet = "I am also global";

function scopeExample() {
  // Function Scope
  var functionVar = "I am function scoped";
  let functionLet = "I am also function scoped";
  
  console.log(globalVar); // Accessible
  console.log(globalLet); // Accessible
  
  if (true) {
    // Block Scope
    var blockVar = "I am still function scoped (var)";
    let blockLet = "I am block scoped (let)";
    const blockConst = "I am also block scoped (const)";
    
    console.log(functionVar); // Accessible
    console.log(functionLet); // Accessible
  }
  
  console.log(blockVar); // Accessible (function scoped)
  // console.log(blockLet); // Error: not accessible (block scoped)
  // console.log(blockConst); // Error: not accessible (block scoped)
}

// Hoisting Examples

// Variable hoisting
console.log(hoistedVar); // undefined (not an error)
var hoistedVar = "I am hoisted";

// Function declarations are fully hoisted
hoistedFunction(); // Works
function hoistedFunction() {
  console.log("I am a hoisted function");
}

// Function expressions are not hoisted
// hoistedExpression(); // Error
var hoistedExpression = function() {
  console.log("I am a function expression");
};

// let and const are hoisted but not initialized (Temporal Dead Zone)
// console.log(hoistedLet); // ReferenceError
let hoistedLet = "I am not accessible before declaration";`,
        editable: true
      }
    }
  ],
  exercise: {
    title: "Variable and Data Type Exercise",
    description: {
      en: "Create a program that converts temperature from Celsius to Fahrenheit using variables. The formula is: F = C * 9/5 + 32. Your program should ask for a Celsius temperature, convert it to Fahrenheit, and display the result.",
      hi: "Variables ka upyog karke Celsius se Fahrenheit mein temperature convert karne wala program banayein. Formula hai: F = C * 9/5 + 32. Aapke program ko Celsius temperature poochna chahiye, use Fahrenheit mein convert karna chahiye, aur result display karna chahiye."
    },
    starterCode: `// Write your temperature converter here
// Ask the user for a temperature in Celsius (you can use a variable)
// Convert it to Fahrenheit using the formula: F = C * 9/5 + 32
// Display the result with appropriate messages
// Make sure to use appropriate variable declarations and data types

// Apna temperature converter yahan likhein
// User se Celsius mein temperature poochein (aap ek variable ka upyog kar sakte hain)
// Use Fahrenheit mein convert karein formula ka upyog karke: F = C * 9/5 + 32
// Result ko appropriate messages ke saath display karein
// Appropriate variable declarations aur data types ka upyog karna sunishchit karein`,
    expectedOutput: `Temperature Converter
Celsius: 25°C
Fahrenheit: 77°F
`,
    hint: {
      en: "Use a 'const' for storing the Celsius temperature since it won't change after assignment. Use appropriate mathematical operations for the conversion. Remember to use template literals (backticks) for easy string formatting with the variables.",
      hi: "Celsius temperature store karne ke liye 'const' ka upyog karein kyunki assignment ke baad yeh change nahi hoga. Conversion ke liye appropriate mathematical operations ka upyog karein. Variables ke saath easy string formatting ke liye template literals (backticks) ka upyog karna yaad rakhein."
    }
  },
  summary: {
    en: "Variables are fundamental to JavaScript programming, allowing us to store and manipulate data. The choice between var, let, and const affects variable scope and reassignment capability. JavaScript provides eight data types, divided between primitive and reference types. Understanding type conversion and coercion is crucial to avoid unexpected behaviors. Variable scope and hoisting are important concepts that influence how variables are accessed throughout your code.",
    hi: {
      text: "Variables JavaScript programming ke liye fundamental hain, jo humein data store aur manipulate karne ki anumati dete hain.",
      points: [
        "var, let, aur const ke beech chayan variable scope aur reassignment capability ko affect karta hai",
        "JavaScript aath data types provide karta hai, jo primitive aur reference types ke beech divide kiye gaye hain",
        "Type conversion aur coercion ko samajhna unexpected behaviors se bachne ke liye crucial hai",
        "Variable scope aur hoisting important concepts hain jo influence karte hain ki variables aapke code mein kaise accessed hote hain",
        "Modern JavaScript mein, var ke bajay let aur const ka upyog karna generally recommended hai"
      ]
    }
  },
  prevTopic: {
    id: "introduction",
    title: "Introduction to JavaScript"
  },
  nextTopic: {
    id: "operators",
    title: "Operators"
  }
};