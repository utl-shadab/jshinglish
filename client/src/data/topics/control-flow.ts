export const controlFlowData = {
  id: "control-flow",
  title: "Control Flow in JavaScript",
  introduction: {
    en: "Control flow is the order in which the computer executes statements in a script. Code is run in order from the first line to the last line, unless the computer runs across structures that change the control flow, such as conditionals and loops.",
    hi: "Control flow woh order hai jisme computer ek script mein statements ko execute karta hai. Code ko first line se last line tak order mein run kiya jata hai, jab tak ki computer control flow ko change karne wali structures, jaise conditionals aur loops ke sampark mein nahi aata."
  },
  sections: [
    {
      id: "conditional-statements",
      title: "Conditional Statements",
      content: {
        en: "Conditional statements allow your code to make decisions and execute different actions based on different conditions. JavaScript supports if...else, switch, and ternary operators for conditional execution.",
        hi: "Conditional statements aapke code ko decisions lene aur different conditions ke basis par different actions execute karne ki anumati dete hain. JavaScript conditional execution ke liye if...else, switch, aur ternary operators ko support karta hai."
      },
      codeExample: {
        code: `// Basic if statement
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}

// if...else statement
let temperature = 15;

if (temperature > 30) {
  console.log("It's hot outside!");
} else {
  console.log("It's not that hot today.");
}

// if...else if...else statement
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Ternary operator (condition ? exprIfTrue : exprIfFalse)
let isRaining = true;
let action = isRaining ? "Take an umbrella" : "Wear sunglasses";
console.log(action);`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's make decisions based on user input
// Try changing these values
const hour = 14; // 24-hour format
const isWeekend = false;
const userLoggedIn = true;

// Should a store be open?
if (hour >= 9 && hour < 18) {
  if (!isWeekend) {
    console.log("The store is open!");
  } else {
    console.log("Weekend: The store is closed.");
  }
} else {
  console.log("After hours: The store is closed.");
}

// Should we greet the user?
let greeting;

if (userLoggedIn) {
  if (hour < 12) {
    greeting = "Good morning, user!";
  } else if (hour < 18) {
    greeting = "Good afternoon, user!";
  } else {
    greeting = "Good evening, user!";
  }
} else {
  greeting = "Welcome, guest!";
}

console.log(greeting);

// Should we suggest an activity?
const activity = isWeekend 
  ? (hour > 8 && hour < 20) 
    ? "Go out and have fun!" 
    : "Time to rest at home."
  : (hour > 8 && hour < 18)
    ? "Time for work/school." 
    : "Free time after work!";

console.log("Suggested activity:", activity);`,
        output: `The store is open!
Good afternoon, user!
Suggested activity: Time for work/school.`,
        explanation: {
          en: "This example demonstrates how conditional statements are used to make decisions based on multiple conditions. We use nested if statements to check both the time and whether it's a weekend to decide if a store is open. We then use if...else if...else to determine the appropriate greeting based on the time of day. Finally, we use nested ternary operators to suggest an activity based on both the time and day type.",
          hi: "Yeh example demonstrate karta hai ki kaise conditional statements ka upyog multiple conditions ke basis par decisions lene ke liye kiya jata hai. Hum nested if statements ka upyog karte hain time aur weekend hai ya nahi, dono ko check karne ke liye taki decide kar sakein ki store open hai ya nahi. Phir hum if...else if...else ka upyog din ke samay ke basis par appropriate greeting determine karne ke liye karte hain. Finally, hum nested ternary operators ka upyog time aur day type dono ke basis par ek activity suggest karne ke liye karte hain."
        }
      }
    },
    {
      id: "switch-statement",
      title: "Switch Statement",
      content: {
        en: "The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case until a break is encountered.",
        hi: "Switch statement ek expression ka evaluation karta hai, expression ke value ko case clause se match karta hai, aur us case se jude statements ko execute karta hai, sath hi matching case ke baad ke cases mein statements ko tab tak execute karta hai jab tak break nahi mil jata."
      },
      codeExample: {
        code: `// Basic switch statement
let day = 3; // 1 = Monday, 2 = Tuesday, etc.
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); // Outputs: Wednesday

// Multiple cases can share the same code block
let fruit = "Apple";
let category;

switch (fruit) {
  case "Apple":
  case "Pear":
  case "Orange":
    category = "Fruit";
    break;
  case "Carrot":
  case "Potato":
  case "Broccoli":
    category = "Vegetable";
    break;
  default:
    category = "Unknown";
}

console.log(category); // Outputs: Fruit

// Fall-through if break is omitted
let status = "warning";
let message = "Status: ";

switch (status) {
  case "error":
    message += "Critical error! ";
    // No break, so it falls through to the next case
  case "warning":
    message += "Warning! ";
    // No break, so it falls through to the next case
  case "info":
    message += "Information available.";
    break;
  default:
    message += "All systems normal.";
}

console.log(message); // Outputs: Status: Warning! Information available.`,
        editable: true
      }
    },
    {
      id: "for-loops",
      title: "For Loops",
      content: {
        en: "Loops offer a quick and easy way to do something repeatedly. The for loop repeats a block of code until a specified condition evaluates to false. JavaScript supports several types of loops including the standard for loop, for...in, for...of, and more.",
        hi: "Loops kuch repeatedly karne ka ek quick aur easy tarika offer karte hain. For loop ek block of code ko tab tak repeat karta hai jab tak ki specified condition false evaluate nahi ho jati. JavaScript kai types ke loops ko support karta hai jisme standard for loop, for...in, for...of, aur aur bhi shamil hain."
      },
      codeExample: {
        code: `// Standard for loop
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Loop through an array
const fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log("Fruits:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of loop (ES6)
// Iterates over iterable objects (arrays, strings, maps, sets, etc.)
console.log("Using for...of to iterate through fruits:");
for (const fruit of fruits) {
  console.log(fruit);
}

// for...in loop
// Iterates over enumerable properties of an object
const person = {
  name: "John",
  age: 30,
  job: "Developer"
};
console.log("Person properties:");
for (const key in person) {
  console.log(key + ": " + person[key]);
}`,
        editable: true
      },
      interactiveExample: {
        code: `// Print a multiplication table
function generateMultiplicationTable(number, limit) {
  console.log(\`Multiplication table for \${number}:\`);
  
  for (let i = 1; i <= limit; i++) {
    console.log(\`\${number} × \${i} = \${number * i}\`);
  }
}

generateMultiplicationTable(5, 10);

// Find prime numbers in a range
function findPrimesInRange(start, end) {
  const primes = [];
  
  // Loop through each number in the range
  outer: for (let num = start; num <= end; num++) {
    // 1 is not a prime number
    if (num <= 1) continue;
    
    // Check if num is divisible by any number from 2 to num-1
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        continue outer; // Not a prime, move to next number
      }
    }
    
    // If we get here, the number is prime
    primes.push(num);
  }
  
  return primes;
}

const primeNumbers = findPrimesInRange(1, 20);
console.log("Prime numbers from 1 to 20:", primeNumbers);`,
        output: `Multiplication table for 5:
5 × 1 = 5
5 × 2 = 10
5 × 3 = 15
5 × 4 = 20
5 × 5 = 25
5 × 6 = 30
5 × 7 = 35
5 × 8 = 40
5 × 9 = 45
5 × 10 = 50
Prime numbers from 1 to 20: [2, 3, 5, 7, 11, 13, 17, 19]`,
        explanation: {
          en: "This example demonstrates practical applications of for loops. First, we generate a multiplication table for the number 5. Then, we use a more complex example with nested loops and labels to find prime numbers in a range. The outer loop processes each number, while the inner loop checks if it's divisible by any smaller number. The 'outer' label and 'continue outer' statement allow us to skip to the next iteration of the outer loop when we find a number is not prime.",
          hi: "Yeh example for loops ke practical applications ko demonstrate karta hai. Pehle, hum number 5 ke liye ek multiplication table generate karte hain. Phir, hum nested loops aur labels ke saath ek more complex example ka upyog karke ek range mein prime numbers dhoondte hain. Outer loop har number ko process karta hai, jabki inner loop check karta hai ki yeh kisi bhi chote number se divisible hai ya nahi. 'outer' label aur 'continue outer' statement humein outer loop ke next iteration par skip karne ki anumati dete hain jab hum pate hain ki ek number prime nahi hai."
        }
      }
    },
    {
      id: "while-loops",
      title: "While and Do-While Loops",
      content: {
        en: "While loops execute a block of code as long as a specified condition evaluates to true. The do-while loop is a variant of the while loop that executes at least once before checking the condition.",
        hi: "While loops ek block of code ko tab tak execute karte hain jab tak ki specified condition true evaluate hoti hai. Do-while loop, while loop ka ek variant hai jo condition check karne se pehle kam se kam ek baar execute hota hai."
      },
      codeExample: {
        code: `// While loop
let count = 1;
console.log("While loop counting to 5:");
while (count <= 5) {
  console.log(count);
  count++;
}

// While loop with break
let i = 1;
console.log("While loop with break:");
while (true) {
  console.log(i);
  i++;
  if (i > 5) {
    break; // Exit the loop when i is greater than 5
  }
}

// While loop with continue
let j = 0;
console.log("Printing even numbers less than 10:");
while (j < 10) {
  j++;
  if (j % 2 !== 0) {
    continue; // Skip odd numbers
  }
  console.log(j);
}

// Do-while loop
let k = 1;
console.log("Do-while loop counting to 5:");
do {
  console.log(k);
  k++;
} while (k <= 5);

// Do-while loop always executes at least once
let l = 10;
console.log("Do-while that runs even though condition is false:");
do {
  console.log("This will print once even though l is already greater than 5");
} while (l <= 5);`,
        editable: true
      }
    },
    {
      id: "break-continue",
      title: "Break and Continue Statements",
      content: {
        en: "The break statement terminates the current loop or switch statement and transfers control to the statement following the terminated statement. The continue statement terminates execution of the current iteration of the loop and continues execution of the loop with the next iteration.",
        hi: "Break statement current loop ya switch statement ko terminate karta hai aur control ko terminated statement ke baad ke statement par transfer kar deta hai. Continue statement loop ke current iteration ke execution ko terminate karta hai aur loop ke execution ko next iteration ke saath continue karta hai."
      },
      codeExample: {
        code: `// Using break to exit a loop early
console.log("Finding the first number divisible by 7 in a range:");
for (let i = 1; i <= 20; i++) {
  if (i % 7 === 0) {
    console.log("Found it: " + i);
    break; // Exit the loop once we find the first match
  }
}

// Using continue to skip iterations
console.log("Printing numbers 1-10, skipping multiples of 3:");
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    continue; // Skip this iteration if i is divisible by 3
  }
  console.log(i);
}

// Using break in nested loops with labels
console.log("Using break with labels in nested loops:");
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      console.log("Breaking out of both loops at i=" + i + ", j=" + j);
      break outerLoop; // This breaks out of the outer loop
    }
    console.log("i=" + i + ", j=" + j);
  }
}

// Using continue with labels
console.log("Using continue with labels:");
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      console.log("Skipping to the next iteration of outer loop at i=" + i + ", j=" + j);
      continue outerLoop; // Skip to the next iteration of the outer loop
    }
    console.log("i=" + i + ", j=" + j);
  }
}`,
        editable: true
      },
      interactiveExample: {
        code: `// Game simulation: Find the hidden number
function guessTheNumber() {
  const targetNumber = 7; // The number to find
  const maxAttempts = 10;
  let attempts = 0;
  let found = false;
  
  console.log("Searching for a number between 1 and 10...");
  
  // Simulate a search pattern
  // First, try all even numbers
  console.log("Strategy 1: Try all even numbers");
  for (let i = 2; i <= 10; i += 2) {
    attempts++;
    console.log(\`Attempt \${attempts}: Trying \${i}\`);
    
    if (i === targetNumber) {
      console.log("Number found!");
      found = true;
      break;
    }
  }
  
  // If not found, try all odd numbers
  if (!found) {
    console.log("Strategy 2: Try all odd numbers");
    for (let i = 1; i <= 9; i += 2) {
      attempts++;
      console.log(\`Attempt \${attempts}: Trying \${i}\`);
      
      if (attempts > maxAttempts) {
        console.log("Reached maximum attempts!");
        break;
      }
      
      if (i === targetNumber) {
        console.log("Number found!");
        found = true;
        break;
      }
    }
  }
  
  console.log(\`Game over. The number \${found ? 'was found' : 'was not found'} in \${attempts} attempts.\`);
  return found;
}

guessTheNumber();`,
        output: `Searching for a number between 1 and 10...
Strategy 1: Try all even numbers
Attempt 1: Trying 2
Attempt 2: Trying 4
Attempt 3: Trying 6
Strategy 2: Try all odd numbers
Attempt 4: Trying 1
Attempt 5: Trying 3
Attempt 6: Trying 5
Attempt 7: Trying 7
Number found!
Game over. The number was found in 7 attempts.`,
        explanation: {
          en: "This example simulates a game where we try to find a hidden number. We use break statements to exit loops when the number is found or when we reach the maximum number of attempts. First, we try all even numbers (Strategy 1). If the number isn't found, we then try all odd numbers (Strategy 2). This demonstrates how control flow statements like break can be used to implement algorithms with different strategies.",
          hi: "Yeh example ek game ko simulate karta hai jahan hum ek hidden number ko dhoondhne ki koshish karte hain. Hum break statements ka upyog loops se bahar nikalne ke liye karte hain jab number mil jata hai ya jab hum attempts ki maximum number tak pahunch jate hain. Pehle, hum sabhi even numbers try karte hain (Strategy 1). Agar number nahi milta, to hum sabhi odd numbers try karte hain (Strategy 2). Yeh demonstrate karta hai ki kaise control flow statements jaise break ka upyog different strategies ke saath algorithms implement karne ke liye kiya ja sakta hai."
        }
      }
    },
    {
      id: "error-handling",
      title: "Error Handling with Try-Catch",
      content: {
        en: "Error handling in JavaScript is done using the try...catch...finally statement. Code in the try block is executed, and if any error occurs, control is passed to the catch block. The finally block executes regardless of whether an error occurred.",
        hi: "JavaScript mein error handling try...catch...finally statement ka upyog karke ki jati hai. Try block mein code execute kiya jata hai, aur agar koi error hota hai, to control catch block mein pass kiya jata hai. Finally block execute hota hai chahe error hua ho ya nahi."
      },
      codeExample: {
        code: `// Basic try-catch
try {
  // Code that might throw an error
  console.log("Start of try block");
  nonExistentFunction(); // This will throw an error
  console.log("End of try block"); // This won't execute
} catch (error) {
  console.log("An error occurred: " + error.message);
}

// try-catch-finally
try {
  console.log("Try block");
  // Throw a custom error
  throw new Error("This is a custom error");
} catch (error) {
  console.log("Catch block: " + error.message);
} finally {
  console.log("Finally block: This code always runs");
}

// Error types
try {
  // Different types of errors
  // Uncomment one of these to see different error types
  
  // Reference error (undefined variable)
  // console.log(undefinedVariable);
  
  // Syntax error (can't be caught, occurs during parsing)
  // eval("if (true) {");
  
  // Type error
  // const num = 123;
  // num.toUpperCase();
  
  // Range error
  // const arr = new Array(-1);  // Negative array length
  
  // URI error
  // decodeURIComponent("%");
  
  console.log("No error thrown");
} catch (error) {
  console.log("Error type: " + error.name);
  console.log("Error message: " + error.message);
} finally {
  console.log("Done with error examples");
}`,
        editable: true
      }
    }
  ],
  exercise: {
    title: "Control Flow Challenge",
    description: {
      en: "Create a program that prints numbers from 1 to 100, but with special rules: for multiples of 3, print 'Fizz' instead of the number, for multiples of 5, print 'Buzz', and for multiples of both 3 and 5, print 'FizzBuzz'.",
      hi: "Ek program banayein jo 1 se 100 tak numbers print kare, lekin special rules ke saath: 3 ke multiples ke liye, number ki jagah 'Fizz' print karein, 5 ke multiples ke liye 'Buzz' print karein, aur 3 aur 5 dono ke multiples ke liye 'FizzBuzz' print karein."
    },
    starterCode: `// FizzBuzz Challenge
// Print numbers from 1 to 100 with the following rules:
// - For multiples of 3, print "Fizz" instead of the number
// - For multiples of 5, print "Buzz" instead of the number
// - For multiples of both 3 and 5, print "FizzBuzz"
// - Otherwise, print the number itself

// Your code here
`,
    expectedOutput: `1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...`,
    hint: {
      en: "Use a loop to iterate from 1 to 100. For each number, use if/else statements or the modulo operator (%) to check if the number is divisible by 3, 5, or both. Remember to check for FizzBuzz first (numbers divisible by both 3 and 5).",
      hi: "1 se 100 tak iterate karne ke liye ek loop ka upyog karein. Har number ke liye, if/else statements ya modulo operator (%) ka upyog karke check karein ki number 3, 5, ya dono se divisible hai ya nahi. FizzBuzz ko pehle check karna yaad rakhein (numbers jo 3 aur 5 dono se divisible hain)."
    }
  },
  summary: {
    en: "Control flow statements are essential for creating dynamic and responsive JavaScript programs. Conditional statements like if...else and switch allow your code to make decisions based on different conditions. Loops like for, while, and do-while let you execute code repeatedly with different patterns. Break and continue statements give you fine-grained control over loop execution, while try...catch statements help handle errors gracefully.",
    hi: {
      text: "Control flow statements dynamic aur responsive JavaScript programs banane ke liye essential hain.",
      points: [
        "Conditional statements jaise if...else aur switch aapke code ko different conditions ke basis par decisions lene ki anumati dete hain",
        "For, while, aur do-while jaise loops aapko different patterns ke saath code ko repeatedly execute karne dete hain",
        "Break aur continue statements aapko loop execution par fine-grained control dete hain",
        "Try...catch statements errors ko gracefully handle karne mein help karte hain",
        "In sabhi features ka effective upyog karne se aap complex aur robust applications bana sakte hain"
      ]
    }
  },
  prevTopic: {
    id: "operators",
    title: "Operators"
  },
  nextTopic: {
    id: "functions",
    title: "Functions"
  }
};