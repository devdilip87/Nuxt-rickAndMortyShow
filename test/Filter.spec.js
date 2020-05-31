import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Filter from '@/components/Filter.vue'

//const localVue = createLocalVue();
//ocalVue.use(Filter)

describe("Filter view component test case", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Filter, {
            data: () => {
                return {
                    selectedFilterOptions: [],
                    clsFilter: ['species', 'gender', 'origin']
                };
            },
            mocks: {
                $store: {
                  getters: {
                    filters: []
                  }
                }
            }
        })
    });
    
    test('it sets getters data', () => {
        expect(wrapper.isVueInstance).toBeTruthy()
    })

    test("to check `selectedFilterOptions` on watch", () => {
        wrapper.vm.selectedFilterOptions.push({type: 2, value: 'Male'});
        expect(wrapper.vm.selectedFilterOptions.length).toStrictEqual(1);
    })

    test("to check `showFilter` method on filter toggole", () => {
        const filter = wrapper.find('.heading-icon').trigger('click');
        expect(wrapper.vm.showFilter.called).toBe(true)
    })
})

