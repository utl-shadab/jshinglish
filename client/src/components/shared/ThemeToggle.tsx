import { useTheme } from '@/context/ThemeContext';

interface ThemeToggleProps {
  isMobile?: boolean;
}

export const ThemeToggle = ({ isMobile = false }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-[#333]"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="material-icons dark:hidden">dark_mode</span>
      <span className="material-icons hidden dark:block">light_mode</span>
    </button>
  );
};
