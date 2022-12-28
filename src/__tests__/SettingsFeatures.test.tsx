import React from 'react'
import renderer from 'react-test-renderer'
import SettingsFeatures from '../components/SettingsFeatures/SettingsFeatures'

test('renders correctly', async () => {
  const tree = renderer.create(<SettingsFeatures />).toJSON()
  expect(tree).toMatchSnapshot()
})
