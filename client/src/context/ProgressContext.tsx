import React, { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';

interface ProgressState {
  [topicId: string]: number; // topicId -> percentage (0-100)
}

interface ProgressContextType {
  progress: ProgressState;
  updateTopicProgress: (topicId: string, amount: number) => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useLocalStorage<ProgressState>('jshindi-progress', {});

  const updateTopicProgress = (topicId: string, amount: number) => {
    setProgress(prevProgress => {
      // Get current progress for this topic (default to 0)
      const currentProgress = prevProgress[topicId] || 0;
      // Calculate new progress (capped at 100%)
      const newProgress = Math.min(100, currentProgress + amount);
      
      return {
        ...prevProgress,
        [topicId]: newProgress
      };
    });
  };

  const resetProgress = () => {
    setProgress({});
  };

  return (
    <ProgressContext.Provider value={{ progress, updateTopicProgress, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgressContext = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgressContext must be used within a ProgressProvider');
  }
  return context;
};
