import gql from 'graphql-tag';

import FeedCard from '../../components/FeedCard/FeedCard';

export default gql`
  mutation createTweet($text: String!) {
    createTweet(text: $text) {
      ...FeedCard
    }
  }
  ${FeedCard.fragments.tweet}
`;

/* createTweet(text: $text) {
      favoriteCount
      _id
      createdAt
      text
      isFavorited
      user {
        avatar
        username
        firstName
        lastName
      }
    } 
*/