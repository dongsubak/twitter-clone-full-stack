import React, { Component } from 'react';
import styled from 'styled-components/native';
import { graphql, compose, withApollo } from 'react-apollo';
import { ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';

import FeedCard from '../components/FeedCard/FeedCard';

import { getUserInfo } from '../actions/user';

import GET_TWEETS_QUERY from '../graphql/queries/getTweets';
import ME_QUERY from '../graphql/queries/me';
import TWEET_ADDED_SUBSCRIPTION from '../graphql/subscriptions/tweetAdded';
import TWEET_FAVORITED_SUBSCRIPTION from '../graphql/subscriptions/tweetFavorited';

const Root = styled.View`
  flex: 1;
  paddingTop: 5;
`;
//  justifyContent: center;

const List = styled.ScrollView`
`
// justifyContent : 세로, alignItems: 가로
// alignItems이든, justifyContent 든 flex-start 하면, flexDirection에 따라 결정.

class HomeScreen extends Component {
  componentWillMount() {
    this.props.data.subscribeToMore({
      document: TWEET_ADDED_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const newTweet = subscriptionData.data.tweetAdded;

        if (!prev.getTweets.find(t => t._id === newTweet._id )) {
          return {
            ...prev,
            getTweets: [{ ...newTweet }, ...prev.getTweets]
          }
        }

        return prev;
      }
    });

    this.props.data.subscribeToMore({
      document: TWEET_FAVORITED_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const newTweet = subscriptionData.data.tweetFavorited;
        // FavoriteTweet.js 의 pubsub.publish(TWEET_FAVORITED, { [TWEET_FAVORITED]: { ...t } }); 의  { [TWEET_FAVORITED]: { ...t } } 부분과 같아짐

        return {
          ...prev,
          getTweets: prev.getTweets.map(
            tweet => 
              tweet._id === newTweet._id 
                ? {
                  ...tweet,
                  favoriteCount: newTweet.favoriteCount,
                  }
                : tweet,
          ),
        };
      },
    });
  }
  componentDidMount() {
    this._getUserInfo();
  }

  _getUserInfo = async () => {
    const { data: { me } } = await this.props.client.query({ query: ME_QUERY });
    this.props.getUserInfo(me);
  }

  _renderItem = ({ item }) => <FeedCard {...item} />
  // <FeedCard text={item.text} user={item.user} createdAt={item.createdAt} favoriteCount={item.favoriteCount} />
  render() {
    const { data } = this.props;
    if (data.loading) {
      return (
        <Root>
          <ActivityIndicator size="large" />
        </Root>
      )
    }
    return (
      <Root>
        <FlatList
          contentContainerStyle={{ alignSelf: 'stretch' }}
          data={data.getTweets}
          keyExtractor={item => item._id} 
          renderItem={this._renderItem}
        />
      </Root>
    );
  }
}

export default withApollo(compose(
  connect(undefined, { getUserInfo }),
  graphql(GET_TWEETS_QUERY)
)(HomeScreen));