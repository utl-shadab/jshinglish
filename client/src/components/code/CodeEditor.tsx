import { useState, useEffect, useRef } from 'react';
import { executeCode } from '@/lib/code-executor';
import { motion } from 'framer-motion';

interface CodeEditorProps {
  code: string;
  language: string;
  editable?: boolean;
  showLineNumbers?: boolean;
  onCodeChange?: (code: string) => void;
}

export const CodeEditor = ({ 
  code: initialCode, 
  language, 
  editable = true, 
  showLineNumbers = true,
  onCodeChange 
}: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  // Sync textarea and pre element for proper display
  useEffect(() => {
    if (editorRef.current && preRef.current) {
      preRef.current.textContent = code;
    }
  }, [code]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCode(newCode);
    if (onCodeChange) {
      onCodeChange(newCode);
    }
  };

  const handleRun = async () => {
    if (isRunning) return;

    setIsRunning(true);
    setOutput('');
    
    try {
      const result = await executeCode(code);
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
    if (onCodeChange) {
      onCodeChange(initialCode);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="mt-6 code-editor border border-gray-200 dark:border-[#333] rounded-lg overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-[#333] border-b border-gray-200 dark:border-[#333]">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{language}</span>
        <div className="flex space-x-2">
          {editable && (
            <>
              <button 
                className={`text-xs px-2 py-1 rounded text-white ${isRunning ? 'bg-gray-400' : 'bg-primary hover:bg-blue-600'} transition-colors`}
                onClick={handleRun}
                disabled={isRunning}
              >
                {isRunning ? 'Running...' : 'Run'}
              </button>
              <button 
                className="text-xs px-2 py-1 rounded bg-white dark:bg-[#1E1E1E] text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-[#333] shadow-sm hover:bg-gray-50 dark:hover:bg-[#333]"
                onClick={resetCode}
              >
                Reset
              </button>
            </>
          )}
          <button 
            className="text-xs px-2 py-1 rounded bg-white dark:bg-[#1E1E1E] text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-[#333] shadow-sm hover:bg-gray-50 dark:hover:bg-[#333]"
            onClick={copyCode}
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Hidden textarea for editing */}
        {editable && (
          <textarea
            ref={editorRef}
            value={code}
            onChange={handleCodeChange}
            className="absolute top-0 left-0 w-full h-full p-4 bg-transparent text-transparent caret-black dark:caret-white z-10 font-code resize-none outline-none"
            spellCheck="false"
            aria-label="Code editor"
          />
        )}

        {/* Syntax highlighted code display */}
        <div className="p-4 bg-white dark:bg-gray-900 overflow-x-auto">
          <pre 
            ref={preRef}
            className={`text-sm font-code relative ${showLineNumbers ? 'pl-8' : ''}`}
            style={{ 
              minHeight: '1.5em',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word'
            }}
          >
            {/* Line numbers */}
            {showLineNumbers && (
              <div 
                className="absolute left-0 top-0 bottom-0 w-6 flex flex-col items-end pr-2 text-gray-400 select-none"
                aria-hidden="true"
              >
                {code.split('\n').map((_, i) => (
                  <div key={i} className="leading-relaxed">{i + 1}</div>
                ))}
              </div>
            )}
            <code>{code}</code>
          </pre>
        </div>
      </div>

      {/* Output area */}
      {editable && output && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="border-t border-gray-200 dark:border-[#333]"
        >
          <div className="bg-gray-100 dark:bg-[#333] px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Output
          </div>
          <div className="p-4 bg-black text-white overflow-x-auto font-code">
            <pre className="text-sm whitespace-pre-wrap">{output}</pre>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CodeEditor;
