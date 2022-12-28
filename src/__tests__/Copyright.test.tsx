import React from 'react'
import renderer from 'react-test-renderer'
import Copyright from '../components/Copyright/Copyright'

test('renders correctly', async () => {
  const tree = renderer.create(<Copyright />).toJSON()
  expect(tree).toMatchSnapshot()
})
