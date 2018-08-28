import React, { Component } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';

import ProfileHeader from '../components/ProfileHeader';

import GET_USER_TWEETS_QUERY from '../graphql/queries/getUserTweets';

const Root = styled.View`
  flex: 1;
  backgroundColor: #f1f6fa;
`;

const T = styled.Text``;

class ProfileScreen extends Component {
  render() {
    const { info, data } = this.props;
    return (
      <Root> 
        <ProfileHeader { ...info } />
        <T>Profile</T>
      </Root>
    );
  }
}

export default compose(
  connect(state => ({  info: state.user.info }),
  graphql(GET_USER_TWEETS_QUERY)
))(ProfileScreen);