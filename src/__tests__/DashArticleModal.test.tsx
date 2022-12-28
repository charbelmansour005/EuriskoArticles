import React from 'react'
import renderer from 'react-test-renderer'
import DashArticleModal from '../components/DashArticleModal/DashArticleModal'

test('renders correctly', async () => {
  const tree = renderer.create(<DashArticleModal />).toJSON()
  expect(tree).toMatchSnapshot()
})
