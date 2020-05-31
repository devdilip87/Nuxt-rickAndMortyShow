import { mount, shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMount(Header)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    test('it generate snapshot test', () => {
        const wrapper = shallowMount(Header)
        expect(wrapper.html()).toMatchSnapshot()
    })
})