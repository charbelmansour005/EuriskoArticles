import {Navigation} from './src/navigation/Navigation';
import store from './src/app/store';
import {Provider} from 'react-redux';
import React from 'react';

type Props = {};

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
