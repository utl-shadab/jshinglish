import { variablesData } from '@/data/topics/variables';
import { operatorsData } from '@/data/topics/operators';
import { arraysData } from '@/data/topics/arrays';
import { introductionData } from '@/data/topics/introduction';
import { functionsData } from '@/data/topics/functions';
import { objectsData } from '@/data/topics/objects';
import { controlFlowData } from '@/data/topics/control-flow';
import { thisKeywordData } from '@/data/topics/this-keyword';
import { prototypesData } from '@/data/topics/prototypes';
import { asyncJsData } from '@/data/topics/async-js';
import { es6FeaturesData } from '@/data/topics/es6-features';
import { javascriptModulesData } from '@/data/topics/javascript-modules';
import { errorHandlingData } from '@/data/topics/error-handling';

export interface Topic {
  id: string;
  title: string;
  introduction: {
    en: string;
    hi: string;
  };
  sections: Array<{
    id: string;
    title: string;
    content: {
      en: string;
      hi: string;
    };
    codeExample?: {
      code: string;
      editable: boolean;
    };
    interactiveExample?: {
      code: string;
      output: string;
      explanation: {
        en: string;
        hi: string;
      };
    };
    content2?: {
      en: string;
      hi: string;
    };
    codeExample2?: {
      code: string;
      editable: boolean;
    };
    subsections?: Array<{
      id: string;
      title: string;
      content: {
        en: string;
        hi: string;
      };
      codeExample?: {
        code: string;
        editable: boolean;
      };
    }>;
  }>;
  exercise?: {
    title: string;
    description: {
      en: string;
      hi: string;
    };
    starterCode: string;
    expectedOutput?: string;
    hint?: {
      en: string;
      hi: string;
    };
  };
  summary: {
    en: string;
    hi: {
      text: string;
      points: string[];
    };
  };
  prevTopic?: {
    id: string;
    title: string;
  };
  nextTopic?: {
    id: string;
    title: string;
  };
}

// In a real application, this would fetch from an API or database
// For now, we'll use a simple mapping of topic IDs to topic data objects
const TOPICS: Record<string, Topic> = {
  'introduction': introductionData,
  'variables': variablesData,
  'operators': operatorsData,
  'control-flow': controlFlowData,
  'functions': functionsData,
  'arrays': arraysData,
  'objects': objectsData,
  'this-keyword': thisKeywordData,
  'prototypes': prototypesData,
  'async-js': asyncJsData,
  'es6-features': es6FeaturesData,
  'javascript-modules': javascriptModulesData,
  'error-handling': errorHandlingData
};

/**
 * Gets a topic data by ID
 * @param id - The topic ID
 * @returns The topic data or undefined if not found
 */
export function getTopicData(id: string): Topic | undefined {
  return TOPICS[id];
}

/**
 * Interface for a breadcrumb item
 */
interface Breadcrumb {
  title: string;
  path: string;
}

/**
 * Generates breadcrumbs for a given path
 * @param path - The current path
 * @returns An array of breadcrumbs
 */
export function getBreadcrumbs(path: string): Breadcrumb[] {
  const parts = path.split('/').filter(part => part);
  const breadcrumbs: Breadcrumb[] = [
    { title: 'Home', path: '/' }
  ];

  if (parts.length > 0 && parts[0] === 'topic') {
    breadcrumbs.push({ title: 'Topics', path: '/topics' });
    
    if (parts.length > 1) {
      const topicId = parts[1];
      const topic = getTopicData(topicId);
      if (topic) {
        breadcrumbs.push({ title: topic.title, path: `/topic/${topicId}` });
      }
    }
  }

  return breadcrumbs;
}

/**
 * Gets all available topics for search
 * @returns An array of all topics with their content
 */
export function getAllTopics(): Array<{
  id: string;
  title: string;
  sections: Array<{
    id: string;
    title: string;
    content: {
      en: string;
      hi: string;
    };
  }>;
}> {
  return Object.entries(TOPICS).map(([id, topic]) => ({
    id,
    title: topic.title,
    sections: topic.sections.map(section => ({
      id: section.id,
      title: section.title,
      content: section.content
    }))
  }));
}