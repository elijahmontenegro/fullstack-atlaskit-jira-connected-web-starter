import { Version2Client }  from 'jira.js';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
const token = Cookies.get('jwt');

class JiraClient extends Version2Client {
  constructor(props) {
    if (JiraClient._instance) {
      throw new Error("[JiraClient] Singleton classes can't be instantiated more than once.")
    }

    const { 
      cloudID, 
      accessToken
    } = jwt_decode(token);

    const options = {
      host: `https://api.atlassian.com/ex/jira/${cloudID}`,
      authentication : {
        oauth2: { 
          accessToken
        }
      }
    };

    super(Object.assign({}, options, props));

    JiraClient._instance = this;
  }
};


export default token ? new JiraClient() : null;