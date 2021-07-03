# Insert Cool Starter App Name Here
Starter Application (Very much a WIP).
**Backend** built with Node + Express + GraphQL + Sequelize (Postgres). Users are created using OAuth 2.0 (3LO) using Passport.js w/ Atlassian.
**Frontend** built with React (Javascript) + Atlaskit (Atlassian's official UI library) + React Resource Router.

Written in ES6 using Babel + Parcel.js (v2).

##  📝 Features
**Authentication/Sessions**
- [x] Log in/create users with Atlassian account
- [ ] Automatically refresh Atlassian's API token

**Jira Buckets** 
- [ ] List Jira buckets
- [ ] Create Jira buckets
- [ ] Delete Jira buckets
- [ ] View single Jira bucket

**Adminstation**
- [ ] Add user permissions
- [ ] Remove user permissions

## 📘 Guides

### Backend
If you don't already have a Atlassian Jira platform setup you can get started here: https://www.atlassian.com/try/cloud/signup?bundle=jira-software&edition=free

OAuth 2.0 (3LO) Setup
 1. Head over to https://developer.atlassian.com/console/myapps/
 2. Create a 'OAuth 2.0 integration' app.
 3. Add permissions for 'Jira platform REST API' and 'User identity API'.

Launching the Backend Server
1. Take a look at the *.env.sample* and *docker-compose.sample.yml* provided. 
2. Edit your *docker-compose.yml* and *.env*.
3. `docker-compose up -d` to set up the environment
4. `npm run dev`


### Frontend
Parcel v2 has some problems with Yarn so you would be advised to use NPM.

Launching the Frontend Server
1. `npm run dev`
