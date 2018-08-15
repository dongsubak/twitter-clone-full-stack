import React, { Component } from 'react';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform, Keyboard } from 'react-native';
import Touchable from '@appandflow/touchable';

import { colors } from '../utils/constants';

const Root = styled(Touchable).attrs({
  feedback: 'none'
})`
  flex: 1;
  position: relative;
  justifyContent: center;
  alignItems: center;
`;

const Wrapper = styled.View`
  alignSelf: stretch;
  justifyContent: center;
  alignItems: center;
  flex: 1;
`;

// =styled(Touchable).attr({})는 에러가 났다.
const BackButton = styled.TouchableOpacity.attrs({
  feedback: 'opacity'
})`
  justifyContent: center;
  alignItems: center;
  position: absolute;
  top: 5%;
  left: 5%;
 `

 // =styled(Touchable).attr({})는 에러가 났다.
const ButtonConfirm = styled.TouchableOpacity.attrs({
  feedback: 'opacity'
})`
  position: absolute;
  bottom: 15%;
  width: 70%;
  height: 50;
  backgroundColor: ${props => props.theme.PRIMARY};
  borderRadius: 10;
  justifyContent: center;
  alignItems: center;
  shadowOpacity: 0.2;
  shadowRadius: 5;
  shadowOffset: 0px 2px; 
  shadowColor: #000;
  elevation: 2;
 `
// props.theme과 props.onBackPress는 어디에?

const ButtonConfirmText = styled.Text`
  color: ${props => props.theme.WHITE};
  fontWeight: 600;
`;

const InputWrapper = styled.View`
  height: 50;
  width: 70%;
  borderBottomWidth: 1;
  borderBottomColor: ${props => props.theme.LIGHT_GRAY};
  marginVertical: 5;
  justifyContent: flex-end;
`;

const Input = styled.TextInput.attrs({ 
  placeholderTextColor: colors.LIGHT_GRAY,
  selectionColor: Platform.OS === 'ios' ? colors.PRAIMARY : undefined,
  autoCorrect: false,
})`
  height: 30;
  color: ${props => props.theme.WHITE};
`

// const Input = styled.TextInput``;

class SignupFrom extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    username: '',
  };

  _onOutsidePress = () => Keyboard.dismiss();
  
  _onChangeText = (text, type) => this.setState({ [type]: text });
  // [type] 

  _checkIfDisable() {
    const { fullName, email, password, username } = this.state;

    if (!fullName || !email|| !password, !username) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    return (
      <Root onPress={this._onOutsidePress}>
        <BackButton onPress={this.props.onBackPress}>
          <MaterialIcons color={colors.WHITE} size={30} name="arrow-back" />
        </BackButton>
        <Wrapper>
          <InputWrapper>
            <Input 
              placeholder="Full Name" 
              autoCapitalize="words"
              onChangeText={text => this._onChangeText(text, 'fullName')}
            />
          </InputWrapper>
          <InputWrapper>
            <Input 
              placeholder="Email" 
              keyboardType="email-address"
              onChangeText={text => this._onChangeText(text, 'email')}
            />
          </InputWrapper>
          <InputWrapper>
            <Input 
              placeholder="Password"
              secureTextEntry
              onChangeText={text => this._onChangeText(text, 'password')}
            />
          </InputWrapper>
          <InputWrapper>
            <Input 
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={text => this._onChangeText(text, 'username')}
            />
          </InputWrapper>
        </Wrapper>
        <ButtonConfirm>
          <ButtonConfirmText disabled={this._checkIfDisable()}>
            Sign Up
          </ButtonConfirmText>
        </ButtonConfirm>
      </Root>
    );
  }
}

export default SignupFrom;