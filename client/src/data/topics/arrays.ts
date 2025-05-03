export const arraysData = {
  id: "arrays",
  title: "Arrays in JavaScript",
  introduction: {
    en: "Arrays are ordered collections of values that can store multiple items in a single variable. They are one of the most fundamental data structures in JavaScript and provide powerful features for handling lists of data.",
    hi: "Arrays values ke ordered collections hain jo ek single variable mein multiple items store kar sakte hain. Ye JavaScript mein most fundamental data structures mein se ek hain aur data ki lists ko handle karne ke liye powerful features provide karte hain."
  },
  sections: [
    {
      id: "array-basics",
      title: "Array Basics",
      content: {
        en: "Arrays in JavaScript can be created using array literals (square brackets) or the Array constructor. Array elements can be accessed using index notation, starting from 0 for the first element.",
        hi: "JavaScript mein Arrays ko array literals (square brackets) ya Array constructor ka upyog karke create kiya ja sakta hai. Array elements ko index notation ka upyog karke access kiya ja sakta hai, pehle element ke liye 0 se shuru hota hai."
      },
      codeExample: {
        code: `// Creating arrays
// 1. Using array literals (preferred method)
const fruits = ["Apple", "Banana", "Orange"];

// 2. Using the Array constructor
const numbers = new Array(1, 2, 3, 4, 5);

// 3. Empty array
const emptyArray = [];

// 4. Array with mixed data types
const mixedArray = [42, "Hello", true, null, { name: "John" }, [1, 2, 3]];

// 5. Creating an array of a specific length with the Array constructor
const arrayWithLength = new Array(5); // Creates an array with 5 empty slots

// Accessing array elements
console.log(fruits[0]); // Outputs: Apple
console.log(fruits[1]); // Outputs: Banana
console.log(fruits[2]); // Outputs: Orange
console.log(fruits[3]); // Outputs: undefined (beyond array length)

// Getting array length
console.log(fruits.length); // Outputs: 3

// Modifying array elements
fruits[1] = "Mango";
console.log(fruits); // Outputs: ["Apple", "Mango", "Orange"]

// Adding elements to an array
fruits[3] = "Grape";
console.log(fruits); // Outputs: ["Apple", "Mango", "Orange", "Grape"]

// Arrays are zero-indexed
console.log("First element:", fruits[0]);
console.log("Last element:", fruits[fruits.length - 1]);`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's explore array basics
const colors = ["Red", "Green", "Blue"];
console.log("Original array:", colors);

// Arrays are dynamic - they can change in size
colors.push("Yellow");
console.log("After adding Yellow:", colors);

// We can access elements with bracket notation
console.log("First color:", colors[0]);
console.log("Last color:", colors[colors.length - 1]);

// We can modify elements
colors[1] = "Dark Green";
console.log("After modifying Green:", colors);

// Arrays can contain different types of data
const mixedArray = [
  100,                 // number
  "Hello",             // string
  true,                // boolean
  { type: "object" },  // object
  [1, 2, 3]            // nested array
];

console.log("Mixed array types:");
mixedArray.forEach((item, index) => {
  console.log(\`Item \${index}: \${item} (type: \${typeof item})\`);
});

// Access the nested array
console.log("Nested array:", mixedArray[4]);
console.log("First element of nested array:", mixedArray[4][0]);`,
        output: `Original array: [ 'Red', 'Green', 'Blue' ]
After adding Yellow: [ 'Red', 'Green', 'Blue', 'Yellow' ]
First color: Red
Last color: Yellow
After modifying Green: [ 'Red', 'Dark Green', 'Blue', 'Yellow' ]
Mixed array types:
Item 0: 100 (type: number)
Item 1: Hello (type: string)
Item 2: true (type: boolean)
Item 3: [object Object] (type: object)
Item 4: 1,2,3 (type: object)
Nested array: [ 1, 2, 3 ]
First element of nested array: 1`,
        explanation: {
          en: "This example demonstrates the fundamental concepts of arrays. We create and modify arrays, access elements using index notation, and see how arrays can store different types of data including other arrays (nested arrays). Arrays are objects in JavaScript, which is why typeof mixedArray[4] returns 'object' even though it's an array.",
          hi: "Yeh example arrays ke fundamental concepts ko demonstrate karta hai. Hum arrays create aur modify karte hain, index notation ka upyog karke elements access karte hain, aur dekhte hain ki arrays kaise different types ke data store kar sakte hain including other arrays (nested arrays). JavaScript mein arrays objects hain, isliye typeof mixedArray[4] 'object' return karta hai even though yeh ek array hai."
        }
      }
    },
    {
      id: "array-methods",
      title: "Common Array Methods",
      content: {
        en: "JavaScript arrays come with many built-in methods that make it easy to manipulate and transform data. These methods can add or remove elements, search for values, transform elements, and more.",
        hi: "JavaScript arrays ke saath bahut sare built-in methods aate hain jo data ko manipulate aur transform karna aasan banate hain. Ye methods elements add ya remove kar sakte hain, values search kar sakte hain, elements transform kar sakte hain, aur bahut kuch."
      },
      codeExample: {
        code: `const fruits = ["Apple", "Banana", "Orange", "Mango"];

// 1. Adding and removing elements

// push: Add elements to the end of an array
fruits.push("Grape");
console.log(fruits); // ["Apple", "Banana", "Orange", "Mango", "Grape"]

// pop: Remove the last element
const lastFruit = fruits.pop();
console.log(lastFruit); // "Grape"
console.log(fruits); // ["Apple", "Banana", "Orange", "Mango"]

// unshift: Add elements to the beginning
fruits.unshift("Strawberry");
console.log(fruits); // ["Strawberry", "Apple", "Banana", "Orange", "Mango"]

// shift: Remove the first element
const firstFruit = fruits.shift();
console.log(firstFruit); // "Strawberry"
console.log(fruits); // ["Apple", "Banana", "Orange", "Mango"]

// 2. Finding elements

// indexOf: Find the index of an element
const bananaIndex = fruits.indexOf("Banana");
console.log(bananaIndex); // 1

// includes: Check if an array contains an element
const hasMango = fruits.includes("Mango");
console.log(hasMango); // true

// find: Find an element based on a condition
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(num => num > 10);
console.log(found); // 12

// findIndex: Find the index of an element based on a condition
const foundIndex = numbers.findIndex(num => num > 10);
console.log(foundIndex); // 1

// 3. Transforming arrays

// slice: Get a portion of an array
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // ["Banana", "Orange"]
console.log(fruits); // Original array is unchanged: ["Apple", "Banana", "Orange", "Mango"]

// splice: Change an array by removing or replacing elements
const removed = fruits.splice(2, 1, "Pineapple", "Kiwi");
console.log(removed); // ["Orange"]
console.log(fruits); // ["Apple", "Banana", "Pineapple", "Kiwi", "Mango"]

// concat: Combine arrays
const moreFruits = ["Watermelon", "Cherry"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["Apple", "Banana", "Pineapple", "Kiwi", "Mango", "Watermelon", "Cherry"]

// 4. Other useful methods

// join: Convert an array to a string with a separator
const fruitsString = fruits.join(", ");
console.log(fruitsString); // "Apple, Banana, Pineapple, Kiwi, Mango"

// reverse: Reverse the order of elements
fruits.reverse();
console.log(fruits); // ["Mango", "Kiwi", "Pineapple", "Banana", "Apple"]

// sort: Sort the elements
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Kiwi", "Mango", "Pineapple"]`,
        editable: true
      }
    },
    {
      id: "array-iteration",
      title: "Array Iteration Methods",
      content: {
        en: "JavaScript provides several methods for iterating over arrays, allowing you to process each element and perform operations on them. These methods include forEach, map, filter, reduce, and more.",
        hi: "JavaScript arrays par iterate karne ke liye kai methods provide karta hai, jisse aap har element ko process kar sakte hain aur un par operations perform kar sakte hain. In methods mein forEach, map, filter, reduce, aur aur bhi shamil hain."
      },
      codeExample: {
        code: `const numbers = [1, 2, 3, 4, 5];
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

// 1. forEach: Execute a function for each element
console.log("forEach example:");
numbers.forEach(function(number, index) {
  console.log(\`Element at index \${index} is \${number}\`);
});

// 2. map: Create a new array by transforming each element
console.log("\\nmap example:");
const doubled = numbers.map(function(number) {
  return number * 2;
});
console.log("Original:", numbers);
console.log("Doubled:", doubled);

// 3. filter: Create a new array with elements that pass a test
console.log("\\nfilter example:");
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log("All numbers:", numbers);
console.log("Even numbers:", evenNumbers);

// 4. reduce: Reduce array to a single value (with initial value)
console.log("\\nreduce example:");
const sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log("Sum of numbers:", sum);

// 5. some: Check if at least one element passes a test
console.log("\\nsome example:");
const hasEven = numbers.some(function(number) {
  return number % 2 === 0;
});
console.log("Has at least one even number:", hasEven);

// 6. every: Check if all elements pass a test
console.log("\\nevery example:");
const allPositive = numbers.every(function(number) {
  return number > 0;
});
console.log("All numbers are positive:", allPositive);

// 7. find: Return the first element that passes a test
console.log("\\nfind example:");
const firstLongFruit = fruits.find(function(fruit) {
  return fruit.length > 6;
});
console.log("First fruit with length > 6:", firstLongFruit);

// 8. Using arrow functions (shorter syntax for all the above)
console.log("\\nUsing arrow functions:");
const tripled = numbers.map(num => num * 3);
const longFruits = fruits.filter(fruit => fruit.length > 5);
const product = numbers.reduce((acc, val) => acc * val, 1);

console.log("Tripled:", tripled);
console.log("Fruits with length > 5:", longFruits);
console.log("Product of numbers:", product);`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's use array methods to analyze some data
const students = [
  { name: "Alice", grade: 85, courses: ["Math", "Science", "History"] },
  { name: "Bob", grade: 72, courses: ["Math", "English", "Art"] },
  { name: "Charlie", grade: 90, courses: ["Science", "History", "Music"] },
  { name: "Diana", grade: 95, courses: ["Math", "Science", "Music"] },
  { name: "Edward", grade: 68, courses: ["English", "Art", "PE"] }
];

// Get all student names
const names = students.map(student => student.name);
console.log("Student names:", names);

// Find students with grades higher than 80
const highGrades = students.filter(student => student.grade > 80);
console.log("Students with grades > 80:", highGrades.map(s => s.name));

// Calculate the average grade
const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
const averageGrade = totalGrade / students.length;
console.log("Average grade:", averageGrade.toFixed(2));

// Find the student with the highest grade
const topStudent = students.reduce((highest, student) => 
  student.grade > highest.grade ? student : highest, students[0]);
console.log("Top student:", topStudent.name, "with grade:", topStudent.grade);

// Find all unique courses
const allCourses = students
  .flatMap(student => student.courses) // creates a flat array of all courses
  .filter((course, index, array) => array.indexOf(course) === index); // keeps only first occurrence

console.log("All courses offered:", allCourses);

// Count students taking each course
console.log("Course enrollment:");
allCourses.forEach(course => {
  const count = students.filter(student => 
    student.courses.includes(course)).length;
  console.log(\`- \${course}: \${count} students\`);
});`,
        output: `Student names: [ 'Alice', 'Bob', 'Charlie', 'Diana', 'Edward' ]
Students with grades > 80: [ 'Alice', 'Charlie', 'Diana' ]
Average grade: 82.00
Top student: Diana with grade: 95
All courses offered: [ 'Math', 'Science', 'History', 'English', 'Art', 'Music', 'PE' ]
Course enrollment:
- Math: 3 students
- Science: 3 students
- History: 2 students
- English: 2 students
- Art: 2 students
- Music: 2 students
- PE: 1 students`,
        explanation: {
          en: "This example shows how to use array methods to analyze a data set. We use map() to extract names, filter() to find students with high grades, reduce() to calculate the average and find the top student, and flatMap() to create a flat array of all courses. These methods allow us to express complex data operations in a concise and readable way without using traditional loops.",
          hi: "Yeh example dikhata hai ki kaise array methods ka upyog data set ko analyze karne ke liye kiya jata hai. Hum map() ka upyog names extract karne ke liye, filter() ka upyog high grades wale students ko dhoondhne ke liye, reduce() ka upyog average calculate karne aur top student ko dhoondhne ke liye, aur flatMap() ka upyog sabhi courses ka flat array banane ke liye karte hain. Ye methods humein complex data operations ko traditional loops ka upyog kiye bina concise aur readable tarike se express karne ki anumati dete hain."
        }
      }
    },
    {
      id: "array-destructuring",
      title: "Array Destructuring",
      content: {
        en: "Array destructuring is a JavaScript syntax that allows you to extract multiple items from an array and assign them to variables in a single statement. It provides a more concise way to work with arrays.",
        hi: "Array destructuring ek JavaScript syntax hai jo aapko ek array se multiple items extract karne aur unhe ek single statement mein variables ko assign karne ki anumati deta hai. Yeh arrays ke saath kaam karne ka ek more concise tarika provide karta hai."
      },
      codeExample: {
        code: `// Basic array destructuring
const colors = ["red", "green", "blue"];

// Old way to assign variables from an array
const firstColor = colors[0];
const secondColor = colors[1];
const thirdColor = colors[2];

// Using destructuring
const [red, green, blue] = colors;
console.log(red);    // "red"
console.log(green);  // "green"
console.log(blue);   // "blue"

// Skipping elements
const [first, , third] = colors;
console.log(first);  // "red"
console.log(third);  // "blue"

// Assigning remaining elements to a variable using the rest operator (...)
const [primary, ...secondaryColors] = colors;
console.log(primary);         // "red"
console.log(secondaryColors); // ["green", "blue"]

// Default values for missing elements
const rgb = ["red", "green"];
const [r, g, b = "blue"] = rgb;
console.log(r, g, b); // "red" "green" "blue"

// Swapping variables without a temporary variable
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1

// Destructuring function return values
function getCoordinates() {
  return [10, 20];
}

const [x, y] = getCoordinates();
console.log(x, y); // 10 20

// Nested array destructuring
const nested = ["one", ["two", "three"]];
const [first, [second, third]] = nested;
console.log(first, second, third); // "one" "two" "three"`,
        editable: true
      }
    },
    {
      id: "multidimensional-arrays",
      title: "Multidimensional Arrays",
      content: {
        en: "Multidimensional arrays are arrays of arrays, creating a matrix-like data structure. They can be used to represent tables, grids, and other complex data structures.",
        hi: "Multidimensional arrays arrays ke arrays hain, jo ek matrix-like data structure create karte hain. Inhe tables, grids, aur other complex data structures represent karne ke liye use kiya ja sakta hai."
      },
      codeExample: {
        code: `// Creating a 2D array (matrix)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing elements in a 2D array
console.log(matrix[0][0]); // 1 (first row, first column)
console.log(matrix[1][1]); // 5 (second row, second column)
console.log(matrix[2][2]); // 9 (third row, third column)

// Modifying elements
matrix[0][1] = 10;
console.log(matrix[0]); // [1, 10, 3]

// Iterating over a 2D array
console.log("Matrix contents:");
for (let i = 0; i < matrix.length; i++) {
  let row = "";
  for (let j = 0; j < matrix[i].length; j++) {
    row += matrix[i][j] + " ";
  }
  console.log(row);
}

// Using forEach for 2D arrays
console.log("\\nMatrix using forEach:");
matrix.forEach(row => {
  console.log(row.join(" "));
});

// 3D array example (cube)
const cube = [
  [
    [1, 2],
    [3, 4]
  ],
  [
    [5, 6],
    [7, 8]
  ]
];

// Accessing elements in a 3D array
console.log(cube[0][0][0]); // 1
console.log(cube[1][1][1]); // 8

// Common use case: Storing and processing tabular data
const students = [
  ["Alice", 90, 85, 92],
  ["Bob", 75, 80, 70],
  ["Charlie", 95, 90, 88]
];

// Calculating average scores
console.log("\\nStudent averages:");
students.forEach(student => {
  const name = student[0];
  // Calculate average (skip the name element at index 0)
  let sum = 0;
  for (let i = 1; i < student.length; i++) {
    sum += student[i];
  }
  const average = sum / (student.length - 1);
  console.log(\`\${name}'s average: \${average.toFixed(2)}\`);
});`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's use a 2D array to represent a tic-tac-toe board
const createBoard = () => [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// Place X or O at a position
function makeMove(board, row, col, player) {
  // Make a copy of the board to avoid modifying the original
  const newBoard = board.map(row => [...row]);
  
  // Check if the cell is empty
  if (newBoard[row][col] === ' ') {
    newBoard[row][col] = player;
    return newBoard;
  } else {
    console.log("Cell already occupied!");
    return board;
  }
}

// Display the board
function displayBoard(board) {
  console.log("Current board:");
  board.forEach((row, i) => {
    console.log(\`\${row[0]}|\${row[1]}|\${row[2]}\`);
    if (i < 2) console.log("-+-+-");
  });
}

// Check if a player has won
function checkWinner(board, player) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
      return true;
    }
  }
  
  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
      return true;
    }
  }
  
  // Check diagonals
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }
  
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }
  
  return false;
}

// Let's play a simple game
let board = createBoard();
displayBoard(board);

// Player X makes a move
console.log("\\nPlayer X moves to (0,0)");
board = makeMove(board, 0, 0, 'X');
displayBoard(board);

// Player O makes a move
console.log("\\nPlayer O moves to (1,1)");
board = makeMove(board, 1, 1, 'O');
displayBoard(board);

// Player X makes a move
console.log("\\nPlayer X moves to (0,1)");
board = makeMove(board, 0, 1, 'X');
displayBoard(board);

// Player O makes a move
console.log("\\nPlayer O moves to (2,2)");
board = makeMove(board, 2, 2, 'O');
displayBoard(board);

// Player X makes a move to win
console.log("\\nPlayer X moves to (0,2)");
board = makeMove(board, 0, 2, 'X');
displayBoard(board);

// Check if X has won
if (checkWinner(board, 'X')) {
  console.log("\\nPlayer X wins!");
} else {
  console.log("\\nNo winner yet.");
}`,
        output: `Current board:
 | | 
-+-+-
 | | 
-+-+-
 | | 

Player X moves to (0,0)
Current board:
X| | 
-+-+-
 | | 
-+-+-
 | | 

Player O moves to (1,1)
Current board:
X| | 
-+-+-
 |O| 
-+-+-
 | | 

Player X moves to (0,1)
Current board:
X|X| 
-+-+-
 |O| 
-+-+-
 | | 

Player O moves to (2,2)
Current board:
X|X| 
-+-+-
 |O| 
-+-+-
 | |O

Player X moves to (0,2)
Current board:
X|X|X
-+-+-
 |O| 
-+-+-
 | |O

Player X wins!`,
        explanation: {
          en: "This example demonstrates how to use a 2D array to represent and manipulate a tic-tac-toe game board. We create functions to make moves, display the board, and check for a winner. The board is a 3x3 array where each cell contains either 'X', 'O', or a space. This shows how multidimensional arrays can be used to model real-world grid-based problems.",
          hi: "Yeh example demonstrate karta hai ki kaise ek 2D array ka upyog tic-tac-toe game board ko represent aur manipulate karne ke liye kiya ja sakta hai. Hum moves karne, board display karne, aur winner check karne ke liye functions create karte hain. Board ek 3x3 array hai jahan har cell mein ya to 'X', 'O', ya space hota hai. Yeh dikhata hai ki multidimensional arrays ka upyog real-world grid-based problems ko model karne ke liye kaise kiya ja sakta hai."
        }
      }
    }
  ],
  exercise: {
    title: "Array Manipulation Challenge",
    description: {
      en: "Create a function that takes an array of numbers and returns a new array where each element is the sum of itself and all previous elements.",
      hi: "Ek function banayein jo numbers ke array ko input lete hai aur ek new array return karta hai jahan har element khud aur uske pehle ke sabhi elements ka sum hai."
    },
    starterCode: `function runningSum(nums) {
  // Your code here
  // Example: Input: [1, 2, 3, 4]
  // Output: [1, 3, 6, 10]
  // Explanation: [1, 1+2, 1+2+3, 1+2+3+4]
}

// Test your function with these arrays
console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([5, 10, 15, 20, 25]));`,
    expectedOutput: `[1, 3, 6, 10]
[1, 2, 3, 4, 5]
[5, 15, 30, 50, 75]`,
    hint: {
      en: "There are multiple ways to solve this. You can use a for loop to iterate through the array and keep track of the running sum. Alternatively, you can use the reduce() method with an accumulator to calculate the running sum at each step.",
      hi: "Ise solve karne ke multiple ways hain. Aap array ke through iterate karne ke liye ek for loop ka upyog kar sakte hain aur running sum ko track kar sakte hain. Alternatively, aap har step par running sum calculate karne ke liye accumulator ke saath reduce() method ka upyog kar sakte hain."
    }
  },
  summary: {
    en: "Arrays are versatile data structures in JavaScript that allow you to store and manipulate collections of items. They provide a wide range of built-in methods for adding, removing, finding, and transforming elements. Advanced features like destructuring and multidimensional arrays enable more powerful and concise data manipulation. Understanding arrays thoroughly is essential for effective JavaScript programming, especially when dealing with collections of data.",
    hi: {
      text: "Arrays JavaScript mein versatile data structures hain jo aapko items ke collections ko store aur manipulate karne ki anumati dete hain.",
      points: [
        "Ye adding, removing, finding, aur transforming elements ke liye built-in methods ki wide range provide karte hain",
        "Destructuring aur multidimensional arrays jaise advanced features more powerful aur concise data manipulation enable karte hain",
        "Arrays ko thoroughly samajhna effective JavaScript programming ke liye essential hai, especially jab data ke collections ke saath deal kiya jata hai",
        "forEach(), map(), filter(), aur reduce() jaise iteration methods complex operations ko simple aur readable way mein express karne mein help karte hain"
      ]
    }
  },
  prevTopic: {
    id: "functions",
    title: "Functions"
  },
  nextTopic: {
    id: "objects",
    title: "Objects"
  }
};