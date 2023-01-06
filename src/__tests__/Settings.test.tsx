import Settings from '../screens/Settings/Settings'
import renderer from 'react-test-renderer'
// failed
test('renders correctly', async () => {
  const tree = renderer.create(<Settings />).toJSON()
  expect(tree).toMatchSnapshot()
})
