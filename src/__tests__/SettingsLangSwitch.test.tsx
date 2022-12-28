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

test('parent view shows', async () => {
  const instance = renderer.create(
    <SettingsLangSwitch
      onToggleSwitch={function (): void {
        throw new Error('Function not implemented.')
      }}
      language={undefined}
    />,
  ).root
  expect(instance.findByProps({testID: 'parent'})).toBeTruthy()
})

test('french language options text shows', async () => {
  const instance = renderer.create(
    <SettingsLangSwitch
      onToggleSwitch={function (): void {
        throw new Error('Function not implemented.')
      }}
      language={undefined}
    />,
  ).root
  expect(instance.findByProps({testID: 'languageOptionFrench'})).toBeTruthy()
})

test('switch element shows', async () => {
  const instance = renderer.create(
    <SettingsLangSwitch
      onToggleSwitch={function (): void {
        throw new Error('Function not implemented.')
      }}
      language={undefined}
    />,
  ).root
  expect(instance.findByProps({testID: 'switch'})).toBeTruthy()
})

test('english language option text shows', async () => {
  const instance = renderer.create(
    <SettingsLangSwitch
      onToggleSwitch={function (): void {
        throw new Error('Function not implemented.')
      }}
      language={undefined}
    />,
  ).root
  expect(instance.findByProps({testID: 'languageOptionEnglish'})).toBeTruthy()
})

test('language explanation text shows', async () => {
  const instance = renderer.create(
    <SettingsLangSwitch
      onToggleSwitch={function (): void {
        throw new Error('Function not implemented.')
      }}
      language={undefined}
    />,
  ).root
  expect(instance.findByProps({testID: 'languageExplanation'})).toBeTruthy()
})
