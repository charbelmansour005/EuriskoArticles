import React from 'react'
import renderer from 'react-test-renderer'
import About from '../screens/About/About'
// passed
test('renders correctly', async () => {
  const tree = renderer.create(<About />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('about screen parent view shows', async () => {
  const instance = renderer.create(<About />).root
  expect(instance.findByProps({testID: 'parent'})).toBeTruthy()
})

test('react native lottie animation shows', async () => {
  const instance = renderer.create(<About />).root
  expect(instance.findByProps({testID: 'lottieAnimation'})).toBeTruthy()
})

test('about screen title shows', async () => {
  const instance = renderer.create(<About />).root
  expect(instance.findByProps({testID: 'aboutTitle'})).toBeTruthy()
})
