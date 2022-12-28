import React from 'react'
import renderer from 'react-test-renderer'
import LoginGoogleButton from '../components/LoginGoogleButton/LoginGoogleButton'

describe('LoginGoogleButton Component', () => {
  test('renders correctly', async () => {
    const tree = renderer.create(<LoginGoogleButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
