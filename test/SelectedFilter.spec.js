import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import SelectedFilter from '@/components/SelectedFilter.vue'

const localVue = createLocalVue();
localVue.use(Vuex);

describe("SelectedFilter view component test case", () => {
    let store;
    let actions;
    let wrapper;
    beforeEach(() => {
        actions = {
            removeFilter: jest.fn()
        };
        store = new Vuex.Store({
        actions
        });

        wrapper = shallowMount(SelectedFilter, {
            data: () => {
                return {
                    selectedFilterOptions: [{type: 2, value: 'Male'}]
                };
            },    
        mocks: {
            $store: {
                getters: {
                    selectedFilterOptions: []
                },
                dispatch: {
                    removeFilter: data => data
                }
            }
        },
        localVue: localVue
        });
    });

    test('generate snapshot testing', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    test("check `selectedFilterOptions` call on computed hooks", () => {
        expect(wrapper.vm.selectedFilterOptions.length).toStrictEqual(1);
    });

    test("to check selectedFilterOptions prop for null condition", () => {
        wrapper.vm.selectedFilterOptions = null;
        expect(wrapper.vm.selectedFilterOptions).toBeNull();
    })

    test("to check name selectedFilterOptions falsy condtion", () => {
        wrapper.vm.selectedFilterOptions = [];
        expect(wrapper.vm.selectedFilterOptions.length).toBeFalsy();
    })

    test("to check name prop truthy condition", () => {
        wrapper.vm.selectedFilterOptions.push({type: 2, value: 'Male'});
        expect(wrapper.vm.selectedFilterOptions).toBeTruthy();
    })

    test("check `removeFilter` call on methods", () => {
        wrapper.find('button').trigger('click')
        expect(wrapper.vm.selectedFilterOptions).toStrictEqual([])
    });
})