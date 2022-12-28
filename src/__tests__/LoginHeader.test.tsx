import React from 'react'
import renderer from 'react-test-renderer'
import LoginHeader from '../components/LoginHeader/LoginHeader'
// passed
test('renders correctly', async () => {
  const tree = renderer.create(<LoginHeader />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('header image shows', async () => {
  const instance = renderer.create(<LoginHeader />).root
  expect(instance.findByProps({testID: 'image'})).toBeTruthy()
})
