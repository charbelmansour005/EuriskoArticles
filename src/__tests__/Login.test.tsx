import React from 'react'
import renderer from 'react-test-renderer'
import Login from '../screens/Login/Login'

test('renders correctly', async () => {
  const tree = renderer.create(<Login />).toJSON()
  expect(tree).toMatchSnapshot()
})
