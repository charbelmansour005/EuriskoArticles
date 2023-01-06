import {DashArticleCard} from '../components'
import renderer from 'react-test-renderer'
// failed
test('renders correctly', async () => {
  const tree = renderer.create(<DashArticleCard />).toJSON()
  expect(tree).toMatchSnapshot()
})
