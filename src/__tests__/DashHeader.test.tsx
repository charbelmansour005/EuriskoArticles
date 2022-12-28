import React from 'react'
import renderer from 'react-test-renderer'
import DashHeader from '../components/DashHeader/DashHeader'

describe('DashHeader Component', () => {
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
})
