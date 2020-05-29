<template>
    <div class="box filters">
        <h3 class="filter-desktop">Filter</h3>
        <div class="filter-toggle" @click="showFilter"><i class="far fa-filter"></i></div>
        <div class="filter-panel">
        <div class="filter" v-for="(filter, index) in filters" v-bind:key="index">
            <h4>{{filter.name}}</h4>
            <div class="checkbox"
              v-for="(species, index) in filter.value"
              v-bind:key="index"><label class="label-container"><input type="checkbox"
              v-model="selectedFilterOptions"
              :value="species"
              /> {{ species.value }}
              <span class="checkmark"></span></label></div>
        </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { filter, filterType } from "./../assets/data/filterData";
import Vue from 'vue';
import VueCollapse from 'vue2-collapse';

// Loading the plugin into the Vue.
Vue.use(VueCollapse);

export default {
  
  data () {
    return {
      isActive: true,
      selectedFilterOptions: []
    }
  },
  computed: {
      ...mapGetters([
          'filters'
      ])
  },
  watch: {
    selectedFilterOptions: function(newData, oldData){
      const payload = {
        selectedFilter: newData,
        characterList: this.$store.state.characters,
        name: this.$store.state.searchedName
      }
      this.$store.dispatch("updateSelectedFilter", payload);
    }
  },

  methods: {
    showFilter: function(e) {
      //this.isActive = !this.isActive
      var panel = e.currentTarget.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = (panel.scrollHeight + 50) + "px";
      }
    }
  }
}
</script>

<style>
  /* The label container */
  .label-container {
    display: block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .label-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .label-container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .label-container input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .label-container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .label-container .checkmark:after {
    left: 6px;
    top: 3px;
    width: 5px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }


  .filters h3 {
    display: inline-block;
  }
  .filter-toggle {
    text-align: center;
    display: inline-block;
    float: right;
    font-size: 20px;
  }

  .filters button {
    padding-left: 5px;
    height: 30px;
    width: 100%;
    border-color: #111;
    border-radius: 5px;
    border-width: 1px;
  }

  .filter-panel {
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    clear: both;
  }

  @media(min-width: 700px) {
    .filter-toggle {
      display: none;
    }

    .filter-panel {
      max-height: 100%;
      
    }
  }
</style>
