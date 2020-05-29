<template>
    <section class="row">
        <div class="characters" v-if="characters.length > 0">
            <div class="box character" v-for="(char, index) in characters" v-bind:key="index">
                <div class="image">
                    <img v-bind:src="char.image" alt="">
                    <router-link to="/charactor/1">
                        <div class="overlay">
                            <div class="name">{{ char.name}}</div>
                            <div class="created">Id: {{ char.id}} - Created: {{ getYear(char.created) }} year ago</div>
                        </div>
                    </router-link>
                </div>
                <div class="details">
                    <div class="details-row">
                        <div class="title">STATUS</div>
                        <div class="value">{{ char.status }}</div>
                    </div>
                    <div class="details-row">
                        <div class="title">SPECIES</div>
                        <div class="value">{{ char.species }}</div>
                    </div>
                    <div class="details-row">
                        <div class="title">GENDER</div>
                        <div class="value">{{ char.gender }}</div>
                    </div>
                    <div class="details-row">
                        <div class="title">ORIGIN</div>
                        <div class="value">{{ char.origin.name }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="noRecord" v-else>No records found. Please try with different filters</div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
import { getYearByDate } from "./../utils";
export default {
    computed: {
        ...mapGetters([
            'characters'
        ])
    },
    methods: {
        getYear(created) {
            return getYearByDate(created)
        }
    }
}
</script>

<style>
    .details {
        display: grid;
        grid-template-rows: repeat(4, 1fr);

    }
    .details-row {
        border-bottom: 1px solid #000;
        color: #000;
        padding-top: 15px;
        margin-left: 5px;
        margin-right: 5px;
    }

    .details-row .title {
        display: inline-block;
        float: left;
        font-size: 12px;
    }

    .details-row .value {
        display: inline-block;
        float: right;
        font-size: 10px;
    }
</style>
