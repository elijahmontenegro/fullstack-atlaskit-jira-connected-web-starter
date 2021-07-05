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

export {
  userProfile,
}