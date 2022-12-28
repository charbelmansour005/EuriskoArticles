import React from 'react'
import renderer from 'react-test-renderer'
import Copyright from '../components/Copyright/Copyright'
// passed
test('Component should display correctly', async () => {
  const tree = renderer.create(<Copyright />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('copyright text shows', async () => {
  const instance = renderer.create(<Copyright />).root
  expect(instance.findByProps({testID: 'copyright'})).toBeTruthy()
})
