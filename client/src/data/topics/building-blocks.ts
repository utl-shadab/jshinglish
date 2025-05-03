export const buildingBlocksData = {
  id: "building-blocks",
  title: "JavaScript Building Blocks",
  introduction: {
    en: "Now that we've covered the basics, it's time to explore the fundamental building blocks of JavaScript that form the foundation of any JavaScript program. In this section, we'll learn about expressions, statements, syntax, and basic programming concepts that will help you start thinking like a JavaScript programmer.",
    hi: "अब जब हमने basics को cover कर लिया है, तो यह JavaScript के fundamental building blocks का exploration करने का समय है जो किसी भी JavaScript program की foundation बनाते हैं। इस section में, हम expressions, statements, syntax, और basic programming concepts के बारे में सीखेंगे जो आपको एक JavaScript programmer की तरह सोचने में help करेंगे।"
  },
  sections: [
    {
      id: "statements",
      title: "Statements and Expressions",
      content: {
        en: "JavaScript code consists of statements and expressions. A statement is a line of code that performs an action, while an expression is a piece of code that produces a value. Understanding this distinction is fundamental to writing effective JavaScript.",
        hi: "JavaScript code statements और expressions से बना होता है। एक statement code का एक line होता है जो एक action perform करता है, जबकि एक expression code का एक piece होता है जो एक value produce करता है। इस distinction को समझना effective JavaScript लिखने के लिए fundamental है।"
      },
      codeExample: {
        code: `// Examples of statements:
let x = 5;                  // Variable declaration statement
if (x > 3) { x = x * 2; }   // Conditional statement
for (let i = 0; i < 3; i++) { console.log(i); }  // Loop statement

// Examples of expressions:
3 + 4                       // Arithmetic expression (produces 7)
"Hello" + " " + "World"     // String expression (produces "Hello World")
x > 10                      // Comparison expression (produces true or false)
isNaN("Hello")              // Function call expression (produces true)

// An expression can be part of a statement:
let y = 3 + 4;  // The expression 3 + 4 is part of this statement`,
        editable: true
      }
    },
    {
      id: "syntax",
      title: "JavaScript Syntax",
      content: {
        en: "JavaScript syntax is the set of rules that defines how JavaScript programs are constructed. Understanding these rules is essential for writing valid JavaScript code.",
        hi: "JavaScript syntax वह rules का set है जो define करता है कि JavaScript programs कैसे construct किए जाते हैं। इन rules को समझना valid JavaScript code लिखने के लिए essential है।"
      },
      subsections: [
        {
          id: "case-sensitivity",
          title: "Case Sensitivity",
          content: {
            en: "JavaScript is case-sensitive. This means that variables, function names, and other identifiers must be typed with consistent capitalization. For example, 'myVariable' and 'myvariable' are treated as different variables.",
            hi: "JavaScript case-sensitive है। इसका मतलब है कि variables, function names, और अन्य identifiers को consistent capitalization के साथ type किया जाना चाहिए। उदाहरण के लिए, 'myVariable' और 'myvariable' को अलग-अलग variables के रूप में treat किया जाता है।"
          },
          codeExample: {
            code: `let firstName = "John";
console.log(firstName);  // Outputs: John
console.log(FirstName);  // Error: FirstName is not defined
console.log(firstname);  // Error: firstname is not defined`,
            editable: true
          }
        },
        {
          id: "whitespace",
          title: "Whitespace and Line Breaks",
          content: {
            en: "JavaScript ignores spaces, tabs, and newlines that appear outside strings. This allows you to format your code in a way that makes it readable without affecting how it runs.",
            hi: "JavaScript उन spaces, tabs, और newlines को ignore करता है जो strings के बाहर appear होते हैं। यह आपको अपने code को ऐसे format करने की अनुमति देता है जो इसे readable बनाता है बिना इसके run होने के तरीके को affect किए।"
          },
          codeExample: {
            code: `// These are all equivalent in JavaScript:
let sum = a + b;
let sum=a+b;
let sum = a 
          + b;`,
            editable: false
          }
        },
        {
          id: "semicolons",
          title: "Semicolons",
          content: {
            en: "In JavaScript, semicolons (;) are used to separate statements. While they are technically optional in many cases due to automatic semicolon insertion (ASI), it's a good practice to include them to avoid potential issues.",
            hi: "JavaScript में, semicolons (;) का उपयोग statements को separate करने के लिए किया जाता है। हालांकि वे automatic semicolon insertion (ASI) के कारण कई cases में technically optional हैं, फिर भी potential issues से बचने के लिए उन्हें include करना एक good practice है।"
          },
          codeExample: {
            code: `// Good practice: with semicolons
let x = 5;
let y = 10;
let z = x + y;
console.log(z);

// Works, but not recommended: without semicolons
let a = 5
let b = 10
let c = a + b
console.log(c)

// Where semicolons are important - without them, errors happen:
let value = 5
[1, 2, 3].forEach(console.log)  // Interpreted as: let value = 5[1, 2, 3].forEach(console.log)
// This results in an error

// Correct version:
let value = 5;
[1, 2, 3].forEach(console.log);`,
            editable: true
          }
        }
      ]
    },
    {
      id: "values-types",
      title: "Values and Types",
      content: {
        en: "JavaScript has several built-in data types that represent different kinds of values. Understanding these types is crucial for manipulating data in your programs.",
        hi: "JavaScript में कई built-in data types हैं जो different kinds के values को represent करते हैं। अपने programs में data को manipulate करने के लिए इन types को समझना crucial है।"
      },
      codeExample: {
        code: `// Primitive data types in JavaScript

// 1. Number - used for all numbers (integers and decimals)
let age = 25;           // Integer
let price = 19.99;      // Decimal
let infinity = Infinity; // Special number value
let notANumber = NaN;   // Result of undefined mathematical operations

// 2. String - used for text
let name = "John";
let greeting = 'Hello';
let phrase = \`My name is \${name}\`; // Template string (ES6)

// 3. Boolean - true or false
let isActive = true;
let isComplete = false;

// 4. Undefined - variable declared but not assigned a value
let undefinedVar;
console.log(undefinedVar); // undefined

// 5. Null - represents the intentional absence of any value
let emptyValue = null;

// 6. Symbol - unique and immutable primitive value (ES6)
let uniqueId = Symbol("id");

// 7. BigInt - for integers of arbitrary length (ES2020)
let bigNumber = 9007199254740991n;`,
        editable: true
      },
      interactiveExample: {
        code: `// Using typeof to check data types
console.log(typeof 42);             // "number"
console.log(typeof "Hello");        // "string"
console.log(typeof true);           // "boolean"
console.log(typeof undefined);      // "undefined"
console.log(typeof null);           // "object" (this is a historical bug in JavaScript)
console.log(typeof {name: "John"}); // "object"
console.log(typeof Symbol("id"));   // "symbol"`,
        output: `number
string
boolean
undefined
object
object
symbol`,
        explanation: {
          en: "The typeof operator returns a string indicating the type of the operand. Note that typeof null returns 'object', which is considered a bug in JavaScript but is maintained for compatibility reasons.",
          hi: "typeof operator एक string return करता है जो operand के type को indicate करता है। ध्यान दें कि typeof null 'object' return करता है, जिसे JavaScript में एक bug माना जाता है लेकिन compatibility reasons के लिए maintain किया गया है।"
        }
      }
    },
    {
      id: "literals",
      title: "Literals",
      content: {
        en: "Literals are fixed values that you literally provide in your program. JavaScript has several types of literals for representing values of different data types.",
        hi: "Literals fixed values होते हैं जिन्हें आप literally अपने program में provide करते हैं। JavaScript में different data types के values को represent करने के लिए कई प्रकार के literals हैं।"
      },
      codeExample: {
        code: `// Numeric literals
let decimal = 42;       // Decimal integer
let hex = 0xFF;         // Hexadecimal (255)
let octal = 0o77;       // Octal (63)
let binary = 0b1010;    // Binary (10)
let float = 3.14159;    // Floating-point

// String literals
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = \`Hello, World!\`; // Template literals with backticks

// Boolean literals
let yes = true;
let no = false;

// Array literals
let emptyArray = [];
let numbers = [1, 2, 3, 4, 5];

// Object literals
let emptyObject = {};
let person = {
  name: "John",
  age: 30,
  isEmployed: true
};

// Regular expression literals
let pattern = /ab+c/;`,
        editable: true
      }
    }
  ],
  exercise: {
    title: "Exercise: Working with Data Types",
    description: {
      en: "Complete the 'describeValue' function that takes any value as input and returns a string describing the type of the value and its representation as a string.",
      hi: "एक 'describeValue' function complete करें जो input के रूप में कोई भी value लेता है और एक string return करता है जो value के type और इसके string के रूप में representation का description देता है।"
    },
    starterCode: `// Complete the describeValue function
// describeValue function को complete करें

function describeValue(value) {
  // Your code here
  // 1. Get the type of the value using the typeof operator
  // 2. Return a string in the format: "Value is [VALUE] and its type is [TYPE]"
  // For example, if value is 42, return "Value is 42 and its type is number"
  
  // आपका code यहां
  // 1. typeof operator का उपयोग करके value के type को प्राप्त करें
  // 2. "[VALUE] is [TYPE] type का है" format में एक string return करें
  // उदाहरण के लिए, अगर value 42 है, तो return करें "Value is 42 and its type is number"
}

// Test cases
console.log(describeValue(42));
console.log(describeValue("Hello"));
console.log(describeValue(true));
console.log(describeValue(undefined));
console.log(describeValue({name: "John"}));`,
    expectedOutput: `Value is 42 and its type is number
Value is Hello and its type is string
Value is true and its type is boolean
Value is undefined and its type is undefined
Value is [object Object] and its type is object`,
    hint: {
      en: "Use the typeof operator to determine the type of the value. You can convert the value to a string representation using String(value) or value.toString() (though be careful with undefined and null).",
      hi: "Value के type को determine करने के लिए typeof operator का उपयोग करें। आप String(value) या value.toString() का उपयोग करके value को string representation में convert कर सकते हैं (हालांकि undefined और null के साथ careful रहें)।"
    }
  },
  summary: {
    en: "In this section, we explored the fundamental building blocks of JavaScript programming. We learned about statements and expressions, the basic units of JavaScript code. We covered JavaScript syntax rules including case sensitivity, whitespace handling, and semicolon usage. We also examined the various data types in JavaScript, from primitive types like numbers and strings to more complex types like objects and arrays. Finally, we looked at literals, which are the different ways to represent fixed values in JavaScript code. These building blocks form the foundation for all JavaScript programs you'll write.",
    hi: {
      text: "इस section में, हमने JavaScript programming के fundamental building blocks का exploration किया।",
      points: [
        "हमने statements और expressions के बारे में सीखा, जो JavaScript code के basic units हैं",
        "हमने JavaScript syntax rules को cover किया, जिसमें case sensitivity, whitespace handling, और semicolon usage शामिल हैं",
        "हमने JavaScript में various data types की examination की, primitive types जैसे numbers और strings से लेकर अधिक complex types जैसे objects और arrays तक",
        "अंत में, हमने literals को देखा, जो JavaScript code में fixed values को represent करने के different ways हैं",
        "ये building blocks सभी JavaScript programs की foundation बनाते हैं जिन्हें आप लिखेंगे"
      ]
    }
  },
  prevTopic: {
    id: "first-steps",
    title: "JavaScript First Steps"
  },
  nextTopic: {
    id: "variables",
    title: "Variables and Data Types"
  }
};
