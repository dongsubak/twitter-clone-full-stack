import React, { Component } from 'react';
import styled from 'styled-components/native';

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
  state = { }
  render() {
    return (
      <Root>
        <List>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </List>
      </Root>
    );
  }
}

export default HomeScreen;