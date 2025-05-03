export const introductionData = {
  id: "introduction",
  title: "Introduction to JavaScript",
  introduction: {
    en: "JavaScript is a powerful, flexible, and fast programming language that runs in the browser and on the server. It's one of the world's most popular programming languages and is the language of the web, making it essential for web development.",
    hi: "JavaScript ek powerful, flexible, aur fast programming language hai jo browser aur server dono par chalta hai. Yeh duniya ki sabse popular programming languages mein se ek hai aur web ki language hai, isliye web development ke liye bahut important hai."
  },
  sections: [
    {
      id: "what-is-javascript",
      title: "What is JavaScript?",
      content: {
        en: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It was originally designed as a scripting language for websites but has become much more. It can be used for client-side and server-side scripting, and in non-web programs such as desktop applications.",
        hi: "JavaScript ek high-level, interpreted programming language hai jo ECMAScript specification ke according banayi gayi hai. Originally, ise websites ke liye ek scripting language ke roop mein design kiya gaya tha, lekin ab yeh bahut zyada versatile ho gayi hai. Yeh client-side aur server-side scripting ke liye, aur non-web programs jaise desktop applications mein bhi istemal ki ja sakti hai."
      },
      codeExample: {
        code: `// This is a simple JavaScript code
console.log("Hello, World!"); // Outputs: Hello, World!

// JavaScript can manipulate HTML
document.getElementById("demo").innerHTML = "Hello, JavaScript!";

// JavaScript can handle events
document.getElementById("button").addEventListener("click", function() {
  alert("Button was clicked!");
});`,
        editable: true
      }
    },
    {
      id: "history-of-javascript",
      title: "History of JavaScript",
      content: {
        en: "JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. It was originally developed under the name Mocha, then renamed to LiveScript, and finally to JavaScript. Despite the name, JavaScript is not related to Java programming language; the name was chosen for marketing purposes during the rise of Java's popularity.",
        hi: "JavaScript 1995 mein Brendan Eich dwara Netscape Communications mein apne karyakaal ke dauran banaya gaya tha. Initially ise Mocha naam se develop kiya gaya, phir LiveScript ke naam se jana gaya, aur finally JavaScript naam diya gaya. Naam ke bawajood, JavaScript Java programming language se related nahi hai; Java ki popularity ke dauran marketing purposes ke liye yeh naam chuna gaya tha."
      }
    },
    {
      id: "why-learn-javascript",
      title: "Why Learn JavaScript?",
      content: {
        en: "JavaScript is essential for web development as it's the only programming language natively supported by all major web browsers. It allows developers to create interactive and dynamic content. In recent years, JavaScript has expanded beyond the browser with platforms like Node.js, allowing developers to use it for server-side programming, mobile app development, desktop applications, and more.",
        hi: "JavaScript web development ke liye bahut important hai kyunki yeh ek aisi programming language hai jise sabhi major web browsers natively support karte hain. Yeh developers ko interactive aur dynamic content banane ki capability deti hai. Recent years mein, JavaScript browser se aage expand ho gayi hai platforms jaise Node.js ke saath, jisse developers ise server-side programming, mobile app development, desktop applications, aur bahut kuch ke liye use kar sakte hain."
      },
      interactiveExample: {
        code: `// Try running this code
let name = prompt("What is your name?");
if (name) {
  console.log("Hello, " + name + "!");
} else {
  console.log("Hello, anonymous user!");
}`,
        output: `Hello, John!`,
        explanation: {
          en: "This code uses the prompt() function to ask for the user's name. If a name is provided, it greets the user by name; otherwise, it greets them as an anonymous user.",
          hi: "Is code mein prompt() function ka use kiya gaya hai user ka naam poochne ke liye. Agar naam provide kiya jata hai, to user ko naam se greet karta hai; warna, unhe anonymous user ke roop mein greet karta hai."
        }
      }
    },
    {
      id: "javascript-versions",
      title: "JavaScript Versions",
      content: {
        en: "JavaScript has evolved significantly since its creation. The ECMAScript specification (standardized JavaScript) has gone through multiple versions, adding new features and improvements. ES6 (ECMAScript 2015) was a major update, introducing many new features like arrow functions, classes, and modules. Since then, there have been yearly updates with ES2016, ES2017, and so on, each adding new capabilities to the language.",
        hi: "JavaScript apne creation ke baad se significantly evolve hui hai. ECMAScript specification (standardized JavaScript) multiple versions se guzri hai, jisme new features aur improvements add hue hain. ES6 (ECMAScript 2015) ek major update tha, jisme arrow functions, classes, aur modules jaise bahut sare new features introduce kiye gaye the. Tab se lekar, har saal ES2016, ES2017, aur aage ke updates aate rahe hain, jisme har baar language mein nayi capabilities add ki jaati hain."
      },
      codeExample: {
        code: `// ES5 function
function add(a, b) {
  return a + b;
}

// ES6 arrow function
const add = (a, b) => a + b;

// ES6 classes
class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return \`Hello, my name is \${this.name}\`;
  }
}

// ES6 template literals
const message = \`This is a template literal.
It can span multiple lines
and embed expressions like \${2 + 2}\`;`,
        editable: true
      }
    }
  ],
  exercise: {
    title: "Basic JavaScript Exercise",
    description: {
      en: "Try to create a simple program that asks for the user's name and age, then displays a personalized message based on their age.",
      hi: "Ek simple program banane ki koshish karein jo user se unka name aur age poochta hai, phir unke age ke hisab se ek personalized message display karta hai."
    },
    starterCode: `// Your code here
// 1. Prompt for the user's name
// 2. Prompt for the user's age
// 3. Check if age is over 18
// 4. Display appropriate message

// Apna code yahan likhein
// 1. User ka naam poochen
// 2. User ki age poochen
// 3. Check karein ki age 18 se jyada hai ya nahi
// 4. Appropriate message display karein`,
    expectedOutput: `Hello [name]! You are [adult/minor].`,
    hint: {
      en: "You'll need to use the prompt() function to get user input, parseInt() to convert the age string to a number, and if-else statements to check the age condition.",
      hi: "Aapko user input lene ke liye prompt() function, age string ko number mein convert karne ke liye parseInt(), aur age condition check karne ke liye if-else statements ka upyog karna hoga."
    }
  },
  summary: {
    en: "JavaScript is a versatile programming language used for both client-side and server-side development. Originally created for web browsers, it has expanded to many other environments. Learning JavaScript is essential for modern web development, and understanding its evolution helps in utilizing its full potential.",
    hi: {
      text: "JavaScript ek versatile programming language hai jo client-side aur server-side dono development ke liye use hoti hai.",
      points: [
        "Initially web browsers ke liye banayi gayi thi, lekin ab bahut sare environments mein expand ho gayi hai",
        "Modern web development ke liye JavaScript sikhna bahut important hai",
        "JavaScript ki evolution ko samajhne se iska full potential utilize karne mein help milti hai",
        "ECMAScript ke through regular updates milte rahte hain jisse language continuously improve hoti hai"
      ]
    }
  },
  nextTopic: {
    id: "variables",
    title: "Variables and Data Types"
  }
};