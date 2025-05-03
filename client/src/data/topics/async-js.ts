export const asyncJsData = {
  id: "async-js",
  title: "Asynchronous JavaScript",
  introduction: {
    en: "Asynchronous programming is a key aspect of JavaScript that allows code to run non-sequentially, making it possible to handle operations like API calls, timers, and user interactions without blocking the main thread. Understanding asynchronous JavaScript is essential for building responsive web applications.",
    hi: "Asynchronous programming JavaScript ka ek key aspect hai jo code ko non-sequentially run karne ki anumati deta hai, jisse API calls, timers, aur user interactions jaise operations ko main thread ko block kiye bina handle karna possible ho jata hai. Responsive web applications banane ke liye asynchronous JavaScript ko samajhna essential hai."
  },
  sections: [
    {
      id: "synchronous-vs-asynchronous",
      title: "Synchronous vs. Asynchronous Execution",
      content: {
        en: "JavaScript is single-threaded, meaning it can only execute one operation at a time. Synchronous code runs in sequence—each operation waits for the previous one to complete. Asynchronous code allows operations to be executed without blocking, enabling better performance and responsiveness in applications.",
        hi: "JavaScript single-threaded hai, jiska matlab hai ki yeh ek samay mein sirf ek operation execute kar sakta hai. Synchronous code sequence mein run hota hai—har operation pichle operation ke complete hone ka wait karta hai. Asynchronous code operations ko blocking kiye bina execute karne ki anumati deta hai, jisse applications mein better performance aur responsiveness enable hoti hai."
      },
      codeExample: {
        code: `// Synchronous execution
console.log("First");
console.log("Second");
console.log("Third");
// Output will always be: First, Second, Third

// Asynchronous execution
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
// Output will be: Start, End, This runs after 2 seconds (after 2 second delay)

// Blocking vs non-blocking
console.log("Before blocking operation");

// Blocking (synchronous) operation
const start = Date.now();
while (Date.now() - start < 1000) {
  // This blocks the thread for 1 second
}
console.log("After blocking operation");

// Non-blocking (asynchronous) operation
console.log("Before non-blocking operation");
setTimeout(() => {
  console.log("Inside timeout callback");
}, 1000);
console.log("After non-blocking operation");

// The event loop allows JavaScript to handle asynchronous operations
// 1. Call stack - where synchronous code executes
// 2. Callback queue - where callbacks wait to be executed
// 3. Event loop - monitors call stack and callback queue
//    When call stack is empty, it moves callbacks to the call stack`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's visualize synchronous vs asynchronous code execution

// This function simulates a time-consuming task
function simulateProcessing(taskName, duration) {
  const start = Date.now();
  console.log(\`🟡 \${taskName} started\`);
  
  if (duration === 0) {
    // Synchronous processing
    const end = Date.now() + 1000; // Simulate 1 second of work
    while (Date.now() < end) {
      // Blocking operation
    }
    console.log(\`🟢 \${taskName} completed (synchronously)\`);
  } else {
    // Asynchronous processing
    setTimeout(() => {
      console.log(\`🟢 \${taskName} completed (asynchronously)\`);
    }, duration);
  }
}

console.log("📋 Starting execution sequence demonstration");

// Synchronous tasks block the thread
console.log("\\n📌 Running synchronous tasks (blocking):");
simulateProcessing("Task 1", 0);
simulateProcessing("Task 2", 0);
simulateProcessing("Task 3", 0);

// Asynchronous tasks don't block
console.log("\\n📌 Running asynchronous tasks (non-blocking):");
simulateProcessing("Task A", 1000);
simulateProcessing("Task B", 500);
simulateProcessing("Task C", 1500);

// Additional code executes immediately, not waiting for async tasks
console.log("\\n📌 This code runs right away, without waiting for async tasks");

// Output order demonstrates how JS handles sync vs async code
console.log("\\n📋 Execution sequence completed. Observe the order of completion messages.");`,
        output: `📋 Starting execution sequence demonstration

📌 Running synchronous tasks (blocking):
🟡 Task 1 started
🟢 Task 1 completed (synchronously)
🟡 Task 2 started
🟢 Task 2 completed (synchronously)
🟡 Task 3 started
🟢 Task 3 completed (synchronously)

📌 Running asynchronous tasks (non-blocking):
🟡 Task A started
🟡 Task B started
🟡 Task C started

📌 This code runs right away, without waiting for async tasks

📋 Execution sequence completed. Observe the order of completion messages.
🟢 Task B completed (asynchronously)
🟢 Task A completed (asynchronously)
🟢 Task C completed (asynchronously)`,
        explanation: {
          en: "This example demonstrates the key difference between synchronous and asynchronous code execution. When we run synchronous tasks, each task blocks the thread until it completes, forcing tasks to run strictly in sequence. In contrast, asynchronous tasks are scheduled to run later, allowing the main program to continue without waiting. Notice how the Tasks A, B, and C are started immediately one after another, and the order of their completion depends on their duration. Task B finishes first, then A, and finally C, even though they were initiated in a different order. This non-blocking behavior is essential for keeping web applications responsive, especially when dealing with time-consuming operations like API requests.",
          hi: "Yeh example synchronous aur asynchronous code execution ke beech key difference ko demonstrate karta hai. Jab hum synchronous tasks run karte hain, to har task complete hone tak thread ko block karta hai, jisse tasks ko strictly sequence mein run karne ke liye force kiya jata hai. Iske contrast mein, asynchronous tasks baad mein run karne ke liye schedule kiye jate hain, jisse main program wait kiye bina continue kar sakta hai. Notice karein ki Tasks A, B, aur C ek ke baad ek turant start ho jate hain, aur unke completion ka order unki duration par depend karta hai. Task B pehle finish hota hai, phir A, aur finally C, bhale hi ve ek different order mein initiate kiye gaye the. Yeh non-blocking behavior web applications ko responsive rakhne ke liye essential hai, especially jab API requests jaise time-consuming operations se deal kiya ja raha ho."
        }
      }
    },
    {
      id: "callbacks",
      title: "Callbacks",
      content: {
        en: "Callbacks are functions passed as arguments to other functions, to be executed after an operation completes. They are the earliest and most fundamental way to handle asynchronous operations in JavaScript, though they can lead to complex nested code (callback hell) when multiple asynchronous operations depend on each other.",
        hi: "Callbacks aise functions hain jinhe doosre functions ko arguments ke roop mein pass kiya jata hai, jinhe operation complete hone ke baad execute kiya jana hai. Ve JavaScript mein asynchronous operations ko handle karne ka earliest aur most fundamental tarika hain, halaki jab multiple asynchronous operations ek doosre par depend karte hain to ve complex nested code (callback hell) ka karan ban sakte hain."
      },
      codeExample: {
        code: `// Basic callback example
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "JavaScript" };
    callback(data);
  }, 1000);
}

// Using a callback to handle async result
fetchData((data) => {
  console.log("Data received:", data);
});

console.log("Fetching data..."); // This runs before the callback

// Callback for error handling
function fetchDataWithErrorHandling(callback) {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    
    if (success) {
      const data = { id: 1, name: "JavaScript" };
      callback(null, data); // No error, pass data
    } else {
      callback(new Error("Failed to fetch data"), null);
    }
  }, 1000);
}

fetchDataWithErrorHandling((error, data) => {
  if (error) {
    console.error("Error:", error.message);
    return;
  }
  console.log("Data received successfully:", data);
});

// Nested callbacks (callback hell example)
function getUser(userId, callback) {
  setTimeout(() => {
    console.log("Getting user data...");
    callback({ id: userId, name: "John" });
  }, 1000);
}

function getUserPosts(userId, callback) {
  setTimeout(() => {
    console.log("Getting posts...");
    callback([
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" }
    ]);
  }, 1000);
}

function getPostComments(postId, callback) {
  setTimeout(() => {
    console.log("Getting comments...");
    callback([
      { id: 1, text: "Great post!" },
      { id: 2, text: "Thanks for sharing" }
    ]);
  }, 1000);
}

// This is "callback hell" - deeply nested callbacks that are hard to follow
getUser(1, (user) => {
  console.log("User:", user);
  getUserPosts(user.id, (posts) => {
    console.log("Posts:", posts);
    getPostComments(posts[0].id, (comments) => {
      console.log("Comments:", comments);
      // More nested callbacks could follow...
    });
  });
});`,
        editable: true
      }
    },
    {
      id: "promises",
      title: "Promises",
      content: {
        en: "Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a cleaner alternative to callbacks, allowing for better error handling and chaining of asynchronous operations. A Promise can be in one of three states: pending, fulfilled, or rejected.",
        hi: "Promises objects hain jo ek asynchronous operation ke eventual completion ya failure ko represent karte hain. Ve callbacks ke liye ek cleaner alternative provide karte hain, jisse better error handling aur asynchronous operations ki chaining ki anumati milti hai. Ek Promise teen states mein se ek mein ho sakta hai: pending, fulfilled, ya rejected."
      },
      codeExample: {
        code: `// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    const success = true;
    
    if (success) {
      resolve("Operation completed successfully!");
    } else {
      reject(new Error("Operation failed"));
    }
  }, 1000);
});

// Using a Promise
myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Promise settled (either fulfilled or rejected)");
  });

// Promise chaining
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched user");
      resolve({ id: userId, name: "John" });
    }, 1000);
  });
}

function fetchUserPosts(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched posts");
      resolve({ user, posts: ["Post 1", "Post 2"] });
    }, 1000);
  });
}

function fetchPostDetails(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched post details");
      resolve({
        user: data.user,
        posts: data.posts,
        details: "These are detailed posts"
      });
    }, 1000);
  });
}

// Chain promises to avoid callback hell
fetchUser(1)
  .then(user => fetchUserPosts(user))
  .then(data => fetchPostDetails(data))
  .then(result => {
    console.log("Final result:", result);
  })
  .catch(error => {
    console.error("Error in promise chain:", error);
  });

// Promise.all - wait for multiple promises to complete
const promise1 = Promise.resolve("One");
const promise2 = Promise.resolve("Two");
const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "Three");
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("All promises resolved:", values);
  })
  .catch(error => {
    console.error("At least one promise rejected:", error);
  });

// Promise.race - resolves/rejects as soon as one promise resolves/rejects
Promise.race([
  new Promise(resolve => setTimeout(() => resolve("Fast"), 800)),
  new Promise(resolve => setTimeout(() => resolve("Slow"), 1000))
])
  .then(value => {
    console.log("Fastest promise won:", value);
  });

// Promise.allSettled - wait for all promises to settle (ES2020)
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failure"),
  Promise.resolve("Another success")
])
  .then(results => {
    console.log("All settled results:", results);
    // Results includes status ("fulfilled" or "rejected") and value/reason
  });

// Promise.any - resolves when any promise fulfills (ES2021)
Promise.any([
  Promise.reject("Error 1"),
  Promise.resolve("Success"),
  Promise.reject("Error 2")
])
  .then(value => {
    console.log("First fulfilled promise:", value);
  })
  .catch(error => {
    console.error("All promises rejected:", error);
  });`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's compare callback approach vs promises for the same task

// Simulating API requests with different responses
function simulateAPI(endpoint, shouldSucceed = true, delay = 1000) {
  console.log(\`📤 Requesting: \${endpoint}\`);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        console.log(\`📥 Success: \${endpoint}\`);
        resolve(\`Data from \${endpoint}\`);
      } else {
        console.log(\`🚫 Failed: \${endpoint}\`);
        reject(new Error(\`Failed to fetch \${endpoint}\`));
      }
    }, delay);
  });
}

// The callback approach (traditional)
function getUserWithCallbacks(userId, callback) {
  console.log("\\n📌 Callback approach:");
  simulateAPI(\`/api/users/\${userId}\`, true, 1000)
    .then(userData => {
      console.log("Got user data");
      
      // Nested callback for posts
      simulateAPI(\`/api/users/\${userId}/posts\`, true, 800)
        .then(postsData => {
          console.log("Got posts data");
          
          // Even more nested for comments
          simulateAPI(\`/api/posts/1/comments\`, false, 600)
            .then(commentsData => {
              console.log("Got comments data");
              callback(null, { user: userData, posts: postsData, comments: commentsData });
            })
            .catch(error => {
              console.log("Error getting comments, but continuing");
              // Still provide what we have so far
              callback(null, { user: userData, posts: postsData, comments: null });
            });
        })
        .catch(error => {
          console.log("Error getting posts");
          callback(error);
        });
    })
    .catch(error => {
      console.log("Error getting user");
      callback(error);
    });
}

// The promise approach (modern)
function getUserWithPromises(userId) {
  console.log("\\n📌 Promise approach:");
  
  return simulateAPI(\`/api/users/\${userId}\`, true, 1000)
    .then(userData => {
      console.log("Got user data");
      return simulateAPI(\`/api/users/\${userId}/posts\`, true, 800)
        .then(postsData => {
          console.log("Got posts data");
          return { user: userData, posts: postsData };
        });
    })
    .then(data => {
      return simulateAPI(\`/api/posts/1/comments\`, false, 600)
        .then(commentsData => {
          console.log("Got comments data");
          return { ...data, comments: commentsData };
        })
        .catch(error => {
          console.log("Error getting comments, but continuing");
          return { ...data, comments: null };
        });
    });
}

// Execute both approaches to compare
getUserWithCallbacks(123, (error, data) => {
  if (error) {
    console.log("Callback approach failed:", error.message);
  } else {
    console.log("Callback approach succeeded:", Object.keys(data));
  }
});

getUserWithPromises(456)
  .then(result => {
    console.log("Promise approach succeeded:", Object.keys(result));
  })
  .catch(error => {
    console.log("Promise approach failed:", error.message);
  });

// Additional example: Promise error handling
console.log("\\n📌 Promise error handling example:");
simulateAPI("/api/products", false, 500)
  .then(data => {
    console.log("This won't execute if the promise is rejected");
    return data;
  })
  .catch(error => {
    console.log("Error caught:", error.message);
    return "Default data as fallback";
  })
  .then(result => {
    console.log("Continuing with:", result);
  });`,
        output: `📌 Callback approach:
📤 Requesting: /api/users/123
📥 Success: /api/users/123
Got user data
📤 Requesting: /api/users/123/posts
📥 Success: /api/users/123/posts
Got posts data
📤 Requesting: /api/posts/1/comments
🚫 Failed: /api/posts/1/comments
Error getting comments, but continuing
Callback approach succeeded: user,posts,comments

📌 Promise approach:
📤 Requesting: /api/users/456
📥 Success: /api/users/456
Got user data
📤 Requesting: /api/users/456/posts
📥 Success: /api/users/456/posts
Got posts data
📤 Requesting: /api/posts/1/comments
🚫 Failed: /api/posts/1/comments
Error getting comments, but continuing
Promise approach succeeded: user,posts,comments

📌 Promise error handling example:
📤 Requesting: /api/products
🚫 Failed: /api/products
Error caught: Failed to fetch /api/products
Continuing with: Default data as fallback`,
        explanation: {
          en: "This example compares two approaches to handling asynchronous API calls: the traditional callback pattern and the more modern promise pattern. Both accomplish the same task of fetching user data, posts, and comments. The callback approach quickly becomes nested and harder to follow—a problem known as 'callback hell.' The promise approach is more linear and readable through chaining, making the flow of operations clearer. Also demonstrated is how promises handle errors through the catch method, allowing for graceful recovery and continuation of the operation chain. The key advantage of promises is their ability to make asynchronous code more manageable and easier to reason about.",
          hi: "Yeh example asynchronous API calls ko handle karne ke do approaches ko compare karta hai: traditional callback pattern aur more modern promise pattern. Dono user data, posts, aur comments fetch karne ka same task accomplish karte hain. Callback approach jaldi hi nested ho jata hai aur follow karna mushkil ho jata hai—ek problem jise 'callback hell' kaha jata hai. Promise approach chaining ke through more linear aur readable hai, jisse operations ke flow more clear ho jata hai. Yeh bhi demonstrate kiya gaya hai ki promises catch method ke through errors ko kaise handle karte hain, jisse operation chain ko gracefully recover karna aur continue karna possible hota hai. Promises ka key advantage unki ability hai asynchronous code ko more manageable aur easier to reason about banane ki."
        }
      }
    },
    {
      id: "async-await",
      title: "Async/Await",
      content: {
        en: "Async/await is syntactic sugar built on top of Promises, introduced in ES2017 (ES8). It allows asynchronous code to be written in a more synchronous style, making it more readable and easier to understand. The 'async' keyword declares a function that returns a Promise, and 'await' pauses execution until a Promise resolves.",
        hi: "Async/await Promises ke upar build kiya gaya syntactic sugar hai, jo ES2017 (ES8) mein introduce kiya gaya tha. Yeh asynchronous code ko more synchronous style mein likhne ki anumati deta hai, jisse yeh more readable aur easier to understand ho jata hai. 'async' keyword ek function declare karta hai jo ek Promise return karta hai, aur 'await' execution ko tab tak pause karta hai jab tak ek Promise resolve nahi ho jata."
      },
      codeExample: {
        code: `// Basic async/await
async function fetchData() {
  return "Data fetched successfully"; // Implicitly wrapped in a Promise
}

// Using an async function
fetchData()
  .then(data => console.log(data));

// async/await with error handling
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Re-throw to allow caller to handle
  }
}

// Refactoring the "callback hell" example with async/await
async function getUser(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Getting user data...");
      resolve({ id: userId, name: "John" });
    }, 1000);
  });
}

async function getUserPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Getting posts...");
      resolve([
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" }
      ]);
    }, 1000);
  });
}

async function getPostComments(postId) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Getting comments...");
      resolve([
        { id: 1, text: "Great post!" },
        { id: 2, text: "Thanks for sharing" }
      ]);
    }, 1000);
  });
}

// Now with async/await - much cleaner and easier to follow
async function fetchUserDataWithPosts(userId) {
  try {
    const user = await getUser(userId);
    console.log("User:", user);
    
    const posts = await getUserPosts(user.id);
    console.log("Posts:", posts);
    
    const comments = await getPostComments(posts[0].id);
    console.log("Comments:", comments);
    
    return {
      user,
      posts,
      comments
    };
  } catch (error) {
    console.error("Error in data fetching:", error);
  }
}

// Using the async function
fetchUserDataWithPosts(1)
  .then(result => {
    console.log("All data:", result);
  });

// Parallel execution with async/await and Promise.all
async function fetchMultipleResources() {
  try {
    // These will run in parallel, not sequentially
    const [users, posts, comments] = await Promise.all([
      getUser(1),
      getUserPosts(1),
      getPostComments(1)
    ]);
    
    console.log("Fetched all data in parallel:");
    console.log("Users:", users);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
    
    return { users, posts, comments };
  } catch (error) {
    console.error("Error fetching resources:", error);
  }
}

// Using the parallel fetch function
fetchMultipleResources()
  .then(result => {
    console.log("All parallel data:", result);
  });`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's solve a real-world problem with async/await vs promises

// Simulating API requests with different delays
function fetchUserProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(\`Fetched user profile \${userId}\`);
      resolve({
        id: userId,
        name: "Alex Johnson",
        email: "alex@example.com"
      });
    }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(\`Fetched posts for user \${userId}\`);
      resolve([
        { id: 1, title: "My first post", likes: 10 },
        { id: 2, title: "About JavaScript", likes: 25 },
      ]);
    }, 1500);
  });
}

function fetchPostComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(\`Fetched comments for post \${postId}\`);
      resolve([
        { id: 1, text: "Great insights!" },
        { id: 2, text: "Thanks for sharing" },
      ]);
    }, 800);
  });
}

// Promise-based approach
function loadUserDashboardWithPromises(userId) {
  console.log("\\n📌 Promise-based approach:");
  console.log("Loading dashboard...");
  
  // Start tracking time
  const startTime = Date.now();
  
  // First get user profile
  return fetchUserProfile(userId)
    .then(user => {
      // Then get their posts
      return fetchUserPosts(userId)
        .then(posts => {
          // Then for the first post, get comments
          return fetchPostComments(posts[0].id)
            .then(comments => {
              // Calculate time spent
              const timeSpent = Date.now() - startTime;
              console.log(\`Completed in \${timeSpent}ms with promises (sequential)\`);
              
              // Return the complete dashboard data
              return {
                user,
                posts,
                recentComments: comments
              };
            });
        });
    });
}

// Async/await approach
async function loadUserDashboardWithAsync(userId) {
  console.log("\\n📌 Async/await approach:");
  console.log("Loading dashboard...");
  
  // Start tracking time
  const startTime = Date.now();
  
  try {
    // Get user profile
    const user = await fetchUserProfile(userId);
    
    // Get posts
    const posts = await fetchUserPosts(userId);
    
    // Get comments for first post
    const comments = await fetchPostComments(posts[0].id);
    
    // Calculate time spent
    const timeSpent = Date.now() - startTime;
    console.log(\`Completed in \${timeSpent}ms with async/await (sequential)\`);
    
    // Return the complete dashboard data
    return {
      user,
      posts,
      recentComments: comments
    };
  } catch (error) {
    console.error("Error loading dashboard:", error);
    throw error;
  }
}

// Optimized async/await approach with parallel requests
async function loadUserDashboardOptimized(userId) {
  console.log("\\n📌 Optimized async/await approach (parallel):");
  console.log("Loading dashboard...");
  
  // Start tracking time
  const startTime = Date.now();
  
  try {
    // Get user and posts in parallel
    const [user, posts] = await Promise.all([
      fetchUserProfile(userId),
      fetchUserPosts(userId)
    ]);
    
    // Now that we have posts, get comments
    const comments = await fetchPostComments(posts[0].id);
    
    // Calculate time spent
    const timeSpent = Date.now() - startTime;
    console.log(\`Completed in \${timeSpent}ms with async/await (parallel)\`);
    
    // Return the complete dashboard data
    return {
      user,
      posts,
      recentComments: comments
    };
  } catch (error) {
    console.error("Error loading dashboard:", error);
    throw error;
  }
}

// Run the three approaches and compare
async function compareApproaches() {
  const userId = 123;
  
  // First approach: Promises
  const promiseResult = await loadUserDashboardWithPromises(userId);
  console.log("Dashboard loaded with promises:", 
              Object.keys(promiseResult).join(", "));
  
  // Second approach: Async/await
  const asyncResult = await loadUserDashboardWithAsync(userId);
  console.log("Dashboard loaded with async/await:", 
              Object.keys(asyncResult).join(", "));
  
  // Third approach: Optimized async/await
  const optimizedResult = await loadUserDashboardOptimized(userId);
  console.log("Dashboard loaded with optimized async/await:", 
              Object.keys(optimizedResult).join(", "));
  
  console.log("\\n📊 Comparison complete - notice the difference in execution time");
}

// Run the comparison
compareApproaches();`,
        output: `📌 Promise-based approach:
Loading dashboard...
Fetched user profile 123
Fetched posts for user 123
Fetched comments for post 1
Completed in 3328ms with promises (sequential)
Dashboard loaded with promises: user, posts, recentComments

📌 Async/await approach:
Loading dashboard...
Fetched user profile 123
Fetched posts for user 123
Fetched comments for post 1
Completed in 3310ms with async/await (sequential)
Dashboard loaded with async/await: user, posts, recentComments

📌 Optimized async/await approach (parallel):
Loading dashboard...
Fetched user profile 123
Fetched posts for user 123
Fetched comments for post 1
Completed in 2320ms with async/await (parallel)
Dashboard loaded with optimized async/await: user, posts, recentComments

📊 Comparison complete - notice the difference in execution time`,
        explanation: {
          en: "This example demonstrates three approaches to loading a user dashboard: promise chaining, async/await, and optimized async/await with parallel requests. The first two approaches perform sequential requests, waiting for each response before making the next request. This is reflected in their similar completion times (around 3300ms). The third approach optimizes performance by using Promise.all to fetch the user profile and posts in parallel before fetching the comments, resulting in a significantly faster completion time (around 2300ms). While the promise-based and async/await approaches are functionally equivalent, the async/await syntax is more readable and resembles synchronous code, making it easier to understand and maintain. The optimized approach demonstrates how to combine async/await with Promise.all for better performance when requests don't depend on each other.",
          hi: "Yeh example user dashboard load karne ke teen approaches ko demonstrate karta hai: promise chaining, async/await, aur parallel requests ke saath optimized async/await. Pehle do approaches sequential requests perform karte hain, har response ka wait karke next request banane se pehle. Yeh unke similar completion times mein reflect hota hai (lagbhag 3300ms). Teesra approach Promise.all ka upyog karke user profile aur posts ko parallel mein fetch karke performance ko optimize karta hai, jisse significantly faster completion time milta hai (lagbhag 2300ms). Jabki promise-based aur async/await approaches functionally equivalent hain, async/await syntax more readable hai aur synchronous code jaisa dikhta hai, jisse ise understand aur maintain karna easier ho jata hai. Optimized approach demonstrate karta hai ki kaise better performance ke liye async/await ko Promise.all ke saath combine kiya ja sakta hai jab requests ek doosre par depend nahi karte."
        }
      }
    },
    {
      id: "api-integration",
      title: "API Integration",
      content: {
        en: "Modern web applications frequently need to communicate with web services and APIs. JavaScript provides multiple ways to make HTTP requests asynchronously, including XMLHttpRequest, the Fetch API, and third-party libraries like Axios. Understanding how to integrate with APIs is essential for building data-driven applications.",
        hi: "Modern web applications ko aksar web services aur APIs ke saath communicate karne ki zaroorat hoti hai. JavaScript HTTP requests asynchronously banane ke multiple ways provide karta hai, jisme XMLHttpRequest, Fetch API, aur Axios jaise third-party libraries shamil hain. Data-driven applications banane ke liye APIs ke saath integrate karna kaise hota hai, yeh samajhna essential hai."
      },
      codeExample: {
        code: `// XMLHttpRequest (older approach)
function fetchDataWithXHR(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  
  xhr.onload = function() {
    if (xhr.status === 200) {
      callback(null, JSON.parse(xhr.responseText));
    } else {
      callback(new Error(\`Request failed with status \${xhr.status}\`));
    }
  };
  
  xhr.onerror = function() {
    callback(new Error('Network error'));
  };
  
  xhr.send();
}

// Using XMLHttpRequest
fetchDataWithXHR('https://jsonplaceholder.typicode.com/posts/1', (error, data) => {
  if (error) {
    console.error('Error:', error.message);
    return;
  }
  console.log('Data from XHR:', data);
});

// Fetch API (modern approach)
function fetchDataWithFetch(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(\`HTTP error! Status: \${response.status}\`);
      }
      return response.json();
    });
}

// Using Fetch with Promises
fetchDataWithFetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => {
    console.log('Data from Fetch:', data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

// Using Fetch with async/await
async function fetchPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    const data = await response.json();
    console.log('Data from async/await:', data);
    return data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

// Call the async function
fetchPost().catch(error => {
  console.error('Fetch failed:', error);
});

// POST request with Fetch
async function createPost(postData) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    const data = await response.json();
    console.log('Post created:', data);
    return data;
  } catch (error) {
    console.error('Error creating post:', error.message);
    throw error;
  }
}

// Create a new post
createPost({
  title: 'New Post',
  body: 'This is a new post',
  userId: 1
}).catch(error => {
  console.error('Create post failed:', error);
});

// Handling multiple requests
async function fetchMultipleResources() {
  try {
    const [posts, comments, users] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    ]);
    
    console.log('Fetched resources:', {
      postsCount: posts.length,
      commentsCount: comments.length,
      usersCount: users.length
    });
    
    return { posts, comments, users };
  } catch (error) {
    console.error('Error fetching resources:', error.message);
    throw error;
  }
}

// Fetch multiple resources in parallel
fetchMultipleResources().catch(error => {
  console.error('Multiple fetch failed:', error);
});`,
        editable: true
      }
    },
    {
      id: "error-handling",
      title: "Error Handling in Asynchronous Code",
      content: {
        en: "Proper error handling is crucial in asynchronous JavaScript to ensure that applications gracefully recover from failures. Different approaches like callback patterns, promise catch methods, and try/catch with async/await provide ways to handle errors at various levels of the application.",
        hi: "Asynchronous JavaScript mein proper error handling crucial hai yeh ensure karne ke liye ki applications failures se gracefully recover kar sakein. Callback patterns, promise catch methods, aur async/await ke saath try/catch jaise different approaches application ke various levels par errors ko handle karne ke tarike provide karte hain."
      },
      codeExample: {
        code: `// Error handling with callbacks
function fetchWithCallbacks(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  
  xhr.onload = function() {
    if (xhr.status === 200) {
      try {
        const data = JSON.parse(xhr.responseText);
        successCallback(data);
      } catch (error) {
        errorCallback(new Error('Invalid JSON response'));
      }
    } else {
      errorCallback(new Error(\`Request failed with status \${xhr.status}\`));
    }
  };
  
  xhr.onerror = function() {
    errorCallback(new Error('Network error'));
  };
  
  xhr.send();
}

// Using the callback error handling
fetchWithCallbacks(
  'https://jsonplaceholder.typicode.com/posts/1',
  data => {
    console.log('Success:', data);
  },
  error => {
    console.error('Error:', error.message);
    // Handle error appropriately, e.g., show user-friendly message
    displayErrorToUser('Could not fetch the data. Please try again later.');
  }
);

// Helper function to display errors
function displayErrorToUser(message) {
  console.log(\`[USER MESSAGE]: \${message}\`);
  // In a real app, this might update the DOM or show a notification
}

// Error handling with Promises
function fetchWithPromise(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(\`HTTP error! Status: \${response.status}\`);
        }
        return response.json();
      })
      .then(resolve)
      .catch(reject);
  });
}

// Using Promise error handling
fetchWithPromise('https://jsonplaceholder.typicode.com/posts/999')
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('Promise error:', error.message);
    displayErrorToUser('Error loading content. Please try refreshing the page.');
  });

// Error handling with async/await
async function fetchWithAsyncAwait(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Async/await error:', error.message);
    // Re-throw to allow caller to handle
    throw new Error(\`Failed to fetch data: \${error.message}\`);
  }
}

// Using the async function with error handling
(async function() {
  try {
    const data = await fetchWithAsyncAwait('https://jsonplaceholder.typicode.com/posts/invalidId');
    console.log('Data from async function:', data);
  } catch (error) {
    console.error('Caught in caller:', error.message);
    displayErrorToUser('Unable to retrieve data at this time.');
  }
})();

// Global error handler for unhandled promise rejections
window.addEventListener('unhandledrejection', function(event) {
  console.error('Unhandled promise rejection:', event.reason);
  // Log to analytics or monitoring system
  // analytics.logError(event.reason);
  
  // Show generic error message to user
  displayErrorToUser('Something went wrong. Our team has been notified.');
  
  // Prevent the default handling
  event.preventDefault();
});

// Intentionally unhandled rejection (would trigger the global handler)
// new Promise((resolve, reject) => {
//   reject(new Error('This rejection is not handled'));
// });`,
        editable: true
      }
    }
  ],
  exercise: {
    title: "Asynchronous Programming Challenge",
    description: {
      en: "Create a function that simulates fetching user data, posts, and comments from an API. Use modern asynchronous patterns (Promises or async/await) to handle these operations efficiently, and implement proper error handling. The function should return a combined object with user information and their posts with comments.",
      hi: "Ek function create karein jo API se user data, posts, aur comments fetch karne ka simulation kare. In operations ko efficiently handle karne ke liye modern asynchronous patterns (Promises ya async/await) ka upyog karein, aur proper error handling implement karein. Function ko user information aur unke posts with comments ke saath ek combined object return karna chahiye."
    },
    starterCode: `// Simulated API functions - Don't modify these
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId <= 0) {
        reject(new Error("Invalid user ID"));
        return;
      }
      
      resolve({
        id: userId,
        name: "User " + userId,
        email: \`user\${userId}@example.com\`
      });
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId <= 0) {
        reject(new Error("Invalid user ID"));
        return;
      }
      
      // Simulate no posts for user 3
      if (userId === 3) {
        resolve([]);
        return;
      }
      
      resolve([
        { id: 1, userId: userId, title: "Post 1", body: "Content 1" },
        { id: 2, userId: userId, title: "Post 2", body: "Content 2" }
      ]);
    }, 1000);
  });
}

function fetchComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (postId <= 0) {
        reject(new Error("Invalid post ID"));
        return;
      }
      
      // Simulate error for post 2
      if (postId === 2) {
        reject(new Error("Could not fetch comments for post 2"));
        return;
      }
      
      resolve([
        { id: 1, postId: postId, text: "Comment 1" },
        { id: 2, postId: postId, text: "Comment 2" }
      ]);
    }, 1000);
  });
}

// Your task: Implement this function using async/await or Promises
// It should:
// 1. Fetch the user
// 2. Fetch the user's posts
// 3. For each post, fetch its comments
// 4. Combine everything into a single response object
// 5. Implement proper error handling
// 6. Be efficient (e.g., fetch comments for different posts in parallel)

async function getUserWithPostsAndComments(userId) {
  // Your implementation here
}

// Test your implementation with these cases:
// 1. Valid user with posts and comments
// 2. Valid user with a post that will fail to fetch comments
// 3. User with no posts
// 4. Invalid user ID
getUserWithPostsAndComments(1).then(console.log).catch(console.error);`,
    expectedOutput: `{
  user: { id: 1, name: 'User 1', email: 'user1@example.com' },
  posts: [
    {
      id: 1,
      userId: 1,
      title: 'Post 1',
      body: 'Content 1',
      comments: [
        { id: 1, postId: 1, text: 'Comment 1' },
        { id: 2, postId: 1, text: 'Comment 2' }
      ]
    },
    {
      id: 2,
      userId: 1,
      title: 'Post 2',
      body: 'Content 2',
      comments: 'Error: Could not fetch comments for post 2'
    }
  ]
}`,
    hint: {
      en: "Use async/await to make your code cleaner and more readable. For fetching comments for multiple posts efficiently, use Promise.all() to run these operations in parallel. Implement try/catch blocks to handle errors at different levels. If fetching comments for a specific post fails, you should still include the post in the result with an error message for its comments rather than failing the entire operation.",
      hi: "Apne code ko cleaner aur more readable banane ke liye async/await ka upyog karein. Multiple posts ke liye comments ko efficiently fetch karne ke liye, in operations ko parallel mein run karne ke liye Promise.all() ka upyog karein. Different levels par errors ko handle karne ke liye try/catch blocks implement karein. Agar specific post ke liye comments fetch karna fail ho jata hai, to bhi aapko pure operation ko fail karne ke bajay us post ko result mein uske comments ke liye error message ke saath include karna chahiye."
    }
  },
  summary: {
    en: "Asynchronous JavaScript is essential for building modern web applications that handle time-consuming operations without blocking the main thread. Callback functions were the earliest approach to asynchronous programming but can lead to callback hell with nested code. Promises provide a cleaner way to handle asynchronous operations and include better error handling capabilities. Async/await, built on top of Promises, allows writing asynchronous code in a more synchronous, readable style. Understanding these patterns along with proper API integration and error handling techniques enables developers to build responsive, reliable applications.",
    hi: {
      text: "Asynchronous JavaScript modern web applications banane ke liye essential hai jo time-consuming operations ko main thread ko block kiye bina handle karte hain.",
      points: [
        "Callback functions asynchronous programming ke liye earliest approach the lekin nested code ke saath callback hell ka karan ban sakte hain",
        "Promises asynchronous operations ko handle karne ka ek cleaner way provide karte hain aur unme better error handling capabilities shamil hain",
        "Async/await, jo Promises ke upar build kiya gaya hai, asynchronous code ko more synchronous, readable style mein likhne ki anumati deta hai",
        "In patterns ko proper API integration aur error handling techniques ke saath samajhna developers ko responsive, reliable applications banane ke liye enable karta hai",
        "Modern web development mein async/await pattern ka upyog most common hai kyunki yeh readability aur maintainability ke advantages provide karta hai"
      ]
    }
  },
  prevTopic: {
    id: "prototypes",
    title: "Prototypes and Inheritance"
  },
  nextTopic: {
    id: "es6-features",
    title: "ES6+ Features"
  }
};