import {Text, View} from 'react-native';
import Login from './src/screens/Login/Login';
import store from './src/app/store';
import {Provider} from 'react-redux';
import React from 'react';

type Props = {};

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export default App;
