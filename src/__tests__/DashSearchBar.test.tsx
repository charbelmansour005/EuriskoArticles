import React from 'react'
import renderer from 'react-test-renderer'
import DashSearchBar from '../components/DashSearchBar/DashSearchBar'
// passed
test('Component should display search input', async () => {
  const tree = renderer
    .create(
      <DashSearchBar
        onChangeText={function (arg?: any): void {
          throw new Error('Function not implemented.')
        }}
        onPressClear={function (): void {
          throw new Error('Function not implemented.')
        }}
        search={''}
        language={undefined}
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('main view shows', async () => {
  const instance = renderer.create(
    <DashSearchBar
      onChangeText={function (arg?: any): void {
        throw new Error('Function not implemented.')
      }}
      onPressClear={function (): void {
        throw new Error('Function not implemented.')
      }}
      search={''}
      language={undefined}
    />,
  ).root
  expect(instance.findByProps({testID: 'parent'})).toBeTruthy()
})

test('image shows', async () => {
  const instance = renderer.create(
    <DashSearchBar
      onChangeText={function (arg?: any): void {
        throw new Error('Function not implemented.')
      }}
      onPressClear={function (): void {
        throw new Error('Function not implemented.')
      }}
      search={''}
      language={undefined}
    />,
  ).root
  expect(instance.findByProps({testID: 'image'})).toBeTruthy()
})

test('input shows', async () => {
  const instance = renderer.create(
    <DashSearchBar
      onChangeText={function (arg?: any): void {
        throw new Error('Function not implemented.')
      }}
      onPressClear={function (): void {
        throw new Error('Function not implemented.')
      }}
      search={''}
      language={undefined}
    />,
  ).root
  expect(instance.findByProps({testID: 'input'})).toBeTruthy()
})
