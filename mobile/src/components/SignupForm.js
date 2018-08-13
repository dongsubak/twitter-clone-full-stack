import React, { Component } from 'react';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';

import { colors } from '../utils/constants';

const Root = styled.View`
  flex: 1;
  position: relative;
`;

const T = styled.Text``;

const BackButton = styled(Touchable).attrs({
  feedback: 'opacity'
})`
  justifyContent: center;
  alignItems: center;
  position: absolute;
  top: 5%
  left: 5%
 `


class SignupFrom extends Component {
  state = {
    showSignup: false
  }
  render() {
    return (
      <Root>
        <BackButton>
          <MaterialIcons color={colors.WHITE} size={30} name="arrow-back" />
        </BackButton>
      </Root>
    );
  }
}

export default SignupFrom;