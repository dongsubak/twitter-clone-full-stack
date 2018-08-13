import React, { Component } from 'react';
import styled from 'styled-components/native';
import { graphql } from 'react-apollo';
import { ActivityIndicator, FlatList } from 'react-native';

import GET_TWEETS_QUERY from '../graphql/queries/getTweets';

import FeedCard from '../components/FeedCard/FeedCard';

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

export default graphql(GET_TWEETS_QUERY)(HomeScreen);