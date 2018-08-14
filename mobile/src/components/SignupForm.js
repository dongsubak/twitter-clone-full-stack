import React, { Component } from 'react';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
// import Touchable from '@appandflow/touchable';

import { colors } from '../utils/constants';

const Root = styled.View`
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
`;

// const Input = styled.TextInput``;

class SignupFrom extends Component {
  state = { // showSignup: false 
  };
  render() {
    return (
      <Root>
        <BackButton onPress={this.props.onBackPress}>
          <MaterialIcons color={colors.WHITE} size={30} name="arrow-back" />
        </BackButton>
        <Wrapper>
          <InputWrapper />
          <InputWrapper />
          <InputWrapper />
          <InputWrapper />
        </Wrapper>
        <ButtonConfirm>
          <ButtonConfirmText>
            Sign Up
          </ButtonConfirmText>
        </ButtonConfirm>
      </Root>
    );
  }
}

export default SignupFrom;