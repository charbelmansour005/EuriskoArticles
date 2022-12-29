import React from 'react'
import renderer from 'react-test-renderer'
import DashArticleModal from '../components/DashArticleModal/DashArticleModal'
// passed
test('Component should display props', async () => {
  const tree = renderer.create(<DashArticleModal />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toBeTruthy()
})

test('modal image shows', async () => {
  const instance = renderer.create(<DashArticleModal />).root
  expect(instance.findByProps({testID: 'image'})).toBeTruthy()
})

test('modal back button shows', async () => {
  const instance = renderer.create(<DashArticleModal />).root
  expect(instance.findByProps({testID: 'modalBackButton'})).toBeTruthy()
})

test('modal back button text shows', async () => {
  const instance = renderer.create(<DashArticleModal />).root
  expect(instance.findByProps({testID: 'modalBackText'})).toBeTruthy()
})

test('modal headline prop text shows', async () => {
  const instance = renderer.create(<DashArticleModal />).root
  expect(instance.findByProps({testID: 'modalHeadline'})).toBeTruthy()
})

test('modal author prop text shows', async () => {
  const instance = renderer.create(<DashArticleModal />).root
  expect(instance.findByProps({testID: 'modalAuthor'})).toBeTruthy()
})

test('modal section prop text shows', async () => {
  const instance = renderer.create(<DashArticleModal />).root
  expect(instance.findByProps({testID: 'modalSection'})).toBeTruthy()
})

test('modal website prop link shows', async () => {
  const instance = renderer.create(<DashArticleModal />).root
  expect(instance.findByProps({testID: 'webLink'})).toBeTruthy()
})

test('modal paragraph prop text shows', async () => {
  const instance = renderer.create(<DashArticleModal />).root
  expect(instance.findByProps({testID: 'leadParagraph'})).toBeTruthy()
})

test('parent shows', async () => {
  const instance = renderer.create(<DashArticleModal />).root
  expect(instance.findByProps({testID: 'parent'})).toBeTruthy()
})

test('logo container shows', async () => {
  const instance = renderer.create(<DashArticleModal />).root
  expect(instance.findByProps({testID: 'logoContainer'})).toBeTruthy()
})

/**
 * @toBeTruthy
 * @Fail
 * expect(false).toBeTruthy() // fail
 * expect(null).toBeTruthy() // fail
 * expect(undefined).toBeTruthy() // fail
 * expect(NaN).toBeTruthy() // fail
 * expect("").toBeTruthy() // fail
 * expect(0).toBeTruthy() // fail
 * @Pass
 * expect("string").toBeTruthy() // pass
 * expect(1).toBeTruthy() // pass
 * expect({}).toBeTruthy() // pass
 */
