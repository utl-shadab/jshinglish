export const javascriptModulesData = {
  id: "javascript-modules",
  title: "JavaScript Modules",
  introduction: {
    en: "JavaScript modules are a way to organize code into reusable, independent pieces. They help in managing dependencies, preventing pollution of the global namespace, and creating maintainable code structures. Modern JavaScript has a standard module system that works both in browsers and Node.js environments.",
    hi: "JavaScript modules code ko reusable, independent pieces mein organize karne ka ek tarika hai. Ye dependencies ko manage karne, global namespace ke pollution ko rokne, aur maintainable code structures create karne mein help karte hain. Modern JavaScript mein ek standard module system hai jo browsers aur Node.js environments dono mein kaam karta hai."
  },
  sections: [
    {
      id: "module-basics",
      title: "Module Basics",
      content: {
        en: "Modules in JavaScript are files containing related code. Unlike regular scripts, modules have their own scope, meaning variables, functions, and classes declared in a module are not automatically added to the global scope. Modules can export their functionality and import functionality from other modules, creating a web of dependencies.",
        hi: "JavaScript mein modules related code wale files hote hain. Regular scripts ke viprit, modules ka apna scope hota hai, jiska matlab hai ki module mein declare kiye gaye variables, functions, aur classes automatically global scope mein add nahi hote. Modules apne functionality ko export kar sakte hain aur doosre modules se functionality import kar sakte hain, jisse dependencies ka ek web create hota hai."
      },
      codeExample: {
        code: `// === math.js ===
// A simple module that exports mathematical functions

// Export individual items
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Export a constant
export const PI = 3.14159;

// === app.js ===
// Importing from the math module
import { add, PI } from './math.js';

console.log(add(5, 3));  // 8
console.log(PI);         // 3.14159

// Note: In a browser, you need to specify the module type
// <script type="module" src="app.js"></script>

// In Node.js, you either need to:
// 1. Use .mjs extension, or
// 2. Add "type": "module" to package.json, or
// 3. Use require() with CommonJS (older format)`,
        editable: true
      }
    },
    {
      id: "export-types",
      title: "Export Types",
      content: {
        en: "JavaScript modules offer multiple ways to export functionality. Named exports allow multiple exports per module with specific names, while default exports provide a primary export for the module. Understanding the different export types helps in creating flexible and clear module interfaces.",
        hi: "JavaScript modules functionality export karne ke multiple ways offer karte hain. Named exports ek module se specific names ke saath multiple exports ki anumati dete hain, jabki default exports module ke liye ek primary export provide karte hain. Different export types ko samajhna flexible aur clear module interfaces create karne mein help karta hai."
      },
      codeExample: {
        code: `// === utils.js ===
// Named exports
export function formatDate(date) {
  return date.toLocaleDateString();
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

// Export constants
export const APP_NAME = 'ModuleDemo';
export const API_URL = 'https://api.example.com';

// Another way to declare and then export
function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

// Export list
export { square, cube };

// Export with renaming
function log(message) {
  console.log(\`[\${new Date().toISOString()}] \${message}\`);
}

export { log as logger };

// === calculator.js ===
// Default export (only one per module)
export default class Calculator {
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
  
  multiply(a, b) {
    return a * b;
  }
  
  divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  }
}

// === main.js ===
// Import the default export
import Calculator from './calculator.js';

// Import named exports
import { formatCurrency, APP_NAME, square, logger } from './utils.js';

// Using the imports
const calc = new Calculator();
console.log(\`Welcome to \${APP_NAME}\`);
console.log(\`5 + 3 = \${calc.add(5, 3)}\`);
console.log(\`Squared: \${square(4)}\`);
console.log(\`Formatted: \${formatCurrency(1234.56)}\`);
logger('Application started');`,
        editable: true
      }
    },
    {
      id: "import-types",
      title: "Import Types",
      content: {
        en: "JavaScript offers various ways to import functionality from modules. You can import specific exports by name, import everything as a namespace, or import the default export. You can also rename imports to avoid naming conflicts.",
        hi: "JavaScript modules se functionality import karne ke various ways offer karta hai. Aap specific exports ko name se import kar sakte hain, sab kuch namespace ke roop mein import kar sakte hain, ya default export ko import kar sakte hain. Aap naming conflicts se bachne ke liye imports ko rename bhi kar sakte hain."
      },
      codeExample: {
        code: `// === services.js ===
export function fetchUsers() {
  return fetch('/api/users').then(res => res.json());
}

export function fetchPosts() {
  return fetch('/api/posts').then(res => res.json());
}

export default function fetchData(endpoint) {
  return fetch(\`/api/\${endpoint}\`).then(res => res.json());
}

// === config.js ===
export const API_KEY = 'abc123';
export const BASE_URL = 'https://api.example.com';
export const TIMEOUT = 5000;

// === app.js ===
// 1. Import specific named exports
import { fetchUsers, fetchPosts } from './services.js';

// 2. Import with renaming (alias)
import { API_KEY as apiKey, BASE_URL } from './config.js';

// 3. Import default export
import fetchData from './services.js';

// 4. Import default and named exports together
import fetchDataGeneric, { fetchUsers as getUsers } from './services.js';

// 5. Import everything as a namespace object
import * as config from './config.js';

// Using the imports
console.log(\`API Key: \${apiKey}\`);
console.log(\`Base URL: \${BASE_URL}\`);
console.log(\`Timeout: \${config.TIMEOUT}ms\`);

fetchUsers().then(users => console.log('Users:', users));
fetchData('products').then(products => console.log('Products:', products));

// === Dynamic imports (ES2020) ===
// Import a module dynamically at runtime
async function loadModule() {
  if (someCondition) {
    // The module is loaded only when needed
    const { fetchPosts } = await import('./services.js');
    const posts = await fetchPosts();
    console.log(posts);
  }
}`,
        editable: true
      },
      interactiveExample: {
        code: `// Let's see how modules work in practice
// We'll simulate module imports and exports

// Simulating module exports
const MathModule = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  PI: 3.14159
};

const FormatterModule = {
  formatDate: (date) => date.toLocaleDateString(),
  formatCurrency: (amount) => \`$\${amount.toFixed(2)}\`,
  formatPercentage: (value) => \`\${(value * 100).toFixed(1)}%\`
};

const UtilsModule = {
  generateId: () => Math.random().toString(36).substr(2, 9),
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  debounce: (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }
};

// Simulate using the imported modules
console.log("==== Using Math Module ====");
console.log(\`Addition: 5 + 3 = \${MathModule.add(5, 3)}\`);
console.log(\`Subtraction: 10 - 4 = \${MathModule.subtract(10, 4)}\`);
console.log(\`Multiplication: 6 * 7 = \${MathModule.multiply(6, 7)}\`);
console.log(\`Division: 20 / 5 = \${MathModule.divide(20, 5)}\`);
console.log(\`PI constant: \${MathModule.PI}\`);

console.log("\\n==== Using Formatter Module ====");
const today = new Date();
console.log(\`Formatted date: \${FormatterModule.formatDate(today)}\`);
console.log(\`Formatted currency: \${FormatterModule.formatCurrency(1234.56)}\`);
console.log(\`Formatted percentage: \${FormatterModule.formatPercentage(0.755)}\`);

console.log("\\n==== Using Utils Module ====");
console.log(\`Generated ID: \${UtilsModule.generateId()}\`);
console.log(\`Capitalized text: \${UtilsModule.capitalize('hello world')}\`);

// Example of creating a modular application
console.log("\\n==== Modular Application Example ====");

// Simulating a User module
const UserModule = {
  users: [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' },
    { id: 3, name: 'Charlie', role: 'user' }
  ],
  
  getUser(id) {
    return this.users.find(user => user.id === id);
  },
  
  getAllUsers() {
    return this.users;
  },
  
  isAdmin(userId) {
    const user = this.getUser(userId);
    return user && user.role === 'admin';
  }
};

// Simulating a UI module that depends on other modules
const UIModule = {
  // Dependency injection pattern - modules passed as arguments
  init(userModule, formatterModule) {
    const users = userModule.getAllUsers();
    
    console.log("User List:");
    users.forEach(user => {
      console.log(\`- \${formatterModule.formatUser(user)}\`);
    });
    
    const adminUsers = users.filter(user => userModule.isAdmin(user.id));
    console.log(\`\\nAdmin count: \${adminUsers.length}\`);
  }
};

// Adding a helper function to the FormatterModule just for this demo
FormatterModule.formatUser = (user) => {
  return \`\${user.name} (\${user.role})\`;
};

// Running our modular application
UIModule.init(UserModule, FormatterModule);`,
        output: `==== Using Math Module ====
Addition: 5 + 3 = 8
Subtraction: 10 - 4 = 6
Multiplication: 6 * 7 = 42
Division: 20 / 5 = 4
PI constant: 3.14159

==== Using Formatter Module ====
Formatted date: 5/3/2025
Formatted currency: $1234.56
Formatted percentage: 75.5%

==== Using Utils Module ====
Generated ID: y09j1q5xf
Capitalized text: Hello world

==== Modular Application Example ====
User List:
- Alice (admin)
- Bob (user)
- Charlie (user)

Admin count: 1`,
        explanation: {
          en: "This example demonstrates the concept of JavaScript modules through simulation. Each 'module' is represented as an object with its own set of functions and properties, showing how modules encapsulate related functionality. When using real JavaScript modules, these objects would be actual files with export statements, and we'd use import statements to access them. The example illustrates the benefits of modularity: organization of related code (Math, Formatters, Utils), clear interfaces between components, and dependency management. The final section demonstrates a simple application built with modular components, showing how different modules can be combined and reused to create more complex functionality. In a real application with ES modules, the import/export syntax would handle this dependency management automatically.",
          hi: "Yeh example simulation ke madhyam se JavaScript modules ke concept ko demonstrate karta hai. Har 'module' ek object ke roop mein represent kiya gaya hai jisme uske apne functions aur properties ka set hai, jo dikhata hai ki modules kaise related functionality ko encapsulate karte hain. Jab real JavaScript modules ka upyog kiya jata hai, ye objects actual files hote hain export statements ke saath, aur hum unhe access karne ke liye import statements ka upyog karte hain. Example modularity ke benefits ko illustrate karta hai: related code ka organization (Math, Formatters, Utils), components ke beech clear interfaces, aur dependency management. Final section ek simple application ko demonstrate karta hai jo modular components se build kiya gaya hai, jo dikhata hai ki different modules ko kaise combine aur reuse kiya ja sakta hai more complex functionality create karne ke liye. Real application mein ES modules ke saath, import/export syntax automatically is dependency management ko handle karta hai."
        }
      }
    },
    {
      id: "module-patterns",
      title: "Module Patterns",
      content: {
        en: "Before ES6 introduced the standard module system, JavaScript developers used various patterns to create module-like structures. Understanding these historical patterns provides insight into the evolution of JavaScript's modularity and can be helpful when working with older codebases.",
        hi: "ES6 ke standard module system ko introduce karne se pahle, JavaScript developers ne module-like structures create karne ke liye various patterns ka upyog kiya. Inn historical patterns ko samajhna JavaScript ke modularity ke evolution mein insight provide karta hai aur older codebases ke saath kaam karte samay helpful ho sakta hai."
      },
      codeExample: {
        code: `// 1. Immediately Invoked Function Expression (IIFE)
// A classic pattern to create private scope
const counter = (function() {
  // Private variables
  let count = 0;
  
  // Return public API
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
})();

console.log(counter.getCount());  // 0
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.decrement());  // 1
// console.log(count);  // Error: count is not defined (private)

// 2. Revealing Module Pattern
// A variation of IIFE that clearly indicates public methods
const calculator = (function() {
  // Private implementation
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  }
  
  // Reveal public API
  return {
    add: add,
    subtract: subtract,
    // Only exposing some methods
    // multiply and divide remain private
  };
})();

console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(10, 4)); // 6
// console.log(calculator.multiply(2, 3)); // Error: multiply is not a function

// 3. CommonJS Pattern (Node.js style)
// This would be in separate files in a real CommonJS environment

// math.js
const mathModule = (function() {
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  // Export public API (CommonJS style)
  return {
    add: add,
    subtract: subtract
  };
})();

// logger.js
const loggerModule = (function() {
  function log(message) {
    console.log(\`[\${new Date().toISOString()}] \${message}\`);
  }
  
  function error(message) {
    console.error(\`[\${new Date().toISOString()}] ERROR: \${message}\`);
  }
  
  // Export public API
  return {
    log: log,
    error: error
  };
})();

// app.js
const app = (function(math, logger) {
  // Import/require other modules
  logger.log('Application starting');
  console.log(\`5 + 3 = \${math.add(5, 3)}\`);
  
  return {
    init: function() {
      logger.log('Initialized');
    }
  };
})(mathModule, loggerModule);

app.init();

// 4. AMD (Asynchronous Module Definition) Pattern
// Used by RequireJS and similar loaders
// Simplified example:

// Simulating define and require functions
function define(dependencies, factory) {
  // In a real AMD environment, this would load dependencies asynchronously
  const modules = {
    'jquery': { version: '3.6.0', select: (selector) => \`Selected: \${selector}\` },
    'lodash': { version: '4.17.21', map: (arr, fn) => arr.map(fn) }
  };
  
  const deps = dependencies.map(dep => modules[dep]);
  return factory(...deps);
}

function require(dependencies, callback) {
  // Similar to define, but just runs the callback
  const modules = {
    'jquery': { version: '3.6.0', select: (selector) => \`Selected: \${selector}\` },
    'lodash': { version: '4.17.21', map: (arr, fn) => arr.map(fn) }
  };
  
  const deps = dependencies.map(dep => modules[dep]);
  callback(...deps);
}

// Example AMD module
const amdModule = define(['jquery', 'lodash'], function($, _) {
  // Module code with dependencies injected
  console.log(\`Using jQuery version \${$.version}\`);
  console.log(\`Using Lodash version \${_.version}\`);
  
  return {
    doSomething: function() {
      console.log($.select('.element'));
      console.log(_.map([1, 2, 3], x => x * 2));
    }
  };
});

// Using an AMD module
require(['jquery', 'lodash'], function($, _) {
  console.log('Loaded dependencies');
  amdModule.doSomething();
});`,
        editable: true
      }
    },
    {
      id: "module-bundlers",
      title: "Module Bundlers",
      content: {
        en: "Module bundlers are tools that transform modular code into optimized bundles for deployment. They resolve dependencies, eliminate dead code, and optimize assets. Popular bundlers include Webpack, Rollup, and Parcel. Understanding bundlers is essential for modern web development workflows.",
        hi: "Module bundlers aise tools hain jo modular code ko deployment ke liye optimized bundles mein transform karte hain. Ve dependencies ko resolve karte hain, dead code ko eliminate karte hain, aur assets ko optimize karte hain. Popular bundlers mein Webpack, Rollup, aur Parcel shamil hain. Bundlers ko samajhna modern web development workflows ke liye essential hai."
      },
      codeExample: {
        code: `// === How module bundlers transform your code ===

// Original modular code (spread across files):

// math.js
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// utils.js
export function formatNumber(num) {
  return num.toFixed(2);
}

// app.js
import { add, multiply } from './math.js';
import { formatNumber } from './utils.js';

const result1 = add(5, 3);
const result2 = multiply(4, 2);

console.log(formatNumber(result1));
console.log(formatNumber(result2));

// After bundling (simplified example):
// bundled.js
(function() {
  // math.js contents
  function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  // utils.js contents
  function formatNumber(num) {
    return num.toFixed(2);
  }
  
  // app.js contents
  const result1 = add(5, 3);
  const result2 = multiply(4, 2);
  
  console.log(formatNumber(result1));
  console.log(formatNumber(result2));
})();

// === Webpack Configuration Example ===
/*
// webpack.config.js
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
*/

// === Using dynamic imports with bundlers ===
/*
// This will be split into a separate chunk
import('./big-module.js')
  .then(module => {
    module.doSomething();
  });
*/

// === Tree shaking (dead code elimination) ===

// Original library.js file
/*
export function used() {
  console.log('This function is used');
}

export function unused() {
  console.log('This function is never imported');
}
*/

// Application code
/*
import { used } from './library.js';
used();
*/

// After tree shaking, bundled code won't include the unused function

// === Code Splitting Example ===
/*
// Route-based code splitting in React
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
*/

// === Multi-page bundling configuration ===
/*
// webpack.config.js for multiple entry points
module.exports = {
  entry: {
    main: './src/main.js',
    admin: './src/admin.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
*/`,
        editable: true
      }
    },
    {
      id: "node-modules",
      title: "Node.js Modules",
      content: {
        en: "Node.js has its own module system based on the CommonJS format. However, recent versions of Node.js also support ES modules. Understanding both systems is important for Node.js development and for creating code that works in both browser and server environments.",
        hi: "Node.js ka apna module system hai jo CommonJS format par based hai. Halaanki, Node.js ke recent versions ES modules ko bhi support karte hain. Dono systems ko samajhna Node.js development ke liye aur aise code create karne ke liye important hai jo browser aur server environments dono mein kaam kare."
      },
      codeExample: {
        code: `// === CommonJS Modules (traditional Node.js) ===

// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// CommonJS exports
module.exports = {
  add,
  subtract
};

// Alternative individual exports
// module.exports.add = add;
// module.exports.subtract = subtract;

// user.js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  greet() {
    return \`Hello, \${this.name}!\`;
  }
}

// Export a single class/function as the main export
module.exports = User;

// app.js
// CommonJS imports
const math = require('./math.js');
const User = require('./user.js');

console.log(math.add(5, 3));  // 8
const user = new User('Alice', 'alice@example.com');
console.log(user.greet());  // "Hello, Alice!"

// Destructuring require
const { add, subtract } = require('./math.js');
console.log(subtract(10, 4));  // 6

// === Using ES Modules in Node.js ===

// Option 1: Use .mjs extension
// math.mjs
/*
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// app.mjs
import { add, subtract } from './math.mjs';
console.log(add(5, 3));  // 8
*/

// Option 2: Add "type": "module" to package.json, then use regular .js files

// === Mixing CommonJS and ES Modules ===

// Importing CommonJS from ES Module
/*
// ES Module (.mjs)
import math from './math.js';  // Default import for module.exports
console.log(math.add(5, 3));
*/

// Importing ES Module from CommonJS
/*
// CommonJS
// Dynamic import (returns a Promise)
(async () => {
  const { add } = await import('./math.mjs');
  console.log(add(5, 3));
})();
*/

// === Built-in Node.js Modules ===
const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http');

// Using built-in modules
console.log(\`OS Platform: \${os.platform()}\`);
console.log(\`Home Directory: \${os.homedir()}\`);

// Read a file
try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('File reading error:', err);
}

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\\n');
});

// server.listen(3000, '127.0.0.1', () => {
//   console.log('Server running at http://127.0.0.1:3000/');
// });

// === ES Module versions of built-in modules ===
/*
import fs from 'fs';
import path from 'path';
import os from 'os';
import http from 'http';

// OR use explicit module specifier
import { readFile } from 'fs/promises';

// Using promise-based API
try {
  const data = await readFile('example.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('File reading error:', err);
}
*/

// === Creating and Publishing Modules ===
/*
// package.json
{
  "name": "my-module",
  "version": "1.0.0",
  "description": "A helpful module",
  "main": "index.js",       // Entry point for CommonJS
  "module": "index.mjs",    // Entry point for ES modules (for bundlers)
  "exports": {              // Modern way to define entry points
    "import": "./index.mjs", // ES module importers use this
    "require": "./index.js"  // CommonJS importers use this
  },
  "type": "module",         // Use ES modules by default
  "scripts": {
    "test": "jest"
  },
  "keywords": ["utility", "helper"],
  "author": "Your Name",
  "license": "MIT"
}
*/

// Dual module with CommonJS and ES Module support
/*
// index.js (CommonJS)
const add = (a, b) => a + b;
module.exports = { add };

// index.mjs (ES Module)
export const add = (a, b) => a + b;
*/`,
        editable: true
      }
    }
  ],
  exercise: {
    title: "Module Refactoring",
    description: {
      en: "Refactor the following code to use ES modules. Split the code into appropriate module files and use import/export statements to connect them. Your goal is to create a modular structure that improves code organization and reusability.",
      hi: "Niche diye gaye code ko ES modules ka upyog karne ke liye refactor karein. Code ko appropriate module files mein split karein aur unhe connect karne ke liye import/export statements ka upyog karein. Aapka goal ek modular structure create karna hai jo code organization aur reusability ko improve kare."
    },
    starterCode: `// All code is currently in a single file
// Break it into modules with proper imports/exports

// Math utilities
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// String utilities
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  return str.split('').reverse().join('');
}

function truncate(str, length) {
  return str.length > length ? str.slice(0, length) + '...' : str;
}

// User management
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  getName() {
    return this.name;
  }
  
  getEmail() {
    return this.email;
  }
}

function createUser(name, email) {
  return new User(name, email);
}

function validateEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}

// Application code
const user1 = createUser('john doe', 'john@example.com');
console.log(capitalize(user1.getName()));  // John doe
console.log(validateEmail(user1.getEmail()) ? 'Valid email' : 'Invalid email');

const num1 = 10;
const num2 = 5;
console.log(\`Addition: \${add(num1, num2)}\`);
console.log(\`Subtraction: \${subtract(num1, num2)}\`);
console.log(\`Multiplication: \${multiply(num1, num2)}\`);
console.log(\`Division: \${divide(num1, num2)}\`);

const longText = 'This is a very long string that needs to be truncated';
console.log(truncate(longText, 20));  // This is a very long...`,
    expectedOutput: `// Split code into appropriate module files with ES imports/exports`,
    hint: {
      en: "Consider creating separate modules for different categories of functionality: math.js for math operations, string-utils.js for string manipulation, and user.js for user-related functions. In each module, use named exports for individual functions and classes. Then create a main.js file that imports and uses these modules.",
      hi: "Functionality ke different categories ke liye separate modules create karne par vichar karein: math operations ke liye math.js, string manipulation ke liye string-utils.js, aur user-related functions ke liye user.js. Har module mein, individual functions aur classes ke liye named exports ka upyog karein. Phir ek main.js file create karein jo inn modules ko import aur use kare."
    }
  },
  summary: {
    en: "JavaScript modules provide a powerful way to organize code, manage dependencies, and create maintainable applications. ES modules have become the standard, offering named and default exports, dynamic imports, and other features that enhance code structure. While older module patterns like IIFEs and CommonJS are still relevant in some contexts, modern JavaScript development embraces the official module system. Module bundlers like Webpack and Rollup transform modular code into optimized bundles for production, handling code splitting, tree shaking, and other optimizations. As both browsers and Node.js environments continue to improve their module support, understanding modules is essential for effective JavaScript development.",
    hi: {
      text: "JavaScript modules code organize karne, dependencies manage karne, aur maintainable applications create karne ka ek powerful way provide karte hain.",
      points: [
        "ES modules standard ban gaye hain, jo named aur default exports, dynamic imports, aur aise doosre features offer karte hain jo code structure ko enhance karte hain",
        "IIFEs aur CommonJS jaise older module patterns kuch contexts mein abhi bhi relevant hain, lekin modern JavaScript development official module system ko embrace karta hai",
        "Webpack aur Rollup jaise module bundlers modular code ko production ke liye optimized bundles mein transform karte hain, code splitting, tree shaking, aur doosre optimizations ko handle karte hue",
        "Jaisa ki browsers aur Node.js environments dono apne module support ko improve karte rahte hain, modules ko samajhna effective JavaScript development ke liye essential hai",
        "ES modules browser aur Node.js environments dono mein kaam karte hain, jisse cross-platform code sharing aur reuse possible hota hai",
        "Dynamic imports lazy loading aur progressive enhancement ke liye powerful tool provide karte hain, especially single-page applications mein"
      ]
    }
  },
  prevTopic: {
    id: "es6-features",
    title: "ES6+ Features"
  },
  nextTopic: {
    id: "error-handling",
    title: "Error Handling"
  }
};