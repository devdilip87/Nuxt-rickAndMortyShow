<template>
    <div class="search">
        <input type="text" placeholder="Search by Name" v-model="name"/>
        <!--<button @click="onSearch">Search</button>-->
    </div>
</template>

<script>
import SelectedFilterVue from './SelectedFilter.vue';
    export default {
        data () {
            return {
                name: ''
            }
        },
        watch:{
            name: function(n,o){
                const payload = {
                    name: this.name,
                    list: this.$store.state.characters,
                    selectedFilter: this.$store.state.selectedFilterOptions
                }
                this.$store.dispatch("nameSearch", payload);
            }
        }
    }
</script>

<style>
</style>
