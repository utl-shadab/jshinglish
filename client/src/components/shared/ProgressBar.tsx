import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;
  max?: number;
  height?: number;
  showLabel?: boolean;
}

export const ProgressBar = ({ 
  value, 
  max = 100, 
  height = 8,
  showLabel = false
}: ProgressBarProps) => {
  const percentage = Math.min(Math.max(0, value), max) / max * 100;
  
  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-medium text-primary">{percentage.toFixed(0)}%</span>
        </div>
      )}
      <div 
        className="bg-gray-200 dark:bg-[#333] rounded-full overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </div>
  );
};
