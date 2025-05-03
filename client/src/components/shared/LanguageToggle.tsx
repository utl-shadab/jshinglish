import { useState, useRef, useEffect } from 'react';
import { useLanguageContext } from '@/context/LanguageContext';

interface LanguageToggleProps {
  isMobile?: boolean;
}

export const LanguageToggle = ({ isMobile = false }: LanguageToggleProps) => {
  const { language, setLanguage } = useLanguageContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (lang: 'en' | 'hi' | 'both') => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  if (isMobile) {
    return (
      <div className="flex flex-col items-center">
        <button
          onClick={toggleDropdown}
          className={`p-2 rounded-full ${isDropdownOpen || language === 'both' ? 'text-primary bg-blue-50 dark:bg-blue-900/20' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-[#333]'}`}
        >
          <span className="material-icons">translate</span>
        </button>
        {language !== 'both' && (
          <span className="text-xs mt-1">
            {language === 'en' ? '🇬🇧' : '🇮🇳'}
          </span>
        )}

        {isDropdownOpen && (
          <div 
            ref={dropdownRef}
            className="absolute bottom-16 bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-[#333] rounded-md shadow-lg z-50 w-48"
          >
            <div className="py-1">
              <button 
                onClick={() => selectLanguage('en')}
                className={`flex items-center w-full px-4 py-2 text-sm text-left ${language === 'en' ? 'text-primary font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333]'}`}
              >
                <span className="mr-2">🇬🇧</span> English only
              </button>
              <button 
                onClick={() => selectLanguage('hi')}
                className={`flex items-center w-full px-4 py-2 text-sm text-left ${language === 'hi' ? 'text-primary font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333]'}`}
              >
                <span className="mr-2">🇮🇳</span> Hinglish only
              </button>
              <button 
                onClick={() => selectLanguage('both')}
                className={`flex items-center w-full px-4 py-2 text-sm text-left ${language === 'both' ? 'text-primary font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333]'}`}
              >
                <span className="mr-2">🇬🇧🇮🇳</span> Both languages
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        id="language-menu-button" 
        onClick={toggleDropdown}
        className="flex items-center space-x-1 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333]"
      >
        <span className="material-icons">translate</span>
        <span className="text-sm">
          {language === 'en' ? 'English' : language === 'hi' ? 'Hinglish' : 'Both'}
        </span>
        <span className="material-icons text-sm">arrow_drop_down</span>
      </button>
      
      {isDropdownOpen && (
        <div
          className="absolute right-0 mt-2 w-40 bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-[#333] rounded-md shadow-lg z-50"
        >
          <div className="py-1">
            <button 
              onClick={() => selectLanguage('en')}
              className={`flex items-center w-full px-4 py-2 text-sm text-left ${language === 'en' ? 'text-primary font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333]'}`}
            >
              <span className="mr-2">🇬🇧</span> English only
            </button>
            <button 
              onClick={() => selectLanguage('hi')}
              className={`flex items-center w-full px-4 py-2 text-sm text-left ${language === 'hi' ? 'text-primary font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333]'}`}
            >
              <span className="mr-2">🇮🇳</span> Hinglish only
            </button>
            <button 
              onClick={() => selectLanguage('both')}
              className={`flex items-center w-full px-4 py-2 text-sm text-left ${language === 'both' ? 'text-primary font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333]'}`}
            >
              <span className="mr-2">🇬🇧🇮🇳</span> Both languages
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
