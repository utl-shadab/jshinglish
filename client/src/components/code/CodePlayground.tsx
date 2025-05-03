import { useState, useEffect, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { useTheme } from '@/context/ThemeContext';

interface CodePlaygroundProps {
  initialCode?: string;
  height?: string;
  showLineNumbers?: boolean;
  readOnly?: boolean;
}

const DEFAULT_CODE = `// Try writing some JavaScript code here
// and click "Run" to see the output

// Example: Create and append elements
const heading = document.createElement('h2');
heading.textContent = 'Created with JavaScript!';
heading.style.color = 'blue';
document.getElementById('output-preview').appendChild(heading);

// Example: Add a button with an event listener
const button = document.createElement('button');
button.textContent = 'Click me!';
button.style.padding = '8px 16px';
button.style.backgroundColor = '#4CAF50';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '4px';
button.style.cursor = 'pointer';
button.style.margin = '10px 0';

button.addEventListener('click', function() {
  console.log('Button clicked!');
  const newElement = document.createElement('p');
  newElement.textContent = 'You clicked the button!';
  document.getElementById('output-preview').appendChild(newElement);
});

document.getElementById('output-preview').appendChild(button);

// Function example
function greet(name) {
  return \`Hello, \${name}!\`;
}

const result = greet("World");
console.log(result);

// Array methods example
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled numbers:", doubled);
`;

export const CodePlayground = ({
  initialCode = DEFAULT_CODE,
  height = '300px',
  showLineNumbers = true,
  readOnly = false
}: CodePlaygroundProps) => {
  const { theme } = useTheme();
  const [code, setCode] = useState(initialCode);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  // Reset output when code changes
  useEffect(() => {
    setError(null);
  }, [code]);

  const handleCodeChange = (value: string) => {
    setCode(value);
  };

  const executeCode = (codeToExecute: string) => {
    // Create a container for console outputs
    const consoleMessages: string[] = [];
    
    // Create a sandbox environment
    try {
      // Clear previous preview content
      if (previewRef.current) {
        previewRef.current.innerHTML = '<div id="output-preview"></div>';
      }

      // Override console methods to capture output
      const originalConsole = {
        log: console.log,
        error: console.error,
        warn: console.warn,
        info: console.info
      };

      // Create mock console methods
      window.console.log = (...args) => {
        originalConsole.log(...args);
        consoleMessages.push(args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' '));
      };
      
      window.console.error = (...args) => {
        originalConsole.error(...args);
        consoleMessages.push(`ERROR: ${args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' ')}`);
      };
      
      window.console.warn = (...args) => {
        originalConsole.warn(...args);
        consoleMessages.push(`WARNING: ${args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' ')}`);
      };
      
      window.console.info = (...args) => {
        originalConsole.info(...args);
        consoleMessages.push(`INFO: ${args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' ')}`);
      };

      // Execute the code
      // Use Function constructor to avoid scope issues and allow DOM manipulation
      const sandboxFunction = new Function(codeToExecute);
      sandboxFunction();
      
      // Restore original console
      window.console.log = originalConsole.log;
      window.console.error = originalConsole.error;
      window.console.warn = originalConsole.warn;
      window.console.info = originalConsole.info;
      
      return consoleMessages;
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  };

  const runCode = async () => {
    try {
      setIsRunning(true);
      setError(null);
      setConsoleOutput(['Running...']);
      
      const result = executeCode(code);
      setConsoleOutput(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setConsoleOutput([]);
    } finally {
      setIsRunning(false);
    }
  };

  const clearOutput = () => {
    setConsoleOutput([]);
    setError(null);
    if (previewRef.current) {
      previewRef.current.innerHTML = '<div id="output-preview"></div>';
    }
  };

  return (
    <div className="rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
      {/* Code editor */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
            JavaScript Editor
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={clearOutput}
              disabled={isRunning || (!consoleOutput.length && !error)}
              className={`px-3 py-1 text-xs rounded-md ${
                isRunning || (!consoleOutput.length && !error)
                  ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Clear
            </button>
            <button
              onClick={runCode}
              disabled={isRunning}
              className={`px-3 py-1 text-xs rounded-md ${
                isRunning
                  ? 'bg-blue-300 dark:bg-blue-800 text-white cursor-not-allowed'
                  : 'bg-primary text-white hover:bg-blue-600'
              }`}
            >
              {isRunning ? 'Running...' : 'Run'}
            </button>
          </div>
        </div>
        <CodeMirror
          value={code}
          height={height}
          extensions={[javascript({ jsx: true })]}
          onChange={handleCodeChange}
          theme={theme === 'dark' ? oneDark : undefined}
          basicSetup={{
            lineNumbers: showLineNumbers,
            highlightActiveLine: true,
            highlightSelectionMatches: true,
            autocompletion: true,
            closeBrackets: true,
            bracketMatching: true,
          }}
          readOnly={readOnly}
          className="text-sm"
        />
      </div>

      {/* Output */}
      <div className="bg-gray-900 p-4">
        <div className="flex mb-2">
          <h3 className="text-sm font-medium text-gray-300 mr-4">DOM Output</h3>
          <h3 className="text-sm font-medium text-gray-300">Console Output</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {/* DOM Output Preview */}
          <div 
            ref={previewRef}
            className="font-sans p-3 rounded bg-white text-black overflow-auto"
            style={{ minHeight: '200px', maxHeight: '300px' }}
          >
            <div id="output-preview"></div>
          </div>
          
          {/* Console Output */}
          <div 
            className={`font-mono text-sm p-3 rounded bg-black overflow-auto ${
              error ? 'text-red-400' : 'text-green-400'
            }`}
            style={{ minHeight: '200px', maxHeight: '300px' }}
          >
            {error ? (
              <div className="text-red-400">
                <span className="font-bold">Error:</span> {error}
              </div>
            ) : consoleOutput.length > 0 ? (
              <pre className="whitespace-pre-wrap">
                {consoleOutput.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </pre>
            ) : (
              <div className="text-gray-500 italic">Click "Run" to execute your code</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;