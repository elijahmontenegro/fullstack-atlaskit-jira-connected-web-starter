import { Version2Client }  from 'jira.js';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";

class JiraClient extends Version2Client {
  constructor(props) {
    if (JiraClient._instance) {
      throw new Error("[JiraClient] Singleton classes can't be instantiated more than once.")
    }

    const token = Cookies.get('jwt');
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


export default new JiraClient();