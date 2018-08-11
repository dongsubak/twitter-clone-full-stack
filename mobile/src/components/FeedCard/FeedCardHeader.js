import React, { Component } from 'react';
import styled from 'styled-components/native';

import { fakeAvatar } from '../../utils/constants';

const AVATAR_SIZE = 40;
const AVATAR_RADIUS = AVATAR_SIZE / 2;

const Root = styled.View`
  height: 50;
  flexDirection: row;
  alignItems: center;
`;

const AvatarContainer = styled.View`
  flex: 0.2;
  justifyContent: center;
  alignSelf: stretch;
`;
//  paddingLeft: 5;

const Avatar = styled.Image`
  height: ${AVATAR_SIZE};
  width: ${AVATAR_SIZE};
  borderRadius: ${AVATAR_RADIUS};
`;

const MetaContainer = styled.View`
  flex: 1;
  alignSelf: stretch;
`;

const MetaTopContainer = styled.View`
  flex: 1;
  alignSelf: stretch;
  flexDirection: row;
  alignItems: center;
  justifyContent: flex-start;
`;

const MetaBottomContainer = styled.View`
  flex: 0.8;
  alignSelf: stretch;
  alignItems: flex-start;
  justifyContent: center;
`; //세로 중앙

const MetaFullName = styled.Text`
  fontSize: 16;
  fontWeight: bold;
  color: #444B52;
`;

const MetaText = styled.Text`
  fontSize: 14;
  fontWeight: 600;
  color: #CAD0D6;
`;

const username = 'PDS';
const firstName = 'Park';
const lastName = 'DS';
const createdAt = '1 day ago';
const avatar = fakeAvatar;

function FeedCardHeader() {
  return (
    <Root>
      <AvatarContainer>
        <Avatar source={{ uri: fakeAvatar }}/>
      </AvatarContainer>
      <MetaContainer>
        <MetaTopContainer>
          <MetaFullName>
            {firstName} {lastName}
          </MetaFullName>
          <MetaText style={{ marginLeft: 5 }}>
            @{username}
          </MetaText>
        </MetaTopContainer>
        <MetaBottomContainer>
          <MetaText>
            {createdAt}
          </MetaText>
        </MetaBottomContainer>
      </MetaContainer>
    </Root>
  )
}

export default FeedCardHeader;