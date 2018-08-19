import React, { Component } from 'react';
import styled from 'styled-components/native';
// import { Platform, Keyboard } from 'react-native';
import { graphql } from 'react-apollo';

import { colors } from '../utils/constants';
import CREATE_TWEET_MUTATION from '../graphql/mutations/createTweet';

const Root = styled.View`
  backgroundColor: ${props => props.theme.WHITE};
  flex: 1;
  alignItems: center;
`;

const Wrapper = styled.View`
  height: 80%;
  width: 90%;
  paddingTop: 5;
  position: relative;
`;

const Input = styled.TextInput.attrs({
  multiline: true,
  placeholder: 'What\'s happening?',
  maxLength: 140,
  selectionColor: colors.PRIMARY,
  autoFocus: true,
})`
  height: 40%;
  width: 100%;
  fontSize: 18;
  color: ${props => props.theme.SECONDARY};
`;

const TweetButton = styled.TouchableOpacity.attrs({
  feedback: 'opacity',
  hitSlop: { top: 20, left: 20, right: 20, bottom: 20 }
})`
  backgroundColor: ${props => props.theme.PRIMARY};
  alignItems: center;
  justifyContent: center;
  width: 80;
  height: 40;
  borderRadius: 20;
  position: absolute;
  top: 60%;
  right: 0;
`;
// Wrapper에는 position: relative; 넣어야한다.

const TweetButtonText = styled.Text`
  color: ${props => props.theme.WHITE};
  fontSize: 16;
`

const TextLength = styled.Text`
  color: ${props => props.theme.PRIMARY};
  fontSize: 18;
  position: absolute;
  top: 45%;
  right: 5%;
`
class NewTweetScreen extends Component {
  state = {
    text: ''
  };

  _onChangeText = text => {console.log(text); this.setState({ text });}

  _onCreateTweetPress = async () => {
    await this.props.mutate({
      variables: {
        text: this.state.text
      }
    });
  }

  get _textLength() {
    return 140 - this.state.text.length;
  }

  get _buttonDisabled() {
    return this.state.text.length < 5;
  }

  render() {
    return (
      <Root> 
        <Wrapper>
          <Input value={this.state.text} onChangeText={this._onChangeText} />
          <TextLength>{this._textLength}</TextLength>
          <TweetButton onPress={this._onCreateTweetPress} disabled={this._buttonDisabled}>
            <TweetButtonText>Tweets</TweetButtonText>
          </TweetButton>
        </Wrapper>
      </Root>
    );
  }
}
// componentWillUnmount() {Keyboard.dismiss();}
export default graphql(CREATE_TWEET_MUTATION)(NewTweetScreen);