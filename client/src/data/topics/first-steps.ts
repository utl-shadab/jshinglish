export const firstStepsData = {
  id: "first-steps",
  title: "JavaScript First Steps",
  introduction: {
    en: "Now that we have a general understanding of what JavaScript is, let's take our first practical steps in writing JavaScript code. In this section, we'll learn about the basic building blocks of JavaScript: how to include JavaScript in your web pages, variables, data types, operators, expressions, and simple operations.",
    hi: "अब जब हमें समझ है कि JavaScript क्या है, आइए JavaScript code लिखने में अपने पहले practical steps लें। इस section में, हम JavaScript के basic building blocks के बारे में सीखेंगे: अपने web pages में JavaScript को कैसे include करें, variables, data types, operators, expressions, और simple operations।"
  },
  sections: [
    {
      id: "adding-javascript",
      title: "Adding JavaScript to a Web Page",
      content: {
        en: "There are three ways to add JavaScript to a web page: inline, internal, and external. Each has its own use cases and advantages.",
        hi: "Web page में JavaScript add करने के तीन तरीके हैं: inline, internal, और external। प्रत्येक के अपने use cases और advantages हैं।"
      },
      codeExample: {
        code: `<!-- Inline JavaScript -->
<button onclick="alert('Hello, World!')">Click Me</button>

<!-- Internal JavaScript -->
<script>
  // This JavaScript code is embedded in the HTML file
  function greet() {
    console.log('Hello from internal JavaScript!');
  }
  greet();
</script>

<!-- External JavaScript -->
<script src="script.js"></script>

/* Content of script.js file */
// This JavaScript is in a separate file
function externalGreeting() {
  console.log('Hello from external JavaScript!');
}
externalGreeting();`,
        editable: false
      }
    },
    {
      id: "hello-world",
      title: "Hello, World!",
      content: {
        en: "As is tradition in programming, let's start with a simple 'Hello, World!' program. In JavaScript, we can display text in several ways: using console.log() for debugging, alert() for popup messages, or by modifying the HTML content.",
        hi: "Programming में tradition के अनुसार, आइए एक simple 'Hello, World!' program से शुरुआत करें। JavaScript में, हम कई तरीकों से text display कर सकते हैं: debugging के लिए console.log() का उपयोग करके, popup messages के लिए alert(), या HTML content को modify करके।"
      },
      codeExample: {
        code: `// Method 1: Using console.log() (visible in browser console)
console.log("Hello, World!");

// Method 2: Using alert() (creates a popup dialog)
// Uncomment to try it
// alert("Hello, World!");

// Method 3: Changing HTML content
// Assumes there's an HTML element with id="demo"
// document.getElementById("demo").innerHTML = "Hello, World!";`,
        editable: true
      },
      interactiveExample: {
        code: `// Try running this code to see the output in the console
console.log("Hello from JavaScript!");
console.log("My name is JSHindi.");
console.log("I'm learning JavaScript.");`,
        output: `Hello from JavaScript!
My name is JSHindi.
I'm learning JavaScript.`,
        explanation: {
          en: "This example shows basic console.log() statements. The console.log() function is one of the most useful tools for debugging JavaScript code, as it outputs information to the browser's console without affecting the page's appearance.",
          hi: "यह example basic console.log() statements दिखाता है। console.log() function JavaScript code को debug करने के लिए सबसे useful tools में से एक है, क्योंकि यह page के appearance को affect किए बिना browser के console में information output करता है।"
        }
      }
    },
    {
      id: "comments",
      title: "Comments",
      content: {
        en: "Comments are notes that you can add to your code to explain what it does. They are ignored by the JavaScript engine when your code runs. There are two ways to add comments in JavaScript: single-line comments and multi-line comments.",
        hi: "Comments वे notes हैं जिन्हें आप अपने code में add कर सकते हैं यह explain करने के लिए कि यह क्या करता है। जब आपका code run होता है तो वे JavaScript engine द्वारा ignore कर दिए जाते हैं। JavaScript में comments add करने के दो तरीके हैं: single-line comments और multi-line comments।"
      },
      codeExample: {
        code: `// This is a single-line comment
console.log("Hello"); // We can also put comments after code

/* This is a multi-line comment.
   It can span multiple lines.
   Very useful for longer explanations.
*/

// Comments are ignored when the code runs
// console.log("This won't run");

/*
  Comments are also useful for temporarily 
  disabling code during development:
  
  let x = 5;
  console.log(x * 2);
*/`,
        editable: true
      }
    },
    {
      id: "runtime-environment",
      title: "The JavaScript Runtime Environment",
      content: {
        en: "When you run JavaScript in a web browser, your code has access to various browser APIs and objects. The most important global object in a browser environment is 'window', which represents the browser window and provides access to browser-specific methods and properties.",
        hi: "जब आप web browser में JavaScript run करते हैं, तो आपके code को विभिन्न browser APIs और objects का access होता है। Browser environment में सबसे important global object 'window' है, जो browser window का represent करता है और browser-specific methods और properties का access प्रदान करता है।"
      },
      codeExample: {
        code: `// The window object is the global object in browsers
// These are equivalent in browser environments:
window.console.log("Hello");
console.log("Hello");

// Some common window properties and methods
console.log(window.innerWidth); // Width of browser viewport
console.log(window.innerHeight); // Height of browser viewport

// setTimeout executes a function after a delay (in milliseconds)
window.setTimeout(function() {
  console.log("This appears after 2 seconds");
}, 2000);

// location contains information about the current URL
console.log(window.location.href); // Current URL`,
        editable: true
      }
    }
  ],
  exercise: {
    title: "Exercise: Write Your First JavaScript Program",
    description: {
      en: "Let's create a simple program that displays a personalized greeting in the console. Complete the function 'personalGreeting' that takes a name as input and returns a greeting message that includes the time of day (morning, afternoon, evening).",
      hi: "आइए एक simple program create करें जो console में एक personalized greeting display करता है। 'personalGreeting' function को complete करें जो input के रूप में name लेता है और एक greeting message return करता है जिसमें time of day (morning, afternoon, evening) शामिल है।"
    },
    starterCode: `// Complete the personalGreeting function
// personalGreeting function को complete करें

function personalGreeting(name) {
  // Get the current hour (0-23)
  const currentHour = new Date().getHours();
  
  // Your code here:
  // 1. Create a timeGreeting variable based on the current hour:
  //    - "Good morning" if it's before 12
  //    - "Good afternoon" if it's between 12 and 18
  //    - "Good evening" if it's after 18
  // 2. Return a string combining the timeGreeting and the name

  // आपका code यहां:
  // 1. current hour के आधार पर एक timeGreeting variable create करें:
  //    - "Good morning" अगर यह 12 से पहले है
  //    - "Good afternoon" अगर यह 12 और 18 के बीच है
  //    - "Good evening" अगर यह 18 के बाद है
  // 2. timeGreeting और name को combine करके एक string return करें
}

// Test case
console.log(personalGreeting("Alice"));
// Should print something like "Good morning, Alice!" depending on the time of day`,
    expectedOutput: `Good morning, Alice!`,
    hint: {
      en: "Use if/else statements to check the current hour and determine the appropriate time greeting. Then combine the time greeting with the name using string concatenation or template literals (backticks).",
      hi: "Current hour को check करने और appropriate time greeting को determine करने के लिए if/else statements का उपयोग करें। फिर string concatenation या template literals (backticks) का उपयोग करके time greeting को name के साथ combine करें।"
    }
  },
  summary: {
    en: "In this section, we took our first steps in JavaScript programming. We learned how to include JavaScript in web pages using inline, internal, and external methods. We wrote our first 'Hello, World!' program and explored different ways to output information. We also covered comments, which help make our code more readable, and introduced the browser runtime environment with the window object. With these foundations, you're ready to dive deeper into JavaScript's core concepts.",
    hi: {
      text: "इस section में, हमने JavaScript programming में अपने पहले steps लिए।",
      points: [
        "हमने web pages में JavaScript को include करने के तरीके सीखे: inline, internal, और external methods का उपयोग करके",
        "हमने अपना पहला 'Hello, World!' program लिखा और information output करने के विभिन्न तरीकों का exploration किया",
        "हमने comments को cover किया, जो हमारे code को अधिक readable बनाने में help करते हैं",
        "हमने window object के साथ browser runtime environment का introduction दिया",
        "इन foundations के साथ, आप JavaScript के core concepts में deeper dive करने के लिए ready हैं"
      ]
    }
  },
  prevTopic: {
    id: "introduction",
    title: "Introduction to JavaScript"
  },
  nextTopic: {
    id: "building-blocks",
    title: "JavaScript Building Blocks"
  }
};
