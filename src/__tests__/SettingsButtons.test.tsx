import React from 'react'
import renderer from 'react-test-renderer'
import SettingsButtons from '../components/SettingsButtons/SettingsButtons'
// passed
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

test('parent view shows', async () => {
  const instance = renderer.create(
    <SettingsButtons
      askLogout={function (): void {
        throw new Error('Function not implemented.')
      }}
      navigate={function (args?: any): void {
        throw new Error('Function not implemented.')
      }}
    />,
  ).root
  expect(instance.findByProps({testID: 'parent'})).toBeTruthy()
})

test('logout button shows', async () => {
  const instance = renderer.create(
    <SettingsButtons
      askLogout={function (): void {
        throw new Error('Function not implemented.')
      }}
      navigate={function (args?: any): void {
        throw new Error('Function not implemented.')
      }}
    />,
  ).root
  expect(instance.findByProps({testID: 'logoutButton'})).toBeTruthy()
})

test('about button shows', async () => {
  const instance = renderer.create(
    <SettingsButtons
      askLogout={function (): void {
        throw new Error('Function not implemented.')
      }}
      navigate={function (args?: any): void {
        throw new Error('Function not implemented.')
      }}
    />,
  ).root
  expect(instance.findByProps({testID: 'aboutButton'})).toBeTruthy()
})
