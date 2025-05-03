import { useEffect, useRef, useState } from 'react';
import { useRoute, Link } from 'wouter';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import MobileNav from '@/components/layout/MobileNav';
import TableOfContents from '@/components/layout/TableOfContents';
import { useLanguageContext } from '@/context/LanguageContext';
import { useProgressContext } from '@/context/ProgressContext';
import { getTopicData } from '@/lib/topic-utils';
import ExerciseCard from '@/components/exercise/ExerciseCard';
import CodeEditor from '@/components/code/CodeEditor';
import InteractiveExample from '@/components/code/InteractiveExample';
import InteractiveCodeExample from '@/components/code/InteractiveCodeExample';

const Topic = () => {
  const [, params] = useRoute('/topic/:id');
  const topicId = params?.id || '';
  const { language } = useLanguageContext();
  const { updateTopicProgress } = useProgressContext();
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Get topic data based on the ID from the URL
  const topicData = getTopicData(topicId);

  useEffect(() => {
    if (topicData) {
      document.title = `${topicData.title} - JSHindi`;
      
      // Mark that the user has visited this topic - but only once when component mounts
      const visitedKey = `visited_${topicId}`;
      const hasVisited = localStorage.getItem(visitedKey);
      if (!hasVisited) {
        updateTopicProgress(topicId, 5);
        localStorage.setItem(visitedKey, 'true');
      }
    }
  }, [topicData, topicId, updateTopicProgress]);
  
  // Separate effect for intersection observer to avoid excessive updates
  useEffect(() => {
    if (!topicData) return;
    
    // Set up intersection observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );
    
    // Add a small delay to ensure refs are populated
    const timer = setTimeout(() => {
      // Observe all section elements
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }, 100);
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [topicData]);

  if (!topicData) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Topic not found</h1>
          <Link href="/" className="text-primary hover:underline">Return to home</Link>
        </div>
      </div>
    );
  }

  // Generate table of contents items
  const tocItems = [
    { id: 'introduction', title: 'Introduction' },
    ...topicData.sections.map(section => ({
      id: section.id,
      title: section.title
    })),
    { id: 'summary', title: 'Summary' }
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col md:pl-64 pt-14 md:pt-0 relative z-30">
        <Navbar />
        <MobileNav />
        
        <div className="flex-1 overflow-hidden flex">
          {/* Main content scroll area */}
          <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 pb-16 md:pb-6">
            <div className="max-w-4xl mx-auto">
              {/* Content header */}
              <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 font-heading">{topicData.title}</h1>
                
                {/* Language tabs */}
                <div className="border-b border-gray-200 dark:border-[#333] mb-4">
                  <div className="flex space-x-8">
                    <button 
                      onClick={() => language !== 'both' && updateTopicProgress(topicId, 0)}
                      className={`py-2 ${language === 'both' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
                    >
                      Both Languages
                    </button>
                    <button 
                      onClick={() => language !== 'en' && updateTopicProgress(topicId, 0)}
                      className={`py-2 ${language === 'en' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
                    >
                      English Only
                    </button>
                    <button 
                      onClick={() => language !== 'hi' && updateTopicProgress(topicId, 0)}
                      className={`py-2 ${language === 'hi' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
                    >
                      Hinglish Only
                    </button>
                  </div>
                </div>
                
                {/* Introduction */}
                <section 
                  id="introduction"
                  ref={el => sectionRefs.current['introduction'] = el}
                  className="prose prose-blue dark:prose-invert max-w-none"
                >
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {language === 'en' || language === 'both' ? topicData.introduction.en : ''}
                  </p>
                  {(language === 'hi' || language === 'both') && (
                    <p className="text-lg mt-2 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-gray-700 dark:text-gray-300">
                      {topicData.introduction.hi}
                    </p>
                  )}
                </section>
              </header>
              
              {/* Main article content */}
              <article className="prose prose-blue max-w-none dark:prose-invert">
                {/* Render each section */}
                {topicData.sections.map((section) => (
                  <section 
                    key={section.id} 
                    id={section.id}
                    ref={el => sectionRefs.current[section.id] = el}
                    className="mb-12"
                  >
                    <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                    
                    <div className="mt-4">
                      <p className="text-gray-700 dark:text-gray-300">
                        {language === 'en' || language === 'both' ? section.content.en : ''}
                      </p>
                      {(language === 'hi' || language === 'both') && (
                        <p className="mt-2 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-gray-700 dark:text-gray-300">
                          {section.content.hi}
                        </p>
                      )}
                    </div>
                    
                    {/* Code example */}
                    {section.codeExample && (
                      <CodeEditor 
                        code={section.codeExample.code} 
                        language="JavaScript" 
                        editable={section.codeExample.editable}
                      />
                    )}
                    
                    {/* Interactive example */}
                    {section.interactiveExample && (
                      <InteractiveCodeExample 
                        code={section.interactiveExample.code}
                        output={section.interactiveExample.output}
                        explanation={section.interactiveExample.explanation}
                        title={`${section.title} - Interactive Example`}
                      />
                    )}
                    
                    {/* Subsections */}
                    {section.subsections && section.subsections.map((subsection) => (
                      <div key={subsection.id} className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-heading">
                          {subsection.title}
                        </h3>
                        
                        <div className="mt-4">
                          <p className="text-gray-700 dark:text-gray-300">
                            {language === 'en' || language === 'both' ? subsection.content.en : ''}
                          </p>
                          {(language === 'hi' || language === 'both') && (
                            <p className="mt-2 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-gray-700 dark:text-gray-300">
                              {subsection.content.hi}
                            </p>
                          )}
                        </div>
                        
                        {/* Subsection code example */}
                        {subsection.codeExample && (
                          <CodeEditor 
                            code={subsection.codeExample.code} 
                            language="JavaScript" 
                            editable={subsection.codeExample.editable}
                          />
                        )}
                      </div>
                    ))}
                  </section>
                ))}
                
                {/* Exercise section */}
                {topicData.exercise && (
                  <ExerciseCard
                    id="exercise"
                    title={topicData.exercise.title}
                    description={topicData.exercise.description}
                    starterCode={topicData.exercise.starterCode}
                    expectedOutput={topicData.exercise.expectedOutput}
                    hint={topicData.exercise.hint}
                    topicId={topicId}
                  />
                )}
                
                {/* Summary */}
                <section 
                  id="summary" 
                  ref={el => sectionRefs.current['summary'] = el}
                  className="mb-12 bg-gray-50 dark:bg-[#1E1E1E] p-6 rounded-lg"
                >
                  <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">Summary</h2>
                  
                  <div className="mt-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      {language === 'en' || language === 'both' ? topicData.summary.en : ''}
                    </p>
                    
                    {(language === 'hi' || language === 'both') && (
                      <>
                        <p className="mt-4 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-gray-700 dark:text-gray-300">
                          {topicData.summary.hi.text}
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-gray-700 dark:text-gray-300">
                          {topicData.summary.hi.points.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </section>
                
                {/* Next/Previous navigation */}
                <div className="flex justify-between mt-12">
                  {topicData.prevTopic ? (
                    <Link 
                      href={`/topic/${topicData.prevTopic.id}`}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-[#333] rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1E1E1E] hover:bg-gray-50 dark:hover:bg-[#333]"
                    >
                      <span className="material-icons mr-2">arrow_back</span>
                      Previous: {topicData.prevTopic.title}
                    </Link>
                  ) : (
                    <div></div> // Empty div to maintain flex layout
                  )}
                  
                  {topicData.nextTopic && (
                    <Link 
                      href={`/topic/${topicData.nextTopic.id}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-600"
                    >
                      Next: {topicData.nextTopic.title}
                      <span className="material-icons ml-2">arrow_forward</span>
                    </Link>
                  )}
                </div>
              </article>
            </div>
          </div>
          
          {/* Table of contents (desktop only) */}
          <TableOfContents 
            items={tocItems} 
            activeId={activeSection} 
            topicId={topicId}
          />
        </div>
      </main>
    </div>
  );
};

export default Topic;
