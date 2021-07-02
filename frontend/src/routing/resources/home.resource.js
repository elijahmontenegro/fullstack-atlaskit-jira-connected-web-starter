import { createResource } from 'react-resource-router';
import jiraClient from '../../services/jiraClient';

export const homeResource = createResource({
  type: 'HOME',
  getKey: () => 'home-quote',
  getData: async () => {
    return await jiraClient.myself.getCurrentUser();
  }
});
