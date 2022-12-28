import React from 'react'
import renderer from 'react-test-renderer'
import LoginBtnSeperator from '../components/LoginBtnSepetator/LoginBtnSepetator'

test('renders correctly', async () => {
  const tree = renderer.create(<LoginBtnSeperator />).toJSON()
  expect(tree).toMatchSnapshot()
})
