import { useState } from 'react';
import { SearchBar } from '../shared/SearchBar';
import { ThemeToggle } from '../shared/ThemeToggle';
import { LanguageToggle } from '../shared/LanguageToggle';

const MobileNav = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* Fixed header */}
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-[#1E1E1E] shadow-sm z-50 md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">JSHindi</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-[#333]"
            >
              <span className="material-icons">search</span>
            </button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile search overlay */}
        {isSearchOpen && (
          <div className="p-2 border-t border-gray-200 dark:border-[#333] bg-white dark:bg-[#1E1E1E]">
            <SearchBar isMobile closeSearch={() => setIsSearchOpen(false)} />
          </div>
        )}
      </header>

      {/* Mobile bottom navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1E1E1E] border-t border-gray-200 dark:border-[#333] p-2 flex justify-around">
        <LanguageToggle isMobile />
        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-[#333]">
          <span className="material-icons">bookmark_border</span>
        </button>
      </div>
    </>
  );
};

export default MobileNav;
