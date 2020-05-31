const SET_CHARACTERS = (state, characters) => {
    state.characters = characters;
    state.filteredList = characters;
};

const SET_SEARCHED_NAME = (state, searchedName) => {
    state.searchedName = searchedName;
};

const SET_FILTERED_LIST = (state, list) => {
    state.filteredList = list;
};

const SET_SELECTED_FILTER = (state, selctedFilter) => {
    state.selectedFilterOptions = selctedFilter;
};

const SET_SORT_BY = (state, selctedSoort) => {
    state.sortBy = selctedSoort;
};

export default {
    SET_CHARACTERS,
    SET_SEARCHED_NAME,
    SET_FILTERED_LIST,
    SET_SELECTED_FILTER,
    SET_SORT_BY
}