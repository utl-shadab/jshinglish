import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import MobileNav from '@/components/layout/MobileNav';
import CodePlayground from '@/components/code/CodePlayground';
import { useEffect } from 'react';

const Playground = () => {
  useEffect(() => {
    document.title = 'JavaScript Playground - JSHindi';
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col md:pl-64 pt-14 md:pt-0 relative z-30">
        <Navbar />
        <MobileNav />
        
        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 pb-16 md:pb-6">
          <div className="max-w-4xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                JavaScript Playground
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300">
              Browser mein hi JavaScript code likho, chalao aur experiment karo. Is playground mein real-time syntax highlighting aur turant output milta hai.
              </p>
            </header>
            
            <div className="mb-8">
              <CodePlayground height="400px" />
            </div>
            
            <div className="prose prose-blue dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">
                Tips for Using the Playground
              </h2>
              
              <ul className="space-y-2 mt-4">
                <li>
                  <span className="font-medium">Write code:</span> Type or paste JavaScript code in the editor area.
                </li>
                <li>
                  <span className="font-medium">Run code:</span> Click the "Run" button to execute your code and see the output.
                </li>
                <li>
                  <span className="font-medium">Console output:</span> Use <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">console.log()</code> to print output to the console panel.
                </li>
                <li>
                  <span className="font-medium">DOM changes:</span> Any DOM manipulation will be visible in the preview panel.
                </li>
                <li>
                  <span className="font-medium">Error handling:</span> If your code has errors, they will be displayed in the editor.
                </li>
                <li>
                  <span className="font-medium">Experiment:</span> The playground is a safe environment to experiment with JavaScript features without affecting any other code.
                </li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 font-heading">
                Example Code Snippets
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                  <h3 className="text-lg font-semibold mb-2">Array Methods</h3>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-auto">
{`const numbers = [1, 2, 3, 4, 5];

// Map: Transform each element
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// Filter: Keep elements that pass a test
const evens = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);

// Reduce: Accumulate values
const sum = numbers.reduce((total, n) => total + n, 0);
console.log("Sum:", sum);`}
                  </pre>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                  <h3 className="text-lg font-semibold mb-2">DOM Manipulation</h3>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-auto">
{`// Create a new heading element
const heading = document.createElement('h3');
heading.textContent = 'Created with JavaScript!';
heading.style.color = 'blue';
document.body.appendChild(heading);

// Create and append a button
const button = document.createElement('button');
button.textContent = 'Click Me!';
button.style.padding = '8px 16px';
button.style.backgroundColor = '#4CAF50';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '4px';
button.style.margin = '10px 0';

// Add an event listener
button.addEventListener('click', () => {
  const message = document.createElement('p');
  message.textContent = 'Button was clicked!';
  document.body.appendChild(message);
});

document.body.appendChild(button);
console.log("DOM elements created");`}
                  </pre>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                  <h3 className="text-lg font-semibold mb-2">Async/Await</h3>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-auto">
{`// Simulating an API call
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'John' });
    }, 1000);
  });
}

// Using async/await
async function getData() {
  console.log('Fetching data...');
  const data = await fetchData();
  console.log('Data received:', data);
  
  // Create element to show the result
  const result = document.createElement('div');
  result.innerHTML = \`<strong>Data:</strong> \${JSON.stringify(data)}\`;
  document.body.appendChild(result);
  
  return data;
}

// Call the async function
getData().then(result => {
  console.log('Processing result:', result);
});`}
                  </pre>
                </div>
                
                <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                  <h3 className="text-lg font-semibold mb-2">ES6+ Features</h3>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-auto">
{`// Destructuring
const person = { name: 'Alice', age: 30, city: 'New York' };
const { name, age } = person;
console.log(name, age);

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

// Template literals
const greeting = \`Hello \${name}, you are \${age} years old\`;
console.log(greeting);

// Optional chaining
const user = { 
  profile: { address: { city: 'Boston' } }
};
const city = user?.profile?.address?.city;
console.log(city);

// Create a display element
const display = document.createElement('div');
display.innerHTML = \`
  <p>Name: \${name}</p>
  <p>Age: \${age}</p>
  <p>City: \${city}</p>
  <p>Greeting: \${greeting}</p>
\`;
document.body.appendChild(display);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Playground;