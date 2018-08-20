import React from 'react';
import { AppLoading } from 'expo';
import { UIManager, AsyncStorage } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import { store, client } from './src/store';
import { colors } from './src/utils/constants';
import { login } from './src/actions/user';

// import Welcome from './src/components/Welcome';
// import HomeScreen from './src/screens/HomeScreen';
import AppNavigation from './src/navigations';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends React.Component {
  state = {
    appIsReady: false,
  }
  componentDidMount() {
    this._checkIfToken();
  }
  _checkIfToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@twitterclone');
      console.log(token,"App");
      if (token != null) {
        store.dispatch(login());
      }
      this.setState({ appIsReady: true });
      
    } catch (error) {
      throw error;
    }
    
  }

  render() {
   
    if (!this.state.appIsReady) {
      return <AppLoading />
    }

    return (
      <ApolloProvider store={store} client={client}>
        <ActionSheetProvider>
          <ThemeProvider theme={colors}>
            <AppNavigation />
          </ThemeProvider>
        </ActionSheetProvider>
      </ApolloProvider>
    );
  }
}

