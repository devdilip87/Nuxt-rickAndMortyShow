import { mount, shallowMount } from '@vue/test-utils'
import Search from '@/components/Search.vue'

describe('Search', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Search, {
            data: () => {
                return {
                    name: ''
                };
            }
        })
    });

    test('generate snapshot test', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test("check `name` on watch", () => {
        wrapper.vm.name = 'Alan';
        expect(wrapper.vm.name).toStrictEqual('Alan');
    })
})