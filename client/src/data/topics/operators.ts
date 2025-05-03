export const operatorsData = {
  id: "operators",
  title: "Operators in JavaScript",
  introduction: {
    en: "Operators are symbols that perform operations on operands (values and variables). JavaScript provides various types of operators including arithmetic, assignment, comparison, logical, and more. Understanding operators is essential for writing expressions and controlling program flow.",
    hi: "Operators aise symbols hain jo operands (values aur variables) par operations perform karte hain. JavaScript arithmetic, assignment, comparison, logical, aur bhi kai types ke operators provide karta hai. Expressions likhne aur program flow control karne ke liye operators ko samajhna essential hai."
  },
  sections: [
    {
      id: "arithmetic-operators",
      title: "Arithmetic Operators",
      content: {
        en: "Arithmetic operators perform mathematical operations on numeric operands. They include addition, subtraction, multiplication, division, modulus (remainder), exponentiation, and increment/decrement operators.",
        hi: "Arithmetic operators numeric operands par mathematical operations perform karte hain. Inme addition, subtraction, multiplication, division, modulus (remainder), exponentiation, aur increment/decrement operators shamil hain."
      },
      codeExample: {
        code: `// Basic arithmetic operators
let a = 10;
let b = 3;

// Addition
let sum = a + b;
console.log("Addition:", sum); // 13

// Subtraction
let difference = a - b;
console.log("Subtraction:", difference); // 7

// Multiplication
let product = a * b;
console.log("Multiplication:", product); // 30

// Division
let quotient = a / b;
console.log("Division:", quotient); // 3.3333...

// Modulus (Remainder)
let remainder = a % b;
console.log("Modulus:", remainder); // 1 (10 divided by 3 leaves remainder 1)

// Exponentiation (ES2016 / ES7)
let power = a ** b;
console.log("Exponentiation:", power); // 1000 (10^3)

// Unary operators

// Unary plus (converts to number)
let str = "123";
let num = +str;
console.log("Unary plus:", num, typeof num); // 123 number

// Unary negation
let negation = -a;
console.log("Negation:", negation); // -10

// Increment and decrement operators

// Postfix increment (returns value then increments)
let c = 5;
console.log("Postfix increment:", c++); // 5
console.log("After postfix increment:", c); // 6

// Prefix increment (increments then returns value)
let d = 5;
console.log("Prefix increment:", ++d); // 6
console.log("After prefix increment:", d); // 6

// Postfix decrement (returns value then decrements)
let e = 5;
console.log("Postfix decrement:", e--); // 5
console.log("After postfix decrement:", e); // 4

// Prefix decrement (decrements then returns value)
let f = 5;
console.log("Prefix decrement:", --f); // 4
console.log("After prefix decrement:", f); // 4`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's explore operator precedence and associativity
const result1 = 2 + 3 * 4;
console.log("2 + 3 * 4 =", result1); // 14, not 20, because * has higher precedence than +

const result2 = (2 + 3) * 4;
console.log("(2 + 3) * 4 =", result2); // 20, parentheses override precedence

// Complex expression
const result3 = 2 + 3 * 4 - 6 / 2;
console.log("2 + 3 * 4 - 6 / 2 =", result3); // 2 + 12 - 3 = 11

// Assignment operations in expressions
let x = 10;
let y = 20;
let z = 30;

const result4 = x + (y = z);
console.log("x + (y = z) =", result4); // 40 (y becomes 30, then 10 + 30)
console.log("x, y, z after expression:", x, y, z); // 10, 30, 30

// Chaining operations
let a = 5;
console.log("Chained addition/assignment:", a += 2 * 3); // 11 (equivalent to a = a + (2 * 3))

// Special arithmetic cases
console.log("Division by zero:", 10 / 0); // Infinity
console.log("Zero divided by zero:", 0 / 0); // NaN (Not a Number)
console.log("String multiplied by number:", "5" * 2); // 10 (string converted to number)
console.log("String added to number:", "5" + 2); // "52" (number converted to string)`,
        output: `2 + 3 * 4 = 14
(2 + 3) * 4 = 20
2 + 3 * 4 - 6 / 2 = 11
x + (y = z) = 40
x, y, z after expression: 10 30 30
Chained addition/assignment: 11
Division by zero: Infinity
Zero divided by zero: NaN
String multiplied by number: 10
String added to number: 52`,
        explanation: {
          en: "This example demonstrates operator precedence (the order in which operations are performed) and associativity (the order in which operators of the same precedence are evaluated). Multiplication and division have higher precedence than addition and subtraction. Parentheses can be used to override the default precedence rules. The example also showcases some special cases like division by zero (which results in Infinity) and type coercion in arithmetic operations with strings.",
          hi: "Yeh example operator precedence (order jisme operations perform kiye jate hain) aur associativity (order jisme same precedence ke operators evaluate kiye jate hain) ko demonstrate karta hai. Multiplication aur division ka precedence addition aur subtraction se high hota hai. Parentheses ka upyog default precedence rules ko override karne ke liye kiya ja sakta hai. Example kuch special cases bhi showcase karta hai jaise division by zero (jiska result Infinity hota hai) aur strings ke saath arithmetic operations mein type coercion."
        }
      }
    },
    {
      id: "assignment-operators",
      title: "Assignment Operators",
      content: {
        en: "Assignment operators assign values to variables. They include the basic assignment operator (=) and compound assignment operators that combine assignment with arithmetic, bitwise, or logical operations.",
        hi: "Assignment operators variables ko values assign karte hain. Inme basic assignment operator (=) aur compound assignment operators shamil hote hain jo assignment ko arithmetic, bitwise, ya logical operations ke saath combine karte hain."
      },
      codeExample: {
        code: `// Basic assignment
let x = 10;

// Compound assignment operators

// Addition assignment
let a = 5;
a += 3; // Equivalent to: a = a + 3
console.log("After a += 3:", a); // 8

// Subtraction assignment
let b = 10;
b -= 4; // Equivalent to: b = b - 4
console.log("After b -= 4:", b); // 6

// Multiplication assignment
let c = 3;
c *= 5; // Equivalent to: c = c * 5
console.log("After c *= 5:", c); // 15

// Division assignment
let d = 15;
d /= 3; // Equivalent to: d = d / 3
console.log("After d /= 3:", d); // 5

// Remainder (modulus) assignment
let e = 17;
e %= 5; // Equivalent to: e = e % 5
console.log("After e %= 5:", e); // 2

// Exponentiation assignment
let f = 2;
f **= 3; // Equivalent to: f = f ** 3
console.log("After f **= 3:", f); // 8

// Bitwise assignment operators

// Bitwise AND assignment
let g = 5; // 0101 in binary
g &= 3;   // 0011 in binary, result is 0001
console.log("After g &= 3:", g); // 1

// Bitwise OR assignment
let h = 5; // 0101 in binary
h |= 3;   // 0011 in binary, result is 0111
console.log("After h |= 3:", h); // 7

// Bitwise XOR assignment
let i = 5; // 0101 in binary
i ^= 3;   // 0011 in binary, result is 0110
console.log("After i ^= 3:", i); // 6

// Left shift assignment
let j = 5; // 0101 in binary
j <<= 1;  // Shifts bits left by 1, result is 1010
console.log("After j <<= 1:", j); // 10

// Right shift assignment
let k = 10; // 1010 in binary
k >>= 1;   // Shifts bits right by 1, result is 0101
console.log("After k >>= 1:", k); // 5

// Logical assignment operators (ES2021)

// Logical AND assignment (assigns if left operand is truthy)
let m = 1;
m &&= 5; // Equivalent to: m = m && 5
console.log("After m &&= 5:", m); // 5

let n = 0;
n &&= 5; // If n is falsy, it remains unchanged
console.log("After n &&= 5:", n); // 0

// Logical OR assignment (assigns if left operand is falsy)
let p = 1;
p ||= 5; // If p is truthy, it remains unchanged
console.log("After p ||= 5:", p); // 1

let q = 0;
q ||= 5; // Equivalent to: q = q || 5
console.log("After q ||= 5:", q); // 5

// Nullish coalescing assignment (assigns if left operand is null or undefined)
let r = "hello";
r ??= "default"; // If r is not null/undefined, it remains unchanged
console.log("After r ??= 'default':", r); // "hello"

let s = null;
s ??= "default"; // Equivalent to: s = s ?? "default"
console.log("After s ??= 'default':", s); // "default"`,
        editable: true
      }
    },
    {
      id: "comparison-operators",
      title: "Comparison Operators",
      content: {
        en: "Comparison operators compare their operands and return a boolean value (true or false) based on whether the comparison is true. These operators are essential for conditional statements and control flow in programming.",
        hi: "Comparison operators apne operands ko compare karte hain aur boolean value (true ya false) return karte hain based on whether comparison true hai. Ye operators programming mein conditional statements aur control flow ke liye essential hain."
      },
      codeExample: {
        code: `// Equal to (==): converts operands to the same type before comparison
console.log("5 == 5:", 5 == 5);       // true
console.log("5 == '5':", 5 == '5');   // true (string '5' is coerced to number 5)
console.log("0 == false:", 0 == false); // true (false is coerced to 0)
console.log("null == undefined:", null == undefined); // true

// Not equal to (!=): converts operands to the same type before comparison
console.log("5 != 8:", 5 != 8);       // true
console.log("5 != '5':", 5 != '5');   // false (after type coercion they are equal)
console.log("0 != false:", 0 != false); // false (they are considered equal after coercion)

// Strict equal to (===): checks equality without type conversion
console.log("5 === 5:", 5 === 5);       // true
console.log("5 === '5':", 5 === '5');   // false (different types)
console.log("0 === false:", 0 === false); // false (different types)
console.log("null === undefined:", null === undefined); // false (different types)

// Strict not equal to (!==): checks inequality without type conversion
console.log("5 !== 8:", 5 !== 8);       // true
console.log("5 !== '5':", 5 !== '5');   // true (different types)
console.log("0 !== false:", 0 !== false); // true (different types)

// Greater than (>)
console.log("8 > 5:", 8 > 5);       // true
console.log("5 > 5:", 5 > 5);       // false
console.log("'b' > 'a':", 'b' > 'a'); // true (alphabetical comparison)

// Less than (<)
console.log("5 < 8:", 5 < 8);       // true
console.log("5 < 5:", 5 < 5);       // false
console.log("'a' < 'b':", 'a' < 'b'); // true (alphabetical comparison)

// Greater than or equal to (>=)
console.log("8 >= 5:", 8 >= 5);     // true
console.log("5 >= 5:", 5 >= 5);     // true
console.log("4 >= 5:", 4 >= 5);     // false

// Less than or equal to (<=)
console.log("5 <= 8:", 5 <= 8);     // true
console.log("5 <= 5:", 5 <= 5);     // true
console.log("5 <= 4:", 5 <= 4);     // false`,
        editable: true
      },
      interactiveExample: {
        code: `// Exploring comparison edge cases
// Comparing different types
console.log("Comparing strings and numbers:");
console.log("'42' > 41:", '42' > 41);        // true ('42' is converted to number 42)
console.log("'42' < '420':", '42' < '420');  // true (string comparison, lexicographical)
console.log("'42px' < 50:", '42px' < 50);    // false ('42px' becomes NaN, and NaN comparisons are always false)

// null and undefined comparisons
console.log("\\nNull and undefined:");
console.log("null == undefined:", null == undefined);   // true
console.log("null === undefined:", null === undefined); // false
console.log("null == 0:", null == 0);                  // false
console.log("null >= 0:", null >= 0);                  // true (null becomes 0 in numeric comparisons)
console.log("null <= 0:", null <= 0);                  // true

// NaN comparisons
console.log("\\nNaN comparisons:");
console.log("NaN == NaN:", NaN == NaN);               // false (NaN is not equal to anything, including itself)
console.log("NaN === NaN:", NaN === NaN);             // false
console.log("NaN > 0:", NaN > 0);                     // false
console.log("NaN < 0:", NaN < 0);                     // false
console.log("NaN >= NaN:", NaN >= NaN);               // false

// Object comparisons
console.log("\\nObject comparisons:");
const obj1 = { value: 42 };
const obj2 = { value: 42 };
const obj3 = obj1;
console.log("obj1 == obj2:", obj1 == obj2);   // false (different objects)
console.log("obj1 === obj2:", obj1 === obj2); // false
console.log("obj1 == obj3:", obj1 == obj3);   // true (same object reference)
console.log("obj1 === obj3:", obj1 === obj3); // true

// Using Object.is() (ES6) for more intuitive equality checks
console.log("\\nObject.is() comparisons:");
console.log("Object.is(5, 5):", Object.is(5, 5));             // true
console.log("Object.is(5, '5'):", Object.is(5, '5'));         // false
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN));     // true (unlike ==, ===)
console.log("Object.is(0, -0):", Object.is(0, -0));           // false (unlike ==, ===)`,
        output: `Comparing strings and numbers:
'42' > 41: true
'42' < '420': true
'42px' < 50: false

Null and undefined:
null == undefined: true
null === undefined: false
null == 0: false
null >= 0: true
null <= 0: true

NaN comparisons:
NaN == NaN: false
NaN === NaN: false
NaN > 0: false
NaN < 0: false
NaN >= NaN: false

Object comparisons:
obj1 == obj2: false
obj1 === obj2: false
obj1 == obj3: true
obj1 === obj3: true

Object.is() comparisons:
Object.is(5, 5): true
Object.is(5, '5'): false
Object.is(NaN, NaN): true
Object.is(0, -0): false`,
        explanation: {
          en: "This example explores various edge cases in JavaScript comparisons. When comparing values of different types, JavaScript usually converts them to numbers (except for the strict equality operators). Strings are compared lexicographically (character by character). Comparing objects checks for reference equality, not structural equality. The Object.is() method provides a more accurate way to check equality for special cases like NaN and -0.",
          hi: "Yeh example JavaScript comparisons mein various edge cases ko explore karta hai. Different types ke values ko compare karte samay, JavaScript generally unhe numbers mein convert karta hai (strict equality operators ko chhod kar). Strings lexicographically (character by character) compare kiye jate hain. Objects compare karna reference equality check karta hai, na ki structural equality. Object.is() method NaN aur -0 jaise special cases ke liye equality check karne ka ek more accurate tarika provide karta hai."
        }
      }
    },
    {
      id: "logical-operators",
      title: "Logical Operators",
      content: {
        en: "Logical operators are typically used with Boolean (logical) values and return a Boolean value. However, in JavaScript, they can work with values of any type and may return non-Boolean values. The main logical operators are AND (&&), OR (||), and NOT (!).",
        hi: "Logical operators typically Boolean (logical) values ke saath use kiye jate hain aur Boolean value return karte hain. Halaanki, JavaScript mein, ye kisi bhi type ki values ke saath kaam kar sakte hain aur non-Boolean values return kar sakte hain. Main logical operators hain AND (&&), OR (||), aur NOT (!)."
      },
      codeExample: {
        code: `// Logical AND (&&): returns true if both operands are true
console.log("true && true:", true && true);   // true
console.log("true && false:", true && false); // false
console.log("false && true:", false && true); // false
console.log("false && false:", false && false); // false

// Short-circuit evaluation with &&
// If the first operand is falsy, it's returned immediately without evaluating the second operand
let x = 0;
let result1 = x && console.log("This won't be executed");
console.log("result1:", result1); // 0 (the first falsy value)

let y = 1;
let result2 = y && "hello";
console.log("result2:", result2); // "hello" (the second value when first is truthy)

// Logical OR (||): returns true if at least one operand is true
console.log("true || true:", true || true);   // true
console.log("true || false:", true || false); // true
console.log("false || true:", false || true); // true
console.log("false || false:", false || false); // false

// Short-circuit evaluation with ||
// If the first operand is truthy, it's returned immediately without evaluating the second operand
let a = 1;
let result3 = a || console.log("This won't be executed");
console.log("result3:", result3); // 1 (the first truthy value)

let b = 0;
let result4 = b || "default";
console.log("result4:", result4); // "default" (the second value when first is falsy)

// Logical NOT (!): returns false if its operand is true, true otherwise
console.log("!true:", !true);   // false
console.log("!false:", !false); // true
console.log("!0:", !0);         // true (0 is falsy)
console.log("!1:", !1);         // false (1 is truthy)
console.log("!'hello':", !'hello'); // false (non-empty string is truthy)
console.log("!'':", !'');       // true (empty string is falsy)

// Double NOT (!!): converts a value to its boolean equivalent
console.log("!!0:", !!0);         // false
console.log("!!1:", !!1);         // true
console.log("!!'hello':", !!'hello'); // true
console.log("!!'':", !!'');       // false

// Nullish coalescing operator (??): returns the right-hand operand when the left is null or undefined
let c = null;
let result5 = c ?? "default value";
console.log("result5:", result5); // "default value"

let d = 0; // 0 is falsy but not null or undefined
let result6 = d ?? "default value";
console.log("result6:", result6); // 0 (unlike ||, ?? only checks for null/undefined)`,
        editable: true
      }
    },
    {
      id: "ternary-operator",
      title: "Conditional (Ternary) Operator",
      content: {
        en: "The conditional (ternary) operator is the only JavaScript operator that takes three operands. It's a shorthand for the if...else statement and provides a compact way to make simple conditional decisions.",
        hi: "Conditional (ternary) operator ek aisa operator hai jo teen operands leta hai. Yeh if...else statement ka shorthand hai aur simple conditional decisions lene ka ek compact tarika provide karta hai."
      },
      codeExample: {
        code: `// Basic syntax: condition ? expression_if_true : expression_if_false

// Simple example
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log("Status:", status); // "adult"

// More examples
const score = 75;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log("Grade:", grade); // "C"

// Ternary with expressions
const a = 5;
const b = 10;
console.log("Larger value:", a > b ? a : b); // 10

// Using ternary in complex expressions
const value = 42;
const message = "The value " + (value > 50 ? "is greater than" : "is less than or equal to") + " 50";
console.log(message); // "The value is less than or equal to 50"

// Using ternary for assignment
let accessAllowed;
const userAge = 16;
accessAllowed = userAge >= 18 ? true : false;
console.log("Access allowed:", accessAllowed); // false

// Ternary vs if...else equivalent
let greeting;
const hour = 14;

// Using if...else
if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

// Using ternary operator
const ternaryGreeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

console.log("if...else greeting:", greeting);         // "Good afternoon"
console.log("ternary greeting:", ternaryGreeting);    // "Good afternoon"`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's use ternary operators for different scenarios
// Example 1: User authentication status
const isLoggedIn = true;
const userName = "John";
const userStatus = isLoggedIn 
  ? \`Welcome back, \${userName}!\` 
  : "Please log in to continue";
  
console.log("1. Authentication:", userStatus);

// Example 2: Product pricing
const isPremiumMember = false;
const regularPrice = 99.99;
const discountRate = 0.2; // 20% discount
const finalPrice = isPremiumMember
  ? regularPrice * (1 - discountRate)
  : regularPrice;
  
console.log(\`2. Price: $\${finalPrice.toFixed(2)}\`);

// Example 3: Form validation
const username = "user123";
const password = "pass";
const isValidUser = username.length >= 5;
const isValidPassword = password.length >= 8;
const validationMessage = isValidUser
  ? (isValidPassword 
      ? "Registration successful" 
      : "Password must be at least 8 characters") 
  : "Username must be at least 5 characters";
  
console.log("3. Validation:", validationMessage);

// Example 4: Responsive UI message based on screen size
const screenWidth = 768; // in pixels
const screenSize = screenWidth < 768 
  ? "mobile" 
  : screenWidth < 1024 
    ? "tablet" 
    : "desktop";
const uiMessage = \`4. Showing \${screenSize} view (Width: \${screenWidth}px)\`;

console.log(uiMessage);

// Example 5: Handling null or undefined values
const userPreference = null;
const defaultTheme = "light";
const activeTheme = userPreference ?? defaultTheme;

console.log("5. Theme:", activeTheme);`,
        output: `1. Authentication: Welcome back, John!
2. Price: $99.99
3. Validation: Password must be at least 8 characters
4. Showing tablet view (Width: 768px)
5. Theme: light`,
        explanation: {
          en: "This example demonstrates practical uses of the ternary operator in different scenarios. The ternary operator provides a concise way to write conditional expressions. It's particularly useful when you need to choose one value over another based on a condition. For more complex cases, you can nest ternary operators, but be careful as this can make code harder to read. In the fifth example, we also show the nullish coalescing operator (??), which is similar to the ternary but specifically checks for null or undefined values.",
          hi: "Yeh example different scenarios mein ternary operator ke practical uses ko demonstrate karta hai. Ternary operator conditional expressions likhne ka ek concise tarika provide karta hai. Yeh particularly useful hai jab aapko ek condition ke basis par ek value ko dusre par choose karna hota hai. More complex cases ke liye, aap ternary operators ko nest kar sakte hain, lekin dhyan rakhein ki yeh code ko padne mein mushkil bana sakta hai. Paanchve example mein, hum nullish coalescing operator (??) bhi dikhate hain, jo ternary ke similar hai lekin specifically null ya undefined values ke liye check karta hai."
        }
      }
    }
  ],
  exercise: {
    title: "Operators Challenge",
    description: {
      en: "Create a function that takes two numbers and an operator as parameters, and returns the result of the operation. The operator can be '+', '-', '*', '/', or '%'. Include validation to handle potential errors like division by zero.",
      hi: "Ek function banayein jo do numbers aur ek operator ko parameters ke roop mein leta hai, aur operation ka result return karta hai. Operator '+', '-', '*', '/', ya '%' ho sakta hai. Division by zero jaise potential errors ko handle karne ke liye validation shamil karein."
    },
    starterCode: `function calculate(num1, num2, operator) {
  // Your code here
  // The function should:
  // 1. Validate inputs (numbers and valid operator)
  // 2. Perform the specified operation
  // 3. Handle edge cases like division by zero
  // 4. Return the result
}

// Test your function
console.log(calculate(10, 5, '+')); // Expected: 15
console.log(calculate(10, 5, '-')); // Expected: 5
console.log(calculate(10, 5, '*')); // Expected: 50
console.log(calculate(10, 5, '/')); // Expected: 2
console.log(calculate(10, 5, '%')); // Expected: 0
console.log(calculate(10, 0, '/')); // Expected: Error message or special value
console.log(calculate(10, 5, '^')); // Expected: Error message for invalid operator`,
    expectedOutput: `15
5
50
2
0
Error: Division by zero
Error: Invalid operator`,
    hint: {
      en: "Use a switch statement or if...else to handle the different operators. Make sure to validate the inputs before performing any operations. For division or modulus by zero, you should include a special check to handle this edge case. Consider using a clear error message or a special return value for invalid cases.",
      hi: "Different operators ko handle karne ke liye switch statement ya if...else ka upyog karein. Koi bhi operation perform karne se pehle inputs ko validate karna sunishchit karein. Division ya modulus by zero ke liye, is edge case ko handle karne ke liye ek special check include karein. Invalid cases ke liye ek clear error message ya ek special return value ka upyog karne par vichar karein."
    }
  },
  summary: {
    en: "JavaScript operators are essential tools that perform operations on variables and values. Arithmetic operators handle mathematical calculations, assignment operators assign values to variables, comparison operators compare values, and logical operators evaluate logical expressions. The conditional (ternary) operator provides a concise way to write simple if-else statements. Understanding the behavior of different operators, including type coercion and operator precedence, is crucial for writing effective and bug-free JavaScript code.",
    hi: {
      text: "JavaScript operators essential tools hain jo variables aur values par operations perform karte hain.",
      points: [
        "Arithmetic operators mathematical calculations handle karte hain",
        "Assignment operators variables ko values assign karte hain",
        "Comparison operators values ko compare karte hain",
        "Logical operators logical expressions evaluate karte hain",
        "Conditional (ternary) operator simple if-else statements likhne ka ek concise tarika provide karta hai",
        "Different operators ke behavior ko samajhna, including type coercion aur operator precedence, effective aur bug-free JavaScript code likhne ke liye crucial hai"
      ]
    }
  },
  prevTopic: {
    id: "variables",
    title: "Variables and Data Types"
  },
  nextTopic: {
    id: "control-flow",
    title: "Control Flow"
  }
};