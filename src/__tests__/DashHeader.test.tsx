import React from 'react'
import renderer from 'react-test-renderer'
import DashHeader from '../components/DashHeader/DashHeader'

test('Component should show search bar', async () => {
  const tree = renderer
    .create(
      <DashHeader
        search={''}
        setSearch={function (arg?: any): void {
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
    <DashHeader
      search={''}
      setSearch={function (arg?: any): void {
        throw new Error('Function not implemented.')
      }}
      language={undefined}
    />,
  ).root
  expect(instance.findByProps({testID: 'parent'})).toBeTruthy()
})
