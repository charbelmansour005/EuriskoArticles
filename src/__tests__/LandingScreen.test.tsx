import React from 'react'
import renderer from 'react-test-renderer'
import LandingScreen from '../screens/LandingScreen/LandingScreen'
// passed
test('renders correctly', async () => {
  const tree = renderer.create(<LandingScreen />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('title shows', async () => {
  const instance = renderer.create(<LandingScreen />).root
  expect(instance.findByProps({testID: 'title'})).toBeTruthy()
})

test('parent shows', async () => {
  const instance = renderer.create(<LandingScreen />).root
  expect(instance.findByProps({testID: 'parent'})).toBeTruthy()
})

test('login container shows', async () => {
  const instance = renderer.create(<LandingScreen />).root
  expect(instance.findByProps({testID: 'loginContainer'})).toBeTruthy()
})

test('animation container shows', async () => {
  const instance = renderer.create(<LandingScreen />).root
  expect(instance.findByProps({testID: 'animationContainer'})).toBeTruthy()
})

test('animation shows', async () => {
  const instance = renderer.create(<LandingScreen />).root
  expect(instance.findByProps({testID: 'animation'})).toBeTruthy()
})

test('main title shows', async () => {
  const instance = renderer.create(<LandingScreen />).root
  expect(instance.findByProps({testID: 'mainTitle'})).toBeTruthy()
})

test('login nav button shows', async () => {
  const instance = renderer.create(<LandingScreen />).root
  expect(instance.findByProps({testID: 'loginNav'})).toBeTruthy()
})

test('login nav button text shows', async () => {
  const instance = renderer.create(<LandingScreen />).root
  expect(instance.findByProps({testID: 'loginText'})).toBeTruthy()
})

test('sign up button shows', async () => {
  const instance = renderer.create(<LandingScreen />).root
  expect(instance.findByProps({testID: 'signUpBtn'})).toBeTruthy()
})

test('sign up button text shows', async () => {
  const instance = renderer.create(<LandingScreen />).root
  expect(instance.findByProps({testID: 'signUpText'})).toBeTruthy()
})
