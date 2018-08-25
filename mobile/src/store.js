/* eslint-disable no-param-reassign */
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

import reducers from './reducers';

const networkInterface = createNetworkInterface({
  uri: 'http://192.168.0.92:3000/graphql',
});
// ethernet adapter ip 로 한다.
// https://www.youtube.com/watch?v=shstJgkLW-I

const wsClient = new SubscriptionClient('ws://localhost:3000/subscriptions', {
  reconnect: true,
  connectionParams: {}
})

networkInterface.use([{
  async applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    try {
      const token = await AsyncStorage.getItem('@twitterclone');
      // removeItem, getItem 바꿔가면서 로그인, 로그아웃하면서
      if (token != null) {
        req.options.headers.authorization = `Bearer ${token}` || null;
      }
    } catch (error) {
      throw error;
    }

    return next();
  }
}]);

const networkInterfaceWithSubs = addGraphQLSubscriptions(
  networkInterface,
  wsClient
)

export const client = new ApolloClient({
  networkInterface,
});

const middlewares = [client.middleware(), thunk, createLogger()];

export const store = createStore(
  reducers(client),
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
