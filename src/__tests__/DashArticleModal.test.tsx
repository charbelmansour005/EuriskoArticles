import React from 'react'
import renderer from 'react-test-renderer'
import DashArticleModal from '../components/DashArticleModal/DashArticleModal'

describe('DashArticleModal Component', () => {
  test('Component should display props', async () => {
    const tree = renderer.create(<DashArticleModal />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toBeTruthy()
  })
})
