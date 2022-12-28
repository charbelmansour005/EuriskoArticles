import React from 'react'
import renderer from 'react-test-renderer'
import Copyright from '../components/Copyright/Copyright'

describe('Copyright component', () => {
  test('Component should display copyright', async () => {
    const tree = renderer.create(<Copyright />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
