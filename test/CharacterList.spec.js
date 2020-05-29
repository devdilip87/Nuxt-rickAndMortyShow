import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import CharacterList from '@/components/CharacterList.vue'
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex);

describe("CharacterList view component test case", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(CharacterList, {
            mocks: {
                $store: {
                  getters: {
                    characters: []
                  }
                }
            }
        })
    });
    test('it sets getters data', () => {
        expect(wrapper.isVueInstance).toBeTruthy()
    })
})