import React from 'react'
import renderer from 'react-test-renderer'
import LoginBtnSeperator from '../components/LoginBtnSepetator/LoginBtnSepetator'

test('renders correctly', async () => {
  const tree = renderer.create(<LoginBtnSeperator />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('or text shows', async () => {
  const instance = renderer.create(<LoginBtnSeperator />).root
  expect(instance.findByProps({testID: 'or'})).toBeTruthy()
})
