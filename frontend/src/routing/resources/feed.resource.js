import { createResource } from 'react-resource-router';
import jiraClient from '../../services/jiraClient';

export const feedResource = createResource({
  type: 'FEED',
  getKey: () => 'feed',
  getData: async () => {
    return await jiraClient.myself.getCurrentUser();
  }
});
