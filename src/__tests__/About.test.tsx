import React from 'react'
import renderer from 'react-test-renderer'
import About from '../screens/About/About'

test('renders correctly', async () => {
  const tree = renderer.create(<About />).toJSON()
  expect(tree).toMatchSnapshot()
})
