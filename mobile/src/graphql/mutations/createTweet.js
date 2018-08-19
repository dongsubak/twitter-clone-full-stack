import gql from 'graphql-tag';

export default gql`
  mutation createTweet($text: String!) {
    createTweet(text: $text) {
      favoriteCount
      _id
      createdAt
      text
      user {
        avatar
        username
        firstName
        lastName
      }
    }
  }
`;