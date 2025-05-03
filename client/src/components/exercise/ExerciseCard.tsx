import { useState } from 'react';
import CodeEditor from '../code/CodeEditor';
import { useLanguageContext } from '@/context/LanguageContext';
import { executeCode } from '@/lib/code-executor';
import { useProgressContext } from '@/context/ProgressContext';
import { motion } from 'framer-motion';

interface ExerciseCardProps {
  id: string;
  title: string;
  description: {
    en: string;
    hi: string;
  };
  starterCode: string;
  expectedOutput?: string;
  hint?: {
    en: string;
    hi: string;
  };
  topicId: string;
}

export const ExerciseCard = ({ 
  id, 
  title, 
  description, 
  starterCode, 
  expectedOutput,
  hint,
  topicId
}: ExerciseCardProps) => {
  const [code, setCode] = useState(starterCode);
  const [isShowingHint, setIsShowingHint] = useState(false);
  const [output, setOutput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguageContext();
  const { updateTopicProgress } = useProgressContext();

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    // Reset correct status when code changes
    if (isCorrect !== null) {
      setIsCorrect(null);
    }
  };

  const checkAnswer = async () => {
    setIsSubmitting(true);
    setOutput('');

    try {
      const result = await executeCode(code);
      setOutput(result);

      // Very basic comparison for now
      const normalizedResult = result.trim();
      const normalizedExpected = expectedOutput?.trim() || '';

      const correct = normalizedResult === normalizedExpected;
      setIsCorrect(correct);

      if (correct) {
        // Update progress on correct answer
        updateTopicProgress(topicId, 10); // Add 10% to the topic progress
      }
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : String(error)}`);
      setIsCorrect(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleHint = () => {
    setIsShowingHint(!isShowingHint);
  };

  return (
    <section id={id} className="mb-12 border-2 border-accent rounded-lg p-6 bg-amber-50 dark:bg-amber-900/10">
      <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white flex items-center">
        <span className="material-icons mr-2 text-accent">assignment</span>
        {title}
      </h2>
      
      <div className="mt-4">
        <p className="text-gray-700 dark:text-gray-300">
          {language === 'en' || language === 'both' ? description.en : ''}
        </p>
        {(language === 'hi' || language === 'both') && (
          <p className="mt-2 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-gray-700 dark:text-gray-300">
            {description.hi}
          </p>
        )}
      </div>
      
      {/* Exercise code editor */}
      <CodeEditor 
        code={code} 
        language="JavaScript" 
        onCodeChange={handleCodeChange}
      />
      
      <div className="mt-4 flex flex-wrap gap-4">
        <button
          onClick={checkAnswer}
          disabled={isSubmitting}
          className={`px-4 py-2 rounded-md text-white font-medium 
            ${isSubmitting 
              ? 'bg-gray-400' 
              : 'bg-primary hover:bg-blue-600 active:bg-blue-700'} 
            transition-colors shadow-sm`}
        >
          {isSubmitting ? 'Checking...' : 'Submit Answer'}
        </button>
        
        {hint && (
          <button
            onClick={toggleHint}
            className="px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 font-medium border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-[#333] transition-colors"
          >
            {isShowingHint ? 'Hide Hint' : 'Show Hint'}
          </button>
        )}
      </div>
      
      {/* Hint section */}
      {isShowingHint && hint && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          <details open className="group">
            <summary className="flex items-center cursor-pointer text-primary font-medium">
              <span className="material-icons mr-2 text-sm group-open:rotate-90 transition-transform">
                arrow_right
              </span>
              Hint (संकेत)
            </summary>
            <div className="pl-8 mt-2 text-gray-700 dark:text-gray-300">
              <p>
                {language === 'en' || language === 'both' ? hint.en : ''}
              </p>
              {(language === 'hi' || language === 'both') && (
                <p className="mt-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border-l-3 border-blue-500 text-sm">
                  {hint.hi}
                </p>
              )}
            </div>
          </details>
        </motion.div>
      )}
      
      {/* Result area */}
      {output && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-4 rounded-md border border-gray-200 dark:border-[#333]"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="font-medium">Result:</span>
            {isCorrect !== null && (
              <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${isCorrect ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'}`}>
                {isCorrect ? 'Correct' : 'Incorrect'}
              </span>
            )}
          </div>
          <pre className="p-3 bg-black text-white rounded text-sm font-code overflow-x-auto">{output}</pre>
          
          {isCorrect === true && (
            <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/20 border-l-4 border-green-500 text-green-800 dark:text-green-300">
              Great job! You've completed this exercise successfully.
            </div>
          )}
          
          {isCorrect === false && expectedOutput && (
            <div className="mt-4">
              <div className="font-medium mb-1">Expected output:</div>
              <pre className="p-3 bg-gray-100 dark:bg-gray-800 rounded text-sm font-code overflow-x-auto">{expectedOutput}</pre>
            </div>
          )}
        </motion.div>
      )}
    </section>
  );
};

export default ExerciseCard;
