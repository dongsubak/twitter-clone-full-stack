import gql from 'graphql-tag';

import FeedCard from '../../components/FeedCard/FeedCard';

export default gql`
  subscription {
    tweetAdded {
      ...FeedCard
    }
  }
  ${FeedCard.fragments.tweet}
`;

/*
    tweetAdded {
      text
      _id
      createdAt
      favoriteCount
      isFavorited
      user {
        username
        avatar
        firstName
        lastName
      }
    }
  }
*/