import { useEffect } from 'react';
import { Link } from 'wouter';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import MobileNav from '@/components/layout/MobileNav';
import { navigation } from '@/data/navigation';
import { useLanguageContext } from '@/context/LanguageContext';

const Home = () => {
  const { language } = useLanguageContext();

  useEffect(() => {
    document.title = 'JSHindi - JavaScript Documentation in English & Hinglish';
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col md:pl-64 pt-14 md:pt-0 relative z-30">
        <Navbar />
        <MobileNav />
        
        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 pb-16 md:pb-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <section className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                Learn JavaScript in English & Hinglish
              </h1>
              
              <div className="mt-6 space-y-4">
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  Welcome to JSHindi, a comprehensive JavaScript learning platform that offers documentation and interactive examples in both English and Hinglish.
                </p>
                
                {language === 'both' || language === 'hi' ? (
                  <p className="px-4 py-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 text-gray-700 dark:text-gray-300 text-xl">
                   JSHindi mein aapka swagat hai, ek comprehensive JavaScript learning platform jo English aur Hinglish dono mein documentation aur interactive examples provide karta hai.
                  </p>
                ) : null}
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/topic/introduction" className="px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-sm hover:bg-blue-600 transition-colors">
                  Get Started
                </Link>
                <a href="#features" className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Learn More
                </a>
              </div>
            </section>
            
            {/* Features Section */}
            <section id="features" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-heading">Key Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 dark:border-[#333] rounded-lg p-6 bg-white dark:bg-[#1E1E1E] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="material-icons text-primary text-3xl mr-3">translate</span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bilingual Content</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Learn JavaScript in English, Hinglish, or both languages side by side.
                  </p>
                </div>
                
                <div className="border border-gray-200 dark:border-[#333] rounded-lg p-6 bg-white dark:bg-[#1E1E1E] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="material-icons text-primary text-3xl mr-3">code</span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Interactive Examples</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Edit and run code directly in your browser with our interactive code editor.
                  </p>
                </div>
                
                <div className="border border-gray-200 dark:border-[#333] rounded-lg p-6 bg-white dark:bg-[#1E1E1E] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="material-icons text-primary text-3xl mr-3">assignment</span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Practice Exercises</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Reinforce your learning with practical exercises and coding challenges.
                  </p>
                </div>
                
                <div className="border border-gray-200 dark:border-[#333] rounded-lg p-6 bg-white dark:bg-[#1E1E1E] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="material-icons text-primary text-3xl mr-3">trending_up</span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Progress Tracking</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Track your learning progress as you advance through the course.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Topics Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-heading">Start Learning</h2>
              
              <div className="space-y-6">
                {navigation.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{section.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.items.map((item) => (
                        <Link 
                          key={item.id} 
                          href={item.path}
                          className="flex items-center p-4 border border-gray-200 dark:border-[#333] rounded-lg bg-white dark:bg-[#1E1E1E] hover:border-primary dark:hover:border-primary transition-colors"
                        >
                          <span className="material-icons text-primary mr-3">description</span>
                          <span className="text-gray-900 dark:text-white">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Footer */}
            <footer className="border-t border-gray-200 dark:border-[#333] pt-6 mt-12 text-center text-gray-500 dark:text-gray-400 text-sm">
              <p>JSHindi - A JavaScript Learning Resource in English & Hinglish</p>
              <p className="mt-2">Inspired by MDN Web Docs but with bilingual content</p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
