export const asyncData = {
  id: "async",
  title: "Asynchronous JavaScript",
  introduction: {
    en: "Asynchronous programming is a critical concept in JavaScript that allows code to run without blocking other operations. This is particularly important in web applications, where tasks like fetching data from servers, handling user interactions, or processing files should not freeze the entire application. In this section, we'll explore how JavaScript handles asynchronous operations through callbacks, promises, and async/await syntax.",
    hi: "Asynchronous programming JavaScript में एक critical concept है जो code को दूसरे operations को block किए बिना run करने की अनुमति देता है। यह web applications में particularly important है, जहां servers से data fetch करने, user interactions को handle करने, या files को process करने जैसे tasks पूरे application को freeze नहीं करना चाहिए। इस section में, हम explore करेंगे कि JavaScript callbacks, promises, और async/await syntax के माध्यम से asynchronous operations को कैसे handle करता है।"
  },
  sections: [
    {
      id: "synchronous-vs-asynchronous",
      title: "Synchronous vs. Asynchronous Code",
      content: {
        en: "To understand asynchronous programming, it's important to first understand how synchronous code works and why it can be limiting for web applications.",
        hi: "Asynchronous programming को समझने के लिए, पहले यह समझना important है कि synchronous code कैसे काम करता है और यह web applications के लिए limiting क्यों हो सकता है।"
      },
      codeExample: {
        code: `// Synchronous code example
console.log("First");
console.log("Second");
console.log("Third");

// Output will always be:
// First
// Second
// Third

// Example of blocking behavior in synchronous code
console.log("Start");

// This function simulates a time-consuming task
function doSomethingTimeConsuming() {
  const startTime = new Date().getTime();
  while (new Date().getTime() - startTime < 3000) {
    // Just waiting for 3 seconds
  }
  console.log("Time-consuming task done!");
}

doSomethingTimeConsuming(); // This blocks the entire program for 3 seconds
console.log("End");  // This won't execute until after the function completes

// Output:
// Start
// Time-consuming task done! (after 3 second delay)
// End`,
        editable: true
      },
      codeExample2: {
        code: `// Asynchronous code example
console.log("Start");

// setTimeout is an asynchronous function that schedules code to run later
setTimeout(() => {
  console.log("This runs after 3 seconds");
}, 3000);

console.log("End");

// Output:
// Start
// End
// This runs after 3 seconds (after 3 second delay)`,
        editable: true
      }
    },
    {
      id: "callbacks",
      title: "Callbacks",
      content: {
        en: "Callbacks are functions passed as arguments to other functions, which are then invoked when the operation completes. They were JavaScript's original mechanism for handling asynchronous operations.",
        hi: "Callbacks ऐसे functions हैं जिन्हें arguments के रूप में दूसरे functions को pass किया जाता है, जिन्हें फिर operation complete होने पर invoke किया जाता है। वे asynchronous operations को handle करने के लिए JavaScript का original mechanism थे।"
      },
      codeExample: {
        code: `// Basic callback example
function greet(name, callback) {
  console.log(\`Hello, \${name}!\`);
  callback();
}

greet("Alice", function() {
  console.log("Callback executed after greeting");
});

// Asynchronous callback with setTimeout
console.log("Starting");

setTimeout(function() {
  console.log("This is a callback executed after 2 seconds");
}, 2000);

console.log("Continuing execution...");

// Output:
// Starting
// Continuing execution...
// This is a callback executed after 2 seconds (after 2 second delay)`,
        editable: true
      },
      interactiveExample: {
        code: `// Callback hell example - nested callbacks can get messy
function getData(callback) {
  // Simulated API call
  setTimeout(() => {
    const data = { user: "John" };
    console.log("Got user data");
    callback(data);
  }, 1000);
}

function getOrdersForUser(user, callback) {
  // Simulated API call
  setTimeout(() => {
    const orders = ["Order1", "Order2"];
    console.log(\`Got orders for \${user.user}\`);
    callback(orders);
  }, 1000);
}

function getOrderDetails(orderId, callback) {
  // Simulated API call
  setTimeout(() => {
    const details = { orderId: orderId, status: "shipped" };
    console.log(\`Got details for \${orderId}\`);
    callback(details);
  }, 1000);
}

// Example of callback hell (pyramid of doom)
getData(function(user) {
  getOrdersForUser(user, function(orders) {
    getOrderDetails(orders[0], function(details) {
      console.log(\`Order status: \${details.status}\`);
    });
  });
});`,
        output: `Got user data
Got orders for John
Got details for Order1
Order status: shipped`,
        explanation: {
          en: "This example demonstrates 'callback hell', where multiple nested callbacks create code that's hard to read and maintain. As more asynchronous operations are chained, the code nests deeper, creating what's often called the 'pyramid of doom'. This was a common problem before promises and async/await were introduced.",
          hi: "यह example 'callback hell' को demonstrate करता है, जहां multiple nested callbacks ऐसे code create करते हैं जिसे read और maintain करना hard होता है। जैसे-जैसे अधिक asynchronous operations को chain किया जाता है, code deeper nest होता जाता है, जिससे वह बनता है जिसे अक्सर 'pyramid of doom' कहा जाता है। यह promises और async/await के introduce होने से पहले एक common problem था।"
        }
      }
    },
    {
      id: "promises",
      title: "Promises",
      content: {
        en: "Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a more elegant way to handle asynchronous operations and avoid the 'pyramid of doom' associated with nested callbacks.",
        hi: "Promises ऐसे objects हैं जो किसी asynchronous operation के eventual completion या failure का represent करते हैं। वे asynchronous operations को handle करने और nested callbacks से associated 'pyramid of doom' से बचने का एक अधिक elegant तरीका provide करते हैं।"
      },
      codeExample: {
        code: `// Creating a basic promise
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const success = true;
    
    if (success) {
      resolve("Operation completed successfully!");
    } else {
      reject("Operation failed!");
    }
  }, 2000);
});

// Using the promise
console.log("Promise started");

myPromise
  .then((result) => {
    console.log(result);  // Executes if the promise resolves
  })
  .catch((error) => {
    console.error(error);  // Executes if the promise rejects
  })
  .finally(() => {
    console.log("Promise completed (resolved or rejected)");
  });

console.log("Code continues executing...");

// Output:
// Promise started
// Code continues executing...
// (After 2 seconds)
// Operation completed successfully!
// Promise completed (resolved or rejected)`,
        editable: true
      },
      codeExample2: {
        code: `// Refactoring the "callback hell" example using promises
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { user: "John" };
      console.log("Got user data");
      resolve(data);
    }, 1000);
  });
}

function getOrdersForUser(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orders = ["Order1", "Order2"];
      console.log(\`Got orders for \${user.user}\`);
      resolve(orders);
    }, 1000);
  });
}

function getOrderDetails(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const details = { orderId: orderId, status: "shipped" };
      console.log(\`Got details for \${orderId}\`);
      resolve(details);
    }, 1000);
  });
}

// Using promise chaining - much cleaner than callbacks
getData()
  .then(user => getOrdersForUser(user))
  .then(orders => getOrderDetails(orders[0]))
  .then(details => {
    console.log(\`Order status: \${details.status}\`);
  })
  .catch(error => {
    console.error("Error:", error);
  });`,
        editable: true
      }
    },
    {
      id: "async-await",
      title: "Async/Await",
      content: {
        en: "Async/await is syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code. This makes asynchronous code easier to understand and maintain.",
        hi: "Async/await, promises के ऊपर build किया गया syntactic sugar है, जो asynchronous code को synchronous code की तरह look और behave करने में मदद करता है। इससे asynchronous code को समझना और maintain करना easier हो जाता है।"
      },
      codeExample: {
        code: `// Basic async/await syntax
async function myAsyncFunction() {
  // The 'async' keyword allows using 'await' inside the function
  
  try {
    console.log("Function started");
    
    // The 'await' keyword pauses execution until the promise resolves
    const result = await new Promise((resolve) => {
      setTimeout(() => resolve("Promise resolved!"), 2000);
    });
    
    console.log(result);  // This runs after the promise resolves
    return "Function completed";
  } catch (error) {
    console.error("Error caught:", error);
    return "Function failed";
  }
}

// Calling an async function
console.log("Before calling async function");

myAsyncFunction().then(message => {
  console.log(message);
});

console.log("After calling async function");

// Output:
// Before calling async function
// After calling async function
// Function started
// (After 2 seconds)
// Promise resolved!
// Function completed`,
        editable: true
      },
      interactiveExample: {
        code: `// Using async/await with the previous example
async function getOrderStatus() {
  try {
    // Each await pauses execution until the promise resolves
    const user = await getData();
    const orders = await getOrdersForUser(user);
    const details = await getOrderDetails(orders[0]);
    return \`Order status: \${details.status}\`;
  } catch (error) {
    return \`Error: \${error}\`;
  }
}

// These functions return promises as in the previous example
function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = { user: "John" };
      console.log("Got user data");
      resolve(data);
    }, 1000);
  });
}

function getOrdersForUser(user) {
  return new Promise(resolve => {
    setTimeout(() => {
      const orders = ["Order1", "Order2"];
      console.log(\`Got orders for \${user.user}\`);
      resolve(orders);
    }, 1000);
  });
}

function getOrderDetails(orderId) {
  return new Promise(resolve => {
    setTimeout(() => {
      const details = { orderId: orderId, status: "shipped" };
      console.log(\`Got details for \${orderId}\`);
      resolve(details);
    }, 1000);
  });
}

// Execute the async function
getOrderStatus().then(result => console.log(result));`,
        output: `Got user data
Got orders for John
Got details for Order1
Order status: shipped`,
        explanation: {
          en: "Using async/await makes the asynchronous code look much more like synchronous code. The function execution pauses at each 'await' until the promise resolves, making the flow more intuitive to follow. Error handling also becomes more straightforward with try/catch blocks. Note that in this example, the operations happen sequentially, one after the other.",
          hi: "Async/await का उपयोग करने से asynchronous code, synchronous code की तरह बहुत अधिक look करता है। Function execution प्रत्येक 'await' पर pause हो जाता है जब तक promise resolve नहीं हो जाता, जिससे flow को follow करना अधिक intuitive हो जाता है। Try/catch blocks के साथ error handling भी अधिक straightforward हो जाती है। ध्यान दें कि इस example में, operations sequentially होते हैं, एक के बाद एक।"
        }
      }
    },
    {
      id: "parallel-operations",
      title: "Parallel Asynchronous Operations",
      content: {
        en: "Sometimes, you want to run multiple asynchronous operations in parallel rather than sequentially. JavaScript provides tools like Promise.all(), Promise.race(), and Promise.allSettled() for handling parallel operations.",
        hi: "कभी-कभी, आप multiple asynchronous operations को sequentially के बजाय parallel में run करना चाहते हैं। JavaScript, parallel operations को handle करने के लिए Promise.all(), Promise.race(), और Promise.allSettled() जैसे tools provide करता है।"
      },
      codeExample: {
        code: `// Promise.all() - waits for all promises to resolve, or rejects if any promise rejects
function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Fetched user");
      resolve({ id: 1, name: "John" });
    }, 1000);
  });
}

function fetchUserPosts() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Fetched posts");
      resolve(["Post 1", "Post 2", "Post 3"]);
    }, 1500);
  });
}

function fetchUserFriends() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Fetched friends");
      resolve(["Alice", "Bob", "Charlie"]);
    }, 2000);
  });
}

// Sequential approach (takes around 4.5 seconds total)
async function fetchDataSequentially() {
  console.log("Sequential fetching started");
  const startTime = Date.now();
  
  const user = await fetchUser();
  const posts = await fetchUserPosts();
  const friends = await fetchUserFriends();
  
  console.log("Sequential fetching completed in", Date.now() - startTime, "ms");
  return { user, posts, friends };
}

// Parallel approach using Promise.all() (takes around 2 seconds total)
async function fetchDataInParallel() {
  console.log("Parallel fetching started");
  const startTime = Date.now();
  
  const [user, posts, friends] = await Promise.all([
    fetchUser(),
    fetchUserPosts(),
    fetchUserFriends()
  ]);
  
  console.log("Parallel fetching completed in", Date.now() - startTime, "ms");
  return { user, posts, friends };
}

// Try both approaches to see the difference in execution time
// fetchDataSequentially().then(data => console.log("Sequential result:", data));
fetchDataInParallel().then(data => console.log("Parallel result:", data));`,
        editable: true
      }
    },
    {
      id: "error-handling",
      title: "Error Handling in Asynchronous Code",
      content: {
        en: "Proper error handling is crucial in asynchronous code. JavaScript provides multiple ways to handle errors in promises and async/await.",
        hi: "Asynchronous code में proper error handling crucial है। JavaScript, promises और async/await में errors को handle करने के लिए multiple तरीके provide करता है।"
      },
      codeExample: {
        code: `// Error handling with promises
function riskyOperation() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      if (success) {
        resolve("Operation successful");
      } else {
        reject(new Error("Operation failed"));
      }
    }, 1000);
  });
}

// Using .catch() with promises
riskyOperation()
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.error("Promise catch:", error.message);
  });

// Error handling with async/await
async function handleRiskyOperation() {
  try {
    const result = await riskyOperation();
    console.log("Async/await success:", result);
  } catch (error) {
    console.error("Async/await catch:", error.message);
  } finally {
    console.log("Operation attempt completed");
  }
}

handleRiskyOperation();

// Handling errors in parallel operations
async function parallelWithErrorHandling() {
  try {
    // If any promise rejects, the whole Promise.all() rejects
    await Promise.all([
      riskyOperation(),
      riskyOperation(),
      riskyOperation()
    ]);
    console.log("All operations succeeded");
  } catch (error) {
    console.error("At least one operation failed:", error.message);
  }
}

// Promise.allSettled - handles both successful and failed promises
async function parallelWithAllSettled() {
  const results = await Promise.allSettled([
    riskyOperation(),
    riskyOperation(),
    riskyOperation()
  ]);
  
  // Process all results, regardless of success or failure
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(\`Operation \${index + 1} succeeded:, \${result.value}\`);
    } else {
      console.log(\`Operation \${index + 1} failed: \${result.reason.message}\`);
    }
  });
}`,
        editable: true
      }
    }
  ],
  exercise: {
    title: "Exercise: Create a Data Fetching Utility",
    description: {
      en: "Create a utility function that simulates fetching data from an API with retries. The function should retry failed requests up to a specified number of times, with a delay between retries. Use async/await and promises.",
      hi: "एक utility function create करें जो retries के साथ API से data fetching को simulate करता है। Function को specified number of times तक failed requests को retry करना चाहिए, retries के बीच delay के साथ। Async/await और promises का उपयोग करें।"
    },
    starterCode: `// Create a fetchWithRetry function
// fetchWithRetry function create करें

/**
 * Simulates fetching data with retries
 * @param {string} url - The URL to fetch
 * @param {number} maxRetries - Maximum number of retries
 * @param {number} delayMs - Delay between retries in milliseconds
 * @returns {Promise<object>} - A promise resolving to the fetched data
 */
async function fetchWithRetry(url, maxRetries = 3, delayMs = 1000) {
  // Your code here
  // 1. Create a function that simulates a fetch request with a 50% chance of failure
  // 2. Implement retry logic that attempts the fetch up to maxRetries times
  // 3. Use setTimeout and promises to create the delay between retries
  // 4. Return the data if successful, or throw an error if all retries fail
  
  // आपका code यहां
  // 1. एक function create करें जो 50% failure chance के साथ fetch request को simulate करता है
  // 2. Retry logic implement करें जो fetch को maxRetries times तक attempt करता है
  // 3. Retries के बीच delay create करने के लिए setTimeout और promises का उपयोग करें
  // 4. अगर successful हो तो data return करें, या अगर सभी retries fail हो जाएं तो error throw करें
}

// Helper function to simulate delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Test the function
async function testFetchWithRetry() {
  try {
    const data = await fetchWithRetry("https://api.example.com/data", 3, 1000);
    console.log("Successfully fetched data:", data);
  } catch (error) {
    console.error("Final error after retries:", error.message);
  }
}

// Run the test
testFetchWithRetry();`,
    expectedOutput: `Attempting fetch: https://api.example.com/data (Attempt 1/3)
Request failed: Network error. Retrying in 1000ms...
Attempting fetch: https://api.example.com/data (Attempt 2/3)
Request failed: Network error. Retrying in 1000ms...
Attempting fetch: https://api.example.com/data (Attempt 3/3)
Successfully fetched data: { id: 123, name: "Example Data" }`,
    hint: {
      en: "Use a for loop to iterate through the retry attempts. Inside the loop, use try/catch to attempt the fetch, and if it fails, use the delay function to wait before retrying. Keep track of the current attempt number. For the simulated fetch, create a function that randomly resolves or rejects a promise to mimic the API's behavior.",
      hi: "Retry attempts के through iterate करने के लिए for loop का उपयोग करें। Loop के अंदर, fetch को attempt करने के लिए try/catch का उपयोग करें, और अगर यह fail होता है, तो retry करने से पहले wait करने के लिए delay function का उपयोग करें। Current attempt number को track रखें। Simulated fetch के लिए, API के behavior को mimic करने के लिए एक ऐसा function create करें जो randomly एक promise को resolve या reject करता है।"
    }
  },
  summary: {
    en: "In this section, we explored asynchronous JavaScript, which allows code to execute without blocking other operations. We started with callbacks, the original mechanism for handling asynchronous operations, but noted their limitations when dealing with multiple nested operations. We then examined promises, which provide a more structured approach to asynchronous code with better error handling and chaining capabilities. Finally, we covered async/await syntax, which builds on promises to make asynchronous code more readable and easier to reason about. We also learned how to run operations in parallel with Promise.all() and implement proper error handling strategies for asynchronous code. These concepts are fundamental to writing efficient and responsive JavaScript applications, particularly for web development where many operations involve network requests, user interactions, and other time-consuming tasks.",
    hi: {
      text: "इस section में, हमने asynchronous JavaScript का exploration किया, जो code को दूसरे operations को block किए बिना execute करने की अनुमति देता है।",
      points: [
        "हमने callbacks से शुरुआत की, जो asynchronous operations को handle करने का original mechanism है, लेकिन multiple nested operations से deal करते समय उनकी limitations को note किया",
        "फिर हमने promises को examine किया, जो better error handling और chaining capabilities के साथ asynchronous code के लिए एक अधिक structured approach provide करते हैं",
        "अंत में, हमने async/await syntax को cover किया, जो asynchronous code को अधिक readable और reason about करने में easier बनाने के लिए promises पर build करता है",
        "हमने यह भी सीखा कि Promise.all() के साथ operations को parallel में कैसे run करें और asynchronous code के लिए proper error handling strategies को कैसे implement करें",
        "ये concepts efficient और responsive JavaScript applications लिखने के लिए fundamental हैं, particularly web development के लिए जहां कई operations में network requests, user interactions, और अन्य time-consuming tasks शामिल होते हैं"
      ]
    }
  },
  prevTopic: {
    id: "oop",
    title: "Object-oriented JavaScript"
  },
  nextTopic: {
    id: "dom",
    title: "DOM Manipulation"
  }
};
