export const loopsData = {
  id: "loops",
  title: "Loops and Iteration",
  introduction: {
    en: "Loops are essential programming constructs that allow you to repeatedly execute a block of code until a certain condition is met. JavaScript provides several types of loops, each with its own use cases and syntax. Loops help automate repetitive tasks and iterate over collections of data like arrays and objects.",
    hi: "Loops essential programming constructs हैं जो आपको एक block of code को repeatedly execute करने की अनुमति देते हैं जब तक कि एक certain condition meet नहीं हो जाती। JavaScript कई प्रकार के loops प्रदान करता है, प्रत्येक के अपने use cases और syntax के साथ। Loops repetitive tasks को automate करने और arrays और objects जैसे data के collections पर iterate करने में मदद करते हैं।"
  },
  sections: [
    {
      id: "for-loop",
      title: "For Loop",
      content: {
        en: "The for loop is the most common type of loop in JavaScript. It consists of three optional expressions: initialization, condition, and final expression, followed by a code block to be executed in each iteration.",
        hi: "For loop JavaScript में सबसे common प्रकार का loop है। इसमें तीन optional expressions होते हैं: initialization, condition, और final expression, उसके बाद एक code block होता है जो प्रत्येक iteration में execute किया जाता है।"
      },
      codeExample: {
        code: `// Basic for loop structure
for (let i = 0; i < 5; i++) {
  console.log(i); // Will print 0, 1, 2, 3, 4
}

// Looping through an array
let fruits = ['apple', 'banana', 'orange', 'mango'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // Will print each fruit
}

// Nested for loops - creating a multiplication table
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(\`\${i} x \${j} = \${i * j}\`);
  }
}`,
        editable: true
      },
      interactiveExample: {
        code: `// Using a for loop to calculate the sum of an array
let numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log('Sum:', sum);`,
        output: "Sum: 150",
        explanation: {
          en: "This example uses a for loop to iterate through each element in the numbers array and add it to a running sum. The loop runs 5 times (once for each element), and after the loop completes, sum equals 150.",
          hi: "यह example numbers array में प्रत्येक element पर iterate करने के लिए for loop का उपयोग करता है और उसे running sum में add करता है। Loop 5 बार चलता है (प्रत्येक element के लिए एक बार), और loop complete होने के बाद, sum 150 के बराबर होता है।"
        }
      }
    },
    {
      id: "while-loop",
      title: "While Loop",
      content: {
        en: "The while loop executes a block of code as long as a specified condition is true. It's useful when you don't know in advance how many times the loop should run.",
        hi: "While loop एक block of code को execute करता है जब तक कि एक specified condition true होती है। यह उपयोगी होता है जब आप advance में नहीं जानते कि loop को कितनी बार run करना चाहिए।"
      },
      codeExample: {
        code: `// Basic while loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// Using while to find the first power of 2 greater than 100
let power = 1;
while (power <= 100) {
  power *= 2;
}
console.log(power); // 128

// Be careful with while loops - they can run indefinitely if the
// condition never becomes false (infinite loop)
// Uncomment at your own risk:
// while (true) {
//   console.log("This will run forever!");
// }`,
        editable: true
      }
    },
    {
      id: "do-while-loop",
      title: "Do...While Loop",
      content: {
        en: "The do...while loop is similar to the while loop, but it executes the code block once before checking the condition. This ensures that the code inside the loop runs at least once.",
        hi: "Do...while loop while loop के similar होता है, लेकिन यह condition को check करने से पहले code block को एक बार execute करता है। यह ensure करता है कि loop के अंदर का code कम से कम एक बार run होता है।"
      },
      codeExample: {
        code: `// Basic do...while loop
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

// Example where the loop body executes once even though the condition is false
let j = 10;
do {
  console.log('This will run once, even though j is already 10');
} while (j < 10);`,
        editable: true
      }
    },
    {
      id: "for-in-loop",
      title: "For...In Loop",
      content: {
        en: "The for...in loop iterates over all enumerable properties of an object, including inherited properties. It's primarily designed for objects, but can also be used with arrays (though not recommended for arrays).",
        hi: "For...in loop एक object के सभी enumerable properties पर iterate करता है, including inherited properties। यह primarily objects के लिए designed है, लेकिन arrays के साथ भी उपयोग किया जा सकता है (हालांकि arrays के लिए recommend नहीं किया जाता है)।"
      },
      codeExample: {
        code: `// Using for...in with an object
let person = {
  name: 'John',
  age: 30,
  job: 'Developer'
};

for (let key in person) {
  console.log(key + ': ' + person[key]);
}

// Using for...in with an array (not recommended)
let colors = ['red', 'green', 'blue'];
for (let index in colors) {
  console.log(index + ': ' + colors[index]);
}

// Why for...in is not recommended for arrays:
// It iterates over all enumerable properties, not just indices
Array.prototype.customProperty = 'test';
for (let i in colors) {
  console.log(i); // Will print '0', '1', '2', 'customProperty'
}`,
        editable: true
      }
    },
    {
      id: "for-of-loop",
      title: "For...Of Loop",
      content: {
        en: "The for...of loop, introduced in ES6, iterates over iterable objects (like arrays, strings, Maps, Sets, etc.) and provides a clean way to access the values directly, rather than their indices or keys.",
        hi: "For...of loop, जो ES6 में introduce किया गया था, iterable objects (जैसे arrays, strings, Maps, Sets, आदि) पर iterate करता है और values को directly access करने का एक clean तरीका प्रदान करता है, उनके indices या keys के बजाय।"
      },
      codeExample: {
        code: `// Using for...of with an array
let fruits = ['apple', 'banana', 'orange'];
for (let fruit of fruits) {
  console.log(fruit); // Directly prints the value
}

// Using for...of with a string
let greeting = 'Hello';
for (let char of greeting) {
  console.log(char); // Prints each character: 'H', 'e', 'l', 'l', 'o'
}

// Using for...of with other iterables like Maps
let fruitMap = new Map([
  ['apple', 5],
  ['banana', 3],
  ['orange', 2]
]);

for (let [fruit, count] of fruitMap) {
  console.log(\`We have \${count} \${fruit}s\`);
}`,
        editable: true
      }
    },
    {
      id: "break-continue",
      title: "Break and Continue",
      content: {
        en: "The break statement exits a loop completely, while the continue statement skips the current iteration and moves to the next one. These statements give you more control over loop execution.",
        hi: "Break statement एक loop से completely exit करता है, जबकि continue statement current iteration को skip करता है और next iteration पर move करता है। ये statements आपको loop execution पर अधिक control देते हैं।"
      },
      codeExample: {
        code: `// Using break to exit a loop early
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log('Breaking the loop at i = 5');
    break;
  }
  console.log(i);
}

// Using continue to skip iterations
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log('Skipping iteration at i = 2');
    continue;
  }
  console.log(i);
}

// Finding the first prime number greater than 10
let num = 11;
while (true) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break; // Exit the inner loop
    }
  }
  if (isPrime) {
    console.log(\`First prime number greater than 10: \${num}\`);
    break; // Exit the outer loop
  }
  num++;
}`,
        editable: true
      }
    }
  ],
  exercise: {
    title: "Exercise: Creating a FizzBuzz Function",
    description: {
      en: "Write a function called 'fizzBuzz' that takes a number n and uses a loop to print all numbers from 1 to n, but with the following modifications: for multiples of three, print 'Fizz' instead of the number, for multiples of five, print 'Buzz', and for numbers that are multiples of both three and five, print 'FizzBuzz'.",
      hi: "एक function लिखें जिसे 'fizzBuzz' कहा जाता है जो एक number n लेता है और 1 से n तक सभी numbers को print करने के लिए एक loop का उपयोग करता है, लेकिन निम्नलिखित modifications के साथ: three के multiples के लिए, number के बजाय 'Fizz' print करें, five के multiples के लिए, 'Buzz' print करें, और ऐसे numbers के लिए जो three और five दोनों के multiples हैं, 'FizzBuzz' print करें।"
    },
    starterCode: `// Complete the fizzBuzz function
// fizzBuzz function को पूरा करें

function fizzBuzz(n) {
  // Your code here
  // आपका code यहां
}

// Test case
fizzBuzz(15);
/* Expected output:
1
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
*/`,
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
FizzBuzz`,
    hint: {
      en: "Use a for loop that goes from 1 to n. For each number, check if it's divisible by both 3 and 5 (i % 15 === 0), just by 3 (i % 3 === 0), or just by 5 (i % 5 === 0). Use console.log() to print the appropriate string for each case.",
      hi: "एक for loop का उपयोग करें जो 1 से n तक जाता है। प्रत्येक number के लिए, check करें कि क्या वह 3 और 5 दोनों से divisible है (i % 15 === 0), केवल 3 से (i % 3 === 0), या केवल 5 से (i % 5 === 0)। प्रत्येक case के लिए appropriate string को print करने के लिए console.log() का उपयोग करें।"
    }
  },
  summary: {
    en: "In this section, we explored JavaScript loops, which are essential for executing code multiple times. We learned about the for loop for situations where we know in advance how many iterations we need, while and do...while loops for when the number of iterations is unknown, for...in loops for iterating over object properties, and for...of loops for iterating over the values of iterable objects. We also learned how to use break and continue to control loop execution flow.",
    hi: {
      text: "इस section में, हमने JavaScript loops का exploration किया, जो code को multiple times execute करने के लिए essential हैं।",
      points: [
        "हमने for loop के बारे में सीखा उन situations के लिए जहां हम advance में जानते हैं कि हमें कितने iterations की आवश्यकता है",
        "हमने while और do...while loops के बारे में सीखा जब iterations की संख्या unknown होती है",
        "हमने for...in loops के बारे में सीखा object properties पर iterate करने के लिए",
        "हमने for...of loops के बारे में सीखा iterable objects के values पर iterate करने के लिए",
        "हमने break और continue का उपयोग करना भी सीखा loop execution flow को control करने के लिए"
      ]
    }
  },
  prevTopic: {
    id: "conditionals",
    title: "Conditional Statements"
  },
  nextTopic: {
    id: "functions",
    title: "Functions"
  }
};
