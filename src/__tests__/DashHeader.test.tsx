import React from 'react'
import renderer from 'react-test-renderer'
import DashHeader from '../components/DashHeader/DashHeader'

test('renders correctly', async () => {
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
