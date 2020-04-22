import { mount } from '@vue/test-utils'
import Inspire from '@/pages/inspire.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Inspire)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.find('h3').text()).toContain('Author')
  })
})
