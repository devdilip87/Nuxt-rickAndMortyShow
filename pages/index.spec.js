import { mount, shallowMount } from '@vue/test-utils'
import Index from './index.vue'

describe('Index', () => {

    test('it generate snapshot test', () => {
        const wrapper = shallowMount(Index)
        expect(wrapper.html()).toMatchSnapshot()
    })
})