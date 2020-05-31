import { getFilteredList, getYearByDate } from "./";
// import {  createLocalVue } from "@vue/test-utils";
// import Vuex from "vuex";

// const localVue = createLocalVue();
//localVue.use(Vuex);

describe("it test util methods", () => {

    test("check 'getYearByDate' function falsy condition", () => {
        const givenDate = "2020-11-04T18:48:46.250Z";
        const yearDiff = new Date().getFullYear() - new Date(givenDate).getFullYear();
        expect(getYearByDate(givenDate)).toBeFalsy();
    });

    test("check 'getYearByDate' function truthy condition", () => {
        const givenDate = "2010-11-04T18:48:46.250Z";
        const yearDiff = new Date().getFullYear() - new Date(givenDate).getFullYear();
        expect(getYearByDate(givenDate)).toBeTruthy();
    });

    test("check 'getYearByDate' function working without error", () => {
        const givenDate = "2017-11-04T18:48:46.250Z";
        const yearDiff = new Date().getFullYear() - new Date(givenDate).getFullYear();
        expect(getYearByDate(givenDate)).toBe(yearDiff);
    });


    test("check 'getFilteredList' function falsy condition", () => {
        const param = {
            list: [],
            filters: [],
            name: ''
        };
        expect(getFilteredList(param).length).toBeFalsy();
    });

    test("check 'getFilteredList' function truthy condition", () => {
        const param = {
            list: [{id: 1, name: 'Alan'}],
            filters: [],
            name: 'Alan'
        };
        expect(getFilteredList(param)).toBeTruthy();
    });

    test("check 'getFilteredList' function working with selected filter", () => {
        const list = [
            {id: 1, name: 'Dilip', species: 'Human', gender: 'Male'}, 
            {id: 2, name: 'Alan', species: 'Human', gender: 'Female'},
            {id: 3, name: 'Rick', species: 'Alien', gender: 'Male'}
        ],
        filters = [{ type: 1, value: 'Human' }, { type: 2, value: 'Male' }];
        expect(getFilteredList(list, filters, '').length).toStrictEqual(1);
    });

    test("check 'getFilteredList' function working selected filter and name search", () => {
        const list = [
            {id: 1, name: 'Dilip', species: 'Human', gender: 'Male'}, 
            {id: 2, name: 'Alan', species: 'Human', gender: 'Female'},
            {id: 3, name: 'Rick', species: 'Alien', gender: 'Male'}
        ],
        filters = [{ type: 1, value: 'Human' }, { type: 2, value: 'Male' }],
        name = 'Dilip';
        expect(getFilteredList(list, filters, name).length).toStrictEqual(1);
    });
});