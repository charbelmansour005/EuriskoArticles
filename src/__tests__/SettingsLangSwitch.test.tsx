import React from 'react'
import renderer from 'react-test-renderer'
import SettingsLangSwitch from '../components/SettingsLangSwitch/SettingsLangSwitch'

test('renders correctly', async () => {
  const tree = renderer
    .create(
      <SettingsLangSwitch
        onToggleSwitch={function (): void {
          throw new Error('Function not implemented.')
        }}
        language={undefined}
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
