import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';

type LanguageType = 'en' | 'hi' | 'both';

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useLocalStorage<LanguageType>('language', 'both');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};
