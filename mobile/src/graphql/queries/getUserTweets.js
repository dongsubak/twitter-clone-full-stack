import gql from 'graphql-tag';

import FeedCard from '../../components/FeedCard/FeedCard';

export default gql`
  {
    getUserTweets {
      ...FeedCard
    }
  }
  ${FeedCard.fragments.tweet}
`;

/* getUserTweets {
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
*/