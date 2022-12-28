import React from 'react'
import renderer from 'react-test-renderer'
import LandingScreen from '../screens/LandingScreen/LandingScreen'

describe('LoginBtnSeperator Component', () =>
  test('renders correctly', async () => {
    const tree = renderer.create(<LandingScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
