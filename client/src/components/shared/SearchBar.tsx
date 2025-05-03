import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { search } from '@/lib/search';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  id: string;
  title: string;
  path: string;
  excerpt: string;
}

interface SearchBarProps {
  isMobile?: boolean;
  closeSearch?: () => void;
}

export const SearchBar = ({ isMobile = false, closeSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Focus input on mobile
    if (isMobile && inputRef.current) {
      inputRef.current.focus();
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile]);

  useEffect(() => {
    if (searchTerm.trim().length > 1) {
      setIsSearching(true);
      setShowResults(true);
      
      const timer = setTimeout(() => {
        const searchResults = search(searchTerm);
        setResults(searchResults);
        setIsSearching(false);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setShowResults(false);
      setIsSearching(false);
    }
  }, [searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleResultClick = (path: string) => {
    setLocation(path);
    setSearchTerm('');
    setShowResults(false);
    if (closeSearch) closeSearch();
  };

  return (
    <div className={`relative ${isMobile ? 'w-full' : 'w-64'}`} ref={searchRef}>
      <div className="relative">
        <input 
          ref={inputRef}
          type="text" 
          placeholder="Search documentation..." 
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setShowResults(searchTerm.trim().length > 1)}
          className={`${isMobile ? 'w-full' : 'w-64'} pl-10 pr-4 py-1.5 text-sm rounded-lg border border-gray-300 dark:border-[#333] bg-white dark:bg-[#1E1E1E] text-gray-900 dark:text-white`} 
        />
        <span className="material-icons absolute left-3 top-2.5 text-gray-400">search</span>
        {searchTerm && (
          <button 
            className="absolute right-3 top-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            onClick={() => setSearchTerm('')}
          >
            <span className="material-icons text-sm">close</span>
          </button>
        )}
      </div>

      <AnimatePresence>
        {showResults && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 mt-2 bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-[#333] rounded-md shadow-lg z-[9999999999] max-h-80 overflow-y-auto"
          >
            {isSearching ? (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                <div className="animate-pulse">Searching...</div>
              </div>
            ) : results.length > 0 ? (
              <ul className="py-1">
                {results.map((result) => (
                  <li key={result.id}>
                    <button
                      onClick={() => handleResultClick(result.path)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#333] focus:outline-none focus:bg-gray-100 dark:focus:bg-[#333]"
                    >
                      <div className="text-sm text-gray-900 dark:text-white">
                        {result.title}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {result.excerpt}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            ) : searchTerm.trim().length > 1 ? (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400 ">
                No results found
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
