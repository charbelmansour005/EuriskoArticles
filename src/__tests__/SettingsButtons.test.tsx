import React from 'react'
import renderer from 'react-test-renderer'
import SettingsButtons from '../components/SettingsButtons/SettingsButtons'

test('renders correctly', async () => {
  const tree = renderer
    .create(
      <SettingsButtons
        askLogout={function (): void {
          throw new Error('Function not implemented.')
        }}
        navigate={function (args?: any): void {
          throw new Error('Function not implemented.')
        }}
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
