import { Version2Client }  from 'jira.js';
import Cookies from 'js-cookie';
import { userAccessToken } from '../graphql/queries/user';
import jwt_decode from 'jwt-decode';
import { useApolloClient } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import apolloClient, { ctx } from './apolloClient';

const token = Cookies.get('jwt');

class JiraClient extends Version2Client {
  constructor() {
    if (JiraClient._instance) {
      throw new Error("[JiraClient] Singleton classes can't be instantiated more than once.")
    }

    const { cloudID } = jwt_decode(token);

    const config = {
      host: `https://api.atlassian.com/ex/jira/${cloudID}`,
      telemetry: false,
    };
    
    super(config);

    JiraClient._instance = this;
  }

  async sendRequest(requestConfig, callback) {
    const accessToken = await apolloClient.query({ query: userAccessToken, context: ctx })
      .then(res => {
        console.log(res.data);
        return res.data.me.accessToken;
      })
      .catch(err => {
        throw new Error(err);
      });

    this.config['authentication'] = {
      oauth2: {
        accessToken
      }
    };

    return super.sendRequest(requestConfig, callback);
  };
}

export default token ? new JiraClient() : null;