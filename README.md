# Full-stack web app 
I'm learning still; this is basically going to be my starter app for these technologies and hopefully it can help others.

App is very WIP but demonstrates using the following technologies: 
- sequelize, 
- postgres, 
- parcel (V2), 
- graphql, 
- apollo, 
- passport (for oauth 2.0 strategies) 
- and soon hopefully redis.

Atlassian 3LO is used for the login process, and at a later date I will implement Jira.JS in conjunction with react-resource-router

# How to use

## Atlassian Setup
### Get started with Atlassian Jira 
If you don't already have a Atlassian Jira platform setup you can get started here:
1. https://www.atlassian.com/try/cloud/signup?bundle=jira-software&edition=free

### OAuth 2.0 Setup
1. Head over to https://developer.atlassian.com/console/myapps/
2. Create a 'OAuth 2.0 integration' app.
3. Add permissions for 'Jira platform REST API' and 'User identity API'.


/// Edits needed // 
- Frontend: Use NPM as Parcel V2 currently has problems with Yarn
- Backend: 
 Take a look at the .env.sample provided. 
 
 Edit docker-compose.yml to have your own postgres db name and password
 
 npm run dev

## Set up the databases

The entire environment can run on Docker.
```
# Starting postgres, redis and redis-commander
docker-compose up -d
```

