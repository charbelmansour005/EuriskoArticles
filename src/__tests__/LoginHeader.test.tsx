import React from 'react'
import renderer from 'react-test-renderer'
import LoginHeader from '../components/LoginHeader/LoginHeader'

test('renders correctly', async () => {
  const tree = renderer.create(<LoginHeader />).toJSON()
  expect(tree).toMatchSnapshot()
})
