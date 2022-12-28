import React from 'react'
import renderer from 'react-test-renderer'
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'
jest.useFakeTimers()

test('renders correctly', async () => {
  const tree = renderer.create(<LoadingSpinner />).toJSON()
  expect(tree).toMatchSnapshot()
})
