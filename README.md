# Full-stack web app 
I'm learning still; this is basically going to be my starter app for these technologies and hopefully it can help others.

App is very WIP but demonstrates using the following technologies: 
sequelize, 
postgres, 
parcel (V2), 
graphql, 
apollo, 
passport (for oauth 2.0 strategies) 
and soon hopefully redis.

Atlassian 3LO is used for the login process, and at a later date I will inplement Jira.JS in conjunction with react-resource-router

# How to use
- Frontend: Use NPM as Parcel V2 currently has problems with Yarn
- Backend: 
 Edit docker-compose.yml to have your own postgres db name and password
 
 npm run dev

## Set up the databases

The entire environment can run on Docker.
```
# Starting postgres, redis and redis-commander
docker-compose up -d
```
