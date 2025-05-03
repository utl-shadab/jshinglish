/**
 * A simple JavaScript code executor that evaluates code in a safe manner.
 * It captures console.log output and handles errors.
 */

interface ExecutionContext {
  logs: string[];
  errors: string[];
}

// Create a safe execution environment for user code
function createSafeExecutionEnvironment() {
  const context: ExecutionContext = {
    logs: [],
    errors: []
  };
  
  // Create a safe console object that captures logs
  const safeConsole = {
    log: (...args: any[]) => {
      context.logs.push(
        args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' ')
      );
    },
    warn: (...args: any[]) => {
      context.logs.push(
        'Warning: ' + args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' ')
      );
    },
    error: (...args: any[]) => {
      context.errors.push(
        args.map(arg => 
          arg instanceof Error ? arg.message : 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' ')
      );
    }
  };
  
  return { context, safeConsole };
}

/**
 * Executes JavaScript code and returns the output
 * @param code - The JavaScript code to execute
 * @returns A promise that resolves to the output of the code execution
 */
export async function executeCode(code: string): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      const { context, safeConsole } = createSafeExecutionEnvironment();
      
      // Create a function that will execute the user code with the safe console
      const executeUserCode = new Function('console', code);
      
      // Execute the code with the safe console
      executeUserCode(safeConsole);
      
      // Combine logs and errors
      const output = [
        ...context.logs,
        ...context.errors.map(err => `Error: ${err}`)
      ].join('\n');
      
      resolve(output);
    } catch (error) {
      if (error instanceof Error) {
        reject(error.message);
      } else {
        reject('An unknown error occurred');
      }
    }
  });
}
