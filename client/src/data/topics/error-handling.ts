export const errorHandlingData = {
  id: "error-handling",
  title: "Error Handling",
  introduction: {
    en: "Error handling is an essential part of robust JavaScript programming. Well-designed error handling helps identify and resolve issues, improves user experience by providing meaningful feedback, and prevents application crashes. This topic covers JavaScript's error handling mechanisms and best practices for managing errors effectively.",
    hi: "Error handling robust JavaScript programming ka ek essential part hai. Well-designed error handling issues ko identify aur resolve karne mein help karta hai, meaningful feedback provide karke user experience ko improve karta hai, aur application crashes ko prevent karta hai. Is topic mein JavaScript ke error handling mechanisms aur errors ko effectively manage karne ke best practices cover kiye gaye hain."
  },
  sections: [
    {
      id: "error-basics",
      title: "Error Basics",
      content: {
        en: "JavaScript has built-in Error objects that provide information about errors that occur during execution. Understanding these error types and how to create custom errors is the foundation of effective error handling.",
        hi: "JavaScript mein built-in Error objects hote hain jo execution ke doran hone wale errors ke bare mein information provide karte hain. Inn error types ko aur custom errors kaise create kiye jate hain ye samajhna effective error handling ki foundation hai."
      },
      codeExample: {
        code: `// Built-in error types
try {
  // ReferenceError: Occurs when referencing an undeclared variable
  console.log(undefinedVariable);
} catch (error) {
  console.error('Reference error caught:', error.message);
  console.error('Error type:', error.name);
  console.error('Stack trace:', error.stack);
}

try {
  // SyntaxError: Invalid JavaScript syntax
  // Note: Syntax errors cannot be caught with try-catch if they occur during parsing
  // This is a simulation of a syntax error
  eval('if (true) { console.log("Missing closing brace"');
} catch (error) {
  console.error('Syntax error caught:', error.message);
}

try {
  // TypeError: Occurs when a value is not of the expected type
  const obj = null;
  console.log(obj.property);
} catch (error) {
  console.error('Type error caught:', error.message);
}

try {
  // RangeError: Occurs when a numeric value is outside the allowed range
  const arr = new Array(-1);  // Array with negative length
} catch (error) {
  console.error('Range error caught:', error.message);
}

try {
  // URIError: Occurs when encodeURI() or decodeURI() receive invalid parameters
  decodeURIComponent('%');  // Invalid URI
} catch (error) {
  console.error('URI error caught:', error.message);
}

// Create custom error types by extending Error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.date = new Date();
    
    // Capture stack trace (works in modern environments)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    }
  }
}

try {
  const age = -5;
  if (age < 0) {
    throw new ValidationError('Age cannot be negative');
  }
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(\`Custom validation error: \${error.message} (occurred at \${error.date})\`);
  } else {
    console.error('Unknown error:', error);
  }
}

// Creating an error without throwing it (for logging, etc.)
function logError(action, reason) {
  const error = new Error(\`Failed to \${action}: \${reason}\`);
  console.error(error.stack);
  // Could also send to a logging service
}

logError('save data', 'network disconnected');`,
        editable: true
      }
    },
    {
      id: "try-catch",
      title: "Try-Catch-Finally",
      content: {
        en: "The try-catch-finally statement is the primary mechanism for handling runtime errors in JavaScript. It allows you to write code that might fail in the 'try' block, handle errors in the 'catch' block, and perform cleanup operations in the 'finally' block regardless of whether an error occurred.",
        hi: "Try-catch-finally statement JavaScript mein runtime errors ko handle karne ka primary mechanism hai. Yeh aapko 'try' block mein aise code likhne ki anumati deta hai jo fail ho sakta hai, 'catch' block mein errors handle karne ki, aur 'finally' block mein cleanup operations perform karne ki, chahe error occur hua ho ya nahi."
      },
      codeExample: {
        code: `// Basic try-catch
try {
  // Code that might throw an error
  const result = riskyOperation();
  console.log('Operation succeeded:', result);
} catch (error) {
  // Code to handle the error
  console.error('Operation failed:', error.message);
}

// try-catch-finally
try {
  console.log('Opening file...');
  const data = readFile(); // Simulated function that might throw an error
  console.log('File data:', data);
} catch (error) {
  console.error('Error reading file:', error.message);
} finally {
  // This code always runs, whether an error occurred or not
  console.log('Closing file...');
}

// Catching specific error types
try {
  const jsonString = '{ "name": "John", "age": }'; // Invalid JSON
  const user = JSON.parse(jsonString);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error('JSON parsing error:', error.message);
  } else {
    console.error('Unexpected error:', error.message);
  }
}

// Rethrowing errors after handling
try {
  processData();
} catch (error) {
  // Log the error
  console.error('Error in processData:', error.message);
  
  // Add additional information
  error.processedTime = new Date();
  
  // Rethrow the error for higher-level handling
  throw error;
}

// Using try-catch in asynchronous contexts
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === 'TypeError') {
      console.error('Network error:', error.message);
    } else {
      console.error('Fetch error:', error.message);
    }
    
    // Return a default value or rethrow
    return { name: 'Unknown User', error: true };
  }
}

// Nested try-catch blocks
try {
  try {
    throw new Error('Inner error');
  } catch (innerError) {
    console.error('Inner catch:', innerError.message);
    throw new Error('Rethrown as outer error');
  }
} catch (outerError) {
  console.error('Outer catch:', outerError.message);
}

// Simulated functions for the examples above
function riskyOperation() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Random failure');
  }
  return 'Success';
}

function readFile() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('File not found');
  }
  return 'File content';
}

function processData() {
  throw new Error('Processing error');
}`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's explore practical try-catch-finally scenarios

// Scenario 1: Form input validation
function validateUserInput(username, password) {
  try {
    // Basic validation checks
    if (!username) {
      throw new Error("Username is required");
    }
    
    if (username.length < 3) {
      throw new Error("Username must be at least 3 characters");
    }
    
    if (!password) {
      throw new Error("Password is required");
    }
    
    if (password.length < 8) {
      throw new Error("Password must be at least 8 characters");
    }
    
    // If we get here, validation passed
    return { isValid: true };
  } catch (error) {
    // Return a structured error object for the UI
    return { 
      isValid: false, 
      errorMessage: error.message 
    };
  }
}

// Test with different inputs
console.log("Validation test 1:", validateUserInput("", "password123"));
console.log("Validation test 2:", validateUserInput("bob", ""));
console.log("Validation test 3:", validateUserInput("bob", "123"));
console.log("Validation test 4:", validateUserInput("alice", "password123"));

// Scenario 2: Working with JSON data
function parseAndProcessConfig(jsonString) {
  try {
    console.log("Attempting to parse configuration...");
    
    // Try to parse the JSON
    const config = JSON.parse(jsonString);
    
    // Validate required fields
    if (!config.appName) {
      throw new Error("Missing appName in configuration");
    }
    
    if (!config.apiEndpoint) {
      throw new Error("Missing apiEndpoint in configuration");
    }
    
    // Process the configuration
    return {
      status: "success",
      appName: config.appName,
      apiEndpoint: config.apiEndpoint,
      debugMode: config.debugMode || false
    };
  } catch (error) {
    if (error instanceof SyntaxError) {
      return {
        status: "error",
        type: "parsing",
        message: "Invalid JSON configuration format"
      };
    } else {
      return {
        status: "error",
        type: "validation",
        message: error.message
      };
    }
  } finally {
    console.log("Configuration processing completed");
  }
}

// Test with different JSON strings
const validConfig = '{"appName": "MyApp", "apiEndpoint": "https://api.example.com", "debugMode": true}';
const invalidJson = '{"appName": "BrokenApp", "apiEndpoint":}'; // Syntax error
const incompleteConfig = '{"appName": "PartialApp"}'; // Missing required field

console.log("\\nConfig test 1:", parseAndProcessConfig(validConfig));
console.log("Config test 2:", parseAndProcessConfig(invalidJson));
console.log("Config test 3:", parseAndProcessConfig(incompleteConfig));

// Scenario 3: Resource management with finally
function processFile(filename) {
  let fileHandle = null;
  
  try {
    console.log(\`Opening file: \${filename}\`);
    fileHandle = { name: filename, isOpen: true }; // Simulate opening a file
    
    // Check if file exists
    if (filename === "missing.txt") {
      throw new Error("File not found");
    }
    
    // Simulate processing based on file type
    if (filename.endsWith(".txt")) {
      console.log("Processing text file...");
      return "Text content processed";
    } else if (filename.endsWith(".json")) {
      console.log("Processing JSON file...");
      return "JSON content processed";
    } else {
      throw new Error("Unsupported file format");
    }
  } catch (error) {
    console.error(\`Error processing \${filename}: \${error.message}\`);
    return null;
  } finally {
    // This block always executes, ensuring resources are cleaned up
    if (fileHandle && fileHandle.isOpen) {
      console.log(\`Closing file: \${filename}\`);
      fileHandle.isOpen = false; // Simulate closing the file
    }
  }
}

console.log("\\nFile test 1:", processFile("data.txt"));
console.log("File test 2:", processFile("config.json"));
console.log("File test 3:", processFile("missing.txt"));
console.log("File test 4:", processFile("image.png"));`,
        output: `Validation test 1: { isValid: false, errorMessage: 'Username is required' }
Validation test 2: { isValid: false, errorMessage: 'Password is required' }
Validation test 3: { isValid: false, errorMessage: 'Password must be at least 8 characters' }
Validation test 4: { isValid: true }

Attempting to parse configuration...
Configuration processing completed
Config test 1: {
  status: 'success',
  appName: 'MyApp',
  apiEndpoint: 'https://api.example.com',
  debugMode: true
}
Attempting to parse configuration...
Configuration processing completed
Config test 2: {
  status: 'error',
  type: 'parsing',
  message: 'Invalid JSON configuration format'
}
Attempting to parse configuration...
Configuration processing completed
Config test 3: {
  status: 'error',
  type: 'validation',
  message: 'Missing apiEndpoint in configuration'
}

Opening file: data.txt
Processing text file...
Closing file: data.txt
File test 1: Text content processed
Opening file: config.json
Processing JSON file...
Closing file: config.json
File test 2: JSON content processed
Opening file: missing.txt
Error processing missing.txt: File not found
Closing file: missing.txt
File test 3: null
Opening file: image.png
Error processing image.png: Unsupported file format
Closing file: image.png
File test 4: null`,
        explanation: {
          en: "This example demonstrates three real-world scenarios for using try-catch-finally blocks. The first scenario shows form validation, where errors are caught and transformed into user-friendly messages. The second scenario illustrates parsing and validating JSON data, demonstrating how different types of errors can be handled differently. The third scenario showcases resource management using the finally block, which ensures that resources (like file handles) are properly closed regardless of whether an error occurred. The finally block is particularly important for cleanup operations that must happen in both success and error cases. Together, these examples show how proper error handling makes applications more robust by providing clear feedback and preventing resource leaks.",
          hi: "Yeh example try-catch-finally blocks ke upyog ke teen real-world scenarios ko demonstrate karta hai. Pehla scenario form validation dikhata hai, jahan errors ko catch karke user-friendly messages mein transform kiya jata hai. Doosra scenario JSON data ko parse aur validate karne ko illustrate karta hai, jo dikhata hai ki different types ke errors ko kaise alag-alag handle kiya ja sakta hai. Teesra scenario finally block ka upyog karke resource management ko showcase karta hai, jo ensure karta hai ki resources (jaise file handles) properly closed hon, chahe error occur hua ho ya nahi. Finally block cleanup operations ke liye particularly important hai jo success aur error cases dono mein hone chahiye. Saath mein, ye examples dikhate hain ki proper error handling applications ko clear feedback provide karke aur resource leaks ko prevent karke kaise more robust banata hai."
        }
      }
    },
    {
      id: "promises-error",
      title: "Error Handling in Promises",
      content: {
        en: "When working with asynchronous operations using Promises, error handling requires special attention. Promises provide specific methods for handling errors in asynchronous code flows, helping to maintain clean and maintainable error handling patterns.",
        hi: "Promises ka upyog karke asynchronous operations ke saath kaam karte samay, error handling special attention require karta hai. Promises asynchronous code flows mein errors handle karne ke liye specific methods provide karte hain, jisse clean aur maintainable error handling patterns maintain karne mein madad milti hai."
      },
      codeExample: {
        code: `// Basic Promise error handling with catch
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('Fetch failed:', error.message);
  });

// Promise.catch can handle errors from any previous then
getUser(123)
  .then(user => {
    console.log('User:', user);
    return getUserPosts(user.id);  // This might fail
  })
  .then(posts => {
    console.log('Posts:', posts);
    return getPostComments(posts[0].id);  // This might fail
  })
  .catch(error => {
    // This will catch errors from getUser, getUserPosts, and getPostComments
    console.error('Error in promise chain:', error);
  });

// Multiple catch handlers for different parts of the chain
getUserData()
  .then(userData => {
    console.log('User data:', userData);
    return processUserData(userData);
  })
  .catch(error => {
    // Handle errors from getUserData only
    console.error('Error fetching user data:', error);
    return defaultUserData();  // Provide fallback data
  })
  .then(processedData => {
    // Continue with processedData (either processed or default)
    return saveUserData(processedData);
  })
  .catch(error => {
    // Handle errors from processUserData or saveUserData
    console.error('Error processing or saving data:', error);
  });

// Promise.finally for cleanup
fetchResource()
  .then(resource => {
    console.log('Resource:', resource);
  })
  .catch(error => {
    console.error('Error fetching resource:', error);
  })
  .finally(() => {
    // This runs regardless of success or failure
    console.log('Fetch operation completed');
    hideLoadingIndicator();
  });

// Error handling with Promise.all
Promise.all([
  fetch('https://api.example.com/users').then(res => res.json()),
  fetch('https://api.example.com/posts').then(res => res.json()),
  fetch('https://api.example.com/comments').then(res => res.json())
])
  .then(([users, posts, comments]) => {
    console.log('All data loaded successfully');
  })
  .catch(error => {
    // If any promise rejects, this will execute
    console.error('At least one request failed:', error);
  });

// Error handling with Promise.allSettled (ES2020)
Promise.allSettled([
  fetch('https://api.example.com/users').then(res => res.json()),
  fetch('https://api.example.com/posts').then(res => res.json()),
  fetch('https://api.example.com/comments').then(res => res.json())
])
  .then(results => {
    // Process all results, regardless of success or failure
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(\`Request \${index} succeeded with data:, result.value\`);
      } else {
        console.error(\`Request \${index} failed with error:, result.reason\`);
      }
    });
  });

// Creating and rejecting Promises
function getUserWithTimeout(userId, timeout) {
  return new Promise((resolve, reject) => {
    // Set a timeout to abort the request
    const timeoutId = setTimeout(() => {
      reject(new Error(\`Request timeout after \${timeout}ms\`));
    }, timeout);
    
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(response => {
        clearTimeout(timeoutId);  // Clear the timeout
        if (!response.ok) {
          reject(new Error(\`HTTP error! status: \${response.status}\`));
        }
        return response.json();
      })
      .then(user => {
        resolve(user);
      })
      .catch(error => {
        clearTimeout(timeoutId);  // Clear the timeout
        reject(error);  // Forward the error
      });
  });
}

// Handling errors with async/await
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    // Return default data or rethrow
    return { id: userId, name: 'Unknown', error: true };
  }
}

// Simulated functions for the examples above
function getUser(id) {
  return Promise.resolve({ id, name: 'John' });
}

function getUserPosts(userId) {
  return Promise.resolve([
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' }
  ]);
}

function getPostComments(postId) {
  return Promise.resolve([
    { id: 101, text: 'Comment 1' },
    { id: 102, text: 'Comment 2' }
  ]);
}

function getUserData() {
  return Promise.resolve({ id: 1, name: 'Alice' });
}

function processUserData(userData) {
  return { ...userData, processed: true };
}

function defaultUserData() {
  return { id: 0, name: 'Guest', isDefault: true };
}

function saveUserData(data) {
  return Promise.resolve({ success: true, data });
}

function fetchResource() {
  return Promise.resolve({ id: 'resource-1', data: 'resource data' });
}

function hideLoadingIndicator() {
  console.log('Loading indicator hidden');
}`,
        editable: true
      }
    },
    {
      id: "async-await-errors",
      title: "Error Handling with Async/Await",
      content: {
        en: "Async/await provides a more synchronous-looking way to handle asynchronous operations, including error handling. By combining async/await with try-catch blocks, you can create cleaner and more intuitive error handling for asynchronous code.",
        hi: "Async/await asynchronous operations ko handle karne ke liye, including error handling, ek more synchronous-looking way provide karta hai. Async/await ko try-catch blocks ke saath combine karke, aap asynchronous code ke liye cleaner aur more intuitive error handling create kar sakte hain."
      },
      codeExample: {
        code: `// Basic async/await with try-catch
async function getUserData() {
  try {
    const response = await fetch('https://api.example.com/users');
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    return null;
  }
}

// Multiple await operations in one try-catch
async function loadUserProfile(userId) {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchUserPosts(userId);
    const friends = await fetchUserFriends(userId);
    
    return {
      user,
      posts,
      friends
    };
  } catch (error) {
    console.error(\`Failed to load profile for user \${userId}:, error\`);
    throw new Error(\`Profile loading failed: \${error.message}\`);
  }
}

// Using finally with async/await
async function processDataFile(filePath) {
  let file = null;
  
  try {
    file = await openFile(filePath);
    const data = await readFileData(file);
    const processedData = processData(data);
    await saveResults(processedData);
    return { success: true };
  } catch (error) {
    console.error('Data processing error:', error);
    return { success: false, error: error.message };
  } finally {
    if (file) {
      await closeFile(file);
      console.log('File closed');
    }
  }
}

// Handling specific error types
async function validateUserInput(input) {
  try {
    await submitToServer(input);
    return { valid: true };
  } catch (error) {
    if (error.name === 'ValidationError') {
      return { valid: false, reason: error.message };
    } else if (error.name === 'NetworkError') {
      // Might retry the operation
      console.error('Network error:', error);
      throw new Error('Server unreachable');
    } else {
      // Unknown error
      console.error('Unexpected error:', error);
      throw error;
    }
  }
}

// Concurrent operations with error handling
async function loadDashboardData() {
  try {
    // Start all requests concurrently
    const userPromise = fetchUser();
    const statsPromise = fetchStats();
    const notificationsPromise = fetchNotifications();
    
    // Wait for all to complete
    const user = await userPromise;
    const stats = await statsPromise;
    const notifications = await notificationsPromise;
    
    return { user, stats, notifications };
  } catch (error) {
    console.error('Dashboard data loading failed:', error);
    // Partial data could still be available if only some promises failed
    return { error: error.message };
  }
}

// Using Promise.all with async/await
async function fetchAllData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch('https://api.example.com/users').then(res => res.json()),
      fetch('https://api.example.com/posts').then(res => res.json()),
      fetch('https://api.example.com/comments').then(res => res.json())
    ]);
    
    return { users, posts, comments };
  } catch (error) {
    // If any request fails, this will execute
    console.error('Failed to fetch all data:', error);
    throw new Error('Data loading failed');
  }
}

// Using Promise.allSettled with async/await
async function fetchDataWithPartialResults() {
  const results = await Promise.allSettled([
    fetch('https://api.example.com/users').then(res => res.json()),
    fetch('https://api.example.com/posts').then(res => res.json()),
    fetch('https://api.example.com/comments').then(res => res.json())
  ]);
  
  // Process results, handling both successes and failures
  const data = {
    users: results[0].status === 'fulfilled' ? results[0].value : null,
    posts: results[1].status === 'fulfilled' ? results[1].value : null,
    comments: results[2].status === 'fulfilled' ? results[2].value : null,
    errors: results
      .filter(result => result.status === 'rejected')
      .map(result => result.reason)
  };
  
  if (data.errors.length > 0) {
    console.warn('Some requests failed:', data.errors);
  }
  
  return data;
}

// Proper error propagation
async function initializeApplication() {
  try {
    const config = await loadConfiguration();
    await initDatabase(config.dbSettings);
    await connectToServices(config.serviceUrls);
    
    console.log('Application initialized successfully');
    return true;
  } catch (error) {
    console.error('Application initialization failed:', error);
    
    // Add additional context to the error
    const enhancedError = new Error('Startup failed');
    enhancedError.originalError = error;
    enhancedError.timestamp = new Date();
    
    // Could log to a service or display to user
    await logErrorToService(enhancedError);
    
    // Rethrow for caller to handle
    throw enhancedError;
  }
}

// Simulated functions for the examples above
async function fetchUser(userId) {
  return { id: userId, name: 'John Doe' };
}

async function fetchUserPosts(userId) {
  return [{ id: 1, title: 'Post 1' }];
}

async function fetchUserFriends(userId) {
  return [{ id: 2, name: 'Jane Doe' }];
}

async function openFile(filePath) {
  return { path: filePath, isOpen: true };
}

async function readFileData(file) {
  return 'file data';
}

function processData(data) {
  return data.toUpperCase();
}

async function saveResults(data) {
  return true;
}

async function closeFile(file) {
  file.isOpen = false;
  return true;
}

async function submitToServer(input) {
  return { success: true };
}

async function fetchStats() {
  return { visits: 100, views: 500 };
}

async function fetchNotifications() {
  return [{ id: 1, message: 'New message' }];
}

async function loadConfiguration() {
  return {
    dbSettings: { host: 'localhost', port: 5432 },
    serviceUrls: ['https://api1.example.com', 'https://api2.example.com']
  };
}

async function initDatabase(settings) {
  return true;
}

async function connectToServices(urls) {
  return true;
}

async function logErrorToService(error) {
  console.log('Error logged to service:', error.message);
  return true;
}`,
        editable: true
      }
    },
    {
      id: "error-handling-patterns",
      title: "Error Handling Patterns",
      content: {
        en: "Beyond the basic error handling mechanisms, there are several patterns and best practices that can make your error handling more robust, maintainable, and user-friendly. These patterns address common challenges in error management across different types of applications.",
        hi: "Basic error handling mechanisms ke alava, several patterns aur best practices hain jo aapke error handling ko more robust, maintainable, aur user-friendly bana sakte hain. Ye patterns different types ke applications mein error management ke common challenges ko address karte hain."
      },
      codeExample: {
        code: `// 1. Centralized Error Handling

// Create a central error handler
class ErrorHandler {
  constructor() {
    this.loggers = [];
  }
  
  addLogger(logger) {
    this.loggers.push(logger);
  }
  
  handleError(error, source) {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      source: source || 'unknown',
      timestamp: new Date().toISOString()
    };
    
    // Log to all registered loggers
    this.loggers.forEach(logger => logger(errorInfo));
    
    // Return a user-friendly message
    return {
      message: 'An error occurred. Our team has been notified.',
      code: error.code || 'UNKNOWN_ERROR'
    };
  }
}

// Create and configure the error handler
const errorHandler = new ErrorHandler();

// Add console logger
errorHandler.addLogger(errorInfo => {
  console.error(\`[\${errorInfo.timestamp}] \${errorInfo.source}: \${errorInfo.message}\`);
  console.error(errorInfo.stack);
});

// Add remote logging service (example)
errorHandler.addLogger(errorInfo => {
  // In a real app, this would send to a service like Sentry, LogRocket, etc.
  console.log(\`Sending to remote logging service: \${errorInfo.message}\`);
});

// Using the centralized error handler
function processUserInput(input) {
  try {
    // Validate input
    if (!input) {
      throw new Error('Input is required');
    }
    
    // Process the input
    return { result: \`Processed: \${input}\` };
  } catch (error) {
    return errorHandler.handleError(error, 'processUserInput');
  }
}

// 2. Feature Flags and Graceful Degradation

class FeatureManager {
  constructor() {
    this.features = {
      advancedSearch: true,
      notifications: false,
      dataExport: true
    };
    
    // Load from server or local storage in a real app
  }
  
  isEnabled(featureName) {
    return this.features[featureName] === true;
  }
}

const featureManager = new FeatureManager();

// Using feature flags for graceful degradation
function renderSearchUI() {
  try {
    if (featureManager.isEnabled('advancedSearch')) {
      return renderAdvancedSearch();
    } else {
      return renderBasicSearch();
    }
  } catch (error) {
    console.error('Error rendering advanced search:', error);
    // Fall back to basic search if advanced search fails
    return renderBasicSearch();
  }
}

// 3. Circuit Breaker Pattern

class CircuitBreaker {
  constructor(fn, options = {}) {
    this.fn = fn;
    this.failureThreshold = options.failureThreshold || 3;
    this.resetTimeout = options.resetTimeout || 30000; // 30 seconds
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF-OPEN
    this.failureCount = 0;
    this.nextAttempt = Date.now();
  }
  
  async call(...args) {
    if (this.state === 'OPEN') {
      if (Date.now() < this.nextAttempt) {
        throw new Error('Circuit is OPEN');
      }
      this.state = 'HALF-OPEN';
    }
    
    try {
      const result = await this.fn(...args);
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  
  onSuccess() {
    this.failureCount = 0;
    this.state = 'CLOSED';
  }
  
  onFailure() {
    this.failureCount += 1;
    if (this.failureCount >= this.failureThreshold) {
      this.state = 'OPEN';
      this.nextAttempt = Date.now() + this.resetTimeout;
    }
  }
}

// Example API call wrapped with a circuit breaker
const apiClient = new CircuitBreaker(
  async (endpoint) => {
    const response = await fetch(\`https://api.example.com/\${endpoint}\`);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    return response.json();
  },
  { failureThreshold: 3, resetTimeout: 10000 }
);

// Using the circuit breaker
async function fetchUserData() {
  try {
    return await apiClient.call('users');
  } catch (error) {
    if (error.message === 'Circuit is OPEN') {
      return getCachedUserData();
    }
    throw error;
  }
}

// 4. Error Boundaries (React-style concept)

class ErrorBoundary {
  constructor(fallbackFn) {
    this.fallbackFn = fallbackFn;
  }
  
  execute(fn, ...args) {
    try {
      return fn(...args);
    } catch (error) {
      console.error('Error caught by boundary:', error);
      return this.fallbackFn(error);
    }
  }
}

// Using the error boundary
const renderUserProfile = new ErrorBoundary(
  (error) => \`<div class="error-message">Unable to display profile: \${error.message}</div>\`
);

function userProfileComponent(user) {
  // This would throw if user is null or properties are missing
  return \`
    <div class="profile">
      <h2>\${user.name}</h2>
      <p>\${user.bio}</p>
    </div>
  \`;
}

// Safely render the component
const profile1 = renderUserProfile.execute(userProfileComponent, { name: 'Alice', bio: 'Developer' });
const profile2 = renderUserProfile.execute(userProfileComponent, null); // This would trigger the fallback

// 5. Retry Pattern

async function retryOperation(operation, retries = 3, delay = 1000, backoff = 2) {
  let currentTry = 0;
  let currentDelay = delay;
  
  while (currentTry < retries) {
    try {
      return await operation();
    } catch (error) {
      currentTry++;
      if (currentTry >= retries) {
        throw new Error(\`All \${retries} retries failed: \${error.message}\`);
      }
      
      console.log(\`Attempt \${currentTry} failed. Retrying in \${currentDelay}ms...\`);
      
      // Wait for the specified delay
      await new Promise(resolve => setTimeout(resolve, currentDelay));
      
      // Increase delay for next retry (exponential backoff)
      currentDelay *= backoff;
    }
  }
}

// Using the retry pattern
async function fetchWithRetry(url) {
  return retryOperation(
    async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      return response.json();
    },
    3,    // 3 retries
    1000, // Initial delay of 1 second
    2     // Double the delay on each retry
  );
}

// Simulated functions for the examples above
function renderAdvancedSearch() {
  return '<div>Advanced Search UI</div>';
}

function renderBasicSearch() {
  return '<div>Basic Search UI</div>';
}

function getCachedUserData() {
  return { cached: true, users: [] };
}`,
        editable: true
      }
    },
    {
      id: "error-prevention",
      title: "Error Prevention",
      content: {
        en: "While handling errors is important, preventing them is even better. Good error prevention practices can significantly reduce the number of errors in your code and improve its overall robustness. This section explores strategies for preventing common errors in JavaScript.",
        hi: "Errors ko handle karna important hai, lekin unhe prevent karna aur bhi better hai. Good error prevention practices aapke code mein errors ki sankhya ko significantly reduce kar sakti hain aur overall robustness ko improve kar sakti hain. Is section mein JavaScript mein common errors ko prevent karne ke strategies explore kiye gaye hain."
      },
      codeExample: {
        code: `// 1. Defensive Programming

// Check for null/undefined before accessing properties
function getUserName(user) {
  // Bad approach: can cause TypeError
  // return user.name;
  
  // Good approach: defensive check
  if (user && user.name) {
    return user.name;
  }
  return 'Unknown User';
}

// Optional chaining (ES2020)
function getNestedProperty(obj) {
  // Instead of:
  // if (obj && obj.level1 && obj.level1.level2 && obj.level1.level2.value) {
  //   return obj.level1.level2.value;
  // }
  
  // With optional chaining:
  return obj?.level1?.level2?.value ?? 'Not available';
}

// 2. Input Validation

// Validate function arguments
function calculateArea(width, height) {
  // Validate numeric inputs
  if (typeof width !== 'number' || typeof height !== 'number') {
    throw new TypeError('Width and height must be numbers');
  }
  
  // Validate reasonable values
  if (width <= 0 || height <= 0) {
    throw new RangeError('Width and height must be positive numbers');
  }
  
  return width * height;
}

// Schema validation for complex objects
function processUserData(userData) {
  const requiredFields = ['name', 'email', 'age'];
  
  // Check if all required fields are present
  for (const field of requiredFields) {
    if (!(field in userData)) {
      throw new Error(\`Missing required field: \${field}\`);
    }
  }
  
  // Validate field types
  if (typeof userData.name !== 'string') {
    throw new TypeError('Name must be a string');
  }
  
  if (typeof userData.email !== 'string' || !isValidEmail(userData.email)) {
    throw new TypeError('Email must be a valid email address');
  }
  
  if (typeof userData.age !== 'number' || userData.age < 0) {
    throw new TypeError('Age must be a positive number');
  }
  
  // Process the validated data
  return {
    formattedName: userData.name.trim(),
    normalizedEmail: userData.email.toLowerCase(),
    isAdult: userData.age >= 18
  };
}

function isValidEmail(email) {
  // Simple email validation
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return emailRegex.test(email);
}

// 3. Type Checking and TypeScript

// Basic runtime type checking
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  return a + b;
}

// Using JSDoc comments for type hints
/**
 * Formats a user's full name
 * @param {Object} user - The user object
 * @param {string} user.firstName - The user's first name
 * @param {string} user.lastName - The user's last name
 * @returns {string} The formatted full name
 */
function formatFullName(user) {
  if (!user || typeof user.firstName !== 'string' || typeof user.lastName !== 'string') {
    throw new TypeError('Invalid user object');
  }
  return \`\${user.firstName} \${user.lastName}\`;
}

// 4. Default Values

// Use default parameters
function createConfig(options = {}) {
  const config = {
    debug: options.debug ?? false,
    timeout: options.timeout ?? 1000,
    retries: options.retries ?? 3,
    logLevel: options.logLevel ?? 'info'
  };
  
  return config;
}

// Default values for object properties
function processTransaction(transaction) {
  const {
    amount,
    currency = 'USD',
    description = 'No description',
    date = new Date()
  } = transaction;
  
  // Amount is required
  if (amount === undefined || amount === null) {
    throw new Error('Transaction amount is required');
  }
  
  return {
    amount,
    currency,
    description,
    date,
    processed: true
  };
}

// 5. Immutability

// Avoid unexpected mutations
function addItemToList(list, item) {
  // Bad approach: modifies the original array
  // list.push(item);
  // return list;
  
  // Good approach: returns a new array
  return [...list, item];
}

// Freeze objects to prevent modifications
function createConstants() {
  const constants = {
    PI: 3.14159,
    GRAVITY: 9.81,
    LIGHT_SPEED: 299792458
  };
  
  // Make the object immutable
  return Object.freeze(constants);
}

const CONSTANTS = createConstants();
// This will fail silently or throw in strict mode
// CONSTANTS.PI = 3.14;

// 6. Coding Conventions and Linting

// Consistent coding style
function calculateTotal(items) {
  // Use clear variable names
  let totalPrice = 0;
  
  // Check input
  if (!Array.isArray(items)) {
    throw new TypeError('Items must be an array');
  }
  
  // Use forEach instead of for loops to avoid index errors
  items.forEach(item => {
    if (item && typeof item.price === 'number') {
      totalPrice += item.price;
    }
  });
  
  // Format the return value consistently
  return parseFloat(totalPrice.toFixed(2));
}

// 7. Feature Detection

// Check if browser features are available
function saveToLocalStorage(key, data) {
  // Check if localStorage is available
  if (typeof localStorage === 'undefined') {
    throw new Error('localStorage is not supported in this environment');
  }
  
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    if (error instanceof DOMException && (
      // everything except Firefox
      error.code === 22 ||
      // Firefox
      error.code === 1014 ||
      // test name field too, because code might not be present
      error.name === 'QuotaExceededError' ||
      error.name === 'NS_ERROR_DOM_QUOTA_REACHED'
    )) {
      // Storage quota exceeded
      console.warn('Storage quota exceeded');
      return false;
    }
    throw error; // Rethrow if it's a different error
  }
}`,
        editable: true
      }
    }
  ],
  exercise: {
    title: "Robust API Client",
    description: {
      en: "Implement a robust API client function that fetches data from a URL, handles various error conditions, and includes retries for transient failures. The function should implement proper error handling and prevention techniques from this chapter.",
      hi: "Ek robust API client function implement karein jo URL se data fetch karta hai, various error conditions ko handle karta hai, aur transient failures ke liye retries include karta hai. Function ko is chapter ke proper error handling aur prevention techniques implement karna chahiye."
    },
    starterCode: `// Implement a robust API client with proper error handling
// The function should:
// 1. Fetch data from the given URL
// 2. Handle network errors, HTTP errors, and JSON parsing errors
// 3. Implement retries for server errors (500s) or network failures
// 4. Include timeout handling
// 5. Return the data or throw an informative error

async function fetchDataSafely(url, options = {}) {
  // Your implementation here
  
  // Available options should include:
  // - maxRetries: number of retry attempts (default: 3)
  // - timeout: request timeout in milliseconds (default: 5000)
  // - retryDelay: delay between retries in milliseconds (default: 1000)
  // - headers: additional headers to include
}

// Example usage:
// fetchDataSafely('https://api.example.com/data', {
//   maxRetries: 3,
//   timeout: 2000,
//   headers: { 'Authorization': 'Bearer token123' }
// })
//   .then(data => console.log('Data:', data))
//   .catch(error => console.error('Error:', error.message));`,
    expectedOutput: `// Solution should demonstrate various error handling scenarios`,
    hint: {
      en: "Use try-catch blocks for error handling. Implement a retry mechanism using a loop and counter. For timeout handling, consider using Promise.race() between the fetch promise and a timeout promise. Remember to categorize errors to determine which ones should trigger a retry. Use fetch's AbortController for timeout control if available.",
      hi: "Error handling ke liye try-catch blocks ka upyog karein. Loop aur counter ka upyog karke retry mechanism implement karein. Timeout handling ke liye, fetch promise aur timeout promise ke beech Promise.race() par vichar karein. Yaad rakhein ki errors ko categorize karein yeh determine karne ke liye ki konse errors retry trigger karenge. Agar available ho to timeout control ke liye fetch ke AbortController ka upyog karein."
    }
  },
  summary: {
    en: "Error handling is a fundamental aspect of creating robust JavaScript applications. By implementing proper error handling techniques, you can ensure your applications respond gracefully to unexpected conditions, provide helpful feedback to users, and maintain their functionality even when things go wrong. Core concepts include using try-catch blocks for synchronous code, handling Promise rejections with catch() or try-await-catch for asynchronous operations, and implementing error prevention strategies like input validation and defensive programming. Advanced patterns like centralized error handling, circuit breakers, and retry mechanisms can further enhance the resilience of your applications. Remember that good error handling is not just about catching errors, but also about providing meaningful error messages, preserving application state, and giving users clear pathways to resolve issues.",
    hi: {
      text: "Error handling robust JavaScript applications create karne ka ek fundamental aspect hai.",
      points: [
        "Proper error handling techniques implement karke, aap ensure kar sakte hain ki aapke applications unexpected conditions par gracefully respond karein, users ko helpful feedback provide karein, aur jab cheezein galat ho jati hain tab bhi apni functionality maintain karein",
        "Core concepts mein synchronous code ke liye try-catch blocks ka upyog, asynchronous operations ke liye catch() ya try-await-catch ke saath Promise rejections ko handle karna, aur input validation aur defensive programming jaise error prevention strategies implement karna shamil hain",
        "Centralized error handling, circuit breakers, aur retry mechanisms jaise advanced patterns aapke applications ki resilience ko aur enhance kar sakte hain",
        "Yaad rakhein ki good error handling sirf errors ko catch karne ke bare mein nahi hai, balki meaningful error messages provide karne, application state ko preserve karne, aur users ko issues resolve karne ke liye clear pathways dene ke bare mein bhi hai",
        "Well-handled errors provide valuable diagnostic information while maintaining a smooth user experience",
        "Structured error types aur consistent error messaging users aur developers dono ke liye application ke behavior ko more predictable banate hain"
      ]
    }
  },
  prevTopic: {
    id: "javascript-modules",
    title: "JavaScript Modules"
  },
  nextTopic: {
    id: "prototypes",
    title: "Prototypes and Inheritance"
  }
};