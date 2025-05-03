import { useState } from 'react';
import { useLanguageContext } from '@/context/LanguageContext';
import { Tab } from '@headlessui/react';
import CodePlayground from './CodePlayground';
import CodeEditor from './CodeEditor';

export interface InteractiveCodeExampleProps {
  code: string;
  output?: string;
  explanation?: {
    en: string;
    hi: string;
  };
  title?: string;
}

export const InteractiveCodeExample: React.FC<InteractiveCodeExampleProps> = ({
  code,
  output,
  explanation,
  title = 'Interactive Example'
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const { language } = useLanguageContext();

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="my-6 border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex items-center justify-between">
        {/* <h3 className="text-sm font-medium text-gray-900 dark:text-white">
          {title}
        </h3> */}
        <div className="flex w-full ">
          <Tab.Group selectedIndex={activeTab} onChange={handleTabChange} className="w-full">
            <Tab.List className="flex p-1 bg-gray-200 dark:bg-gray-700 rounded-md">
              <Tab
                className={({ selected }) =>
                  `px-3 py-1 text-xs font-medium rounded-md ${
                    selected
                      ? 'bg-white dark:bg-gray-600 shadow'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`
                }
              >
                View
              </Tab>
              <Tab
                className={({ selected }) =>
                  `px-3 py-1 text-xs font-medium rounded-md ${
                    selected
                      ? 'bg-white dark:bg-gray-600 shadow'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`
                }
              >
                Try It
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <CodeEditor code={code} language="javascript" showLineNumbers={true} editable={false} />

                  {output && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Output
                      </h4>
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">
                        <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                          {output}
                        </pre>
                      </div>
                    </div>
                  )}

                  {explanation && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Explanation
                      </h4>
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        {language === 'en' || language === 'both' ? (
                          <p>{explanation.en}</p>
                        ) : null}
                        {language === 'hi' || language === 'both' ? (
                          <p className="mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                            {explanation.hi}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  )}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <CodePlayground initialCode={code} height="300px" />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCodeExample;