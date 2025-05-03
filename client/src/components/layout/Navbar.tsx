import { useLocation, Link } from 'wouter';
import { SearchBar } from '../shared/SearchBar';
import { ThemeToggle } from '../shared/ThemeToggle';
import { LanguageToggle } from '../shared/LanguageToggle';
import { useState, useRef, useEffect } from 'react';
import { getBreadcrumbs } from '@/lib/topic-utils';

const Navbar = () => {
  const [location] = useLocation();
  const breadcrumbs = getBreadcrumbs(location);

  return (
    <div className="hidden md:flex items-center justify-between h-16 px-4 bg-white dark:bg-[#1E1E1E] border-b border-gray-200 dark:border-[#333] sticky top-0 z-10">
      <div className="flex-1 flex items-center">
        {/* Breadcrumb navigation */}
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            {breadcrumbs.map((crumb, index) => {
              // If it's the last item, render without a link
              if (index === breadcrumbs.length - 1) {
                return (
                  <li key={index} aria-current="page">
                    <div className="flex items-center">
                      {index > 0 && (
                        <span className="material-icons text-gray-400 text-sm">
                          chevron_right
                        </span>
                      )}
                      <span className={`ml-1 text-sm font-medium ${index > 0 ? 'text-primary' : 'text-gray-700 dark:text-gray-300'}`}>
                        {crumb.title}
                      </span>
                    </div>
                  </li>
                );
              }
              
              // Otherwise, render with a link
              return (
                <li key={index}>
                  <div className="flex items-center">
                    {index > 0 && (
                      <span className="material-icons text-gray-400 text-sm">
                        chevron_right
                      </span>
                    )}
                    <Link 
                      href={crumb.path} 
                      className={`ml-1 text-sm text-gray-700 dark:text-gray-300 hover:text-primary ${
                        index === 0 ? '' : 'ml-1'
                      }`}
                    >
                      {crumb.title}
                    </Link>
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
      
      {/* Right side actions */}
      <div className="flex items-center space-x-4">
        {/* Search box */}
        <SearchBar />
        
        {/* Dark mode toggle */}
        <ThemeToggle />
        
        {/* Language preference */}
        <LanguageToggle />
      </div>
    </div>
  );
};

export default Navbar;
