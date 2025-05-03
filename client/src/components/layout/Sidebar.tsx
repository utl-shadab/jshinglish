import { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { navigation } from '@/data/navigation';
import { useProgressContext } from '@/context/ProgressContext';
import { ProgressBar } from '../shared/ProgressBar';
import { useLocalStorage } from '@/hooks/use-local-storage';
import SVGComponent from '../shared/SvgLogo';

interface NavSectionProps {
  title: string;
  items: {
    id: string;
    title: string;
    path: string;
  }[];
  defaultOpen?: boolean;
}

const NavSection = ({ title, items, defaultOpen = false }: NavSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [location] = useLocation();

  // Check if any of the items in this section is active
  const isActive = items.some(item => location === item.path);

  // If any item is active, open the section
  useEffect(() => {
    if (isActive && !isOpen) {
      setIsOpen(true);
    }
  }, [isActive, isOpen]);

  return (
    <div className="nav-section">
      <div
        className="flex justify-between items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333] rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{title}</span>
        <span className={`material-icons transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          expand_more
        </span>
      </div>
      {isOpen && (
        <div className="pl-4 mt-1 space-y-1">
          {items.map(item => (
            <Link
              key={item.id}
              href={item.path}
              className={`block px-3 py-2 rounded-md text-sm ${location === item.path
                  ? 'text-primary font-medium bg-blue-50 dark:bg-blue-900/20'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333]'
                }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const { progress } = useProgressContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [isCollapsed, setIsCollapsed] = useLocalStorage<boolean>('sidebar-collapsed', false);

  const closeSidebar = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    // Close sidebar on location change for mobile
    closeSidebar();
  }, [location]);

  // Calculate overall progress
  const totalProgress = Math.round(
    (Object.values(progress).reduce((sum, current) => sum + current, 0) /
      (Object.keys(progress).length * 100)) * 100
  ) || 0;

  return (
    <>
      <aside
        id="sidebar"
        className={`fixed inset-y-0 left-0  bg-white dark:bg-[#1E1E1E] ${isCollapsed ? 'w-16' : 'w-64'} border-r border-gray-200 dark:border-[#333] 
                    transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
                    md:translate-x-0 transition-all duration-300 ease-in-out  md:z-50 overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Logo area */}
          <div className=" border-b border-gray-200 dark:border-[#333] flex items-center justify-center">
            <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : 'space-x-2'}`}>
              {/* {!isCollapsed && <span className="text-primary text-2xl font-bold">JSHindi</span>}
              {isCollapsed && <span className="text-primary text-xl font-bold">JS</span>} */}
              {!isCollapsed ? (
                <div className="flex items-center gap-2">
                  <SVGComponent width={120} height={120} />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <SVGComponent width={24} height={24} />
                </div>
              )}
            </div>
            {!isCollapsed && (
              <button
                onClick={closeSidebar}
                className="p-1 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-[#333] md:hidden"
              >
                <span className="material-icons">close</span>
              </button>
            )}
          </div>

          {/* Toggle button for desktop */}
          <button
            onClick={toggleSidebar}
            className="absolute top-4 -right-3 p-1.5 rounded-full bg-white dark:bg-[#333] shadow-md border border-gray-200 dark:border-[#444] hidden md:flex items-center justify-center"
          >
            <span className="material-icons text-gray-600 dark:text-gray-300 text-sm">
              {isCollapsed ? 'chevron_right' : 'chevron_left'}
            </span>
          </button>

          {/* Navigation links */}
          <div className="overflow-y-auto flex-grow" style={{ height: '0px' }}>
            {!isCollapsed ? (
              <nav className="py-4 px-2 space-y-1">
                <div className="space-y-2">
                  {navigation.map((section) => (
                    <NavSection
                      key={section.title}
                      title={section.title}
                      items={section.items}
                      defaultOpen={section.defaultOpen}
                    />
                  ))}
                </div>
              </nav>
            ) : (
              <nav className="py-4 flex flex-col items-center space-y-6">
                {navigation.map((section) => (
                  <div key={section.title} className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#333] rounded-md cursor-pointer"
                      title={section.title}
                    >
                      <span className="material-icons text-xl">folder</span>
                    </div>
                  </div>
                ))}
              </nav>
            )}
          </div>

          {/* User progress tracker */}
          <div className="mt-auto">
            {!isCollapsed ? (
              <div className="p-4 border-t border-gray-200 dark:border-[#333]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Progress</span>
                  <span className="text-xs text-primary">{totalProgress}%</span>
                </div>
                <ProgressBar value={totalProgress} />
              </div>
            ) : (
              <div className="p-2 border-t border-gray-200 dark:border-[#333] flex justify-center">
                <div
                  className="w-8 h-8 flex items-center justify-center text-primary"
                  title={`Progress: ${totalProgress}%`}
                >
                  <span className="material-icons">pie_chart</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed bottom-4 left-4 z-30 md:hidden p-3 rounded-full bg-primary text-white shadow-lg"
      >
        <span className="material-icons">menu</span>
      </button>
    </>
  );
};

export default Sidebar;
