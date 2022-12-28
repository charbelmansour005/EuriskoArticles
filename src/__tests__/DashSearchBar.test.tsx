import React from 'react'
import renderer from 'react-test-renderer'
import DashSearchBar from '../components/DashSearchBar/DashSearchBar'

test('renders correctly', async () => {
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
