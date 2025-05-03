import { useRoute } from 'wouter';
import Topic from './topic';

const TopicWrapper = () => {
  const [, params] = useRoute('/topic/:id');
  const topicId = params?.id || '';

  return <Topic />;
};

export default TopicWrapper;