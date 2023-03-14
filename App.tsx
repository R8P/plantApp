import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/Redux/store/store';
import Main from './Main';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Main />
    </Provider>
  );
};

export default App;
