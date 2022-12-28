import React from 'react'
import renderer from 'react-test-renderer'
import LoginGoogleButton from '../components/LoginGoogleButton/LoginGoogleButton'
// passed
test('renders correctly', async () => {
  const tree = renderer.create(<LoginGoogleButton />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('google sign in button shows', async () => {
  const instance = renderer.create(<LoginGoogleButton />).root
  expect(instance.findByProps({testID: 'googlePressable'})).toBeTruthy()
})

test('google sign in image shows', async () => {
  const instance = renderer.create(<LoginGoogleButton />).root
  expect(instance.findByProps({testID: 'googleImage'})).toBeTruthy()
})

test('google sign in text shows', async () => {
  const instance = renderer.create(<LoginGoogleButton />).root
  expect(instance.findByProps({testID: 'googleText'})).toBeTruthy()
})

test('google no account text', async () => {
  const instance = renderer.create(<LoginGoogleButton />).root
  expect(instance.findByProps({testID: 'googleNoAcc'})).toBeTruthy()
})

test('google sign up text', async () => {
  const instance = renderer.create(<LoginGoogleButton />).root
  expect(instance.findByProps({testID: 'googleSignUp'})).toBeTruthy()
})
