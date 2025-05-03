import { getAllTopics } from './topic-utils';

export interface SearchResult {
  id: string;
  title: string;
  path: string;
  excerpt: string;
}

/**
 * Searches for topics and sections matching a search term
 * @param searchTerm The term to search for
 * @returns An array of search results
 */
export function search(searchTerm: string): SearchResult[] {
  if (!searchTerm || searchTerm.trim().length < 2) {
    return [];
  }

  const normalizedSearchTerm = searchTerm.toLowerCase().trim();
  const results: SearchResult[] = [];
  const topics = getAllTopics();

  // Search through topics and their sections
  topics.forEach((topic) => {
    // Check if topic title matches
    if (topic.title.toLowerCase().includes(normalizedSearchTerm)) {
      results.push({
        id: `topic-${topic.id}`,
        title: topic.title,
        path: `/topic/${topic.id}`,
        excerpt: `Topic: ${topic.title}`
      });
    }

    // Check if any section matches
    topic.sections.forEach((section) => {
      // Check section title
      const sectionMatches = section.title.toLowerCase().includes(normalizedSearchTerm);
      
      // Check section content
      const contentMatchesEn = section.content.en.toLowerCase().includes(normalizedSearchTerm);
      const contentMatchesHi = section.content.hi.toLowerCase().includes(normalizedSearchTerm);
      
      if (sectionMatches || contentMatchesEn || contentMatchesHi) {
        let excerptEn = section.content.en;
        if (excerptEn.length > 100) {
          excerptEn = excerptEn.substring(0, 97) + '...';
        }
        
        results.push({
          id: `section-${topic.id}-${section.id}`,
          title: `${section.title} (${topic.title})`,
          path: `/topic/${topic.id}#${section.id}`,
          excerpt: excerptEn
        });
      }
    });
  });

  return results;
}