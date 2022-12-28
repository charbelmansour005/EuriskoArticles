import React from 'react'
import renderer from 'react-test-renderer'
import LoginGoogleButton from '../components/LoginGoogleButton/LoginGoogleButton'

test('renders correctly', async () => {
  const tree = renderer.create(<LoginGoogleButton />).toJSON()
  expect(tree).toMatchSnapshot()
})
