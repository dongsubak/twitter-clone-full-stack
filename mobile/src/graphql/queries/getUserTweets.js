import gql from 'graphql-tag';

export default gql`
{
  getUserTweets {
    text
    _id
    createdAt
    isFavorited
    favoriteCount
    user {
      username
      avatar
      lastName
      firstName
    }
  }
}
`;