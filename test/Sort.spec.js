import { mount, shallowMount } from '@vue/test-utils'
import Sort from '@/components/Sort.vue'

describe('Sort', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMount(Sort)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    test('it update default option', () => {
        const wrapper = shallowMount(Sort)
        wrapper.vm.$data.defaultSortOption = 1
        expect(wrapper.vm.$data.defaultSortOption).toBe(1)
    })

    test('it generate snapshot test', () => {
        const wrapper = shallowMount(Sort)
        expect(wrapper.html()).toMatchSnapshot()
    })
})