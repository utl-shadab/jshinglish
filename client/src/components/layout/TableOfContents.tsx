import { useProgressContext } from '@/context/ProgressContext';

interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
  activeId: string;
  topicId: string;
}

export const TableOfContents = ({ items, activeId, topicId }: TableOfContentsProps) => {
  const { progress } = useProgressContext();
  
  // Get the progress for this topic directly from the context
  const topicProgress = progress[topicId] || 0;
  
  // Calculate overall course progress
  const totalProgress = Math.round(
    (Object.values(progress).reduce((sum, current) => sum + current, 0) / 
    (Object.keys(progress).length * 100)) * 100
  ) || 0;

  return (
    <div className="hidden lg:block w-64 p-4 border-l border-gray-200 dark:border-[#333] overflow-y-auto sticky top-16 max-h-[calc(100vh-4rem)]">
      <div className="sticky top-0">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          On this page
        </h3>
        <nav className="mt-4">
          <ul className="space-y-3 text-sm">
            {items.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={`${
                    activeId === item.id 
                      ? 'text-primary font-medium' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Progress tracker */}
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Your progress
          </h3>
          <div className="mt-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">This topic</span>
              <span className="text-primary font-medium">{topicProgress}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-[#333] rounded-full mt-1">
              <div className="h-2 bg-primary rounded-full" style={{ width: `${topicProgress}%` }}></div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">JavaScript course</span>
              <span className="text-primary font-medium">{totalProgress}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-[#333] rounded-full mt-1">
              <div className="h-2 bg-primary rounded-full" style={{ width: `${totalProgress}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
