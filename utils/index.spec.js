import { getFilteredList, getYearByDate } from "./";
import {  createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("it test util methods", () => {
    test("check 'getYearByDate' function working without error", () => {
        const givenDate = "2017-11-04T18:48:46.250Z";
        const yearDiff = new Date().getFullYear() - new Date(givenDate).getFullYear();
        expect(getYearByDate(givenDate)).toBe(yearDiff);
    });
});