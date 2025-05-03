// Import all topic data
import { es6FeaturesData } from './es6-features';
import { javascriptModulesData } from './javascript-modules';
import { errorHandlingData } from './error-handling';

// Export all topics as a collection
export const allTopics = {
  'es6-features': es6FeaturesData,
  'javascript-modules': javascriptModulesData,
  'error-handling': errorHandlingData,
};

// Export each topic individually
export {
  es6FeaturesData,
  javascriptModulesData,
  errorHandlingData
};