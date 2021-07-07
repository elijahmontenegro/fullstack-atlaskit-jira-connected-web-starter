import gql from 'graphql-tag';

const userProfile = gql`
  query {
    me {
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
      accessToken
    }
  }
`;

export {
  userProfile,
  userAccessToken
}