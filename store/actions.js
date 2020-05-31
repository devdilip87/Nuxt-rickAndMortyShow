import { getFilteredList } from "./../utils";

const nameSearch = ({ commit }, payload) => {
    commit('SET_SEARCHED_NAME', payload.name);
    commit('SET_FILTERED_LIST', getFilteredList(payload.list, payload.selectedFilter, payload.name));
};


const sortList = ({ commit }, payload) => {
    let list = [];
    if (payload.sortOption) {
        list = payload.list.sort(function(a, b) {
            return b.id - a.id;
        });
    } else {
        list = payload.list.sort(function(a, b) {
            return a.id - b.id;
        });
    }
    commit('SET_SORT_BY', payload.sortOption);
    commit('SET_FILTERED_LIST', list);
};


const updateSelectedFilter = ({ commit }, payload) => {
    commit('SET_SELECTED_FILTER', payload.selectedFilter);
    commit('SET_FILTERED_LIST', getFilteredList(payload.characterList, payload.selectedFilter, payload.name));
};

export default {
    nameSearch,
    sortList,
    updateSelectedFilter
}