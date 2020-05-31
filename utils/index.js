import { filterType } from "./../assets/data/filterData";
/**
 * @function getFilteredList
 * @param { Array } list - list of characters
 * @param { Array } filters - list of filter applied
 * @param { string } name - name search in filtered list
 * @returns { Array } - return list of final filtered characters
 */
export const getFilteredList = (list, filters, name) => {
    if(filters && !filters.length && name === '' ) {
        return list;
    }
    let filteredList = [], speciesList = [], genderList = [], originList = [], finalArray = [];
    filters && filters.forEach((filter) => {
        let tempList = [];
        list.map((item) => {
            let itemKey = filterType[filter.type -1];
            if (filter.type === 3 ? item[itemKey].name === filter.value
                    : item[itemKey] === filter.value
                    ) {
                        tempList.push(item.id);
                    }
        });
        if(filter.type == 1){
            speciesList = speciesList.concat(tempList);
        }
        else if(filter.type == 2){
            genderList = genderList.concat(tempList);
        }
        else {
            originList = originList.concat(tempList);
        }
    });
    speciesList.length && filteredList.push(speciesList);
    genderList.length && filteredList.push(genderList);
    originList.length && filteredList.push(originList);
    
    if(filteredList.length > 1) {
        finalArray = filteredList.shift().filter(function(v) {
            return filteredList.every(function(a) {
                return a.indexOf(v) !== -1;
            });
        });
    }
    else if(filteredList.length === 1) {
        finalArray = filteredList[0];
    }

    var itemsArray = Array.from(list);
    
    let flList = itemsArray.filter((item) => {
        return finalArray.length ? (item && item.name.indexOf(name) > -1 && finalArray.indexOf(item.id) > -1)
        : (name && item && item.name.indexOf(name) > -1);
    });
    return flList;
};

/**
 * @function getYearByDate
 * @param { Date } date - Date of Item
 * @returns { Number } - return difference between present date and given date in years.
 */
export const getYearByDate = (date) => {
    const givenYear = new Date(date).getFullYear();
    const presentYear = new Date().getFullYear();
    return presentYear - givenYear;
};