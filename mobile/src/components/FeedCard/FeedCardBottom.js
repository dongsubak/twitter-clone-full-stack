import React from 'react';
import styled from 'styled-components/native';
import { SimpleLineIcons, Entypo } from '@expo/vector-icons';
// import Touchable from '@appandflow/touchable';

import { colors } from '../../utils/constants';

const ICON_SIZE = 20;

const Root = styled.View`
  height: 40 ;
  flexDirection: row;
`;

const Button = styled.TouchableOpacity.attrs({
  feedback: 'opacity'
})`
  flex: 1;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-around;
  paddingHorizontal: 32px;
`; // marginLeft:1 ;

const ButtonText = styled.Text`
   fontSize: 14;
   fontWeight: 500;
   color: ${props => props.theme.LIGHT_GRAY};
`;

// const favoriteCount = 3;
// const isFavorited = false;

function FeedCardBottom({ favoriteCount, onFavoritePress, isFavorited }) {
  return (
    <Root>
      <Button>
        <SimpleLineIcons name="bubble" size={ICON_SIZE} color={colors.LIGHT_GRAY} />
        <ButtonText>
          0
        </ButtonText>
      </Button>
      <Button>
        <Entypo name="retweet" size={ICON_SIZE} color={colors.LIGHT_GRAY} />
        <ButtonText>
          0
        </ButtonText>
      </Button>
      <Button onPress={onFavoritePress}>
        <Entypo name="heart" size={ICON_SIZE} color={isFavorited ? 'red' : colors.LIGHT_GRAY} />
        <ButtonText>
          {favoriteCount}
        </ButtonText>
      </Button>
    </Root>
  )
}

export default FeedCardBottom;