import gql from 'graphql-tag';

import FeedCard from '../../components/FeedCard/FeedCard';

export default gql`
  {
   getTweets {
      ...FeedCard
    }
  }
  ${FeedCard.fragments.tweet}
`;

/* getTweets {
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