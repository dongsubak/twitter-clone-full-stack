import React from 'react';
import styled from 'styled-components/native';

const AVATAR_SIZE = 60;
const Root = styled.View`
  height: 140;
  alignSelf: stretch;
  paddingTop: 50;
  backgroundColor: ${props => props.theme.WHITE};
`;

const Heading = styled.View`
  flex: 1;
  flexDirection: row;
  alignItems: center; 
  justifyContent: flex-start;
  paddingLeft: 15;
  paddingTop: 5;
`;

const Avatar = styled.Image`
  height: ${AVATAR_SIZE};
  width: ${AVATAR_SIZE};
  borderRadius: ${AVATAR_SIZE / 2};
  backgroundColor: yellow;
`;

const UsernameContainer = styled.View`
  flex: 1;
  paddingLeft: 10;
  alignSelf: stretch;
`;

const FullName = styled.Text`
  color: ${props => props.theme.SECONDARY};
  fontWeight: bold;
  fontSize: 18;
`;

const UserName = styled.Text`
  color: ${props => props.theme.SECONDARY};
  fontSize: 15;
  opacity: 0.8;
`;

const MetaContainer = styled.View`
  flex: 0.8;
  flexDirection: row;
`;
// flex 0.8? 50%의 80%?
const MetaBox = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const MetaText = styled.Text`
  color: ${props => props.theme.SECONDARY};
  fontSize: 16;
  fontWeight: 600;
`;

const MetaTextNumber = styled.Text`
  color: ${props => props.theme.PRIMARY};
`;

// const fullName = 'Dongsu Park';
// const username = 'pds';

export default function ProfileHeader({ firstName, lastName, avatar, username }) {
  return (
    <Root>
      <Heading>
        <Avatar source={{ uri: avatar }} />
        <UsernameContainer>
          <FullName>
            {firstName} {lastName}
          </FullName>
          <UserName>
            @{username}
          </UserName>
        </UsernameContainer>
      </Heading>
      <MetaContainer>
        <MetaBox>
          <MetaText><MetaTextNumber>3</MetaTextNumber></MetaText>
        </MetaBox>
        <MetaBox>
          <MetaText><MetaTextNumber>3</MetaTextNumber></MetaText>
        </MetaBox>
      </MetaContainer>
    </Root>
  )
}