import { useState } from 'react';
import CodeEditor from './CodeEditor';
import { useLanguageContext } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

interface InteractiveExampleProps {
  code: string;
  output: string;
  explanation: {
    en: string;
    hi: string;
  };
}

export const InteractiveExample = ({ code, output, explanation }: InteractiveExampleProps) => {
  const [showFullEditor, setShowFullEditor] = useState(false);
  const [userCode, setUserCode] = useState(code);
  const { language } = useLanguageContext();

  const toggleFullEditor = () => {
    setShowFullEditor(!showFullEditor);
  };

  return (
    <div className="mt-6 border border-gray-200 dark:border-[#333] rounded-lg overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-[#333] border-b border-gray-200 dark:border-[#333]">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Interactive example</span>
        <button 
          onClick={toggleFullEditor}
          className="text-xs px-2 py-1 rounded bg-primary text-white border border-primary shadow-sm hover:bg-blue-600"
        >
          {showFullEditor ? 'View Example' : 'Try it yourself'}
        </button>
      </div>
      
      <AnimatePresence mode="wait">
        {showFullEditor ? (
          <motion.div
            key="editor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CodeEditor 
              code={userCode} 
              language="JavaScript" 
              onCodeChange={setUserCode}
            />
          </motion.div>
        ) : (
          <motion.div 
            key="example"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-[#333]"
          >
            {/* Code section */}
            <div className="p-4 bg-white dark:bg-gray-900 overflow-x-auto">
              <pre className="text-sm font-code"><code>{code}</code></pre>
            </div>
            
            {/* Output section */}
            <div className="p-4 bg-gray-50 dark:bg-[#1E1E1E]">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Output:</h4>
              <div className="p-3 bg-black text-white rounded text-sm font-code">
                {output}
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'en' || language === 'both' ? explanation.en : ''}
                </p>
                {(language === 'hi' || language === 'both') && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 border-l-3 border-blue-500">
                    {explanation.hi}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveExample;
