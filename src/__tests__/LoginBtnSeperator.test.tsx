import React from 'react'
import renderer from 'react-test-renderer'
import LoginBtnSeperator from '../components/LoginBtnSepetator/LoginBtnSepetator'
// passed
test('renders correctly', async () => {
  const tree = renderer.create(<LoginBtnSeperator />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('or text shows', async () => {
  const instance = renderer.create(<LoginBtnSeperator />).root
  expect(instance.findByProps({testID: 'orText'})).toBeTruthy()
})

test('seperator line 1 shows', async () => {
  const instance = renderer.create(<LoginBtnSeperator />).root
  expect(instance.findByProps({testID: 'line1'})).toBeTruthy()
})

test('seperator line 2 shows', async () => {
  const instance = renderer.create(<LoginBtnSeperator />).root
  expect(instance.findByProps({testID: 'line2'})).toBeTruthy()
})

test('parent view shows', async () => {
  const instance = renderer.create(<LoginBtnSeperator />).root
  expect(instance.findByProps({testID: 'parent'})).toBeTruthy()
})

test('or text container shows', async () => {
  const instance = renderer.create(<LoginBtnSeperator />).root
  expect(instance.findByProps({testID: 'orTextContainer'})).toBeTruthy()
})
