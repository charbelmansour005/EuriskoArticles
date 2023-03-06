import React from 'react'
import renderer from 'react-test-renderer'
import Login from '../screens/Login/Login'
import {Provider} from 'react-native-paper'
import {Provider as ReduxProvider} from 'react-redux'
import store from '../app/store'

// test('renders correctly', async () => {
//   const tree = renderer.create(<Login />).toJSON()
//   expect(tree).toMatchSnapshot()
// })
// change jest+ts config
test('parent view shows', async () => {
  const instance = renderer.create(
    <ReduxProvider store={store}>
      <Login />
    </ReduxProvider>,
  ).root
  expect(instance.findByProps({testID: 'parent'})).toBeTruthy()
})
