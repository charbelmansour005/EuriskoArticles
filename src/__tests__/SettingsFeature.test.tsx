import React from 'react'
import renderer from 'react-test-renderer'
import SettingsFeatures from '../components/SettingsFeatures/SettingsFeatures'

test('renders correctly', async () => {
  const tree = renderer
    .create(
      <SettingsFeatures
        hideModal={function (): void {
          throw new Error('Function not implemented.')
        }}
        testToast={function (): void {
          throw new Error('Function not implemented.')
        }}
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
