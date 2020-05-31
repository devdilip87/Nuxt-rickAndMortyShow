import Vuex from 'vuex';
import actions from "./actions";
import mutations from "./mutations";
import { filter } from "../assets/data/filterData";
import axios from "axios";

const createStore = () => {
    return new Vuex.Store({
        state: {
            characters: [],
            filteredList: [],
            searchedName: '',
            sortBy: 0,
            filters: filter,
            selectedFilterOptions: []
        },
        getters: {  
            characters: state => {
                return state.filteredList;
            },
            filters: state => {
                return state.filters;
            },
            selectedFilterOptions: state => {
                return state.selectedFilterOptions;
            }
        },
        mutations,
        actions: {
            ...actions,
            nuxtServerInit(vuexContext, context) {
                return axios.get(process.env.baseUrl, {transformResponse: []})
                .then(response => JSON.parse(response.data))
                .then(data => {
                    vuexContext.commit('SET_CHARACTERS', data.results);
                })
                .catch(e => context.error(e))
            }
        }
    })
}

export default createStore  