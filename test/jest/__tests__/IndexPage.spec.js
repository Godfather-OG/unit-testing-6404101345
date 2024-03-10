// IndexPage.spec.js
import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'
test('Name Setthaphong Insaeng available on file ', () => {
  const wrapper = shallowMount(FunctionPage)
  expect(wrapper.find('form > input ').exists("Setthaphong","Insaeng","6404101345")).toBe(true)

})
describe('IndexPage', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  })

})

it('check text content to be as defined in variable', () => {
  const wrapper = shallowMount(IndexPage, {
    data () {
      return {
        title: 'Vue is awesome.'
      }
    }
  })
  let header = wrapper.find('.htmlClass h1')
  expect(header.text()).toBe('Vue is awesome.')
})