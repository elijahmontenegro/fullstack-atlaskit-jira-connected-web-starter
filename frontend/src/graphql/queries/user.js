import gql from 'graphql-tag';

const userProfile = gql`
  query {
    me {
      id
      displayName
      photo
      email
      createdAt
      updatedAt
    }
  }
`;

const userAccessToken = gql`
  query {
    me {
      id
      accessToken
    }
  }
`;

export {
  userProfile,
  userAccessToken
}   