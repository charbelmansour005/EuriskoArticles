import {Navigation} from './src/navigation/Navigation'
import store from './src/app/store'
import {Provider} from 'react-redux'
import {themeColors} from './src/helpers/themeColors'
import {ToastProvider} from 'react-native-toast-notifications'
import React from 'react'

const App = () => {
  return (
    <Provider store={store}>
      <ToastProvider normalColor="#5865F2">
        <Navigation />
      </ToastProvider>
    </Provider>
  )
}

export default App
