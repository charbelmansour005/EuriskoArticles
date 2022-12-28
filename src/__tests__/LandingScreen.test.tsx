import React from 'react'
import renderer from 'react-test-renderer'
import LandingScreen from '../screens/LandingScreen/LandingScreen'

test('renders correctly', async () => {
  const tree = renderer.create(<LandingScreen />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('title shows', async () => {
  const instance = renderer.create(<LandingScreen />).root
  expect(instance.findByProps({testID: 'title'})).toBeTruthy()
})
