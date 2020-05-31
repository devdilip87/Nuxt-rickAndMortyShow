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

    test("to check name prop for null condition", () => {
        wrapper.vm.name = null;
        expect(wrapper.vm.name).toBeNull();
    })

    test("to check name prop falsy condtion on watch", () => {
        wrapper.vm.name = '';
        expect(wrapper.vm.name).toBeFalsy();
    })

    test("to check name prop truthy condition on watch", () => {
        wrapper.vm.name = 'Dilip';
        expect(wrapper.vm.name).toBeTruthy();
    })

    test("check `name` prop change prooperly on watch", () => {
        wrapper.vm.name = 'Alan';
        expect(wrapper.vm.name).toStrictEqual('Alan');
    })
})